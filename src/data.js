// --- БАЗА ОБУВИ (ЕДИНЫЙ СТАНДАРТ ISO) ---
export const shoeDataISO = {
  male: [
    { cm: 24.1, eu: 38.5, us: 6, uk: 5.5 }, { cm: 24.4, eu: 39, us: 6.5, uk: 6 },
    { cm: 24.8, eu: 40, us: 7, uk: 6.5 }, { cm: 25.4, eu: 41, us: 8, uk: 7.5 },
    { cm: 25.7, eu: 41.5, us: 8.5, uk: 8 }, { cm: 26.0, eu: 42, us: 9, uk: 8.5 },
    { cm: 26.7, eu: 43, us: 10, uk: 9.5 }, { cm: 27.0, eu: 44, us: 10.5, uk: 10 },
    { cm: 27.3, eu: 44.5, us: 11, uk: 10.5 }, { cm: 27.9, eu: 45, us: 12, uk: 11.5 },
    { cm: 28.3, eu: 46, us: 12.5, uk: 12 }, { cm: 28.6, eu: 46.5, us: 13, uk: 12.5 },
    { cm: 29.4, eu: 47.5, us: 14, uk: 13.5 }, { cm: 30.2, eu: 48.5, us: 15, uk: 14.5 },
    { cm: 31.0, eu: 49.5, us: 16, uk: 15.5 }
  ],
  female: [
    { cm: 22.5, eu: 35.5, us: 5, uk: 2.5 }, { cm: 23.0, eu: 36, us: 5.5, uk: 3 },
    { cm: 23.5, eu: 37, us: 6.5, uk: 4 }, { cm: 23.8, eu: 37.5, us: 7, uk: 4.5 },
    { cm: 24.1, eu: 38, us: 7.5, uk: 5 }, { cm: 24.6, eu: 39, us: 8.5, uk: 6 },
    { cm: 25.1, eu: 40, us: 9, uk: 6.5 }, { cm: 25.4, eu: 40.5, us: 9.5, uk: 7 },
    { cm: 25.9, eu: 41, us: 10.5, uk: 8 }, { cm: 26.7, eu: 42.5, us: 12, uk: 9.5 }
  ]
};

// ==========================================
// ЛОГОТИПЫ БРЕНДОВ (Сверхнадежные источники)
// ==========================================
const LOGO_COLUMBIA = "https://cdn.iconscout.com/icon/free/png-256/free-columbia-2-282464.png";
const LOGO_HM = "https://cdn.simpleicons.org/h&m";
const LOGO_LEVIS = "https://cdn.iconscout.com/icon/free/png-256/free-levis-3215433-2673855.png";
const LOGO_NIKE = "https://cdn.simpleicons.org/nike";
const LOGO_ADIDAS = "https://cdn.simpleicons.org/adidas";
const LOGO_PUMA = "https://cdn.simpleicons.org/puma";

// ==========================================
// БРЕНД 1: COLUMBIA
// ==========================================
const columbiaTopsMale = [
  { half_chest: 42.5, int: "XS", us: "34", eu: "44" }, { half_chest: 46.5, int: "S", us: "38", eu: "48" },
  { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" },
  { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }
];
const columbiaTopsFemale = [
  { half_chest: 42.0, int: "XS", us: "2", eu: "34" }, { half_chest: 44.5, int: "S", us: "4", eu: "36" },
  { half_chest: 47.0, int: "M", us: "8", eu: "40" }, { half_chest: 51.0, int: "L", us: "12", eu: "44" },
  { half_chest: 54.5, int: "XL", us: "16", eu: "48" }, { half_chest: 57.0, int: "2XL", us: "20", eu: "52" },
  { half_chest: 61.0, int: "3XL", us: "22W", eu: "54" }, { half_chest: 66.0, int: "4XL", us: "24W", eu: "56" }
];
const columbiaBottomsMale = [
  { half_waist: 35.0, int: "XS", us: "28", eu: "38" }, { half_waist: 38.5, int: "S", us: "32", eu: "42" },
  { half_waist: 42.5, int: "M", us: "34", eu: "44" }, { half_waist: 47.5, int: "L", us: "36", eu: "46" },
  { half_waist: 52.5, int: "XL", us: "40", eu: "50" }, { half_waist: 57.5, int: "2XL", us: "44", eu: "54" }
];
const columbiaBottomsFemale = [
  { half_waist: 33.0, int: "XS", us: "2", eu: "34" }, { half_waist: 35.5, int: "S", us: "4", eu: "36" },
  { half_waist: 38.0, int: "M", us: "8", eu: "40" }, { half_waist: 42.0, int: "L", us: "12", eu: "44" },
  { half_waist: 46.5, int: "XL", us: "16", eu: "48" }, { half_waist: 52.0, int: "2XL", us: "20W", eu: "52" },
  { half_waist: 57.0, int: "3XL", us: "24W", eu: "56" }
];

// ==========================================
// БРЕНД 2: H&M
// ==========================================
const hmTopsMale = [
  { half_chest: 40.0, int: "XS", us: "34R", eu: "44" }, { half_chest: 42.0, int: "S", us: "36R", eu: "46" },
  { half_chest: 44.0, int: "M", us: "38R", eu: "48" }, { half_chest: 46.0, int: "L", us: "40R", eu: "50" },
  { half_chest: 48.0, int: "XL", us: "42R", eu: "52" }, { half_chest: 50.0, int: "2XL", us: "44R", eu: "54" }
];
const hmTopsFemale = [
  { half_chest: 38.0, int: "XXS", us: "0", eu: "32" }, { half_chest: 40.0, int: "XS", us: "2", eu: "34" },
  { half_chest: 42.0, int: "S", us: "4", eu: "36" }, { half_chest: 44.0, int: "M", us: "6", eu: "38" },
  { half_chest: 46.0, int: "L", us: "8", eu: "40" }, { half_chest: 48.0, int: "XL", us: "10", eu: "42" },
  { half_chest: 52.5, int: "3XL", us: "14", eu: "46" }
];
const hmBottomsMale = [
  { half_waist: 34.0, int: "XS", us: "28R", eu: "42" }, { half_waist: 36.0, int: "S", us: "30R", eu: "44" },
  { half_waist: 38.0, int: "M", us: "32R", eu: "46" }, { half_waist: 40.0, int: "L", us: "34R", eu: "48" },
  { half_waist: 42.0, int: "XL", us: "36R", eu: "50" }, { half_waist: 44.0, int: "2XL", us: "38R", eu: "52" }
];
const hmBottomsFemale = [
  { half_waist: 30.0, int: "XXS", us: "0", eu: "32" }, { half_waist: 32.0, int: "XS", us: "2", eu: "34" },
  { half_waist: 34.0, int: "S", us: "4", eu: "36" }, { half_waist: 36.0, int: "M", us: "6", eu: "38" },
  { half_waist: 38.0, int: "L", us: "8", eu: "40" }, { half_waist: 40.0, int: "XL", us: "10", eu: "42" },
  { half_waist: 45.0, int: "3XL", us: "14", eu: "46" }
];

// ==========================================
// БРЕНД 3: LEVI'S
// ==========================================
const levisTopsMale = [
  { half_chest: 42.0, int: "XS", us: "-", eu: "-" }, { half_chest: 45.5, int: "S", us: "-", eu: "-" },
  { half_chest: 49.0, int: "M", us: "-", eu: "-" }, { half_chest: 53.0, int: "L", us: "-", eu: "-" },
  { half_chest: 57.0, int: "XL", us: "-", eu: "-" }
];
const levisTopsFemale = [
  { half_chest: 39.5, int: "XXS", us: "-", eu: "-" }, { half_chest: 42.0, int: "XS", us: "-", eu: "-" },
  { half_chest: 44.5, int: "S", us: "-", eu: "-" }, { half_chest: 47.0, int: "M", us: "-", eu: "-" },
  { half_chest: 50.0, int: "L", us: "-", eu: "-" }, { half_chest: 54.0, int: "XL", us: "-", eu: "-" },
  { half_chest: 57.5, int: "2XL", us: "-", eu: "-" }
];
const levisBottomsMale = [
  { half_waist: 34.0, int: "-", us: "26", eu: "-" }, { half_waist: 36.5, int: "-", us: "28", eu: "-" },
  { half_waist: 39.0, int: "-", us: "30", eu: "-" }, { half_waist: 41.5, int: "-", us: "32", eu: "-" },
  { half_waist: 44.0, int: "-", us: "34", eu: "-" }, { half_waist: 47.0, int: "-", us: "36", eu: "-" },
  { half_waist: 49.5, int: "-", us: "38", eu: "-" }, { half_waist: 52.0, int: "-", us: "40", eu: "-" }
];
const levisBottomsFemale = [
  { half_waist: 32.0, int: "-", us: "24", eu: "0" }, { half_waist: 34.5, int: "-", us: "26", eu: "3" },
  { half_waist: 37.0, int: "-", us: "28", eu: "7" }, { half_waist: 39.5, int: "-", us: "30", eu: "11" },
  { half_waist: 43.5, int: "-", us: "32", eu: "15" }, { half_waist: 48.0, int: "-", us: "34", eu: "19" }
];

// ==========================================
// БРЕНД 4: NIKE
// ==========================================
const nikeTopsMale = [
  { half_chest: 42.0, int: "XS", us: "34", eu: "42" }, { half_chest: 46.0, int: "S", us: "36", eu: "46" },
  { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "44", eu: "54" },
  { half_chest: 59.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }
];
const nikeTopsFemale = [
  { half_chest: 40.0, int: "XS", us: "2", eu: "32" }, { half_chest: 43.0, int: "S", us: "4-6", eu: "36" },
  { half_chest: 46.5, int: "M", us: "8-10", eu: "40" }, { half_chest: 50.5, int: "L", us: "12-14", eu: "44" },
  { half_chest: 55.0, int: "XL", us: "16-18", eu: "48" }, { half_chest: 59.5, int: "2XL", us: "20-22", eu: "52" }
];
const nikeBottomsMale = [
  { half_waist: 35.0, int: "XS", us: "28", eu: "42" }, { half_waist: 38.5, int: "S", us: "30", eu: "46" },
  { half_waist: 42.5, int: "M", us: "34", eu: "50" }, { half_waist: 46.5, int: "L", us: "38", eu: "54" },
  { half_waist: 51.5, int: "XL", us: "42", eu: "58" }, { half_waist: 57.5, int: "2XL", us: "46", eu: "62" }
];
const nikeBottomsFemale = [
  { half_waist: 32.0, int: "XS", us: "2", eu: "32" }, { half_waist: 35.0, int: "S", us: "4-6", eu: "36" },
  { half_waist: 38.5, int: "M", us: "8-10", eu: "40" }, { half_waist: 42.5, int: "L", us: "12-14", eu: "44" },
  { half_waist: 47.0, int: "XL", us: "16-18", eu: "48" }, { half_waist: 52.0, int: "2XL", us: "20-22", eu: "52" }
];

// ==========================================
// БРЕНД 5: ADIDAS
// ==========================================
const adidasTopsMale = [
  { half_chest: 43.0, int: "XS", us: "34", eu: "42" }, { half_chest: 47.0, int: "S", us: "38", eu: "46" },
  { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" },
  { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 66.0, int: "2XL", us: "52", eu: "62" }
];
const adidasTopsFemale = [
  { half_chest: 38.0, int: "XXS", us: "0", eu: "28" }, { half_chest: 40.5, int: "XS", us: "2", eu: "30" },
  { half_chest: 43.0, int: "S", us: "4", eu: "34" }, { half_chest: 45.5, int: "M", us: "8", eu: "38" },
  { half_chest: 49.0, int: "L", us: "12", eu: "42" }, { half_chest: 53.0, int: "XL", us: "16", eu: "46" }
];
const adidasBottomsMale = [
  { half_waist: 36.0, int: "XS", us: "28", eu: "42" }, { half_waist: 40.0, int: "S", us: "30", eu: "46" },
  { half_waist: 44.0, int: "M", us: "34", eu: "50" }, { half_waist: 48.0, int: "L", us: "38", eu: "54" },
  { half_waist: 53.0, int: "XL", us: "42", eu: "58" }, { half_waist: 58.0, int: "2XL", us: "46", eu: "62" }
];
const adidasBottomsFemale = [
  { half_waist: 31.0, int: "XXS", us: "0", eu: "28" }, { half_waist: 33.0, int: "XS", us: "2", eu: "30" },
  { half_waist: 35.5, int: "S", us: "4", eu: "34" }, { half_waist: 38.0, int: "M", us: "8", eu: "38" },
  { half_waist: 41.0, int: "L", us: "12", eu: "42" }, { half_waist: 45.0, int: "XL", us: "16", eu: "46" }
];

// ==========================================
// БРЕНД 6: PUMA
// ==========================================
const pumaTopsMale = [
  { half_chest: 42.0, int: "XS", us: "34", eu: "42" }, { half_chest: 46.0, int: "S", us: "36", eu: "46" },
  { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "44", eu: "54" },
  { half_chest: 58.0, int: "XL", us: "48", eu: "58" }, { half_chest: 62.0, int: "2XL", us: "52", eu: "62" }
];
const pumaTopsFemale = [
  { half_chest: 39.0, int: "XXS", us: "0", eu: "32" }, { half_chest: 41.0, int: "XS", us: "2", eu: "34" },
  { half_chest: 44.0, int: "S", us: "4-6", eu: "36" }, { half_chest: 47.0, int: "M", us: "8-10", eu: "40" },
  { half_chest: 50.0, int: "L", us: "12-14", eu: "44" }, { half_chest: 54.0, int: "XL", us: "16", eu: "48" }
];
const pumaBottomsMale = [
  { half_waist: 36.0, int: "XS", us: "28", eu: "42" }, { half_waist: 39.0, int: "S", us: "30", eu: "46" },
  { half_waist: 43.0, int: "M", us: "34", eu: "50" }, { half_waist: 47.0, int: "L", us: "38", eu: "54" },
  { half_waist: 51.0, int: "XL", us: "42", eu: "58" }, { half_waist: 55.0, int: "2XL", us: "46", eu: "62" }
];
const pumaBottomsFemale = [
  { half_waist: 31.0, int: "XXS", us: "0", eu: "32" }, { half_waist: 33.0, int: "XS", us: "2", eu: "34" },
  { half_waist: 36.0, int: "S", us: "4-6", eu: "36" }, { half_waist: 39.0, int: "M", us: "8-10", eu: "40" },
  { half_waist: 42.0, int: "L", us: "12-14", eu: "44" }, { half_waist: 46.0, int: "XL", us: "16", eu: "48" }
];

// ==========================================
// СБОРКА БАЗЫ ДАННЫХ
// ==========================================
export const sizeDatabase = {
  tops: {
    title: "Полуобхват груди (см)",
    key: "half_chest",
    range: { min: 30, max: 70, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: columbiaTopsMale, female: columbiaTopsFemale } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: hmTopsMale, female: hmTopsFemale } },
      { name: "Levi's", logo: LOGO_LEVIS, sizes: { male: levisTopsMale, female: levisTopsFemale } },
      { name: "Nike", logo: LOGO_NIKE, sizes: { male: nikeTopsMale, female: nikeTopsFemale } },
      { name: "Adidas", logo: LOGO_ADIDAS, sizes: { male: adidasTopsMale, female: adidasTopsFemale } },
      { name: "Puma", logo: LOGO_PUMA, sizes: { male: pumaTopsMale, female: pumaTopsFemale } }
    ]
  },
  bottoms: {
    title: "Полуобхват талии (см)",
    key: "half_waist",
    range: { min: 25, max: 60, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: columbiaBottomsMale, female: columbiaBottomsFemale } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: hmBottomsMale, female: hmBottomsFemale } },
      { name: "Levi's", logo: LOGO_LEVIS, sizes: { male: levisBottomsMale, female: levisBottomsFemale } },
      { name: "Nike", logo: LOGO_NIKE, sizes: { male: nikeBottomsMale, female: nikeBottomsFemale } },
      { name: "Adidas", logo: LOGO_ADIDAS, sizes: { male: adidasBottomsMale, female: adidasBottomsFemale } },
      { name: "Puma", logo: LOGO_PUMA, sizes: { male: pumaBottomsMale, female: pumaBottomsFemale } }
    ]
  },
  shoes: {
    title: "Длина стопы (см)",
    range: { min: 22, max: 32, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA },
      { name: "H&M", logo: LOGO_HM },
      { name: "Levi's", logo: LOGO_LEVIS },
      { name: "Nike", logo: LOGO_NIKE },
      { name: "Adidas", logo: LOGO_ADIDAS },
      { name: "Puma", logo: LOGO_PUMA }
    ]
  }
};

// ==========================================
// УМНЫЕ ФУНКЦИИ ПОИСКА
// ==========================================
export const findNearestShoe = (gender, cmValue) => {
  const data = shoeDataISO[gender];
  return data.reduce((prev, curr) => Math.abs(curr.cm - cmValue) < Math.abs(prev.cm - cmValue) ? curr : prev);
};

export const findNearestClothes = (sizes, key, target) => {
  if (!sizes || sizes.length === 0) return { int: "-", us: "-", eu: "-" };
  return sizes.reduce((prev, curr) => Math.abs(curr[key] - target) < Math.abs(prev[key] - target) ? curr : prev);
};