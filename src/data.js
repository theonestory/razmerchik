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
// ЛОГОТИПЫ БРЕНДОВ
// ==========================================
const LOGO_COLUMBIA = "https://cdn.worldvectorlogo.com/logos/columbia-sportswear.svg";
const LOGO_HM = "https://cdn.worldvectorlogo.com/logos/h-m.svg";
const LOGO_LEVIS = "https://cdn.worldvectorlogo.com/logos/levi-s-logo.svg";
const LOGO_NIKE = "https://cdn.worldvectorlogo.com/logos/nike-11.svg";
const LOGO_ADIDAS = "https://cdn.worldvectorlogo.com/logos/adidas-4.svg";
const LOGO_PUMA = "https://cdn.worldvectorlogo.com/logos/puma-logo.svg";
const LOGO_TNF = "https://cdn.worldvectorlogo.com/logos/the-north-face.svg";
const LOGO_FILA = "https://cdn.worldvectorlogo.com/logos/fila-9.svg";
const LOGO_CONVERSE = "https://cdn.worldvectorlogo.com/logos/converse-1.svg";
const LOGO_CROCS = "https://cdn.worldvectorlogo.com/logos/crocs.svg";
const LOGO_HH = "https://cdn.worldvectorlogo.com/logos/helly-hansen.svg";
const LOGO_HOLLISTER = "https://cdn.worldvectorlogo.com/logos/hollister.svg";
const LOGO_CARHARTT = "https://cdn.worldvectorlogo.com/logos/carhartt.svg";
const LOGO_UNIQLO = "https://cdn.worldvectorlogo.com/logos/uniqlo-2.svg";
const LOGO_F21 = "https://cdn.worldvectorlogo.com/logos/forever-21.svg";
const LOGO_UGG = "https://cdn.worldvectorlogo.com/logos/ugg-australia.svg";
const LOGO_ZARA = "https://cdn.worldvectorlogo.com/logos/zara.svg";
const LOGO_MANGO = "https://cdn.worldvectorlogo.com/logos/mango-2.svg";

// --- БРЕНДЫ 1-13 (БАЗА ИЗ ПРЕДЫДУЩИХ ИТЕРАЦИЙ) ---
const columbiaTopsMale = [{ half_chest: 42.5, int: "XS", us: "34", eu: "44" }, { half_chest: 46.5, int: "S", us: "38", eu: "48" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" }, { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 70.0, int: "3XL", us: "56", eu: "66" }];
const columbiaTopsFemale = [{ half_chest: 42.0, int: "XS", us: "2", eu: "34" }, { half_chest: 44.5, int: "S", us: "4", eu: "36" }, { half_chest: 47.0, int: "M", us: "8", eu: "40" }, { half_chest: 51.0, int: "L", us: "12", eu: "44" }, { half_chest: 54.5, int: "XL", us: "16", eu: "48" }, { half_chest: 57.0, int: "2XL", us: "20", eu: "52" }, { half_chest: 61.0, int: "3XL", us: "22W", eu: "54" }, { half_chest: 66.0, int: "4XL", us: "24W", eu: "56" }, { half_chest: 71.0, int: "5XL", us: "26W", eu: "58" }];
const columbiaBottomsMale = [{ half_waist: 35.0, int: "XS", us: "28", eu: "38" }, { half_waist: 38.5, int: "S", us: "32", eu: "42" }, { half_waist: 42.5, int: "M", us: "34", eu: "44" }, { half_waist: 47.5, int: "L", us: "36", eu: "46" }, { half_waist: 52.5, int: "XL", us: "40", eu: "50" }, { half_waist: 57.5, int: "2XL", us: "44", eu: "54" }, { half_waist: 62.5, int: "3XL", us: "48", eu: "58" }];
const columbiaBottomsFemale = [{ half_waist: 33.0, int: "XS", us: "2", eu: "34" }, { half_waist: 35.5, int: "S", us: "4", eu: "36" }, { half_waist: 38.0, int: "M", us: "8", eu: "40" }, { half_waist: 42.0, int: "L", us: "12", eu: "44" }, { half_waist: 46.5, int: "XL", us: "16", eu: "48" }, { half_waist: 52.0, int: "2XL", us: "20W", eu: "52" }, { half_waist: 57.0, int: "3XL", us: "24W", eu: "56" }, { half_waist: 62.0, int: "4XL", us: "28W", eu: "60" }];

const hmTopsMale = [{ half_chest: 40.0, int: "XS", us: "34R", eu: "44" }, { half_chest: 42.0, int: "S", us: "36R", eu: "46" }, { half_chest: 44.0, int: "M", us: "38R", eu: "48" }, { half_chest: 46.0, int: "L", us: "40R", eu: "50" }, { half_chest: 48.0, int: "XL", us: "42R", eu: "52" }, { half_chest: 50.0, int: "2XL", us: "44R", eu: "54" }, { half_chest: 54.0, int: "3XL", us: "46R", eu: "56" }, { half_chest: 58.0, int: "4XL", us: "48R", eu: "58" }, { half_chest: 62.0, int: "5XL", us: "50R", eu: "60" }, { half_chest: 66.0, int: "6XL", us: "52R", eu: "62" }, { half_chest: 70.0, int: "7XL", us: "54R", eu: "64" }];
const hmTopsFemale = [{ half_chest: 38.0, int: "XXS", us: "0", eu: "32" }, { half_chest: 40.0, int: "XS", us: "2", eu: "34" }, { half_chest: 42.0, int: "S", us: "4", eu: "36" }, { half_chest: 44.0, int: "M", us: "6", eu: "38" }, { half_chest: 46.0, int: "L", us: "8", eu: "40" }, { half_chest: 48.0, int: "XL", us: "10", eu: "42" }, { half_chest: 52.5, int: "2XL", us: "14", eu: "46" }, { half_chest: 56.0, int: "3XL", us: "18", eu: "50" }, { half_chest: 60.0, int: "4XL", us: "22", eu: "54" }, { half_chest: 64.0, int: "5XL", us: "26", eu: "58" }, { half_chest: 68.0, int: "6XL", us: "30", eu: "62" }, { half_chest: 72.0, int: "7XL", us: "34", eu: "66" }];
const hmBottomsMale = [{ half_waist: 34.0, int: "XS", us: "28R", eu: "42" }, { half_waist: 36.0, int: "S", us: "30R", eu: "44" }, { half_waist: 38.0, int: "M", us: "32R", eu: "46" }, { half_waist: 40.0, int: "L", us: "34R", eu: "48" }, { half_waist: 42.0, int: "XL", us: "36R", eu: "50" }, { half_waist: 44.0, int: "2XL", us: "38R", eu: "52" }, { half_waist: 47.0, int: "3XL", us: "40R", eu: "54" }, { half_waist: 50.0, int: "4XL", us: "42R", eu: "56" }, { half_waist: 54.0, int: "5XL", us: "46R", eu: "60" }, { half_waist: 57.0, int: "6XL", us: "48R", eu: "62" }, { half_waist: 60.0, int: "7XL", us: "50R", eu: "64" }];
const hmBottomsFemale = [{ half_waist: 30.0, int: "XXS", us: "0", eu: "32" }, { half_waist: 32.0, int: "XS", us: "2", eu: "34" }, { half_waist: 34.0, int: "S", us: "4", eu: "36" }, { half_waist: 36.0, int: "M", us: "6", eu: "38" }, { half_waist: 38.0, int: "L", us: "8", eu: "40" }, { half_waist: 40.0, int: "XL", us: "10", eu: "42" }, { half_waist: 45.0, int: "2XL", us: "14", eu: "46" }, { half_waist: 48.0, int: "3XL", us: "18", eu: "50" }, { half_waist: 51.0, int: "4XL", us: "22", eu: "54" }, { half_waist: 54.0, int: "5XL", us: "26", eu: "58" }, { half_waist: 57.0, int: "6XL", us: "30", eu: "62" }, { half_waist: 60.0, int: "7XL", us: "34", eu: "66" }];

const levisTopsMale = [{ half_chest: 42.0, int: "XS", us: "-", eu: "-" }, { half_chest: 45.5, int: "S", us: "-", eu: "-" }, { half_chest: 49.0, int: "M", us: "-", eu: "-" }, { half_chest: 53.0, int: "L", us: "-", eu: "-" }, { half_chest: 57.0, int: "XL", us: "-", eu: "-" }, { half_chest: 61.0, int: "2XL", us: "-", eu: "-" }, { half_chest: 65.0, int: "3XL", us: "-", eu: "-" }, { half_chest: 69.0, int: "4XL", us: "-", eu: "-" }, { half_chest: 73.0, int: "5XL", us: "-", eu: "-" }];
const levisTopsFemale = [{ half_chest: 39.5, int: "XXS", us: "-", eu: "-" }, { half_chest: 42.0, int: "XS", us: "-", eu: "-" }, { half_chest: 44.5, int: "S", us: "-", eu: "-" }, { half_chest: 47.0, int: "M", us: "-", eu: "-" }, { half_chest: 50.0, int: "L", us: "-", eu: "-" }, { half_chest: 54.0, int: "XL", us: "-", eu: "-" }, { half_chest: 57.5, int: "2XL", us: "-", eu: "-" }, { half_chest: 61.0, int: "3XL", us: "-", eu: "-" }, { half_chest: 64.5, int: "4XL", us: "-", eu: "-" }, { half_chest: 68.0, int: "5XL", us: "-", eu: "-" }, { half_chest: 71.5, int: "6XL", us: "-", eu: "-" }];
const levisBottomsMale = [{ half_waist: 34.0, int: "-", us: "26", eu: "-" }, { half_waist: 36.5, int: "-", us: "28", eu: "-" }, { half_waist: 39.0, int: "-", us: "30", eu: "-" }, { half_waist: 41.5, int: "-", us: "32", eu: "-" }, { half_waist: 44.0, int: "-", us: "34", eu: "-" }, { half_waist: 47.0, int: "-", us: "36", eu: "-" }, { half_waist: 49.5, int: "-", us: "38", eu: "-" }, { half_waist: 52.0, int: "-", us: "40", eu: "-" }, { half_waist: 54.5, int: "-", us: "42", eu: "-" }, { half_waist: 57.0, int: "-", us: "44", eu: "-" }, { half_waist: 59.5, int: "-", us: "46", eu: "-" }, { half_waist: 62.0, int: "-", us: "48", eu: "-" }];
const levisBottomsFemale = [{ half_waist: 32.0, int: "-", us: "24", eu: "0" }, { half_waist: 34.5, int: "-", us: "26", eu: "3" }, { half_waist: 37.0, int: "-", us: "28", eu: "7" }, { half_waist: 39.5, int: "-", us: "30", eu: "11" }, { half_waist: 43.5, int: "-", us: "32", eu: "15" }, { half_waist: 48.0, int: "-", us: "34", eu: "19" }, { half_waist: 51.0, int: "-", us: "36", eu: "21" }, { half_waist: 54.0, int: "-", us: "38", eu: "23" }, { half_waist: 57.0, int: "-", us: "40", eu: "25" }, { half_waist: 60.0, int: "-", us: "42", eu: "27" }];

const nikeTopsMale = [{ half_chest: 42.0, int: "XS", us: "34", eu: "42" }, { half_chest: 46.0, int: "S", us: "36", eu: "46" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "44", eu: "54" }, { half_chest: 59.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 70.0, int: "3XL", us: "56", eu: "66" }];
const nikeTopsFemale = [{ half_chest: 40.0, int: "XS", us: "2", eu: "32" }, { half_chest: 43.0, int: "S", us: "4-6", eu: "36" }, { half_chest: 46.5, int: "M", us: "8-10", eu: "40" }, { half_chest: 50.5, int: "L", us: "12-14", eu: "44" }, { half_chest: 55.0, int: "XL", us: "16-18", eu: "48" }, { half_chest: 59.5, int: "2XL", us: "20-22", eu: "52" }, { half_chest: 64.0, int: "3XL", us: "24-26", eu: "56" }, { half_chest: 68.0, int: "4XL", us: "28-30", eu: "60" }, { half_chest: 72.0, int: "5XL", us: "32-34", eu: "64" }];
const nikeBottomsMale = [{ half_waist: 35.0, int: "XS", us: "28", eu: "42" }, { half_waist: 38.5, int: "S", us: "30", eu: "46" }, { half_waist: 42.5, int: "M", us: "34", eu: "50" }, { half_waist: 46.5, int: "L", us: "38", eu: "54" }, { half_waist: 51.5, int: "XL", us: "42", eu: "58" }, { half_waist: 57.5, int: "2XL", us: "46", eu: "62" }, { half_waist: 62.0, int: "3XL", us: "50", eu: "66" }];
const nikeBottomsFemale = [{ half_waist: 32.0, int: "XS", us: "2", eu: "32" }, { half_waist: 35.0, int: "S", us: "4-6", eu: "36" }, { half_waist: 38.5, int: "M", us: "8-10", eu: "40" }, { half_waist: 42.5, int: "L", us: "12-14", eu: "44" }, { half_waist: 47.0, int: "XL", us: "16-18", eu: "48" }, { half_waist: 52.0, int: "2XL", us: "20-22", eu: "52" }, { half_waist: 56.0, int: "3XL", us: "24-26", eu: "56" }, { half_waist: 60.0, int: "4XL", us: "28-30", eu: "60" }];

const adidasTopsMale = [{ half_chest: 43.0, int: "XS", us: "34", eu: "42" }, { half_chest: 47.0, int: "S", us: "38", eu: "46" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" }, { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 66.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 71.0, int: "3XL", us: "56", eu: "66" }];
const adidasTopsFemale = [{ half_chest: 38.0, int: "XXS", us: "0", eu: "28" }, { half_chest: 40.5, int: "XS", us: "2", eu: "30" }, { half_chest: 43.0, int: "S", us: "4", eu: "34" }, { half_chest: 45.5, int: "M", us: "8", eu: "38" }, { half_chest: 49.0, int: "L", us: "12", eu: "42" }, { half_chest: 53.0, int: "XL", us: "16", eu: "46" }, { half_chest: 57.0, int: "2XL", us: "20", eu: "50" }, { half_chest: 61.0, int: "3XL", us: "24", eu: "54" }, { half_chest: 65.0, int: "4XL", us: "28", eu: "58" }, { half_chest: 69.0, int: "5XL", us: "32", eu: "62" }];
const adidasBottomsMale = [{ half_waist: 36.0, int: "XS", us: "28", eu: "42" }, { half_waist: 40.0, int: "S", us: "30", eu: "46" }, { half_waist: 44.0, int: "M", us: "34", eu: "50" }, { half_waist: 48.0, int: "L", us: "38", eu: "54" }, { half_waist: 53.0, int: "XL", us: "42", eu: "58" }, { half_waist: 58.0, int: "2XL", us: "46", eu: "62" }, { half_waist: 62.0, int: "3XL", us: "50", eu: "66" }];
const adidasBottomsFemale = [{ half_waist: 31.0, int: "XXS", us: "0", eu: "28" }, { half_waist: 33.0, int: "XS", us: "2", eu: "30" }, { half_waist: 35.5, int: "S", us: "4", eu: "34" }, { half_waist: 38.0, int: "M", us: "8", eu: "38" }, { half_waist: 41.0, int: "L", us: "12", eu: "42" }, { half_waist: 45.0, int: "XL", us: "16", eu: "46" }, { half_waist: 49.0, int: "2XL", us: "20", eu: "50" }, { half_waist: 53.0, int: "3XL", us: "24", eu: "54" }, { half_waist: 57.0, int: "4XL", us: "28", eu: "58" }, { half_waist: 61.0, int: "5XL", us: "32", eu: "62" }];

const pumaTopsMale = [{ half_chest: 42.0, int: "XS", us: "34", eu: "42" }, { half_chest: 46.0, int: "S", us: "36", eu: "46" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "44", eu: "54" }, { half_chest: 58.0, int: "XL", us: "48", eu: "58" }, { half_chest: 62.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 66.0, int: "3XL", us: "56", eu: "66" }, { half_chest: 70.0, int: "4XL", us: "60", eu: "70" }];
const pumaTopsFemale = [{ half_chest: 39.0, int: "XXS", us: "0", eu: "32" }, { half_chest: 41.0, int: "XS", us: "2", eu: "34" }, { half_chest: 44.0, int: "S", us: "4-6", eu: "36" }, { half_chest: 47.0, int: "M", us: "8-10", eu: "40" }, { half_chest: 50.0, int: "L", us: "12-14", eu: "44" }, { half_chest: 54.0, int: "XL", us: "16", eu: "48" }, { half_chest: 58.0, int: "2XL", us: "18", eu: "52" }, { half_chest: 62.0, int: "3XL", us: "20", eu: "56" }, { half_chest: 66.0, int: "4XL", us: "22", eu: "60" }, { half_chest: 70.0, int: "5XL", us: "24", eu: "64" }];
const pumaBottomsMale = [{ half_waist: 36.0, int: "XS", us: "28", eu: "42" }, { half_waist: 39.0, int: "S", us: "30", eu: "46" }, { half_waist: 43.0, int: "M", us: "34", eu: "50" }, { half_waist: 47.0, int: "L", us: "38", eu: "54" }, { half_waist: 51.0, int: "XL", us: "42", eu: "58" }, { half_waist: 55.0, int: "2XL", us: "46", eu: "62" }, { half_waist: 59.0, int: "3XL", us: "50", eu: "66" }, { half_waist: 63.0, int: "4XL", us: "54", eu: "70" }];
const pumaBottomsFemale = [{ half_waist: 31.0, int: "XXS", us: "0", eu: "32" }, { half_waist: 33.0, int: "XS", us: "2", eu: "34" }, { half_waist: 36.0, int: "S", us: "4-6", eu: "36" }, { half_waist: 39.0, int: "M", us: "8-10", eu: "40" }, { half_waist: 42.0, int: "L", us: "12-14", eu: "44" }, { half_waist: 46.0, int: "XL", us: "16", eu: "48" }, { half_waist: 50.0, int: "2XL", us: "18", eu: "52" }, { half_waist: 54.0, int: "3XL", us: "20", eu: "56" }, { half_waist: 58.0, int: "4XL", us: "22", eu: "60" }, { half_waist: 62.0, int: "5XL", us: "24", eu: "64" }];

const tnfTopsMale = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 48.0, int: "S", us: "36", eu: "46" }, { half_chest: 52.0, int: "M", us: "38", eu: "48" }, { half_chest: 56.0, int: "L", us: "40", eu: "50" }, { half_chest: 61.0, int: "XL", us: "42", eu: "52" }, { half_chest: 66.0, int: "2XL", us: "44", eu: "54" }, { half_chest: 71.0, int: "3XL", us: "46", eu: "56" }];
const tnfTopsFemale = [{ half_chest: 40.0, int: "XS", us: "2", eu: "32" }, { half_chest: 43.0, int: "S", us: "4-6", eu: "36" }, { half_chest: 46.0, int: "M", us: "8-10", eu: "40" }, { half_chest: 50.0, int: "L", us: "12-14", eu: "44" }, { half_chest: 54.0, int: "XL", us: "16", eu: "48" }, { half_chest: 58.0, int: "2XL", us: "18", eu: "52" }, { half_chest: 62.0, int: "3XL", us: "20", eu: "56" }, { half_chest: 66.0, int: "4XL", us: "22", eu: "60" }, { half_chest: 70.0, int: "5XL", us: "24", eu: "64" }];
const tnfBottomsMale = [{ half_waist: 36.0, int: "XS", us: "28", eu: "38" }, { half_waist: 39.0, int: "S", us: "30", eu: "40" }, { half_waist: 42.0, int: "M", us: "32", eu: "42" }, { half_waist: 45.0, int: "L", us: "34", eu: "44" }, { half_waist: 48.0, int: "XL", us: "36", eu: "46" }, { half_waist: 51.0, int: "2XL", us: "38", eu: "48" }, { half_waist: 54.0, int: "3XL", us: "40", eu: "50" }, { half_waist: 57.0, int: "4XL", us: "42", eu: "52" }, { half_waist: 60.0, int: "5XL", us: "44", eu: "54" }];
const tnfBottomsFemale = [{ half_waist: 32.0, int: "XS", us: "2", eu: "32" }, { half_waist: 35.0, int: "S", us: "4-6", eu: "36" }, { half_waist: 38.0, int: "M", us: "8-10", eu: "40" }, { half_waist: 42.0, int: "L", us: "12-14", eu: "44" }, { half_waist: 46.0, int: "XL", us: "16", eu: "48" }, { half_waist: 50.0, int: "2XL", us: "18", eu: "52" }, { half_waist: 54.0, int: "3XL", us: "20", eu: "56" }, { half_waist: 58.0, int: "4XL", us: "22", eu: "60" }, { half_waist: 62.0, int: "5XL", us: "24", eu: "64" }];

const filaTopsMale = [{ half_chest: 45.0, int: "S", us: "36", eu: "46" }, { half_chest: 49.0, int: "M", us: "38", eu: "48" }, { half_chest: 53.0, int: "L", us: "40", eu: "50" }, { half_chest: 57.0, int: "XL", us: "42", eu: "52" }, { half_chest: 61.0, int: "2XL", us: "44", eu: "54" }, { half_chest: 65.0, int: "3XL", us: "46", eu: "56" }, { half_chest: 69.0, int: "4XL", us: "48", eu: "58" }, { half_chest: 73.0, int: "5XL", us: "50", eu: "60" }];
const filaTopsFemale = [{ half_chest: 41.0, int: "XS", us: "2", eu: "34" }, { half_chest: 44.0, int: "S", us: "4", eu: "36" }, { half_chest: 47.0, int: "M", us: "8", eu: "38" }, { half_chest: 50.0, int: "L", us: "12", eu: "42" }, { half_chest: 54.0, int: "XL", us: "16", eu: "46" }, { half_chest: 58.0, int: "2XL", us: "20", eu: "50" }, { half_chest: 62.0, int: "3XL", us: "24", eu: "54" }, { half_chest: 66.0, int: "4XL", us: "28", eu: "58" }, { half_chest: 70.0, int: "5XL", us: "32", eu: "62" }];
const filaBottomsMale = [{ half_waist: 38.0, int: "S", us: "30", eu: "46" }, { half_waist: 42.0, int: "M", us: "32", eu: "48" }, { half_waist: 46.0, int: "L", us: "34", eu: "50" }, { half_waist: 50.0, int: "XL", us: "36", eu: "52" }, { half_waist: 54.0, int: "2XL", us: "38", eu: "54" }, { half_waist: 58.0, int: "3XL", us: "40", eu: "56" }, { half_waist: 62.0, int: "4XL", us: "42", eu: "58" }];
const filaBottomsFemale = [{ half_waist: 34.0, int: "XS", us: "2", eu: "34" }, { half_waist: 36.0, int: "S", us: "4", eu: "36" }, { half_waist: 38.0, int: "M", us: "8", eu: "38" }, { half_waist: 41.0, int: "L", us: "12", eu: "42" }, { half_waist: 45.0, int: "XL", us: "16", eu: "46" }, { half_waist: 49.0, int: "2XL", us: "20", eu: "50" }, { half_waist: 53.0, int: "3XL", us: "24", eu: "54" }, { half_waist: 57.0, int: "4XL", us: "28", eu: "58" }, { half_waist: 61.0, int: "5XL", us: "32", eu: "62" }];

const converseTopsMale = [{ half_chest: 44.0, int: "S", us: "36", eu: "46" }, { half_chest: 48.0, int: "M", us: "38", eu: "48" }, { half_chest: 52.0, int: "L", us: "40", eu: "50" }, { half_chest: 56.0, int: "XL", us: "42", eu: "52" }, { half_chest: 60.0, int: "2XL", us: "44", eu: "54" }, { half_chest: 64.0, int: "3XL", us: "46", eu: "56" }, { half_chest: 68.0, int: "4XL", us: "48", eu: "58" }, { half_chest: 72.0, int: "5XL", us: "50", eu: "60" }];
const converseTopsFemale = [{ half_chest: 42.0, int: "S", us: "4", eu: "36" }, { half_chest: 45.0, int: "M", us: "8", eu: "38" }, { half_chest: 48.0, int: "L", us: "12", eu: "42" }, { half_chest: 52.0, int: "XL", us: "16", eu: "46" }, { half_chest: 56.0, int: "2XL", us: "20", eu: "50" }, { half_chest: 60.0, int: "3XL", us: "24", eu: "54" }, { half_chest: 64.0, int: "4XL", us: "28", eu: "58" }, { half_chest: 68.0, int: "5XL", us: "32", eu: "62" }];
const converseBottomsMale = [{ half_waist: 38.0, int: "S", us: "30", eu: "46" }, { half_waist: 42.0, int: "M", us: "32", eu: "48" }, { half_waist: 46.0, int: "L", us: "34", eu: "50" }, { half_waist: 50.0, int: "XL", us: "36", eu: "52" }, { half_waist: 54.0, int: "2XL", us: "38", eu: "54" }, { half_waist: 58.0, int: "3XL", us: "40", eu: "56" }, { half_waist: 62.0, int: "4XL", us: "42", eu: "58" }];
const converseBottomsFemale = [{ half_waist: 35.0, int: "S", us: "4", eu: "36" }, { half_waist: 38.0, int: "M", us: "8", eu: "38" }, { half_waist: 41.0, int: "L", us: "12", eu: "42" }, { half_waist: 45.0, int: "XL", us: "16", eu: "46" }, { half_waist: 49.0, int: "2XL", us: "20", eu: "50" }, { half_waist: 53.0, int: "3XL", us: "24", eu: "54" }, { half_waist: 57.0, int: "4XL", us: "28", eu: "58" }, { half_waist: 61.0, int: "5XL", us: "32", eu: "62" }];

const hhTopsMale = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 48.0, int: "S", us: "37", eu: "46" }, { half_chest: 52.0, int: "M", us: "40", eu: "50" }, { half_chest: 56.0, int: "L", us: "43", eu: "54" }, { half_chest: 61.0, int: "XL", us: "47", eu: "58" }, { half_chest: 66.0, int: "2XL", us: "51", eu: "62" }, { half_chest: 71.0, int: "3XL", us: "55", eu: "66" }];
const hhTopsFemale = [{ half_chest: 41.0, int: "XS", us: "2", eu: "34" }, { half_chest: 44.0, int: "S", us: "4-6", eu: "36" }, { half_chest: 47.0, int: "M", us: "8-10", eu: "40" }, { half_chest: 51.0, int: "L", us: "12-14", eu: "44" }, { half_chest: 55.5, int: "XL", us: "16", eu: "48" }, { half_chest: 60.0, int: "2XL", us: "18", eu: "52" }, { half_chest: 64.5, int: "3XL", us: "20", eu: "56" }, { half_chest: 69.0, int: "4XL", us: "22", eu: "60" }];
const hhBottomsMale = [{ half_waist: 36.0, int: "XS", us: "28", eu: "44" }, { half_waist: 39.0, int: "S", us: "30", eu: "46" }, { half_waist: 42.5, int: "M", us: "32", eu: "48" }, { half_waist: 46.5, int: "L", us: "36", eu: "52" }, { half_waist: 51.0, int: "XL", us: "40", eu: "56" }, { half_waist: 55.0, int: "2XL", us: "44", eu: "60" }, { half_waist: 59.0, int: "3XL", us: "48", eu: "64" }, { half_waist: 63.0, int: "4XL", us: "52", eu: "68" }];
const hhBottomsFemale = [{ half_waist: 32.5, int: "XS", us: "2", eu: "34" }, { half_waist: 35.0, int: "S", us: "4-6", eu: "36" }, { half_waist: 37.5, int: "M", us: "8-10", eu: "40" }, { half_waist: 41.5, int: "L", us: "12-14", eu: "44" }, { half_waist: 46.0, int: "XL", us: "16", eu: "48" }, { half_waist: 50.0, int: "2XL", us: "18", eu: "52" }, { half_waist: 54.0, int: "3XL", us: "20", eu: "56" }, { half_waist: 58.0, int: "4XL", us: "22", eu: "60" }, { half_waist: 62.0, int: "5XL", us: "24", eu: "64" }];

const hollisterTopsMale = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 47.0, int: "S", us: "36", eu: "46" }, { half_chest: 50.0, int: "M", us: "38", eu: "48" }, { half_chest: 53.0, int: "L", us: "41", eu: "51" }, { half_chest: 57.0, int: "XL", us: "45", eu: "55" }, { half_chest: 61.0, int: "2XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "3XL", us: "51", eu: "61" }, { half_chest: 69.0, int: "4XL", us: "54", eu: "64" }];
const hollisterTopsFemale = [{ half_chest: 39.0, int: "XXS", us: "00", eu: "30" }, { half_chest: 41.0, int: "XS", us: "0", eu: "32" }, { half_chest: 43.5, int: "S", us: "3", eu: "35" }, { half_chest: 46.0, int: "M", us: "7", eu: "38" }, { half_chest: 49.0, int: "L", us: "11", eu: "41" }, { half_chest: 52.0, int: "XL", us: "15", eu: "44" }, { half_chest: 56.0, int: "2XL", us: "19", eu: "48" }, { half_chest: 60.0, int: "3XL", us: "23", eu: "52" }, { half_chest: 64.0, int: "4XL", us: "27", eu: "56" }, { half_chest: 68.0, int: "5XL", us: "31", eu: "60" }];
const hollisterBottomsMale = [{ half_waist: 35.0, int: "-", us: "28", eu: "38" }, { half_waist: 38.0, int: "-", us: "30", eu: "40" }, { half_waist: 40.5, int: "-", us: "32", eu: "42" }, { half_waist: 43.0, int: "-", us: "34", eu: "44" }, { half_waist: 45.5, int: "-", us: "36", eu: "46" }, { half_waist: 48.0, int: "-", us: "38", eu: "48" }, { half_waist: 51.0, int: "-", us: "40", eu: "50" }, { half_waist: 54.0, int: "-", us: "42", eu: "52" }, { half_waist: 57.0, int: "-", us: "44", eu: "54" }, { half_waist: 60.0, int: "-", us: "46", eu: "56" }];
const hollisterBottomsFemale = [{ half_waist: 31.0, int: "-", us: "0", eu: "32" }, { half_waist: 33.0, int: "-", us: "3", eu: "35" }, { half_waist: 35.5, int: "-", us: "7", eu: "38" }, { half_waist: 38.0, int: "-", us: "11", eu: "41" }, { half_waist: 41.5, int: "-", us: "15", eu: "44" }, { half_waist: 44.5, int: "-", us: "17", eu: "47" }, { half_waist: 47.5, int: "-", us: "19", eu: "50" }, { half_waist: 50.5, int: "-", us: "21", eu: "53" }, { half_waist: 53.5, int: "-", us: "23", eu: "56" }, { half_waist: 56.5, int: "-", us: "25", eu: "59" }, { half_waist: 59.5, int: "-", us: "27", eu: "62" }];

const carharttTopsMale = [{ half_chest: 45.0, int: "S", us: "34", eu: "44" }, { half_chest: 50.0, int: "M", us: "38", eu: "48" }, { half_chest: 55.0, int: "L", us: "42", eu: "52" }, { half_chest: 60.0, int: "XL", us: "46", eu: "56" }, { half_chest: 66.0, int: "2XL", us: "50", eu: "60" }, { half_chest: 71.0, int: "3XL", us: "54", eu: "64" }];
const carharttTopsFemale = [{ half_chest: 41.0, int: "XS", us: "2", eu: "34" }, { half_chest: 44.0, int: "S", us: "4-6", eu: "36" }, { half_chest: 47.5, int: "M", us: "8-10", eu: "40" }, { half_chest: 52.0, int: "L", us: "12-14", eu: "44" }, { half_chest: 56.5, int: "XL", us: "16-18", eu: "48" }, { half_chest: 61.0, int: "2XL", us: "20", eu: "52" }, { half_chest: 65.5, int: "3XL", us: "22", eu: "56" }, { half_chest: 70.0, int: "4XL", us: "24", eu: "60" }];
const carharttBottomsMale = [{ half_waist: 38.0, int: "-", us: "30", eu: "46" }, { half_waist: 40.5, int: "-", us: "32", eu: "48" }, { half_waist: 43.0, int: "-", us: "34", eu: "50" }, { half_waist: 46.0, int: "-", us: "36", eu: "52" }, { half_waist: 48.5, int: "-", us: "38", eu: "54" }, { half_waist: 51.0, int: "-", us: "40", eu: "56" }, { half_waist: 53.5, int: "-", us: "42", eu: "58" }, { half_waist: 56.0, int: "-", us: "44", eu: "60" }, { half_waist: 58.5, int: "-", us: "46", eu: "62" }, { half_waist: 61.0, int: "-", us: "48", eu: "64" }];
const carharttBottomsFemale = [{ half_waist: 33.5, int: "XS", us: "2", eu: "26" }, { half_waist: 36.0, int: "S", us: "4-6", eu: "28" }, { half_waist: 39.5, int: "M", us: "8-10", eu: "30" }, { half_waist: 43.5, int: "L", us: "12-14", eu: "32" }, { half_waist: 48.0, int: "XL", us: "16-18", eu: "34" }, { half_waist: 52.5, int: "2XL", us: "20", eu: "36" }, { half_waist: 57.0, int: "3XL", us: "22", eu: "38" }, { half_waist: 61.5, int: "4XL", us: "24", eu: "40" }];

const uniqloTopsMale = [{ half_chest: 41.5, int: "XS", us: "32-35", eu: "42" }, { half_chest: 44.5, int: "S", us: "35-38", eu: "44" }, { half_chest: 48.5, int: "M", us: "38-41", eu: "48" }, { half_chest: 53.5, int: "L", us: "41-44", eu: "52" }, { half_chest: 59.5, int: "XL", us: "44-47", eu: "56" }, { half_chest: 65.5, int: "2XL", us: "47-50", eu: "60" }, { half_chest: 71.5, int: "3XL", us: "50-53", eu: "64" }];
const uniqloTopsFemale = [{ half_chest: 39.5, int: "XXS", us: "00", eu: "30" }, { half_chest: 42.0, int: "XS", us: "0-2", eu: "32" }, { half_chest: 44.5, int: "S", us: "4-6", eu: "34" }, { half_chest: 47.0, int: "M", us: "8-10", eu: "38" }, { half_chest: 50.5, int: "L", us: "12-14", eu: "42" }, { half_chest: 55.5, int: "XL", us: "16", eu: "46" }, { half_chest: 60.0, int: "2XL", us: "18", eu: "50" }, { half_chest: 64.5, int: "3XL", us: "20", eu: "54" }, { half_chest: 69.0, int: "4XL", us: "22", eu: "58" }];
const uniqloBottomsMale = [{ half_waist: 34.0, int: "XS", us: "26-29", eu: "38" }, { half_waist: 38.0, int: "S", us: "29-32", eu: "42" }, { half_waist: 42.0, int: "M", us: "32-35", eu: "46" }, { half_waist: 46.5, int: "L", us: "35-38", eu: "50" }, { half_waist: 52.0, int: "XL", us: "38-42", eu: "54" }, { half_waist: 57.0, int: "2XL", us: "42-46", eu: "58" }, { half_waist: 62.0, int: "3XL", us: "46-50", eu: "62" }];
const uniqloBottomsFemale = [{ half_waist: 28.5, int: "XXS", us: "00", eu: "30" }, { half_waist: 31.0, int: "XS", us: "0-2", eu: "32" }, { half_waist: 34.0, int: "S", us: "4-6", eu: "34" }, { half_waist: 37.0, int: "M", us: "8-10", eu: "38" }, { half_waist: 40.5, int: "L", us: "12-14", eu: "42" }, { half_waist: 45.0, int: "XL", us: "16", eu: "46" }, { half_waist: 49.5, int: "2XL", us: "18", eu: "50" }, { half_waist: 54.0, int: "3XL", us: "20", eu: "54" }, { half_waist: 58.5, int: "4XL", us: "22", eu: "58" }, { half_waist: 63.0, int: "5XL", us: "24", eu: "62" }];

// ==========================================
// НОВЫЕ БРЕНДЫ 14-17 (F21, UGG, ZARA, MANGO)
// ==========================================
const f21TopsMale = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "42", eu: "52" }, { half_chest: 58.0, int: "XL", us: "46", eu: "56" }, { half_chest: 62.0, int: "2XL", us: "50", eu: "60" }, { half_chest: 66.0, int: "3XL", us: "54", eu: "64" }, { half_chest: 70.0, int: "4XL", us: "58", eu: "68" }];
const f21TopsFemale = [{ half_chest: 40.0, int: "XS", us: "2", eu: "32" }, { half_chest: 43.0, int: "S", us: "4", eu: "34" }, { half_chest: 46.0, int: "M", us: "6", eu: "36" }, { half_chest: 50.0, int: "L", us: "8", eu: "38" }, { half_chest: 54.0, int: "XL", us: "10", eu: "40" }, { half_chest: 58.0, int: "2XL", us: "12", eu: "42" }, { half_chest: 62.0, int: "3XL", us: "14", eu: "44" }, { half_chest: 66.0, int: "4XL", us: "16", eu: "46" }, { half_chest: 70.0, int: "5XL", us: "18", eu: "48" }];
const f21BottomsMale = [{ half_waist: 36.0, int: "XS", us: "28", eu: "38" }, { half_waist: 39.0, int: "S", us: "30", eu: "40" }, { half_waist: 42.0, int: "M", us: "32", eu: "42" }, { half_waist: 45.0, int: "L", us: "34", eu: "44" }, { half_waist: 48.0, int: "XL", us: "36", eu: "46" }, { half_waist: 51.0, int: "2XL", us: "38", eu: "48" }, { half_waist: 54.0, int: "3XL", us: "40", eu: "50" }, { half_waist: 57.0, int: "4XL", us: "42", eu: "52" }, { half_waist: 60.0, int: "5XL", us: "44", eu: "54" }];
const f21BottomsFemale = [{ half_waist: 32.0, int: "XS", us: "24", eu: "32" }, { half_waist: 34.5, int: "S", us: "26", eu: "34" }, { half_waist: 37.0, int: "M", us: "28", eu: "36" }, { half_waist: 39.5, int: "L", us: "30", eu: "38" }, { half_waist: 42.0, int: "XL", us: "32", eu: "40" }, { half_waist: 45.0, int: "2XL", us: "34", eu: "42" }, { half_waist: 48.0, int: "3XL", us: "36", eu: "44" }, { half_waist: 51.0, int: "4XL", us: "38", eu: "46" }, { half_waist: 54.0, int: "5XL", us: "40", eu: "48" }, { half_waist: 57.0, int: "6XL", us: "42", eu: "50" }, { half_waist: 60.0, int: "7XL", us: "44", eu: "52" }];

const uggTopsMale = [{ half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 52.0, int: "M", us: "40", eu: "50" }, { half_chest: 56.0, int: "L", us: "42", eu: "52" }, { half_chest: 60.0, int: "XL", us: "46", eu: "56" }, { half_chest: 64.0, int: "2XL", us: "50", eu: "60" }, { half_chest: 68.0, int: "3XL", us: "54", eu: "64" }, { half_chest: 72.0, int: "4XL", us: "58", eu: "68" }];
const uggTopsFemale = [{ half_chest: 42.0, int: "XS", us: "2", eu: "34" }, { half_chest: 45.0, int: "S", us: "4", eu: "36" }, { half_chest: 48.0, int: "M", us: "8", eu: "40" }, { half_chest: 51.0, int: "L", us: "12", eu: "44" }, { half_chest: 55.0, int: "XL", us: "16", eu: "48" }, { half_chest: 59.0, int: "2XL", us: "20", eu: "52" }, { half_chest: 63.0, int: "3XL", us: "24", eu: "56" }, { half_chest: 67.0, int: "4XL", us: "28", eu: "60" }, { half_chest: 71.0, int: "5XL", us: "32", eu: "64" }];
const uggBottomsMale = [{ half_waist: 38.0, int: "S", us: "30", eu: "40" }, { half_waist: 42.0, int: "M", us: "32", eu: "42" }, { half_waist: 46.0, int: "L", us: "36", eu: "46" }, { half_waist: 50.0, int: "XL", us: "40", eu: "50" }, { half_waist: 54.0, int: "2XL", us: "44", eu: "54" }, { half_waist: 58.0, int: "3XL", us: "48", eu: "58" }, { half_waist: 62.0, int: "4XL", us: "52", eu: "62" }];
const uggBottomsFemale = [{ half_waist: 34.0, int: "XS", us: "2", eu: "34" }, { half_waist: 37.0, int: "S", us: "4", eu: "36" }, { half_waist: 40.0, int: "M", us: "8", eu: "40" }, { half_waist: 44.0, int: "L", us: "12", eu: "44" }, { half_waist: 48.0, int: "XL", us: "16", eu: "48" }, { half_waist: 52.0, int: "2XL", us: "20", eu: "52" }, { half_waist: 56.0, int: "3XL", us: "24", eu: "56" }, { half_waist: 60.0, int: "4XL", us: "28", eu: "60" }];

const zaraTopsMale = [{ half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "42", eu: "52" }, { half_chest: 57.0, int: "XL", us: "44", eu: "54" }, { half_chest: 60.0, int: "2XL", us: "46", eu: "56" }, { half_chest: 64.0, int: "3XL", us: "50", eu: "60" }, { half_chest: 68.0, int: "4XL", us: "54", eu: "64" }, { half_chest: 72.0, int: "5XL", us: "58", eu: "68" }];
const zaraTopsFemale = [{ half_chest: 42.0, int: "XS", us: "2", eu: "34" }, { half_chest: 44.0, int: "S", us: "4", eu: "36" }, { half_chest: 47.0, int: "M", us: "6", eu: "38" }, { half_chest: 50.0, int: "L", us: "8", eu: "40" }, { half_chest: 54.0, int: "XL", us: "10", eu: "42" }, { half_chest: 58.0, int: "2XL", us: "14", eu: "46" }, { half_chest: 62.0, int: "3XL", us: "18", eu: "50" }, { half_chest: 66.0, int: "4XL", us: "22", eu: "54" }, { half_chest: 70.0, int: "5XL", us: "26", eu: "58" }];
const zaraBottomsMale = [{ half_waist: 38.0, int: "-", us: "30", eu: "38" }, { half_waist: 40.0, int: "-", us: "31", eu: "40" }, { half_waist: 42.0, int: "-", us: "32", eu: "42" }, { half_waist: 44.0, int: "-", us: "34", eu: "44" }, { half_waist: 46.0, int: "-", us: "36", eu: "46" }, { half_waist: 48.0, int: "-", us: "38", eu: "48" }, { half_waist: 50.0, int: "-", us: "40", eu: "50" }, { half_waist: 52.0, int: "-", us: "42", eu: "52" }, { half_waist: 54.0, int: "-", us: "44", eu: "54" }, { half_waist: 56.0, int: "-", us: "46", eu: "56" }, { half_waist: 58.0, int: "-", us: "48", eu: "58" }, { half_waist: 60.0, int: "-", us: "50", eu: "60" }];
const zaraBottomsFemale = [{ half_waist: 34.0, int: "-", us: "2", eu: "34" }, { half_waist: 36.0, int: "-", us: "4", eu: "36" }, { half_waist: 38.0, int: "-", us: "6", eu: "38" }, { half_waist: 40.0, int: "-", us: "8", eu: "40" }, { half_waist: 42.0, int: "-", us: "10", eu: "42" }, { half_waist: 44.0, int: "-", us: "12", eu: "44" }, { half_waist: 47.0, int: "-", us: "14", eu: "46" }, { half_waist: 50.0, int: "-", us: "16", eu: "48" }, { half_waist: 53.0, int: "-", us: "18", eu: "50" }, { half_waist: 56.0, int: "-", us: "20", eu: "52" }, { half_waist: 59.0, int: "-", us: "22", eu: "54" }, { half_waist: 62.0, int: "-", us: "24", eu: "56" }];

const mangoTopsMale = [{ half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "42", eu: "52" }, { half_chest: 57.0, int: "XL", us: "44", eu: "54" }, { half_chest: 60.0, int: "2XL", us: "46", eu: "56" }, { half_chest: 64.0, int: "3XL", us: "50", eu: "60" }, { half_chest: 68.0, int: "4XL", us: "54", eu: "64" }, { half_chest: 72.0, int: "5XL", us: "58", eu: "68" }];
const mangoTopsFemale = [{ half_chest: 41.0, int: "XS", us: "2", eu: "34" }, { half_chest: 43.0, int: "S", us: "4", eu: "36" }, { half_chest: 46.0, int: "M", us: "6", eu: "38" }, { half_chest: 49.0, int: "L", us: "8", eu: "40" }, { half_chest: 52.0, int: "XL", us: "10", eu: "42" }, { half_chest: 56.0, int: "2XL", us: "14", eu: "46" }, { half_chest: 60.0, int: "3XL", us: "18", eu: "50" }, { half_chest: 64.0, int: "4XL", us: "22", eu: "54" }, { half_chest: 68.0, int: "5XL", us: "26", eu: "58" }, { half_chest: 72.0, int: "6XL", us: "30", eu: "62" }];
const mangoBottomsMale = [{ half_waist: 38.0, int: "-", us: "30", eu: "38" }, { half_waist: 40.0, int: "-", us: "31", eu: "40" }, { half_waist: 42.0, int: "-", us: "32", eu: "42" }, { half_waist: 44.0, int: "-", us: "34", eu: "44" }, { half_waist: 46.0, int: "-", us: "36", eu: "46" }, { half_waist: 48.0, int: "-", us: "38", eu: "48" }, { half_waist: 50.0, int: "-", us: "40", eu: "50" }, { half_waist: 52.0, int: "-", us: "42", eu: "52" }, { half_waist: 54.0, int: "-", us: "44", eu: "54" }, { half_waist: 56.0, int: "-", us: "46", eu: "56" }, { half_waist: 58.0, int: "-", us: "48", eu: "58" }, { half_waist: 60.0, int: "-", us: "50", eu: "60" }];
const mangoBottomsFemale = [{ half_waist: 33.0, int: "-", us: "2", eu: "34" }, { half_waist: 35.0, int: "-", us: "4", eu: "36" }, { half_waist: 37.0, int: "-", us: "6", eu: "38" }, { half_waist: 39.0, int: "-", us: "8", eu: "40" }, { half_waist: 41.0, int: "-", us: "10", eu: "42" }, { half_waist: 43.0, int: "-", us: "12", eu: "44" }, { half_waist: 46.0, int: "-", us: "14", eu: "46" }, { half_waist: 49.0, int: "-", us: "16", eu: "48" }, { half_waist: 52.0, int: "-", us: "18", eu: "50" }, { half_waist: 55.0, int: "-", us: "20", eu: "52" }, { half_waist: 58.0, int: "-", us: "22", eu: "54" }, { half_waist: 61.0, int: "-", us: "24", eu: "56" }];

// ==========================================
// СБОРКА БАЗЫ ДАННЫХ (ТЕПЕРЬ 18 БРЕНДОВ)
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
      { name: "Puma", logo: LOGO_PUMA, sizes: { male: pumaTopsMale, female: pumaTopsFemale } },
      { name: "The North Face", logo: LOGO_TNF, sizes: { male: tnfTopsMale, female: tnfTopsFemale } },
      { name: "Fila", logo: LOGO_FILA, sizes: { male: filaTopsMale, female: filaTopsFemale } },
      { name: "Converse", logo: LOGO_CONVERSE, sizes: { male: converseTopsMale, female: converseTopsFemale } },
      { name: "Helly Hansen", logo: LOGO_HH, sizes: { male: hhTopsMale, female: hhTopsFemale } },
      { name: "Hollister", logo: LOGO_HOLLISTER, sizes: { male: hollisterTopsMale, female: hollisterTopsFemale } },
      { name: "Carhartt", logo: LOGO_CARHARTT, sizes: { male: carharttTopsMale, female: carharttTopsFemale } },
      { name: "Uniqlo", logo: LOGO_UNIQLO, sizes: { male: uniqloTopsMale, female: uniqloTopsFemale } },
      { name: "Forever 21", logo: LOGO_F21, sizes: { male: f21TopsMale, female: f21TopsFemale } },
      { name: "UGG", logo: LOGO_UGG, sizes: { male: uggTopsMale, female: uggTopsFemale } },
      { name: "Zara", logo: LOGO_ZARA, sizes: { male: zaraTopsMale, female: zaraTopsFemale } },
      { name: "Mango", logo: LOGO_MANGO, sizes: { male: mangoTopsMale, female: mangoTopsFemale } }
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
      { name: "Puma", logo: LOGO_PUMA, sizes: { male: pumaBottomsMale, female: pumaBottomsFemale } },
      { name: "The North Face", logo: LOGO_TNF, sizes: { male: tnfBottomsMale, female: tnfBottomsFemale } },
      { name: "Fila", logo: LOGO_FILA, sizes: { male: filaBottomsMale, female: filaBottomsFemale } },
      { name: "Converse", logo: LOGO_CONVERSE, sizes: { male: converseBottomsMale, female: converseBottomsFemale } },
      { name: "Helly Hansen", logo: LOGO_HH, sizes: { male: hhBottomsMale, female: hhBottomsFemale } },
      { name: "Hollister", logo: LOGO_HOLLISTER, sizes: { male: hollisterBottomsMale, female: hollisterBottomsFemale } },
      { name: "Carhartt", logo: LOGO_CARHARTT, sizes: { male: carharttBottomsMale, female: carharttBottomsFemale } },
      { name: "Uniqlo", logo: LOGO_UNIQLO, sizes: { male: uniqloBottomsMale, female: uniqloBottomsFemale } },
      { name: "Forever 21", logo: LOGO_F21, sizes: { male: f21BottomsMale, female: f21BottomsFemale } },
      { name: "UGG", logo: LOGO_UGG, sizes: { male: uggBottomsMale, female: uggBottomsFemale } },
      { name: "Zara", logo: LOGO_ZARA, sizes: { male: zaraBottomsMale, female: zaraBottomsFemale } },
      { name: "Mango", logo: LOGO_MANGO, sizes: { male: mangoBottomsMale, female: mangoBottomsFemale } }
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
      { name: "Puma", logo: LOGO_PUMA },
      { name: "The North Face", logo: LOGO_TNF },
      { name: "Fila", logo: LOGO_FILA },
      { name: "Converse", logo: LOGO_CONVERSE },
      { name: "Helly Hansen", logo: LOGO_HH },
      { name: "Hollister", logo: LOGO_HOLLISTER },
      { name: "Carhartt", logo: LOGO_CARHARTT },
      { name: "Uniqlo", logo: LOGO_UNIQLO },
      { name: "Forever 21", logo: LOGO_F21 },
      { name: "UGG", logo: LOGO_UGG },
      { name: "Zara", logo: LOGO_ZARA },
      { name: "Mango", logo: LOGO_MANGO },
      { name: "Crocs", logo: LOGO_CROCS } // Crocs по-прежнему только в обуви
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