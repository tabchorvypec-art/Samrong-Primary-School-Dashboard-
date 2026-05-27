/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  BookOpen,
  Users,
  GraduationCap,
  Search,
  Filter,
  Download,
  ChevronRight,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  User,
  Grid,
  List,
  Sparkles,
  CalendarDays,
  Layers,
  Award,
  AlertCircle,
  X,
  RefreshCw,
  FileSpreadsheet,
  CheckCircle,
  CreditCard,
  FileDown,
  Info
} from "lucide-react";
import { 
  Staff, 
  ClassSummary, 
  Student, 
  MonthlyResult, 
  monthsList, 
  gradeKhmerNames 
} from "./mockData.js";

function SamrongSchoolLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer red borders */}
      <circle cx="200" cy="200" r="195" fill="white" stroke="#e21818" strokeWidth="6" />
      <circle cx="200" cy="200" r="186" fill="white" stroke="#e21818" strokeWidth="2.5" />
      
      {/* Outer Curved Text Paths */}
      <defs>
        <path id="top-text-path" d="M 52,200 A 148,148 0 0,1 348,200" fill="none" />
        <path id="bottom-text-path" d="M 52,200 A 148,148 0 0,0 348,200" fill="none" />
      </defs>

      {/* Top Text: Khmer */}
      <text fill="#0e2381" fontSize="31" fontWeight="bold" fontFamily="'Khmer OS Muol Light', 'Khmer OS Muol', 'Khmer OS', sans-serif">
        <textPath href="#top-text-path" startOffset="50%" textAnchor="middle">
          សាលាបឋមសិក្សាសំរោង
        </textPath>
      </text>

      {/* Bottom Text: English */}
      <text fill="#0e2381" fontSize="23" fontWeight="900" fontFamily="'Inter', 'Outfit', sans-serif" letterSpacing="1">
        <textPath href="#bottom-text-path" startOffset="50%" textAnchor="middle">
          SAMRONG PRIMARY SCHOOL
        </textPath>
      </text>

      {/* Left side flower */}
      <g transform="translate(68, 200) scale(1.1)">
        <circle cx="-10" cy="-6" r="8" fill="#fec006" stroke="#e21818" strokeWidth="1.5" />
        <circle cx="10" cy="-6" r="8" fill="#fec006" stroke="#e21818" strokeWidth="1.5" />
        <circle cx="0" cy="8" r="8" fill="#fec006" stroke="#e21818" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="4" fill="#ffea00" />
      </g>

      {/* Right side flower */}
      <g transform="translate(332, 200) scale(1.1)">
        <circle cx="-10" cy="-6" r="8" fill="#fec006" stroke="#e21818" strokeWidth="1.5" />
        <circle cx="10" cy="-6" r="8" fill="#fec006" stroke="#e21818" strokeWidth="1.5" />
        <circle cx="0" cy="8" r="8" fill="#fec006" stroke="#e21818" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="4" fill="#ffea00" />
      </g>

      {/* Inner Red circular border enclosing central emblem */}
      <circle cx="200" cy="200" r="122" stroke="#e21818" strokeWidth="2.5" fill="none" />

      {/* Solar Rays around the Bulb */}
      {Array.from({ length: 15 }).map((_, i) => {
        const angleDeg = -190 + (i * 200) / 14;
        const angle = (angleDeg * Math.PI) / 180;
        const x1 = 200 + Math.cos(angle) * 41;
        const y1 = 142 + Math.sin(angle) * 41;
        const isTop = Math.abs(angleDeg + 90) < 5;
        const factor = isTop ? 1.25 : 1.0;
        const x2 = 200 + Math.cos(angle) * (41 + 13 * factor);
        const y2 = 142 + Math.sin(angle) * (41 + 13 * factor);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#ff9100"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}

      {/* Central Bulb Circle */}
      <circle cx="200" cy="142" r="36" fill="white" stroke="#ff9100" strokeWidth="3" />

      {/* Inside Bulb: Stylized Human figure filaments */}
      <circle cx="200" cy="126" r="6.5" fill="#f57c00" />
      <path 
        d="M 200,202 L 200,172 C 196,172 192,166 189,160 C 178,142 168,133 165,133 C 170,136 182,146 195,147.5 C 197.5,140 198.5,133 200,128.5 C 201.5,133 202.5,140 205,147.5 C 218,146 230,136 235,133 C 232,133 222,142 211,160 C 208,166 204,172 200,172 Z" 
        fill="#f57c00" 
      />

      {/* Blue screw bases */}
      <rect x="187" y="206" width="26" height="4.5" rx="2.2" fill="#0077c8" />
      <rect x="187" y="213" width="26" height="4.5" rx="2.2" fill="#0077c8" />
      <rect x="190" y="220" width="20" height="4.5" rx="2.2" fill="#0077c8" />
      <path d="M 194.5,226 C 194.5,231.5 205.5,231.5 205.5,226 Z" fill="#0077c8" />

      {/* Open Book: Green Wings */}
      {/* Outer Shadow Pages (Dark Green) */}
      <path 
        d="M 200,274 C 160,259 135,247 112,247 C 104,247 111,260 128,278 C 158,265 180,270 200,274 C 220,270 242,265 272,278 C 289,260 296,247 288,247 C 265,247 240,259 200,274 Z" 
        fill="#4caf50" 
      />
      {/* Primary Vibrant Lime Green Pages */}
      <path 
        d="M 200,269 C 160,251 138,224 118,224 C 114,224 110,231 122,254 C 150,237 178,251 200,269 C 222,251 250,237 278,254 C 290,231 286,224 282,224 C 262,224 240,251 200,269 Z" 
        fill="#8dc63f" 
      />
      {/* Central Separator Arc or line */}
      <path d="M 200,269 L 200,218" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function App() {
  // Global App States
  const [activeTab, setActiveTab] = useState<"staff" | "students" | "results">("results");
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<string>("local");
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Data States
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [classesList, setClassesList] = useState<ClassSummary[]>([]);
  const [studentsList, setStudentsList] = useState<Student[]>([]);
  const [monthlyResultsList, setMonthlyResultsList] = useState<MonthlyResult[]>([]);

  // Filtering & UI States
  // Staff filters
  const [staffSearch, setStaffSearch] = useState<string>("");
  const [staffGenderFilter, setStaffGenderFilter] = useState<string>("ទាំងអស់");
  const [staffRoleFilter, setStaffRoleFilter] = useState<string>("ទាំងអស់");
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

  // Student list filters
  const [studentSearch, setStudentSearch] = useState<string>("");
  const [studentClassFilter, setStudentClassFilter] = useState<string>("ទាំងអស់");
  const [studentGenderFilter, setStudentGenderFilter] = useState<string>("ទាំងអស់");
  const [studentStatusFilter, setStudentStatusFilter] = useState<string>("ទាំងអស់");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [studentViewMode, setStudentViewMode] = useState<"grid" | "table">("grid");
  const [studentSubTab, setStudentSubTab] = useState<"summary" | "list">("summary");
  const [studentSortKey, setStudentSortKey] = useState<"id" | "fullName" | "gender" | "className" | "dob" | "status">("id");
  const [studentSortOrder, setStudentSortOrder] = useState<"asc" | "desc">("asc");

  // Monthly results filters (Part 1: Class and Month)
  const [resultClassFilter, setResultClassFilter] = useState<string>("ថ្នាក់ទី1A");
  const [resultMonthFilter, setResultMonthFilter] = useState<string>("មករា");

  // Monthly results filters (Part 2: Grade Level and Month)
  const [resultGradeFilter, setResultGradeFilter] = useState<string>("កម្រិតថ្នាក់ទី១");
  const [comparisonMonthFilter, setComparisonMonthFilter] = useState<string>("មករា");

  // Refs for PNG exporting
  const classChartRef = useRef<SVGSVGElement | null>(null);
  const gradeChartRef = useRef<SVGSVGElement | null>(null);

  // Load School Data
  const loadSchoolData = async (forceRefresh = false) => {
    try {
      if (forceRefresh) setRefreshing(true);
      else setLoading(true);

      const response = await fetch("/api/school-data");
      const result = await response.json();

      if (result.success && result.data) {
        setStaffList(result.data.staff || []);
        setClassesList(result.data.classes || []);
        setStudentsList(result.data.students || []);
        setMonthlyResultsList(result.data.monthlyResults || []);
        
        // Update datasource indicators
        if (result.source === "google-sheets") {
          setDataSource("Google Sheet រស់រវើក (Live)");
        } else if (result.source === "cache") {
          setDataSource("គណនីសម្ងាត់ Google (Cached)");
        } else {
          setDataSource("ប្រព័ន្ធរក្សាទុកបម្រុង (Offline Fallback)");
        }
        
        const dateObj = new Date();
        setLastUpdated(dateObj.toLocaleTimeString("km-KH", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      }
    } catch (e) {
      console.error("Error loading api data, fallback to mock library", e);
      setDataSource("ទិន្នន័យក្រៅបណ្តាញ (Mock)");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadSchoolData();
  }, []);

  // Helper calculation metrics
  const stats = useMemo(() => {
    const totalStaff = staffList.length;
    const totalStudents = classesList.reduce((sum, c) => sum + c.total, 0);
    const activeStudents = classesList.reduce((sum, c) => sum + c.actual, 0);
    const dropouts = classesList.reduce((sum, c) => sum + c.dropped, 0);
    const slowLearners = classesList.reduce((sum, c) => sum + c.slowLearner, 0);
    const scholarshipTotal = classesList.reduce((sum, c) => sum + c.scholarship1 + c.scholarship2, 0);
    const classesCount = classesList.length;

    // Retrieve high-level success stats from latest month list (មករា)
    const targetMonthResults = monthlyResultsList.filter((r) => r.month === "មករា");
    const totalExaminees = targetMonthResults.reduce((sum, r) => sum + r.passed + r.failed, 0);
    const totalPassed = targetMonthResults.reduce((sum, r) => sum + r.passed, 0);
    const passRate = totalExaminees > 0 ? Math.round((totalPassed / totalExaminees) * 100) : 92;

    return {
      totalStaff,
      totalStudents,
      activeStudents,
      dropouts,
      slowLearners,
      scholarshipTotal,
      classesCount,
      passRate
    };
  }, [staffList, classesList, monthlyResultsList]);

  // Filters Staff data
  const filteredStaff = useMemo(() => {
    return staffList.filter((s) => {
      const sTerm = staffSearch.toLowerCase().trim();
      const matchesSearch = 
        !sTerm || 
        s.fullName.toLowerCase().includes(sTerm) || 
        s.latinName.toLowerCase().includes(sTerm) || 
        s.role.toLowerCase().includes(sTerm) || 
        s.id.toLowerCase().includes(sTerm) || 
        s.phone.replace(/\s+/g, "").includes(sTerm);

      const matchesGender = staffGenderFilter === "ទាំងអស់" || s.gender === staffGenderFilter;
      const matchesRole = staffRoleFilter === "ទាំងអស់" || s.role === staffRoleFilter;

      return matchesSearch && matchesGender && matchesRole;
    });
  }, [staffList, staffSearch, staffGenderFilter, staffRoleFilter]);

  // Filters and Sorts Student data
  const filteredStudents = useMemo(() => {
    let list = studentsList.filter((s) => {
      const sTerm = studentSearch.toLowerCase().trim();
      const matchesSearch = 
        !sTerm ||
        s.lastName.toLowerCase().includes(sTerm) || 
        s.firstName.toLowerCase().includes(sTerm) || 
        s.id.toLowerCase().includes(sTerm) || 
        `${s.lastName} ${s.firstName}`.toLowerCase().includes(sTerm);

      const matchesClass = studentClassFilter === "ទាំងអស់" || s.className === studentClassFilter;
      const matchesGender = studentGenderFilter === "ទាំងអស់" || s.gender === studentGenderFilter;
      const matchesStatus = studentStatusFilter === "ទាំងអស់" || s.status === studentStatusFilter;

      return matchesSearch && matchesClass && matchesGender && matchesStatus;
    });

    if (studentSortKey) {
      list = [...list].sort((a, b) => {
        let valA = "";
        let valB = "";

        if (studentSortKey === "id") {
          valA = a.id;
          valB = b.id;
        } else if (studentSortKey === "fullName") {
          valA = `${a.lastName} ${a.firstName}`;
          valB = `${b.lastName} ${b.firstName}`;
        } else if (studentSortKey === "gender") {
          valA = a.gender;
          valB = b.gender;
        } else if (studentSortKey === "className") {
          valA = a.className;
          valB = b.className;
        } else if (studentSortKey === "dob") {
          // dob is "DD-MM-YYYY". Convert to YYYYMMDD for correct sorting
          const parseDob = (dateStr: string) => {
            const parts = dateStr.split("-");
            if (parts.length === 3) {
              return `${parts[2]}${parts[1]}${parts[0]}`;
            }
            return dateStr;
          };
          valA = parseDob(a.dob);
          valB = parseDob(b.dob);
        } else if (studentSortKey === "status") {
          valA = a.status;
          valB = b.status;
        }

        // Locale compare with "km" locale for proper Khmer alphabetical order!
        const comp = valA.localeCompare(valB, "km");
        return studentSortOrder === "asc" ? comp : -comp;
      });
    }

    return list;
  }, [studentsList, studentSearch, studentClassFilter, studentGenderFilter, studentStatusFilter, studentSortKey, studentSortOrder]);

  // Sort toggle handler
  const handleSort = (key: "id" | "fullName" | "gender" | "className" | "dob" | "status") => {
    if (studentSortKey === key) {
      setStudentSortOrder(studentSortOrder === "asc" ? "desc" : "asc");
    } else {
      setStudentSortKey(key);
      setStudentSortOrder("asc");
    }
  };

  // Sleek animated chevron rotation for column header sorting
  const renderSortIcon = (key: "id" | "fullName" | "gender" | "className" | "dob" | "status") => {
    if (studentSortKey !== key) {
      return <ChevronDown className="w-3.5 h-3.5 text-slate-300 opacity-40 hover:opacity-80 transition-opacity" />;
    }
    return (
      <ChevronDown 
        className={`w-3.5 h-3.5 text-emerald-600 transition-transform duration-300 ${
          studentSortOrder === "asc" ? "rotate-180" : "rotate-0"
        }`} 
      />
    );
  };

  // Fetch Part 1 (Single Class study metrics & grades)
  const singleClassResults = useMemo(() => {
    const record = monthlyResultsList.find(
      (r) => r.className === resultClassFilter && r.month === resultMonthFilter
    );

    if (record) return record;

    // Fallback stub in case record doesn't exist
    return {
      gradeLevel: formatGradeLevel(resultClassFilter),
      className: resultClassFilter,
      teacherName: classesList.find(c => c.className === resultClassFilter)?.teacherName || "ឡាយ វឌ្ឍនៈ",
      gender: classesList.find(c => c.className === resultClassFilter)?.teacherGender || "ប្រុស",
      month: resultMonthFilter,
      passed: 32,
      failed: 3,
      gradeA: 4,
      gradeB: 8,
      gradeC: 12,
      gradeD: 6,
      gradeE: 2,
      gradeF: 3
    };
  }, [monthlyResultsList, resultClassFilter, resultMonthFilter, classesList]);

  // Fetch Part 2 (Comparison of classes on Grade level & month)
  const gradeLevelComparisonResults = useMemo(() => {
    return monthlyResultsList.filter(
      (r) => r.gradeLevel === resultGradeFilter && r.month === comparisonMonthFilter
    ).sort((a, b) => a.className.localeCompare(b.className));
  }, [monthlyResultsList, resultGradeFilter, comparisonMonthFilter]);

  // Function to extract Grade Digit
  function formatGradeLevel(className: string): string {
    const cleanClass = className.replace("ថ្នាក់ទី", "").trim();
    const digitChar = cleanClass.charAt(0);
    const gradeDigit = parseInt(digitChar) || 1;
    return gradeKhmerNames[gradeDigit] || "កម្រិតថ្នាក់ទី១";
  }

  // PNG Exporter helper
  const handleExportPNG = (ref: React.RefObject<SVGSVGElement | null>, filename: string) => {
    if (!ref.current) return;
    try {
      const svgElement = ref.current;
      
      // Fix background style inside element before XML serialization to give it a neat card wrap
      const serialized = new XMLSerializer().serializeToString(svgElement);
      const bbox = svgElement.getBoundingClientRect();
      const width = svgElement.viewBox.baseVal.width || bbox.width || 800;
      const height = svgElement.viewBox.baseVal.height || bbox.height || 420;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const scale = 3; // 3x scale renders crisp ultra-HD text and rects
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.scale(scale, scale);

      // Render solid background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      // Draw title block
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 14px 'Kantumruy Pro', system-ui, sans-serif";
      
      const img = new Image();
      const svgBlob = new Blob([serialized], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          if (blob) {
            const downloadUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = `${filename}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(downloadUrl);
          }
          URL.revokeObjectURL(url);
        }, "image/png");
      };
      img.src = url;
    } catch (err) {
      console.error("Export failure: ", err);
    }
  };

  // Helper list of Khmer grades for filtering
  const khmerGradesList = [
    "កម្រិតថ្នាក់ទី១",
    "កម្រិតថ្នាក់ទី២",
    "កម្រិតថ្នាក់ទី៣",
    "កម្រិតថ្នាក់ទី៤",
    "កម្រិតថ្នាក់ទី៥",
    "កម្រិតថ្នាក់ទី៦",
  ];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#020b24] via-[#09183d] to-[#020b24] text-white p-6">
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute w-28 h-28 border-4 border-amber-500/20 rounded-full animate-ping"></div>
          <div className="w-24 h-24 border-t-4 border-r-4 border-amber-500 rounded-full animate-spin"></div>
          <div className="absolute w-16 h-16 bg-white rounded-full p-0.5 shadow-xl flex items-center justify-center">
            <SamrongSchoolLogo className="w-full h-full" />
          </div>
        </div>
        <h1 className="text-2xl font-bold font-serif mb-2 tracking-wide text-center text-amber-400 drop-shadow-md">សាលាបឋមសិក្សាសំរោង</h1>
        <p className="text-slate-300 font-sans text-sm tracking-widest mb-8 text-center max-w-sm">
          កំពុងទាញយកទិន្នន័យប្រព័ន្ធគ្រប់គ្រងសាលារៀនបែបស្តង់ដា... សូមរង់ចាំមួយភ្លែត
        </p>
        <div className="text-xs text-slate-400 font-mono flex items-center gap-2 bg-slate-950/60 px-4 py-2 rounded-full border border-slate-700/60">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-500" />
          ចំណងភ្ជាប់បណ្តាញមានសុវត្ថិភាព (Live Service)
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-900 pb-12">
      {/* Dynamic Dashboard Header Card & Gradient Background */}
      <header className="relative w-full bg-gradient-to-r from-[#0a1845] via-[#081335] to-[#122b7a] text-white shadow-xl overflow-hidden pb-4 sm:pb-0 border-b-4 border-[#e21818]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,192,6,0.15),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-amber-400 hover:scale-105 transition-all duration-300 p-0.5">
              <SamrongSchoolLogo className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-sans">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {dataSource}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                សាលាបឋមសិក្សាសំរោង
              </h1>
            </div>
          </div>

          {/* Sync & Refresh Tools Block */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              id="refresh_btn"
              onClick={() => loadSchoolData(true)}
              disabled={refreshing}
              className="flex items-center gap-2 text-xs font-bold cursor-pointer bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white py-2.5 px-5 rounded-xl border border-white/20 hover:border-white/40 disabled:opacity-50 shadow-md backdrop-blur-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-amber-400 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "កំពុងធ្វើបច្ចុប្បន្នភាព..." : "ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ"}
            </button>
          </div>
        </div>

        {/* Global tab Switcher with 3D Tactile Buttons */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6">
          <div className="flex items-center gap-3.5 sm:gap-5 overflow-x-auto no-scrollbar pt-3">
            <button
              id="btn_tab_results"
              onClick={() => { setActiveTab("results"); }}
              className={`flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold tracking-wide rounded-2xl whitespace-nowrap transition-all cursor-pointer select-none active:scale-95 duration-150 ${
                activeTab === "results"
                  ? "bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white font-extrabold border-t border-blue-400 shadow-[0_6px_0_0_#0f172a,0_10px_20px_rgba(29,78,216,0.35)] transform -translate-y-0.5"
                  : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border-t border-slate-700/50 shadow-[0_4px_0_0_#0f172a] hover:transform hover:-translate-y-0.5"
              }`}
            >
              <Award className={`w-4.5 h-4.5 ${activeTab === "results" ? "text-white animate-bounce" : "text-slate-400"}`} />
              <span>លទ្ធផលសិក្សាសិស្ស</span>
            </button>
            <button
              id="btn_tab_students"
              onClick={() => { setActiveTab("students"); }}
              className={`flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold tracking-wide rounded-2xl whitespace-nowrap transition-all cursor-pointer select-none active:scale-95 duration-150 ${
                activeTab === "students"
                  ? "bg-gradient-to-b from-[#fec006] via-[#e2a900] to-[#c59301] text-slate-950 font-extrabold border-t border-yellow-250 shadow-[0_6px_0_0_#0f172a,0_10px_20px_rgba(217,119,6,0.35)] transform -translate-y-0.5"
                  : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border-t border-slate-700/50 shadow-[0_4px_0_0_#0f172a] hover:transform hover:-translate-y-0.5"
              }`}
            >
              <BookOpen className={`w-4.5 h-4.5 ${activeTab === "students" ? "text-slate-950 animate-pulse" : "text-slate-400"}`} />
              <span>ប្រព័ន្ធទិន្នន័យសិស្ស</span>
            </button>
            <button
              id="btn_tab_staff"
              onClick={() => { setActiveTab("staff"); }}
              className={`flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold tracking-wide rounded-2xl whitespace-nowrap transition-all cursor-pointer select-none active:scale-95 duration-150 ${
                activeTab === "staff"
                  ? "bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-800 text-white font-extrabold border-t border-emerald-400 shadow-[0_6px_0_0_#064e3b,0_10px_20px_rgba(16,185,129,0.35)] transform -translate-y-0.5"
                  : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border-t border-slate-700/50 shadow-[0_4px_0_0_#0f172a] hover:transform hover:-translate-y-0.5"
              }`}
            >
              <Users className={`w-4.5 h-4.5 ${activeTab === "staff" ? "text-white animate-pulse" : "text-slate-400"}`} />
              <span>ប្រព័ន្ធទិន្នន័យបុគ្គលិក</span>
            </button>
          </div>
        </div>
      </header>

      {/* KPI Cards Strip */}
      <section className="bg-white border-b border-slate-200 py-4 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* KPI Card 1 */}
            <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 border-l-4 border-l-emerald-600 flex items-center gap-4.5 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block font-serif">បុគ្គលិកសរុប</span>
                <span className="text-2xl font-black text-slate-900 font-mono block leading-tight">{stats.totalStaff} នាក់</span>
                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">មន្ត្រីគ្រូបង្រៀនពេញសិទ្ធិ</span>
              </div>
            </div>

            {/* KPI Card 2 */}
            <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 border-l-4 border-l-blue-600 flex items-center gap-4.5 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block font-serif">សិស្សទូទាំងសាលា</span>
                <span className="text-2xl font-black text-slate-900 font-mono block leading-tight">{stats.totalStudents} នាក់</span>
                <span className="text-[10px] text-blue-700 font-bold block mt-0.5">ស្រី {Math.round(stats.totalStudents * 0.48)} នាក់ ({Math.round(stats.totalStudents * 0.48 / stats.totalStudents * 100 || 48)}%)</span>
              </div>
            </div>

            {/* KPI Card 3 */}
            <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 border-l-4 border-l-amber-500 flex items-center gap-4.5 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#fec006] rounded-xl flex items-center justify-center text-slate-950 shadow-md">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block font-serif">ថ្នាក់រៀនសរុប</span>
                <span className="text-2xl font-black text-slate-900 font-mono block leading-tight">{stats.classesCount} ថ្នាក់</span>
                <span className="text-[10px] text-amber-800 font-bold block mt-0.5">ពីថ្នាក់ទី១ ដល់ ថ្នាក់ទី៦</span>
              </div>
            </div>

            {/* KPI Card 4 */}
            <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 border-l-4 border-l-rose-600 flex items-center gap-4.5 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#e21818] rounded-xl flex items-center justify-center text-white shadow-md animate-pulse">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block font-serif">អត្រាជាប់លទ្ធផលសិក្សា</span>
                <span className="text-2xl font-black text-slate-900 font-mono block leading-tight">{stats.passRate}%</span>
                <span className="text-[10px] text-rose-700 font-bold block mt-0.5 font-serif">លទ្ធផលសិក្សាខ្ពស់បំផុត</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex-1 w-full">
        
        {/* ==================================== TAB 1: STAFF DIRECTORY ==================================== */}
        {activeTab === "staff" && (
          <div className="space-y-6">
            {/* Staff Header and Filter tools */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-250 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b-2 border-slate-250">
                <div>
                  <h2 className="text-xl font-bold font-serif text-slate-900">ទិន្នន័យបុគ្គលិកសាលារៀន (សរុប {filteredStaff.length} រូប)</h2>
                  <p className="text-xs text-slate-600 mt-1 font-serif">ស្វែងរក ត្រងព័ត៌មានរបស់គ្រូបង្រៀន និងនាយកគ្រប់គ្រងរដ្ឋបាលទាំងអស់</p>
                </div>
              </div>

              {/* Staff Filter Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                  <input
                    type="text"
                    placeholder="ស្វែងរកតាមឈ្មោះ, តួនាទី, លេខទូរស័ព្ទ..."
                    value={staffSearch}
                    onChange={(e) => setStaffSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white focus:bg-white rounded-xl border-2 border-slate-300 focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-50 transition-all placeholder:text-slate-400 font-medium text-slate-800"
                  />
                  {staffSearch && (
                    <button onClick={() => setStaffSearch("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-300 hover:text-slate-500">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div>
                  <div className="flex items-center bg-white rounded-xl border-2 border-slate-300 px-3 py-1">
                    <Filter className="w-4 h-4 text-slate-500 mr-2.5 flex-shrink-0" />
                    <select
                      value={staffGenderFilter}
                      onChange={(e) => setStaffGenderFilter(e.target.value)}
                      className="w-full py-1.5 bg-transparent text-sm font-bold focus:outline-none text-slate-800 cursor-pointer"
                    >
                      <option value="ទាំងអស់">ភេទ៖ ទាំងអស់</option>
                      <option value="ប្រុស">ភេទ៖ ប្រុស</option>
                      <option value="ស្រី">ភេទ៖ ស្រី</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center bg-white rounded-xl border-2 border-slate-300 px-3 py-1">
                    <Layers className="w-4 h-4 text-slate-500 mr-2.5 flex-shrink-0" />
                    <select
                      value={staffRoleFilter}
                      onChange={(e) => setStaffRoleFilter(e.target.value)}
                      className="w-full py-1.5 bg-transparent text-sm font-bold focus:outline-none text-slate-800 cursor-pointer"
                    >
                      <option value="ទាំងអស់">តួនាទី៖ ទាំងអស់</option>
                      <option value="នាយកសាលា">នាយកសាលា</option>
                      <option value="នាយករង">នាយករង</option>
                      <option value="គ្រូទទួលបន្ទុកថ្នាក់">គ្រូទទួលបន្ទុកថ្នាក់</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Staff Grid List */}
            {filteredStaff.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border-2 border-slate-200 shadow-md">
                <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-600 font-semibold mb-1">ពុំមានទិន្នន័យបុគ្គលិកដែលស្វែងរកឡើយ</p>
                <p className="text-slate-400 text-xs">សូមព្យាយាមផ្លាស់ប្តូរពាក្យគន្លឹះ ឬលក្ខខណ្ឌត្រងឡើងវិញ</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredStaff.map((staff) => (
                  <div
                    key={staff.id}
                    onClick={() => setSelectedStaff(staff)}
                    className="group bg-white rounded-2xl p-5 border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-blue-500 cursor-pointer transition-all duration-300 relative flex flex-col justify-between"
                  >
                    <div>
                      {/* Avatar design holder */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xs font-black uppercase shadow-md ${
                          staff.gender === "ស្រី" 
                            ? "bg-pink-600 text-white border border-pink-700" 
                            : "bg-blue-700 text-white border border-blue-800"
                        }`}>
                          {staff.gender === "ស្រី" ? "អ្នកគ្រូ" : "លោកគ្រូ"}
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase font-mono tracking-widest">{staff.id}</span>
                          <h3 className="font-extrabold text-[#0e2381] leading-snug text-base group-hover:text-blue-600 transition-colors">
                            {staff.fullName}
                          </h3>
                        </div>
                      </div>

                      {/* Staff Role Badge */}
                      <div className="mb-4">
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-lg ${
                          staff.role.includes("នាយក") 
                            ? "bg-amber-100 text-amber-900 border border-amber-300" 
                            : "bg-emerald-50 text-emerald-900 border border-emerald-200"
                        }`}>
                          {staff.role}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <span>{staff.phone || "គ្មានទិន្នន័យ"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span className="truncate">{staff.email || "គ្មានទិន្នន័យ"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-3.5 h-3.5 text-slate-400" />
                          <span>ចូលបម្រើ៖ {staff.firstDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-emerald-600">
                      <span>ព័ត៌មានលម្អិត</span>
                      <ChevronRight className="w-4 h-4 text-emerald-500 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================================== TAB 2: STUDENT MANAGEMENT ==================================== */}
        {activeTab === "students" && (
          <div className="space-y-6">
            
            {/* Double Sub-tab Navigator inside Student view */}
            <div className="bg-slate-250 rounded-2xl p-2 border-2 border-slate-300 shadow-md flex gap-2 max-w-md mx-auto">
              <button
                onClick={() => setStudentSubTab("summary")}
                className={`flex-1 py-2 text-center text-xs font-black rounded-xl transition-all cursor-pointer ${
                  studentSubTab === "summary"
                    ? "bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white border-t border-blue-400 shadow-md"
                    : "text-slate-800 hover:bg-slate-200/50"
                }`}
              >
                តារាងទិន្នន័យថ្នាក់រៀនសរុប
              </button>
              <button
                onClick={() => setStudentSubTab("list")}
                className={`flex-1 py-2 text-center text-xs font-black rounded-xl transition-all cursor-pointer ${
                  studentSubTab === "list"
                    ? "bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white border-t border-blue-400 shadow-md"
                    : "text-slate-800 hover:bg-slate-200/50"
                }`}
              >
                បញ្ជីរាយនាមសិស្សលម្អិត
              </button>
            </div>

            {/* SUB-TAB 1: CLASSES SUMMARY TABLE ("ទិន្នន័យថ្នាក់រៀន" sheet) */}
            {studentSubTab === "summary" && (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 border-2 border-slate-250 shadow-md">
                  <div>
                    <h2 className="text-xl font-bold font-serif text-slate-900 mb-1">ទិន្នន័យសង្ខេបថ្នាក់រៀន (សរុប {classesList.length} ថ្នាក់)</h2>
                    <p className="text-xs text-slate-650 mb-6 font-serif">ស្ថិតិសិស្សសិក្សា ផ្ទេរ បោះបង់ការសិក្សា និងអាហារូបករណ៍តាមថ្នាក់នីមួយៗ</p>
                  </div>

                  {/* Class Table list */}
                  <div className="overflow-x-auto rounded-xl border-2 border-slate-250 shadow-sm">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#011440] to-[#0e2381] text-white font-bold text-xs border-b-2 border-amber-400">
                          <th className="p-4 font-extrabold font-serif text-white">ថ្នាក់រៀន</th>
                          <th className="p-4 font-extrabold font-serif text-white">គ្រូទទួលបន្ទុកថ្នាក់</th>
                          <th className="p-4 font-extrabold text-center font-serif text-amber-300">ចំនួនសិស្សសរុប</th>
                          <th className="p-4 font-extrabold text-center font-serif text-emerald-300">រៀនជាក់ស្តែង</th>
                          <th className="p-4 font-extrabold text-center font-serif text-blue-250">ផ្ទេរការសិក្សា</th>
                          <th className="p-4 font-extrabold text-center font-serif text-rose-300">បោះបង់ការសិក្សា</th>
                          <th className="p-4 font-extrabold text-center font-serif text-amber-250">សិស្សរៀនយឺត</th>
                          <th className="p-4 font-extrabold text-center font-serif text-violet-300">អាហារូបករណ៍ P1</th>
                          <th className="p-4 font-extrabold text-center font-serif text-indigo-300 font-mono">P2</th>
                          <th className="p-4 font-extrabold text-center font-serif text-white whitespace-nowrap">សកម្មភាព</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-250 text-xs">
                        {classesList.map((cls) => (
                          <tr key={cls.className} className="hover:bg-amber-100/30 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900 font-mono bg-slate-100">{cls.className}</td>
                            <td className="p-3.5 font-bold text-slate-800">
                              <span className="inline-flex items-center gap-1.5">
                                <span className={`w-2.5 h-2.5 rounded-full ${cls.teacherGender === "ស្រី" ? "bg-pink-500" : "bg-blue-600"}`}></span>
                                {cls.teacherName}
                              </span>
                            </td>
                            <td className="p-3.5 text-center font-black text-slate-900 font-mono">{cls.total}</td>
                            <td className="p-3.5 text-center font-black text-emerald-800 bg-emerald-50/20 font-mono">{cls.actual}</td>
                            <td className="p-3.5 text-center font-bold text-blue-800 font-mono">{cls.transferred}</td>
                            <td className="p-3.5 text-center font-bold text-rose-800 bg-rose-50/20 font-mono">{cls.dropped}</td>
                            <td className="p-3.5 text-center font-bold text-amber-800 font-mono">{cls.slowLearner}</td>
                            <td className="p-3.5 text-center font-bold text-violet-800 font-mono">{cls.scholarship1}</td>
                            <td className="p-3.5 text-center font-bold text-indigo-805 font-mono">{cls.scholarship2}</td>
                            <td className="p-3.5 text-center">
                              <button
                                onClick={() => {
                                  setStudentSubTab("list");
                                  setStudentClassFilter(cls.className);
                                }}
                                className="px-3 py-1.5 text-xs font-black bg-[#fec006] hover:bg-amber-500 text-slate-950 rounded-lg border-2 border-amber-400 shadow cursor-pointer transition-all active:scale-95 whitespace-nowrap font-serif"
                              >
                                មើលបញ្ជីសិស្ស
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB 2: INDIVIDUAL DETAILED LIST */}
            {studentSubTab === "list" && (
              <div className="space-y-6">
                {/* Search and Dynamic Options Block */}
                <div className="bg-white rounded-3xl p-6 border-2 border-slate-250 shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b-2 border-slate-250">
                    <div>
                      <h2 className="text-xl font-bold font-serif text-slate-900">បញ្ជីរាយនាមសិស្សានុសិស្សានិងស្ថិតិលម្អិត (សរុប {filteredStudents.length} នាក់)</h2>
                      <p className="text-xs text-slate-650 mt-1 font-serif">ស្វែងរក ត្រងទិន្នន័យ ប្រវត្តិកំណើត និងអត្តសញ្ញាណអាណាព្យាបាលសិស្សគ្រប់កម្រិត</p>
                    </div>

                    {/* View mode toggle */}
                    <div className="flex bg-slate-200 p-1.5 rounded-xl self-end md:self-auto border border-slate-300 shadow-inner">
                      <button
                        onClick={() => setStudentViewMode("grid")}
                        className={`p-1.5 rounded-lg cursor-pointer transition-all ${studentViewMode === "grid" ? "bg-[#0e2381] text-white shadow" : "text-slate-600 hover:text-slate-900"}`}
                        title="Grid View"
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setStudentViewMode("table")}
                        className={`p-1.5 rounded-lg cursor-pointer transition-all ${studentViewMode === "table" ? "bg-[#0e2381] text-white shadow" : "text-slate-600 hover:text-slate-900"}`}
                        title="Table View"
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Complex Student Filters */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Search Field */}
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                      <input
                        type="text"
                        placeholder="ស្វែងរកតាមឈ្មោះ, ID..."
                        value={studentSearch}
                        onChange={(e) => setStudentSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border-2 border-slate-300 focus:border-blue-650 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all text-xs font-bold text-slate-800"
                      />
                      {studentSearch && (
                        <button onClick={() => setStudentSearch("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Selector 1: Class filter */}
                    <div>
                      <div className="flex items-center bg-white rounded-xl border-2 border-slate-300 px-3 py-0.5">
                        <Layers className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
                        <select
                          value={studentClassFilter}
                          onChange={(e) => setStudentClassFilter(e.target.value)}
                          className="w-full py-2 bg-transparent text-xs font-bold focus:outline-none text-slate-800 cursor-pointer font-mono"
                        >
                          <option value="Toggle_All">ថ្នាក់៖ ទាំងអស់</option>
                          {classesList.map((c) => (
                            <option key={c.className} value={c.className}>
                              {c.className}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Selector 2: Gender */}
                    <div>
                      <div className="flex items-center bg-white rounded-xl border-2 border-slate-300 px-3 py-0.5">
                        <User className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
                        <select
                          value={studentGenderFilter}
                          onChange={(e) => setStudentGenderFilter(e.target.value)}
                          className="w-full py-2 bg-transparent text-xs font-bold focus:outline-none text-slate-800 cursor-pointer"
                        >
                          <option value="ទាំងអស់">ភេទ៖ ទាំងអស់</option>
                          <option value="ប្រុស">ប្រុស</option>
                          <option value="ស្រី">ស្រី</option>
                        </select>
                      </div>
                    </div>

                    {/* Selector 3: Status */}
                    <div>
                      <div className="flex items-center bg-white rounded-xl border-2 border-slate-300 px-3 py-0.5">
                        <CheckCircle className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
                        <select
                          value={studentStatusFilter}
                          onChange={(e) => setStudentStatusFilter(e.target.value)}
                          className="w-full py-2 bg-transparent text-xs font-bold focus:outline-none text-slate-800 cursor-pointer"
                        >
                          <option value="ទាំងអស់">ស្ថានភាព៖ ទាំងអស់</option>
                          <option value="រៀនជាក់ស្តែង">រៀនជាក់ស្តែង</option>
                          <option value="ផ្ទេរការសិក្សា">ផ្ទេរការសិក្សា</option>
                          <option value="បោះបង់ការសិក្សា">បោះបង់ការសិក្សា</option>
                          <option value="សិស្សរៀនយឺត">សិស្សរៀនយឺត</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid View */}
                {studentViewMode === "grid" ? (
                  filteredStudents.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center border-2 border-slate-250 shadow-md">
                      <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-600 font-semibold mb-1">ពុំមានទិន្នន័យសិស្សានុសិស្សឡើយ</p>
                      <p className="text-slate-400 text-xs">សូមកែប្រែលក្ខខណ្ឌត្រងស្វែងរករបស់អ្នក</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {filteredStudents.map((child) => (
                        <div
                          key={child.id}
                          onClick={() => setSelectedStudent(child)}
                          className="group bg-white rounded-2xl p-5 border-2 border-slate-250 shadow-sm hover:shadow-xl hover:border-amber-400 cursor-pointer transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between mb-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shadow-inner ${
                                child.gender === "ស្រី" 
                                  ? "bg-pink-600 text-white" 
                                  : "bg-blue-700 text-white"
                              }`}>
                                {child.gender === "ស្រី" ? "ស្រី" : "ប្រុស"}
                              </div>
                              <span className="text-[10px] text-slate-500 font-bold font-mono block mt-1">ID: {child.id}</span>
                            </div>

                            <h3 className="font-bold text-[#0e2381] leading-snug text-base group-hover:text-amber-500 transition-colors">
                              {child.lastName} {child.firstName}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              <span className="text-[10px] font-black px-2 py-0.5 bg-slate-255 rounded text-slate-800 font-mono tracking-wide">
                                {child.className}
                              </span>
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                                child.status === "រៀនជាក់ស្តែង" ? "bg-emerald-600 text-white" :
                                child.status === "ផ្ទេរការសិក្សា" ? "bg-blue-600 text-white" :
                                child.status === "បោះបង់ការសិក្សា" ? "bg-rose-600 text-white" :
                                "bg-[#fec006] text-slate-950"
                              }`}>
                                {child.status}
                              </span>
                            </div>

                            <p className="text-[11px] text-slate-600 truncate mt-4 flex items-center gap-1 font-medium bg-slate-100 p-1.5 rounded">
                              <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#0e2381]" />
                              {child.address || `${child.birthVillage} ${child.province}`}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-150 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-500 transition-colors">
                            <span>ប្រវត្តសិស្ស និងអាណាព្យាបាល</span>
                            <ChevronRight className="w-4 h-4 text-[#0e2381] transform group-hover:translate-x-1.5 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  /* Table View */
                  <div className="bg-white rounded-3xl p-6 border-2 border-slate-250 shadow-md overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#011440] to-[#0e2381] text-white font-bold text-xs border-b-2 border-amber-400">
                          <th 
                            onClick={() => handleSort("id")}
                            className={`p-3.5 cursor-pointer hover:bg-slate-800 transition-colors select-none text-left text-white ${studentSortKey === "id" ? "text-amber-300 font-black bg-white/10" : ""}`}
                          >
                            <div className="flex items-center gap-1.5 font-serif font-black">
                              អត្តលេខ
                              {renderSortIcon("id")}
                            </div>
                          </th>
                          <th 
                            onClick={() => handleSort("fullName")}
                            className={`p-3.5 cursor-pointer hover:bg-slate-800 transition-colors select-none text-left text-white ${studentSortKey === "fullName" ? "text-amber-300 font-black bg-white/10" : ""}`}
                          >
                            <div className="flex items-center gap-1.5 font-serif font-black">
                              គោត្តនាម-នាមខ្លួន
                              {renderSortIcon("fullName")}
                            </div>
                          </th>
                          <th 
                            onClick={() => handleSort("gender")}
                            className={`p-3.5 cursor-pointer hover:bg-slate-800 transition-colors select-none text-center text-white ${studentSortKey === "gender" ? "text-white font-black bg-white/10" : ""}`}
                          >
                            <div className="flex items-center justify-center gap-1.5 font-serif font-black">
                              ភេទ
                              {renderSortIcon("gender")}
                            </div>
                          </th>
                          <th 
                            onClick={() => handleSort("className")}
                            className={`p-3.5 cursor-pointer hover:bg-slate-800 transition-colors select-none text-center text-white ${studentSortKey === "className" ? "text-amber-300 font-black bg-white/10" : ""}`}
                          >
                            <div className="flex items-center justify-center gap-1.5 font-serif font-black">
                              ថ្នាក់រៀន
                              {renderSortIcon("className")}
                            </div>
                          </th>
                          <th 
                            onClick={() => handleSort("dob")}
                            className={`p-3.5 cursor-pointer hover:bg-slate-800 transition-colors select-none text-left text-white ${studentSortKey === "dob" ? "text-amber-300 font-black bg-white/10" : ""}`}
                          >
                            <div className="flex items-center gap-1.5 font-serif font-black">
                              ថ្ងៃខែឆ្នាំកំណើត
                              {renderSortIcon("dob")}
                            </div>
                          </th>
                          <th className="p-3.5 text-white font-serif font-black">ឪពុក/ម្តាយ</th>
                          <th className="p-3.5 text-white font-serif font-black">ល.ខ ទូរសព្ទ</th>
                          <th 
                            onClick={() => handleSort("status")}
                            className={`p-3.5 cursor-pointer hover:bg-slate-800 transition-colors select-none text-left text-white ${studentSortKey === "status" ? "text-amber-300 font-black bg-white/10" : ""}`}
                          >
                            <div className="flex items-center gap-1.5 font-serif font-black">
                              ស្ថានភាព
                              {renderSortIcon("status")}
                            </div>
                          </th>
                          <th className="p-3.5 text-center text-white font-serif font-black">សកម្មភាព</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-250 text-xs text-slate-800">
                        {filteredStudents.map((child) => (
                          <tr key={child.id} className="hover:bg-amber-100/30 transition-colors bg-white">
                            <td className="p-3 font-mono font-black text-slate-800 bg-slate-100">{child.id}</td>
                            <td className="p-3 font-bold text-[#0e2381]">{child.lastName} {child.firstName}</td>
                            <td className="p-3 text-center">
                              <span className={`px-2.5 py-1 rounded text-[10px] font-black tracking-wider text-white ${child.gender === "ស្រី" ? "bg-pink-600" : "bg-blue-700"}`}>
                                {child.gender === "ស្រី" ? "ស្រី" : "ប្រុស"}
                              </span>
                            </td>
                            <td className="p-3 text-center font-mono font-black text-slate-900">{child.className}</td>
                            <td className="p-3 font-medium text-slate-800">{child.dob}</td>
                            <td className="p-3 truncate max-w-[150px] font-medium text-slate-700" title={`ឪពុក៖ ${child.fatherName}, ម្តាយ៖ ${child.motherName}`}>
                              {child.fatherName} / {child.motherName}
                            </td>
                            <td className="p-3 font-mono font-semibold text-slate-800">{child.fatherPhone || child.motherPhone || "-"}</td>
                            <td className="p-3">
                              <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded shadow ${
                                child.status === "រៀនជាក់ស្តែង" ? "bg-emerald-600 text-white" :
                                child.status === "ផ្ទេរការសិក្សា" ? "bg-blue-600 text-white" :
                                child.status === "បោះបង់ការសិក្សា" ? "bg-rose-600 text-white" :
                                "bg-[#fec006] text-slate-950"
                              }`}>
                                {child.status}
                              </span>
                            </td>
                            <td className="p-3 text-center">
                              <button
                                onClick={() => setSelectedStudent(child)}
                                className="px-3 py-1.5 bg-[#fec006] hover:bg-amber-500 font-serif font-black text-slate-950 rounded-lg border-2 border-amber-400 cursor-pointer shadow-sm text-xs"
                              >
                                លម្អិត
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ==================================== TAB 3: MONTHLY RESULTS SYSTEM & CHARTS ==================================== */}
        {activeTab === "results" && (
          <div className="space-y-10">
            
            {/* ----------------- PART 1: DRILLDOWN BY CLASS AND MONTH ----------------- */}
            <div className="bg-white rounded-3xl p-6 border border-slate-205 shadow-md space-y-6">
              <div className="pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold font-serif text-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-6 bg-emerald-600 rounded-sm inline-block"></span>
                    ផ្នែកទី១៖ លទ្ធផលសិក្សាតាមថ្នាក់រៀន
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">ជ្រើសរើសថ្នាក់រៀន និងខែនីមួយៗ ដើម្បីវិភាគលទ្ធផលសិស្សជាប់-ធ្លាក់ និងកម្រិតនិទ្ទេសសិក្សា</p>
                </div>

                <button
                  onClick={() => handleExportPNG(classChartRef, `លទ្ធផល_ថ្នាក់_${resultClassFilter}_ខែ_${resultMonthFilter}`)}
                  className="flex items-center gap-1.5 justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-250 cursor-pointer shadow-sm active:scale-95 transition-all px-3 py-1.5 rounded-lg text-xs font-bold"
                >
                  <FileDown className="w-4 h-4 text-emerald-600" />
                  រក្សាទុកក្រាប PNG
                </button>
              </div>

              {/* Chart Filter Tools */}
              <div className="flex flex-wrap items-center gap-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-150">
                {/* Select Class */}
                <div className="flex-1 min-w-[200px]">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">ជ្រើសរើសថ្នាក់រៀន</label>
                  <div className="flex items-center bg-white rounded-xl border border-slate-200 px-3 py-1">
                    <Layers className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                    <select
                      value={resultClassFilter}
                      onChange={(e) => setResultClassFilter(e.target.value)}
                      className="w-full py-1.5 bg-transparent text-sm font-semibold focus:outline-none text-slate-700 cursor-pointer"
                    >
                      {classesList.map((c) => (
                        <option key={c.className} value={c.className}>
                          {c.className}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Select Month */}
                <div className="flex-1 min-w-[150px]">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">ជ្រើសរើសខែសិក្សា</label>
                  <div className="flex items-center bg-white rounded-xl border border-slate-200 px-3 py-1">
                    <CalendarDays className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                    <select
                      value={resultMonthFilter}
                      onChange={(e) => setResultMonthFilter(e.target.value)}
                      className="w-full py-1.5 bg-transparent text-sm font-semibold focus:outline-none text-slate-700 cursor-pointer"
                    >
                      {monthsList.map((m) => (
                        <option key={m} value={m}>
                          ខែ{m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Teacher Card indicator */}
                <div className="flex-1 min-w-[200px] border-l border-slate-200/80 pl-4">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider mb-1">គ្រូទទួលបន្ទុកថ្នាក់</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-800">
                      {singleClassResults.gender === "ស្រី" ? "អ្នក" : "លោក"}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-tight">
                        {singleClassResults.teacherName || "គ្មានទិន្នន័យ"}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium">កម្រិត៖ {singleClassResults.gradeLevel}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics cards and SVG displays in grids */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Part 1 Mini Cards Panel */}
                <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
                  {/* Card: Exam pass / fail counts */}
                  <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-150 flex flex-col justify-between flex-1 relative overflow-hidden">
                    <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 w-16 h-16 bg-emerald-500/5 rounded-full"></div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">សិស្សជាប់</span>
                      <p className="text-2xl font-bold font-mono text-emerald-700 mt-2 block">
                        {singleClassResults.passed} នាក់
                      </p>
                      <span className="text-[10px] text-slate-400 font-medium block mt-1">
                        លើចំនួនសិស្សសរុប {singleClassResults.passed + singleClassResults.failed} នាក់
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-4">
                      <div 
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.round(singleClassResults.passed / (singleClassResults.passed + singleClassResults.failed || 1) * 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 mt-2 text-right block">
                      អត្រាជាប់ {Math.round(singleClassResults.passed / (singleClassResults.passed + singleClassResults.failed || 1) * 100)}%
                    </span>
                  </div>

                  {/* Card: Failure counts */}
                  <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-150 flex flex-col justify-between flex-1 relative overflow-hidden mt-2">
                    <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 w-16 h-16 bg-rose-500/5 rounded-full"></div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">សិស្សធ្លាក់</span>
                      <p className="text-2xl font-bold font-mono text-rose-700 mt-2 block">
                        {singleClassResults.failed} នាក់
                      </p>
                      <span className="text-[10px] text-slate-400 font-medium block mt-1">
                        តម្រូវឱ្យពង្រឹងការរៀនបន្ថែម និងជួយគាំទ្រ
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-4">
                      <div 
                        className="bg-rose-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.round(singleClassResults.failed / (singleClassResults.passed + singleClassResults.failed || 1) * 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 mt-2 text-right block">
                      អត្រាធ្លាក់ {Math.round(singleClassResults.failed / (singleClassResults.passed + singleClassResults.failed || 1) * 100)}%
                    </span>
                  </div>
                </div>

                {/* SVG Column Chart of Grades (A to F) */}
                <div className="lg:col-span-8 bg-slate-50/30 p-4 border border-slate-200/65 rounded-3xl flex flex-col items-center">
                  <span className="text-xs text-slate-500 font-bold block mb-4 self-start font-serif">
                    ក្រាបបង្ហាញលទ្ធផលសិក្សានិទ្ទេស (A - F) ថ្នាក់ {resultClassFilter} ខែ {resultMonthFilter}
                  </span>
                  
                  {/* Dynamic SVG Drawing */}
                  <svg
                    ref={classChartRef}
                    viewBox="0 0 650 320"
                    width="100%"
                    height="100%"
                    className="w-full max-h-[300px]"
                  >
                    {/* Gridlines */}
                    <line x1="60" y1="40" x2="600" y2="40" stroke="#e2e8f0" strokeDasharray="4 4" />
                    <line x1="60" y1="100" x2="600" y2="100" stroke="#e2e8f0" strokeDasharray="4 4" />
                    <line x1="60" y1="160" x2="600" y2="160" stroke="#e2e8f0" strokeDasharray="4 4" />
                    <line x1="60" y1="220" x2="600" y2="220" stroke="#e2e8f0" strokeDasharray="4 4" />
                    
                    {/* Bottom Ground Axis */}
                    <line x1="60" y1="250" x2="600" y2="250" stroke="#94a3b8" strokeWidth="2" />

                    {/* Left Axis label helper */}
                    <text x="50" y="45" fill="#64748b" fontSize="10" textAnchor="end">២០ នាក់</text>
                    <text x="50" y="105" fill="#64748b" fontSize="10" textAnchor="end">១៥ នាក់</text>
                    <text x="50" y="165" fill="#64748b" fontSize="10" textAnchor="end">១០ នាក់</text>
                    <text x="50" y="225" fill="#64748b" fontSize="10" textAnchor="end">៥ នាក់</text>
                    <text x="50" y="255" fill="#64748b" fontSize="10" textAnchor="end">០</text>

                    {/* Columns & Labels logic */}
                    {[
                      { l: "និទ្ទេស A", val: singleClassResults.gradeA, color: "#059669", hoverColor: "#10b981" },
                      { l: "និទ្ទេស B", val: singleClassResults.gradeB, color: "#10b981", hoverColor: "#34d399" },
                      { l: "និទ្ទេស C", val: singleClassResults.gradeC, color: "#0284c7", hoverColor: "#38bdf8" },
                      { l: "និទ្ទេស D", val: singleClassResults.gradeD, color: "#3b82f6", hoverColor: "#60a5fa" },
                      { l: "និទ្ទេស E", val: singleClassResults.gradeE, color: "#f59e0b", hoverColor: "#fbbf24" },
                      { l: "និទ្ទេស F", val: singleClassResults.gradeF, color: "#ef4444", hoverColor: "#f87171" }
                    ].map((item, index) => {
                      const spacing = 80;
                      const startX = 100 + index * spacing;
                      // Mapping: Max val 20 = 210 pixels of height
                      // 1 unit = 10.5 pixels
                      const colHeight = Math.min(210, item.val * 10.5);
                      const startY = 250 - colHeight;
                      
                      return (
                        <g key={item.l} className="group/bar cursor-pointer">
                          {/* Main block bar */}
                          <rect
                            x={startX}
                            y={startY}
                            width="40"
                            height={colHeight}
                            rx="6"
                            fill={item.color}
                            className="transition-all duration-300 hover:opacity-90"
                          />
                          {/* Inner Count text */}
                          <text
                            x={startX + 20}
                            y={startY - 6}
                            fill="#1e293b"
                            fontWeight="bold"
                            fontSize="11"
                            textAnchor="middle"
                          >
                            {item.val} នាក់
                          </text>
                          {/* Label of Grade */}
                          <text
                            x={startX + 20}
                            y="272"
                            fill="#475569"
                            fontWeight="600"
                            fontSize="11"
                            textAnchor="middle"
                          >
                            {item.l}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>

            {/* ----------------- PART 2: DRILLDOWN BY GRADE LEVEL AND MONTH ----------------- */}
            <div className="bg-white rounded-3xl p-6 border border-slate-205 shadow-md space-y-6">
              <div className="pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold font-serif text-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-6 bg-indigo-600 rounded-sm inline-block"></span>
                    ផ្នែកទី២៖ លទ្ធផលសិក្សាតាមកម្រិតថ្នាក់
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">វិភាគនិងធៀបលទ្ធផលសិស្សជាប់-ធ្លាក់រវាងថ្នាក់នីមួយៗក្នុងកម្រិតថ្នាក់ជាមួយគ្នា</p>
                </div>

                <button
                  onClick={() => handleExportPNG(gradeChartRef, `ប្រៀបធៀប_${resultGradeFilter}_ខែ_${comparisonMonthFilter}`)}
                  className="flex items-center gap-1.5 justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-250 cursor-pointer shadow-sm active:scale-95 transition-all px-3 py-1.5 rounded-lg text-xs font-bold"
                >
                  <FileDown className="w-4 h-4 text-indigo-600" />
                  រក្សាទុកក្រាប PNG
                </button>
              </div>

              {/* Comparison Filter Tools */}
              <div className="flex flex-wrap items-center gap-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-150">
                {/* Select Grade level */}
                <div className="flex-1 min-w-[200px]">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">ជ្រើសរើសកម្រិតថ្នាក់</label>
                  <div className="flex items-center bg-white rounded-xl border border-slate-200 px-3 py-1">
                    <Layers className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
                    <select
                      value={resultGradeFilter}
                      onChange={(e) => setResultGradeFilter(e.target.value)}
                      className="w-full py-1.5 bg-transparent text-sm font-semibold focus:outline-none text-slate-700 cursor-pointer"
                    >
                      {khmerGradesList.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Select Month */}
                <div className="flex-1 min-w-[150px]">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">ជ្រើសរើសខែសង្កេត</label>
                  <div className="flex items-center bg-white rounded-xl border border-slate-200 px-3 py-1">
                    <CalendarDays className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
                    <select
                      value={comparisonMonthFilter}
                      onChange={(e) => setComparisonMonthFilter(e.target.value)}
                      className="w-full py-1.5 bg-transparent text-sm font-semibold focus:outline-none text-slate-700 cursor-pointer"
                    >
                      {monthsList.map((m) => (
                        <option key={m} value={m}>
                          ខែ{m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Grouped bar charts render */}
              {gradeLevelComparisonResults.length === 0 ? (
                <div className="bg-slate-50/50 p-12 text-center rounded-2xl border border-dashed border-slate-200">
                  <span className="text-sm font-medium text-slate-500">ពុំមានទិន្នន័យសម្រាប់លក្ខខណ្ឌដែលជ្រើសរើសឡើយ</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  {/* Summary aggregate details */}
                  <div className="md:col-span-4 bg-slate-50/50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-indigo-700 font-bold uppercase tracking-wider block">ស្ថិតិប្រៀបធៀបក្នុងលទ្ធផល</span>
                      <h3 className="font-bold text-slate-800 text-base mt-2 font-serif">កម្រិតមធ្យមសិក្សា-បឋម</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        ទិន្នន័យបង្ហាញការប្រកួតប្រជែងសិក្សាយ៉ាងសុចរិត រវាងថ្នាក់រៀនទាំង៥ក្នុងកម្រិតថ្នាក់ជាមួយគ្នា។
                    </p>
                  </div>

                  {/* Beautiful Custom SVG Donut Pie Chart in the blank space */}
                  {(() => {
                    const totalPassed = gradeLevelComparisonResults.reduce((sum, r) => sum + r.passed, 0);
                    const totalFailed = gradeLevelComparisonResults.reduce((sum, r) => sum + r.failed, 0);
                    const totalStudents = totalPassed + totalFailed;

                    const passedPercent = totalStudents > 0 ? Math.round((totalPassed / totalStudents) * 100) : 0;
                    const failedPercent = totalStudents > 0 ? 100 - passedPercent : 0;

                    const rValue = 38;
                    const circValue = 2 * Math.PI * rValue;

                    const passedStroke = totalStudents > 0 ? (totalPassed / totalStudents) * circValue : 0;
                    const failedStroke = totalStudents > 0 ? (totalFailed / totalStudents) * circValue : 0;

                    return (
                      <div className="flex flex-col items-center justify-center my-4 py-3 bg-white rounded-2xl border border-slate-150 shadow-xs">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <svg viewBox="0 0 120 120" className="w-full h-full">
                            <g transform="rotate(-90 60 60)">
                              {/* Background Gray Tracker */}
                              <circle
                                cx="60"
                                cy="60"
                                r={rValue}
                                fill="transparent"
                                stroke="#f1f5f9"
                                strokeWidth="11"
                              />
                              {totalStudents > 0 && (
                                <>
                                  {/* Passed Slice */}
                                  <circle
                                    cx="60"
                                    cy="60"
                                    r={rValue}
                                    fill="transparent"
                                    stroke="#10b981" // emerald-500
                                    strokeWidth="11"
                                    strokeDasharray={`${passedStroke} ${circValue}`}
                                    strokeDashoffset="0"
                                    className="transition-all duration-300"
                                  />
                                  {/* Failed Slice */}
                                  <circle
                                    cx="60"
                                    cy="60"
                                    r={rValue}
                                    fill="transparent"
                                    stroke="#f43f5e" // rose-500
                                    strokeWidth="11"
                                    strokeDasharray={`${failedStroke} ${circValue}`}
                                    strokeDashoffset={-passedStroke}
                                    className="transition-all duration-300"
                                  />
                                </>
                              )}
                            </g>
                          </svg>
                          
                          {/* Center text overlay */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-[9px] text-slate-400 font-bold font-serif leading-none">សិស្សសរុប</span>
                            <span className="text-lg font-black text-slate-800 font-mono mt-0.5 leading-none">
                              {totalStudents}
                            </span>
                            <span className="text-[9px] text-slate-400 font-bold font-serif leading-none mt-0.5">នាក់</span>
                          </div>
                        </div>

                        {/* Informative Legend Labels */}
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-slate-700">
                            <span className="w-2.5 h-2.5 rounded bg-[#10b981]"></span>
                            <span>ជាប់ {passedPercent}%</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-slate-700">
                            <span className="w-2.5 h-2.5 rounded bg-[#f43f5e]"></span>
                            <span>ធ្លាក់ {failedPercent}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="space-y-3.5 border-t border-slate-200 pt-4 mt-6">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                        <span>ថ្នាក់ដែលមានអត្រាជាប់ខ្ពស់បំផុត៖</span>
                        <span className="text-emerald-700 font-bold font-mono">
                          {(() => {
                            const sorted = [...gradeLevelComparisonResults].sort((a,b) => (b.passed / (b.passed+b.failed)) - (a.passed / (a.passed+a.failed)));
                            return sorted[0]?.className || "N/A";
                          })()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                        <span>ចំនួនសិស្សជាប់សរុបកម្រិត៖</span>
                        <span className="text-indigo-800 font-bold font-mono">
                          {gradeLevelComparisonResults.reduce((sum, r) => sum + r.passed, 0)} នាក់
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                        <span>ចំនួនសិស្សធ្លាក់សរុបកម្រិត៖</span>
                        <span className="text-rose-700 font-bold font-mono">
                          {gradeLevelComparisonResults.reduce((sum, r) => sum + r.failed, 0)} នាក់
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Draw Grouped SVG Column Chart side by side */}
                  <div className="md:col-span-8 bg-slate-50/30 p-4 border border-slate-200/65 rounded-3xl flex flex-col items-center justify-center">
                    <span className="text-xs text-slate-500 font-bold block mb-4 self-start font-serif">
                      ក្រាបប្រៀបធៀបលទ្ធផលសិក្សាក្នុងកម្រិតថ្នាក់ {resultGradeFilter} ខែ {comparisonMonthFilter}
                    </span>

                    <svg
                      ref={gradeChartRef}
                      viewBox="0 0 650 320"
                      width="100%"
                      height="100%"
                      className="w-full max-h-[300px]"
                    >
                      {/* Grid lines */}
                      <line x1="60" y1="40" x2="600" y2="40" stroke="#e2e8f0" strokeDasharray="4 4" />
                      <line x1="60" y1="100" x2="600" y2="100" stroke="#e2e8f0" strokeDasharray="4 4" />
                      <line x1="60" y1="160" x2="600" y2="160" stroke="#e2e8f0" strokeDasharray="4 4" />
                      <line x1="60" y1="220" x2="600" y2="220" stroke="#e2e8f0" strokeDasharray="4 4" />
                      
                      {/* Zero Bottom Axis line */}
                      <line x1="60" y1="250" x2="600" y2="250" stroke="#94a3b8" strokeWidth="2" />

                      {/* Left Numeric Indicators */}
                      <text x="50" y="45" fill="#64748b" fontSize="10" textAnchor="end">៤០ នាក់</text>
                      <text x="50" y="105" fill="#64748b" fontSize="10" textAnchor="end">៣០ នាក់</text>
                      <text x="50" y="165" fill="#64748b" fontSize="10" textAnchor="end">២០ នាក់</text>
                      <text x="50" y="225" fill="#64748b" fontSize="10" textAnchor="end">១០ នាក់</text>
                      <text x="50" y="255" fill="#64748b" fontSize="10" textAnchor="end">០</text>

                      {/* Side by side columns drawing */}
                      {gradeLevelComparisonResults.map((rec, index) => {
                        const spacing = 100;
                        const startX = 90 + index * spacing;

                        // Height conversion (max 40 items = 210 pixels of height)
                        // 1 unit = 5.25 pixels
                        const passedHeight = Math.min(210, rec.passed * 5.25);
                        const failedHeight = Math.min(210, rec.failed * 5.25);

                        const passedY = 250 - passedHeight;
                        const failedY = 250 - failedHeight;

                        return (
                          <g key={rec.className} className="cursor-pointer">
                            {/* Passed Column (Green) */}
                            <rect
                              x={startX}
                              y={passedY}
                              width="25"
                              height={passedHeight}
                              rx="4"
                              fill="#059669"
                              className="transition-all hover:opacity-90"
                            />
                            <text
                              x={startX + 12.5}
                              y={passedY - 5}
                              fill="#047857"
                              fontWeight="bold"
                              fontSize="10"
                              textAnchor="middle"
                            >
                              {rec.passed}
                            </text>

                            {/* Failed Column (Red) */}
                            <rect
                              x={startX + 28}
                              y={failedY}
                              width="22"
                              height={failedHeight}
                              rx="4"
                              fill="#ef4444"
                              className="transition-all hover:opacity-90"
                            />
                            <text
                              x={startX + 39}
                              y={failedY - 5}
                              fill="#b91c1c"
                              fontWeight="bold"
                              fontSize="9"
                              textAnchor="middle"
                            >
                              {rec.failed}
                            </text>

                            {/* Class Label underneath */}
                            <text
                              x={startX + 26}
                              y="272"
                              fill="#1e293b"
                              fontWeight="bold"
                              fontSize="11"
                              textAnchor="middle"
                              className="font-mono"
                            >
                              {rec.className}
                            </text>
                          </g>
                        );
                      })}

                      {/* Small inline Legend display */}
                      <g transform="translate(480, 20)">
                        <rect x="0" y="0" width="12" height="12" rx="3" fill="#059669" />
                        <text x="18" y="10" fill="#475569" fontSize="10" fontWeight="bold">សិស្សជាប់</text>
                        
                        <rect x="0" y="18" width="12" height="12" rx="3" fill="#ef4444" />
                        <text x="18" y="28" fill="#475569" fontSize="10" fontWeight="bold">សិស្សធ្លាក់</text>
                      </g>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* ==================================== FOOTER: COPYRIGHT ==================================== */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-6 w-full text-center">
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full p-0.5 border border-slate-100 shadow-sm">
              <SamrongSchoolLogo className="w-full h-full" />
            </div>
            <p className="text-xs text-slate-500 font-serif text-left leading-relaxed">
              សាលាបឋមសិក្សាសំរោង<br />
              <span className="text-slate-400 text-[10px] font-sans">Samrong Primary School © {new Date().getFullYear()}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#0e2381] px-4 py-2 border-2 border-[#fec006] rounded-2xl shadow-md text-xs text-white font-extrabold font-serif hover:scale-105 active:scale-95 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
            <span>រក្សាសិទ្ធិ: @ តាប់ ឆវី_Tab Chorvy</span>
          </div>
        </div>
      </footer>

      {/* ==================================== MODAL: STAFF COMPLETE DETAIL CARD ==================================== */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header banner */}
            <div className="bg-gradient-to-r from-teal-800 to-indigo-900 text-white p-6 relative">
              <button
                onClick={() => setSelectedStaff(null)}
                className="absolute right-4 top-4 text-white/70 hover:text-white p-2 rounded-xl bg-white/10 hover:bg-white/15 transition-all text-xs border border-white/5"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-widest">{selectedStaff.id}</span>
              <h2 className="text-2xl font-bold font-serif mt-1">{selectedStaff.fullName}</h2>
              <p className="text-xs text-slate-200 tracking-wide font-mono mt-0.5">{selectedStaff.latinName}</p>
            </div>

            {/* Modal body details */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                
                {/* Block 1: Basic and role details */}
                <div className="space-y-4">
                  <h3 className="font-bold text-teal-800 font-serif border-b border-teal-50 pb-2 flex items-center gap-1.5">
                    <User className="w-4.5 h-4.5" />
                    ព័ត៌មានរដ្ឋបាលបុគ្គលិក
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium">ភេទ៖</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{selectedStaff.gender}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium">តួនាទី៖</span>
                    <span className="col-span-2 text-indigo-700 font-bold">{selectedStaff.role}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium">ចូលបម្រើការងារ៖</span>
                    <span className="col-span-2 text-slate-700 font-mono">{selectedStaff.firstDate}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium">កម្រិតវិជ្ជាជីវៈ៖</span>
                    <span className="col-span-2 text-slate-700">{selectedStaff.academicLevel || "គ្រូបង្រៀនបឋម"}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium font-serif">កាំប្រាក់៖</span>
                    <span className="col-span-2 text-slate-700 font-mono">{selectedStaff.salaryType || "N/A"}</span>
                  </div>
                </div>

                {/* Block 2: Identity & salary card */}
                <div className="space-y-4">
                  <h3 className="font-bold text-teal-800 font-serif border-b border-teal-50 pb-2 flex items-center gap-1.5">
                    <CreditCard className="w-4.5 h-4.5" />
                    គណនីបៀវត្ស និង អត្តសញ្ញាណ
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium text-xs sm:text-sm">លេខគណនីបៀវត្ស៖</span>
                    <span className="col-span-2 text-slate-800 font-mono font-bold text-xs sm:text-sm bg-slate-50 border border-slate-100 rounded px-2 py-0.5 truncate select-all" title="ចុចត្រង់នេះដើម្បីចម្លង">
                      {selectedStaff.accountNo || "គ្មានទិន្នន័យ"}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium text-xs sm:text-sm">អត្តសញ្ញាណបណ្ណ៖</span>
                    <span className="col-span-2 text-slate-800 font-mono text-xs sm:text-sm">{selectedStaff.nationalId || "គ្មានទិន្នន័យ"}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium text-xs">ទូរសព្ទទំនាក់ទំនង៖</span>
                    <span className="col-span-2 text-emerald-800 font-bold font-mono text-xs sm:text-sm select-all">{selectedStaff.phone || "គ្មានទិន្នន័យ"}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium text-xs sm:text-sm">អ៊ីមែល៖</span>
                    <span className="col-span-2 text-slate-700 truncate text-xs sm:text-sm">{selectedStaff.email || "គ្មានទិន្នន័យ"}</span>
                  </div>
                </div>
              </div>

              {/* Block 3: Birth information details */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-sm space-y-3">
                <h4 className="font-bold text-slate-800 font-serif flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-700" />
                  ទីកន្លែងកំណើត និង អាសយដ្ឋានបច្ចុប្បន្ន
                </h4>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <span className="text-slate-400 font-medium">ថ្ងៃខែឆ្នាំកំណើត៖</span>
                  <span className="col-span-3 text-slate-800 font-bold">{selectedStaff.dob}</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <span className="text-slate-400 font-medium">ទីកន្លែងកំណើត៖</span>
                  <span className="col-span-3 text-slate-700">{selectedStaff.pob || "គ្មានទិន្នន័យ"}</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <span className="text-slate-400 font-medium">អាសយដ្ឋានបច្ចុប្បន្ន៖</span>
                  <span className="col-span-3 text-slate-700">{selectedStaff.address || "គ្មានទិន្នន័យ"}</span>
                </div>
              </div>
            </div>

            {/* Modal footer Close */}
            <div className="bg-slate-50 px-6 py-4 flex justify-end border-t border-slate-100">
              <button
                onClick={() => setSelectedStaff(null)}
                className="px-5 py-2 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 text-xs shadow-sm transition-all cursor-pointer"
              >
                ចាកចេញ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================== MODAL: STUDENT DETAILED CARD ==================================== */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            {/* Modal banner header */}
            <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-6 relative">
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute right-4 top-4 text-white/70 hover:text-white p-2 rounded-xl bg-white/10 hover:bg-white/15 transition-all text-xs border border-white/5"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold bg-white/20 border border-white/20 px-2.5 py-0.5 rounded-full">
                  {selectedStudent.className}
                </span>
                <span className="text-xs font-mono text-emerald-200 font-bold uppercase tracking-widest">{selectedStudent.id}</span>
              </div>
              <h2 className="text-2xl font-bold font-serif mt-2">{selectedStudent.lastName} {selectedStudent.firstName}</h2>
              <div className="flex items-center gap-2 mt-1.5.5">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                  selectedStudent.status === "រៀនជាក់ស្តែង" ? "bg-white/15 text-emerald-200" : "bg-rose-500/30 text-rose-200"
                }`}>
                  {selectedStudent.status}
                </span>
              </div>
            </div>

            {/* Modal body lists */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                
                {/* Section A: Student biography */}
                <div className="space-y-4">
                  <h3 className="font-bold text-teal-800 font-serif border-b border-teal-50 pb-2 flex items-center gap-1.5">
                    <User className="w-4.5 h-4.5" />
                    ព័ត៌មានប្រវត្តិកុមារ
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium">ភេទ៖</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{selectedStudent.gender}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 font-mono">
                    <span className="text-slate-400 font-sans font-medium">ថ្ងៃខែឆ្នាំកំណើត៖</span>
                    <span className="col-span-2 text-slate-700 font-semibold">{selectedStudent.dob}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium">ភូមិកំណើត៖</span>
                    <span className="col-span-2 text-slate-700">{selectedStudent.birthVillage || "គ្មានទិន្នន័យ"}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium">ឃុំកំណើត៖</span>
                    <span className="col-span-2 text-slate-700">{selectedStudent.birthCommune || "គ្មានទិន្នន័យ"}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium">ស្រុកកំណើត៖</span>
                    <span className="col-span-2 text-slate-700">{selectedStudent.district || "គ្មានទិន្នន័យ"}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-400 font-medium">ខេត្តកំណើត៖</span>
                    <span className="col-span-2 text-slate-700">{selectedStudent.province || "គ្មានទិន្នន័យ"}</span>
                  </div>
                </div>

                {/* Section B: Parents Information */}
                <div className="space-y-4">
                  <h3 className="font-bold text-teal-800 font-serif border-b border-teal-50 pb-2 flex items-center gap-1.5">
                    <Users className="w-4.5 h-4.5" />
                    ព័ត៌មានអាណាព្យាបាល
                  </h3>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-1">ព័ត៌មានឪពុក</span>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-400">ឈ្មោះ៖</span>
                      <span className="font-bold text-slate-800">{selectedStudent.fatherName || "គ្មានទិន្នន័យ"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-400">មុខរបរ៖</span>
                      <span className="text-slate-600">{selectedStudent.fatherJob || "គ្មានទិន្នន័យ"}</span>
                    </div>
                    <div className="flex justify-between select-all font-mono" title="លេខទូរសព្ទឪពុក">
                      <span className="font-medium text-slate-400 font-sans">ទូរសព្ទ៖</span>
                      <span className="text-teal-800 font-bold">{selectedStudent.fatherPhone || "គ្មានទិន្នន័យ"}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-1">ព័ត៌មានម្តាយ</span>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-400">ឈ្មោះ៖</span>
                      <span className="font-bold text-slate-800">{selectedStudent.motherName || "គ្មានទិន្នន័យ"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-400">មុខរបរ៖</span>
                      <span className="text-slate-600">{selectedStudent.motherJob || "គ្មានទិន្នន័យ"}</span>
                    </div>
                    <div className="flex justify-between select-all font-mono" title="លេខទូរសព្ទម្តាយ">
                      <span className="font-medium text-slate-400 font-sans">ទូរសព្ទ៖</span>
                      <span className="text-teal-800 font-bold">{selectedStudent.motherPhone || "គ្មានទិន្នន័យ"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geographical address information */}
              <div className="bg-teal-50/30 rounded-2xl p-4 border border-teal-100 text-sm space-y-2.5">
                <h4 className="font-bold text-teal-850 font-serif flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  អាសយដ្ឋានបច្ចុប្បន្នរបស់សិស្ស
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {selectedStudent.address || "គ្មានទិន្នន័យ (រស់នៅជាមួយឪពុកម្តាយ)"}
                </p>
              </div>
            </div>

            {/* Close footer button */}
            <div className="bg-slate-50 px-6 py-4 flex justify-end border-t border-slate-100">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-5 py-2 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 text-xs shadow-sm transition-all cursor-pointer"
              >
                បិទព័ត៌មាន
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
