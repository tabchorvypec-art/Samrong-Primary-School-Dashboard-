// Mock data representing authentic, detailed records for Samrong Primary School.
// Written in Khmer as specified by the user.

export interface Staff {
  id: string;          // D
  lastName: string;    // E
  firstName: string;   // F
  fullName: string;    // G
  gender: string;      // H ("ប្រុស" / "ស្រី")
  dob: string;         // L
  pob: string;         // M
  address: string;     // N
  latinName: string;   // O
  accountNo: string;   // Q
  nationalId: string;  // R
  phone: string;       // S
  firstDate: string;   // T
  academicLevel: string; // V
  salaryType: string;  // Z
  email: string;       // AE
  role: string;        // AH
}

export interface ClassSummary {
  className: string;      // B (e.g. "ថ្នាក់ទី1A")
  teacherName: string;    // C
  teacherGender: string;  // Based on teacher matching
  total: number;          // D
  actual: number;         // E
  transferred: number;    // F
  dropped: number;        // G
  slowLearner: number;    // H
  scholarship1: number;   // I (Poor 1)
  scholarship2: number;   // J (Poor 2)
}

export interface Student {
  id: string;          // B
  lastName: string;    // C
  firstName: string;   // D
  gender: string;      // E ("ប្រុស" / "ស្រី")
  className: string;   // F (e.g. "ថ្នាក់ទី1A")
  dob: string;         // G
  birthVillage: string; // H
  birthCommune: string; // I
  district: string;    // J
  province: string;    // K
  fatherName: string;  // L
  fatherJob: string;   // M
  fatherPhone: string; // N
  motherName: string;  // O
  motherJob: string;   // P
  motherPhone: string; // Q
  address: string;     // R
  status: string;      // BD ("កំពុងរៀន", "បោះបង់ការសិក្សា", "ផ្ទេរចេញ", "រៀនយឺត")
}

export interface MonthlyResult {
  gradeLevel: string;   // A (e.g. "កម្រិតថ្នាក់ទី១")
  className: string;    // B (e.g. "ថ្នាក់ទី1A")
  teacherName: string;  // C
  gender: string;       // D ("ប្រុស" / "ស្រី")
  month: string;        // E (e.g. "មករា", "កុម្ភៈ" ...)
  passed: number;       // F
  failed: number;       // G
  gradeA: number;       // H
  gradeB: number;       // I
  gradeC: number;       // J
  gradeD: number;       // K
  gradeE: number;       // L
  gradeF: number;       // M
}

// 1. Generate Staff
export const mockStaffData: Staff[] = [
  {
    id: "ID-001",
    lastName: "ស៊ុយ",
    firstName: "ឈាងលី",
    fullName: "ស៊ុយ ឈាងលី",
    gender: "ប្រុស",
    dob: "១២-០៥-១៩៧៨",
    pob: "ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    address: "ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    latinName: "SUY CHIANG LI",
    accountNo: "ABA-000122334",
    nationalId: "០៣១៤៨៩៥៦២",
    phone: "០១២ ៣៤៥ ៦៧៨",
    firstDate: "០១-១០-២០០០",
    academicLevel: "បរិញ្ញាបត្រអក្សរសាស្ត្រខ្មែរ",
    salaryType: "ក២.១",
    email: "suy.chiangli@gmail.com",
    role: "នាយកសាលា"
  },
  {
    id: "ID-002",
    lastName: "អ៊ុំ",
    firstName: "សុវណ្ណារី",
    fullName: "អ៊ុំ សុវណ្ណារី",
    gender: "ស្រី",
    dob: "២៤-០៨-១៩៨២",
    pob: "ភូមិត្រពាំងធំ ឃុំត្រពាំងធំ ស្រុកប្រាសាទបាគង ខេត្តសៀមរាប",
    address: "ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    latinName: "OUM SOVANNARY",
    accountNo: "ABA-000122335",
    nationalId: "០៣១៨៩២៦៧១",
    phone: "០៩២ ៨៨៨ ៧៧៧",
    firstDate: "១៥-០៩-២០០៤",
    academicLevel: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រអប់រំ",
    salaryType: "ក២.៣",
    email: "oum.sovannary@gmail.com",
    role: "នាយករង"
  },
  {
    id: "ID-003",
    lastName: "ចន",
    firstName: "វណ្ណឌី",
    fullName: "ចន វណ្ណឌី",
    gender: "ប្រុស",
    dob: "០៥-០៣-១៩៨៥",
    pob: "ភូមិល្វា ឃុំល្វា ស្រុកពួក ខេត្តសៀមរាប",
    address: "ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    latinName: "CHORN VANNDY",
    accountNo: "ABA-000122336",
    nationalId: "០៣១៥៦២៧១២",
    phone: "០១០ ៥៥៥ ៤៤៤",
    firstDate: "០១-១០-២០០៨",
    academicLevel: "កម្រិតវិជ្ជាជីវៈគ្រូបង្រៀន (១២+២)",
    salaryType: "ខ១.១",
    email: "chorn.vanndy@gmail.com",
    role: "គ្រូទទួលបន្ទុកថ្នាក់"
  },
  {
    id: "ID-004",
    lastName: "លី",
    firstName: "ស្រីម៉ៅ",
    fullName: "លី ស្រីម៉ៅ",
    gender: "ស្រី",
    dob: "១៨-១១-១៩៩០",
    pob: "ភូមិព្រះស្រែ ឃុំរលួស ស្រុកប្រាសាទបាគង ខេត្តសៀមរាប",
    address: "ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    latinName: "LY SREYMAO",
    accountNo: "ABA-000122337",
    nationalId: "០៣១៩៨៧៥៦១",
    phone: "០៨៨ ៩៩៩ ៦៦៦",
    firstDate: "០១-១០-២០១២",
    academicLevel: "កម្រិតវិជ្ជាជីវៈគ្រូបង្រៀន (១២+២)",
    salaryType: "ខ១.៣",
    email: "ly.sreymao@gmail.com",
    role: "គ្រូទទួលបន្ទុកថ្នាក់"
  },
  {
    id: "ID-005",
    lastName: "ម៉េង",
    firstName: "សុខា",
    fullName: "ម៉េង សុខា",
    gender: "ប្រុស",
    dob: "១០-០២-១៩៨៨",
    pob: "ភូមិគោកចក ឃុំគោកចក ក្រុងសៀមរាប ខេត្តសៀមរាប",
    address: "ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    latinName: "MENG SOKHA",
    accountNo: "ABA-000122338",
    nationalId: "០៣១៤៦២៧៦១",
    phone: "០១៦ ៧៧៧ ៥៥៥",
    firstDate: "០១-១០-២០១០",
    academicLevel: "បរិញ្ញាបត្រអប់រំកាយ និងកីឡា",
    salaryType: "ក២.៤",
    email: "meng.sokha@gmail.com",
    role: "គ្រូទទួលបន្ទុកថ្នាក់"
  },
  {
    id: "ID-006",
    lastName: "ភឿន",
    firstName: "ចិន្តា",
    fullName: "ភឿន ចិន្តា",
    gender: "ស្រី",
    dob: "១២-០៩-១៩៩៣",
    pob: "ភូមិដំដែក ឃុំដំកែវ ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    address: "ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    latinName: "PHOEUN CHINTA",
    accountNo: "ABA-000122339",
    nationalId: "០៣១៣៤៥៦២៧",
    phone: "០៩7 ៥៥២ ៨៨១",
    firstDate: "០១-១០-២០១៥",
    academicLevel: "កម្រិតវិជ្ជាជីវៈគ្រូបង្រៀន (១២+២)",
    salaryType: "ខ១.៥",
    email: "phoeun.chinta@gmail.com",
    role: "គ្រូទទួលបន្ទុកថ្នាក់"
  },
  {
    id: "ID-007",
    lastName: "ស៊ុយ",
    firstName: "សម្បត្តិ",
    fullName: "ស៊ុយ សម្បត្តិ",
    gender: "ប្រុស",
    dob: "០៤-០៧-១៩៩១",
    pob: "ភូមិខ្នារ ឃុំជ្រាវ ក្រុងសៀមរាប ខេត្តសៀមរាប",
    address: "ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    latinName: "SUY SAMBATH",
    accountNo: "ABA-000122340",
    nationalId: "០៣១៩៨២៦១៥",
    phone: "០៨៩ ៧៧៦ ៥៤៣",
    firstDate: "០១-១០-២០១៤",
    academicLevel: "កម្រិតវិជ្ជាជីវៈគ្រូបង្រៀន (១២+២)",
    salaryType: "ខ១.៥",
    email: "suy.sambath@gmail.com",
    role: "គ្រូទទួលបន្ទុកថ្នាក់"
  },
  {
    id: "ID-008",
    lastName: "ទេព",
    firstName: "ធីតា",
    fullName: "ទេព ធីតា",
    gender: "ស្រី",
    dob: "១៥-០៣-១៩៩៥",
    pob: "ភូមិឃុនរាម ឃុំឃុនរាម ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប",
    address: "ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប",
    latinName: "TEP THIDA",
    accountNo: "ABA-000122341",
    nationalId: "០៣១៧៧៣៦៤៧",
    phone: "០១២ ៩៩៨ ៨៧៧",
    firstDate: "០១-១០-២០១៨",
    academicLevel: "បរិញ្ញាបត្របង្រៀនភាសាអង់គ្លេស",
    salaryType: "ក២.៥",
    email: "tep.thida@gmail.com",
    role: "គ្រូទទួលបន្ទុកថ្នាក់"
  }
];

// Helper variables to easily loop and generate classes
const letters = ["A", "B", "C", "D", "E"];
const grades = [1, 2, 3, 4, 5, 6];

// Helper Khmer Grade and Class mapping
export const gradeKhmerNames: Record<number, string> = {
  1: "កម្រិតថ្នាក់ទី១",
  2: "កម្រិតថ្នាក់ទី២",
  3: "កម្រិតថ្នាក់ទី៣",
  4: "កម្រិតថ្នាក់ទី៤",
  5: "កម្រិតថ្នាក់ទី៥",
  6: "កម្រិតថ្នាក់ទី៦",
};

// Expand list of staff up to 37 members programmatically for a fully consistent 37-person roster
const additionalLastNames = ["សាក់", "នួន", "សាន", "ហែម", "គឹម", "ឡុង", "ទិត្យ", "អ៊ុយ", "ប៉ែន", "លឹម", "សែម", "ជា", "ខាត់", "ភក្តី"];
const additionalGirlNames = ["ម៉ាលី", "ចំណាន", "ខាលីស", "ផល្លា", "ទេវី", "សុម៉ាលី", "ដាវី", "លីលី", "ពិសី", "សុជាតា"];
const additionalBoyNames = ["ឧត្តម", "ភិរម្យ", "សីហា", "បញ្ញា", "វិឆ័យ", "វឌ្ឍនៈ", "មករា", "រក្សា", "មង្គល", "កូម៉ា"];

while (mockStaffData.length < 37) {
  const isGirl = Math.random() > 0.5;
  const gender = isGirl ? "ស្រី" : "ប្រុស";
  const idNum = String(mockStaffData.length + 1).padStart(3, '0');
  const id = `ID-${idNum}`;
  const lastName = additionalLastNames[Math.floor(Math.random() * additionalLastNames.length)];
  const firstName = isGirl 
    ? additionalGirlNames[Math.floor(Math.random() * additionalGirlNames.length)]
    : additionalBoyNames[Math.floor(Math.random() * additionalBoyNames.length)];
  const fullName = `${lastName} ${firstName}`;
  
  mockStaffData.push({
    id,
    lastName,
    firstName,
    fullName,
    gender,
    dob: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${1975 + Math.floor(Math.random() * 20)}`,
    pob: `ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប`,
    address: `ភូមិសំរោង ឃុំសំរោង ស្រុកសូទ្រនិគម ខេត្តសៀមរាប`,
    latinName: `${lastName.toUpperCase()} ${firstName.toUpperCase()}`,
    accountNo: `ABA-000122${300 + mockStaffData.length}`,
    nationalId: `031${Math.floor(100000 + Math.random() * 900000)}`,
    phone: `092 ${Math.floor(500 + Math.random() * 500)} ${Math.floor(100 + Math.random() * 900)}`,
    firstDate: `01-10-${2000 + Math.floor(Math.random() * 20)}`,
    academicLevel: isGirl ? "បរិញ្ញាបត្រវិទ្យាសាស្ត្រអប់រំ" : "កម្រិតវិជ្ជាជីវៈគ្រូបង្រៀន (១២+២)",
    salaryType: `ក២.${Math.floor(Math.random() * 4) + 1}`,
    email: `${lastName.toLowerCase()}.${firstName.toLowerCase()}@gmail.com`,
    role: "គ្រូទទួលបន្ទុកថ្នាក់"
  });
}

// Generates 30 classes 1A to 6E with EXACT totals to match the sheet image (1313 total, 1231 actual, 54 dropped, 28 transferred)
export const mockClassesData: ClassSummary[] = [];
let teacherPointer = 2; // Start assigning from staff #3 (index 2: "ចន វណ្ណឌី")

const classTotals = Array(30).fill(43); // 30 * 43 = 1290
// Add remaining 23 to make 1313
for (let i = 0; i < 23; i++) {
  classTotals[i] += 1;
}

const classDropped = Array(30).fill(1); // 30 * 1 = 30
// Add remaining 24 to make 54
for (let i = 0; i < 24; i++) {
  classDropped[(i * 7) % 30] += 1; 
}

const classTransferred = Array(30).fill(0);
// Add 28 transferred
for (let i = 0; i < 28; i++) {
  classTransferred[(i * 11) % 30] += 1;
}

let classIndex = 0;
for (const g of grades) {
  for (const l of letters) {
    const className = `ថ្នាក់ទី${g}${l}`;
    // Assign teacher cyclically from mock staff
    const staff = mockStaffData[teacherPointer] || mockStaffData[0];
    teacherPointer = (teacherPointer + 1) % mockStaffData.length;
    if (teacherPointer < 2) teacherPointer = 2; // bypass director/vice director

    const total = classTotals[classIndex];
    const dropped = classDropped[classIndex];
    const transferred = classTransferred[classIndex];
    const actual = total - dropped - transferred;

    const slowLearner = Math.floor(Math.random() * 3) + 1; // 1 to 3 slow learners
    const scholarship1 = Math.floor(Math.random() * 4);    // Poor 1
    const scholarship2 = Math.floor(Math.random() * 3);    // Poor 2

    mockClassesData.push({
      className,
      teacherName: staff.fullName,
      teacherGender: staff.gender,
      total,
      actual,
      transferred,
      dropped,
      slowLearner,
      scholarship1,
      scholarship2
    });

    classIndex++;
  }
}

// Generates 100+ simulated students
export const mockStudentsData: Student[] = [];
const fatherJobs = ["កសិករ", "អាជីវករ", "គ្រូបង្រៀន", "មន្ត្រីរាជការ", "កម្មករសំណង់", "អ្នកលក់ដូរ"];
const motherJobs = ["កសិករ", "មេផ្ទះ", "អ្នកលក់ដូរ", "ដេរខោអាវ", "គ្រូបង្រៀន", "បុគ្គលិកក្រុមហ៊ុន"];
const villages = ["ភូមិសំរោង", "ភូមិគោកធ្លក", "ភូមិកញ្ជរ", "ភូមិត្រពាំងព្រីង", "ភូមិដំដែកលើ"];
const communes = ["ឃុំសំរោង", "ឃុំដំដែក", "ឃុំខ្ចាស់", "ឃុំសែនសុខ"];
const districts = ["ស្រុកសូទ្រនិគម", "ស្រុកពួក", "ស្រុកប្រាសាទបាគង"];
const provinces = ["ខេត្តសៀមរាប", "ខេត្តកំពង់ធំ", "ខេត្តបាត់ដំបង"];

const studentSurnames = ["ស៊ន", "ចៅ", "សួង", "ខៀវ", "ថា", "ចាន់", "សំ", "គង់", "ជឿន", "ឡាយ", "អ៊ុង", "នុត", "កែវ", "ម៉ៅ", "ហុង"];
const studentGirlNames = ["ចិន្តា", "ស្រីនាថ", "សុជាតា", "ទេវី", "លីដា", "សុផា", "ធីតា", "ពិសី", "គន្ធា", "ចាន់ធូ", "ស្រីម៉ៅ", "រចនា"];
const studentBoyNames = ["រក្សា", "បញ្ញា", "វិសាល", "ពិសិដ្ឋ", "សិលា", "តារា", "វឌ្ឍនៈ", "មុន្នី", "សុជាតិ", "រតនៈ", "សាល", "រិទ្ធី"];

let studentIdCounter = 1001;
// Generate 4 students for each of the 30 classes to have around 120 detailed students
mockClassesData.forEach((cls) => {
  for (let s = 1; s <= 4; s++) {
    const isGirl = Math.random() > 0.5;
    const gender = isGirl ? "ស្រី" : "ប្រុស";
    const lastName = studentSurnames[Math.floor(Math.random() * studentSurnames.length)];
    const firstName = isGirl 
      ? studentGirlNames[Math.floor(Math.random() * studentGirlNames.length)]
      : studentBoyNames[Math.floor(Math.random() * studentBoyNames.length)];
    const fullName = `${lastName} ${firstName}`;
    
    const birthYear = 2026 - parseInt(cls.className.replace(/[^0-9]/g, '')) - 6; // appropriate grade-age
    const dob = `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${birthYear}`;

    const village = villages[Math.floor(Math.random() * villages.length)];
    const commune = communes[Math.floor(Math.random() * communes.length)];
    const district = districts[Math.floor(Math.random() * districts.length)];
    const province = provinces[Math.floor(Math.random() * provinces.length)];

    const fName = studentSurnames[Math.floor(Math.random() * studentSurnames.length)] + " " + studentBoyNames[Math.floor(Math.random() * studentBoyNames.length)];
    const mName = studentSurnames[Math.floor(Math.random() * studentSurnames.length)] + " " + studentGirlNames[Math.floor(Math.random() * studentGirlNames.length)];

    const fJob = fatherJobs[Math.floor(Math.random() * fatherJobs.length)];
    const mJob = motherJobs[Math.floor(Math.random() * motherJobs.length)];

    const fPhone = `0${Math.floor(Math.random() * 20 + 80)} ${Math.floor(Math.random() * 900 + 100)} ${Math.floor(Math.random() * 9000 + 1000)}`;
    const mPhone = `0${Math.floor(Math.random() * 20 + 80)} ${Math.floor(Math.random() * 900 + 100)} ${Math.floor(Math.random() * 9000 + 1000)}`;

    const id = `STU-${studentIdCounter++}`;

    // Status: ផ្ទេរការសិក្សា, បោះបង់ការសិក្សា, រៀនយឺត, រៀនជាក់ស្តែង
    let status = "រៀនជាក់ស្តែង";
    const randStatus = Math.random();
    if (randStatus < 0.05) status = "ផ្ទេរការសិក្សា";
    else if (randStatus < 0.10) status = "បោះបង់ការសិក្សា";
    else if (randStatus < 0.20) status = "សិស្សរៀនយឺត";

    mockStudentsData.push({
      id,
      lastName,
      firstName,
      gender,
      className: cls.className,
      dob,
      birthVillage: village,
      birthCommune: commune,
      district,
      province,
      fatherName: fName,
      fatherJob: fJob,
      fatherPhone: fPhone,
      motherName: mName,
      motherJob: mJob,
      motherPhone: mPhone,
      address: `${village} ${commune} ${district} ${province}`,
      status
    });
  }
});

// 4. Generate Monthly Results for all 30 classes over 4 months
export const monthsList = ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា"];
export const mockMonthlyResultsData: MonthlyResult[] = [];

mockClassesData.forEach((cls) => {
  const gradeDigit = parseInt(cls.className.replace(/[^0-9]/g, '')) || 1;
  const gradeLevel = gradeKhmerNames[gradeDigit];

  monthsList.forEach((month) => {
    // Determine realistic scores
    // Total students in this class
    const totalStudents = cls.total;
    // For January (មករា) we set it to exactly 74% to match the school KPI card 4 in 555.jpg.
    // Other months vary around 72% to 80% for authentic looking statistics.
    let passRate = 0.74;
    if (month !== "មករា") {
      passRate = 0.72 + Math.random() * 0.08;
    }
    const passed = Math.round(totalStudents * passRate);
    const failed = totalStudents - passed;

    // Distribute among grades A to F
    // A: 5-15%, B: 15-25%, C: 30-40%, D: 15-20%, E: 5-10%, F: failed
    let remaining = passed;

    const gradeA = Math.min(remaining, Math.floor(totalStudents * (0.05 + Math.random() * 0.1)));
    remaining -= gradeA;

    const gradeB = Math.min(remaining, Math.floor(totalStudents * (0.15 + Math.random() * 0.1)));
    remaining -= gradeB;

    const gradeC = Math.min(remaining, Math.floor(totalStudents * (0.25 + Math.random() * 0.15)));
    remaining -= gradeC;

    const gradeD = Math.min(remaining, Math.floor(totalStudents * (0.15 + Math.random() * 0.1)));
    remaining -= gradeD;

    const gradeE = remaining; // all remaining passed are E
    const gradeF = failed;    // failed are F

    mockMonthlyResultsData.push({
      gradeLevel,
      className: cls.className,
      teacherName: cls.teacherName,
      gender: cls.teacherGender,
      month,
      passed,
      failed,
      gradeA,
      gradeB,
      gradeC,
      gradeD,
      gradeE,
      gradeF
    });
  });
});
