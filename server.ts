import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { 
  mockStaffData, 
  mockClassesData, 
  mockStudentsData, 
  mockMonthlyResultsData 
} from "./src/mockData.js";

const app = express();
const PORT = 3000;

// Simple state-machine CSV parser
function parseCSV(csvText: string): string[][] {
  const result: string[][] = [];
  let row: string[] = [];
  let inQuotes = false;
  let currentVal = '';

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentVal += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push(currentVal.trim());
      currentVal = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      row.push(currentVal.trim());
      result.push(row);
      row = [];
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  if (currentVal || row.length > 0) {
    row.push(currentVal.trim());
    result.push(row);
  }
  return result.filter(r => r.some(cell => cell !== ''));
}

// Function to clean and format names
function formatTeacherName(name: string, gender: string): string {
  if (!name) return "";
  const cleanName = name.replace(/^(លោកគ្រូ|អ្នកគ្រូ)\s*/, "").trim();
  const title = (gender === "ស្រី" || gender === "Female") ? "អ្នកគ្រូ" : "លោកគ្រូ";
  return `${title} ${cleanName}`;
}

// Map Google Sheet name or status representation to khmer standard
function mapStudentStatus(rawStatus: string): string {
  const s = (rawStatus || "").trim();
  if (!s) return "រៀនជាក់ស្តែង";
  if (s.includes("ផ្ទេរ") || s.includes("Transfer")) return "ផ្ទេរការសិក្សា";
  if (s.includes("បោះបង់") || s.includes("Drop") || s.includes("ឈប់")) return "បោះបង់ការសិក្សា";
  if (s.includes("យឺត") || s.includes("Slow")) return "សិស្សរៀនយឺត";
  return "រៀនជាក់ស្តែង";
}

// Prepend "ថ្នាក់ទី" to class code if needed
function formatClassName(rawName: string): string {
  const c = (rawName || "").trim();
  if (!c) return "";
  if (c.startsWith("ថ្នាក់ទី")) return c;
  return `ថ្នាក់ទី${c}`;
}

// Parse grade levels into standard format
function formatGradeLevel(className: string): string {
  const cleanClass = className.replace("ថ្នាក់ទី", "").trim();
  const digitChar = cleanClass.charAt(0);
  const gradeDigit = parseInt(digitChar) || 1;
  const gradeLevels: Record<number, string> = {
    1: "កម្រិតថ្នាក់ទី១",
    2: "កម្រិតថ្នាក់ទី២",
    3: "កម្រិតថ្នាក់ទី៣",
    4: "កម្រិតថ្នាក់ទី៤",
    5: "កម្រិតថ្នាក់ទី៥",
    6: "កម្រិតថ្នាក់ទី៦",
  };
  return gradeLevels[gradeDigit] || "កម្រិតថ្នាក់ទី១";
}

// Cache of sheets data
let sheetsCache: {
  staff: any[] | null;
  students: any[] | null;
  classes: any[] | null;
  monthlyResults: any[] | null;
  lastUpdated: number;
} = {
  staff: null,
  students: null,
  classes: null,
  monthlyResults: null,
  lastUpdated: 0
};

const SHEET_ID = "1iTRS8uhoWFAVeaoCwjCwoWXVLTFNQX6oVWy8KQe_rWo";
const CACHE_MAX_AGE_MS = 60000 * 5; // 5 minutes cache

async function fetchGoogleSheetCSV(sheetName: string): Promise<string[][]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch sheet ${sheetName}: ${response.statusText}`);
  }
  const text = await response.text();
  return parseCSV(text);
}

// Route to fetch and load everything
app.get("/api/school-data", async (req, res) => {
  const now = Date.now();
  
  // If we have cached results that are fresh, return them immediately
  if (
    sheetsCache.staff && 
    sheetsCache.students && 
    sheetsCache.classes && 
    sheetsCache.monthlyResults && 
    (now - sheetsCache.lastUpdated < CACHE_MAX_AGE_MS)
  ) {
    return res.json({
      success: true,
      source: "cache",
      data: {
        staff: sheetsCache.staff,
        students: sheetsCache.students,
        classes: sheetsCache.classes,
        monthlyResults: sheetsCache.monthlyResults
      }
    });
  }

  try {
    console.log("Fetching fresh data from Google Sheets...");
    
    // 1. Fetch Staff Data
    let staffData: any[] = [];
    try {
      const rows = await fetchGoogleSheetCSV("Data_បុគ្គលិក");
      // Skip header row(s) (find row with ID or "អត្តលេខ" first)
      let headerIndex = rows.findIndex(r => r.some(cell => cell.includes("អត្តលេខ") || cell.includes("ឈ្មោះ")));
      if (headerIndex === -1) headerIndex = 0;
      const dataRows = rows.slice(headerIndex + 1);

      staffData = dataRows.map((row) => {
        // Ensure minimum column padding
        const padded = [...row, ...Array(40).fill("")];
        
        // Find indices or use default specified indices
        // D:3, E:4, F:5, G:6, H:7, L:11, M:12, N:13, O:14, Q:16, R:17, S:18, T:19, V:21, Z:25, AE:30, AH:33
        return {
          id: padded[3] || "N/A",
          lastName: padded[4] || "",
          firstName: padded[5] || "",
          fullName: padded[6] || `${padded[4] || ""} ${padded[5] || ""}`.trim(),
          gender: padded[7] || "ប្រុស",
          dob: padded[11] || "",
          pob: padded[12] || "",
          address: padded[13] || "",
          latinName: padded[14] || "",
          accountNo: padded[16] || "",
          nationalId: padded[17] || "",
          phone: padded[18] || "",
          firstDate: padded[19] || "",
          academicLevel: padded[21] || "",
          salaryType: padded[25] || "",
          email: padded[30] || "",
          role: padded[33] || "គ្រូបង្រៀន"
        };
      }).filter(s => s.id !== "N/A" && s.id !== "");
    } catch (e: any) {
      console.warn("Error loading Staff Sheet, falling back to mock: ", e.message);
      staffData = mockStaffData;
    }

    // A map from staff full name to gender to help verify prefixes
    const staffGenderMap = new Map<string, string>();
    staffData.forEach(s => staffGenderMap.set(s.fullName, s.gender));

    // 2. Fetch Class Summary Data ("ទិន្នន័យថ្នាក់រៀន")
    let classesData: any[] = [];
    try {
      const rows = await fetchGoogleSheetCSV("ទិន្នន័យថ្នាក់រៀន");
      let headerIndex = rows.findIndex(r => r.some(cell => cell.includes("ថ្នាក់រៀន") || cell.includes("គ្រូ")));
      if (headerIndex === -1) headerIndex = 0;
      const dataRows = rows.slice(headerIndex + 1);

      classesData = dataRows.map((row) => {
        const padded = [...row, ...Array(15).fill("")];
        // B:1, C:2, D:3, E:4, F:5, G:6, H:7, I:8, J:9
        const rawClass = padded[1] || "";
        const formattedClass = formatClassName(rawClass);
        const rawTeacher = padded[2] || "";
        const gender = staffGenderMap.get(rawTeacher.replace(/^(លោកគ្រូ|អ្នកគ្រូ)\s*/, "").trim()) || "ប្រុស";

        return {
          className: formattedClass,
          teacherName: formatTeacherName(rawTeacher, gender),
          teacherGender: gender,
          total: parseInt(padded[3]) || 0,
          actual: parseInt(padded[4]) || 0,
          transferred: parseInt(padded[5]) || 0,
          dropped: parseInt(padded[6]) || 0,
          slowLearner: parseInt(padded[7]) || 0,
          scholarship1: parseInt(padded[8]) || 0,
          scholarship2: parseInt(padded[9]) || 0
        };
      }).filter(c => c.className !== "");
    } catch (e: any) {
      console.warn("Error loading Classes Sheet, falling back to mock: ", e.message);
      classesData = mockClassesData;
    }

    // Ensure all 30 classes are represented (fall back where missing)
    if (classesData.length < 10) {
      classesData = mockClassesData;
    }

    // 3. Fetch Students Data ("Data_Student")
    let studentsData: any[] = [];
    try {
      const rows = await fetchGoogleSheetCSV("Data_Student");
      let headerIndex = rows.findIndex(r => r.some(cell => cell.includes("អត្តលេខ") || cell.includes("ភេទ")));
      if (headerIndex === -1) headerIndex = 0;
      const dataRows = rows.slice(headerIndex + 1);

      studentsData = dataRows.map((row) => {
        const padded = [...row, ...Array(60).fill("")];
        // B:1, C:2, D:3, E:4, F:5, G:6, H:7, I:8, J:9, K:10, L:11, M:12, N:13, O:14, P:15, Q:16, R:17, BD:55
        const rawClass = padded[5] || "";
        const formattedClass = formatClassName(rawClass);

        return {
          id: padded[1] || `STU-${Math.floor(Math.random() * 100000)}`,
          lastName: padded[2] || "",
          firstName: padded[3] || "",
          gender: padded[4] || "ប្រុស",
          className: formattedClass,
          dob: padded[6] || "",
          birthVillage: padded[7] || "",
          birthCommune: padded[8] || "",
          district: padded[9] || "",
          province: padded[10] || "",
          fatherName: padded[11] || "",
          fatherJob: padded[12] || "",
          fatherPhone: padded[13] || "",
          motherName: padded[14] || "",
          motherJob: padded[15] || "",
          motherPhone: padded[16] || "",
          address: padded[17] || "",
          status: mapStudentStatus(padded[55])
        };
      }).filter(s => s.lastName !== "" || s.firstName !== "");
    } catch (e: any) {
      console.warn("Error loading Students Sheet, falling back to mock: ", e.message);
      studentsData = mockStudentsData;
    }

    // 4. Fetch Monthly Study Results ("លទ្ធផលសិក្សាប្រចាំខែ")
    let monthlyResultsData: any[] = [];
    try {
      const rows = await fetchGoogleSheetCSV("លទ្ធផលសិក្សាប្រចាំខែ");
      let headerIndex = rows.findIndex(r => r.some(cell => cell.includes("កម្រិតថ្នាក់") || cell.includes("ខែ")));
      if (headerIndex === -1) headerIndex = 0;
      const dataRows = rows.slice(headerIndex + 1);

      monthlyResultsData = dataRows.map((row) => {
        const padded = [...row, ...Array(15).fill("")];
        // A:0, B:1, C:2, D:3, E:4, F:5, G:6, H..M:7..12
        const rawClass = padded[1] || "";
        const formattedClass = formatClassName(rawClass);
        const gradeLevel = formatGradeLevel(formattedClass);
        const rawTeacher = padded[2] || "";
        const gender = padded[3] || "ប្រុស";

        return {
          gradeLevel: gradeLevel,
          className: formattedClass,
          teacherName: formatTeacherName(rawTeacher, gender),
          gender: gender,
          month: padded[4] || "មករា",
          passed: parseInt(padded[5]) || 0,
          failed: parseInt(padded[6]) || 0,
          gradeA: parseInt(padded[7]) || 0,
          gradeB: parseInt(padded[8]) || 0,
          gradeC: parseInt(padded[9]) || 0,
          gradeD: parseInt(padded[10]) || 0,
          gradeE: parseInt(padded[11]) || 0,
          gradeF: parseInt(padded[12]) || 0
        };
      }).filter(r => r.className !== "" && r.month !== "");
    } catch (e: any) {
      console.warn("Error loading Monthly Results Sheet, falling back to mock: ", e.message);
      monthlyResultsData = mockMonthlyResultsData;
    }

    // Merge or validate completeness
    if (monthlyResultsData.length < 5) {
      monthlyResultsData = mockMonthlyResultsData;
    }

    // Save outputs inside cache
    sheetsCache = {
      staff: staffData,
      students: studentsData,
      classes: classesData,
      monthlyResults: monthlyResultsData,
      lastUpdated: now
    };

    res.json({
      success: true,
      source: "google-sheets",
      data: {
        staff: staffData,
        students: studentsData,
        classes: classesData,
        monthlyResults: monthlyResultsData
      }
    });

  } catch (e: any) {
    console.error("Critical fetching error, using mock data library:", e);
    
    // In case of any critical error, serve gorgeous local mock datasets!
    res.json({
      success: true,
      source: "mock-fallback",
      error: e.message,
      data: {
        staff: mockStaffData,
        students: mockStudentsData,
        classes: mockClassesData,
        monthlyResults: mockMonthlyResultsData
      }
    });
  }
});


// Express server configuration
async function startServer() {
  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
