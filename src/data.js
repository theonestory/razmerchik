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
const LOGO_RL = "https://cdn.worldvectorlogo.com/logos/ralph-lauren.svg";
const LOGO_TIMBERLAND = "https://cdn.worldvectorlogo.com/logos/timberland-2.svg";
const LOGO_TH = "https://cdn.worldvectorlogo.com/logos/tommy-hilfiger.svg";
const LOGO_CK = "https://cdn.worldvectorlogo.com/logos/calvin-klein.svg";
const LOGO_LACOSTE = "https://cdn.worldvectorlogo.com/logos/lacoste-1.svg";
const LOGO_ALPHA = "https://cdn.worldvectorlogo.com/logos/alpha-industries.svg";
const LOGO_GAP = "https://cdn.worldvectorlogo.com/logos/gap.svg";
const LOGO_GUCCI = "https://cdn.worldvectorlogo.com/logos/gucci.svg";
const LOGO_PRADA = "https://cdn.worldvectorlogo.com/logos/prada.svg";
const LOGO_GUESS = "https://cdn.worldvectorlogo.com/logos/guess-1.svg";
const LOGO_MK = "https://cdn.worldvectorlogo.com/logos/michael-kors.svg";
const LOGO_BURBERRY = "https://cdn.worldvectorlogo.com/logos/burberry-logo-1.svg";
const LOGO_UA = "https://cdn.worldvectorlogo.com/logos/under-armour-2.svg";
const LOGO_BOSS = "https://cdn.worldvectorlogo.com/logos/hugo-boss.svg";
const LOGO_DKNY = "https://cdn.worldvectorlogo.com/logos/dkny.svg";
const LOGO_DRMARTENS = "https://cdn.worldvectorlogo.com/logos/dr-martens.svg";
const LOGO_ECCO = "https://cdn.worldvectorlogo.com/logos/ecco.svg";

// --- ДАННЫЕ (АРХИВ 1-22) ---
const colTopsM = [{ half_chest: 42.5, int: "XS", us: "34", eu: "44" }, { half_chest: 46.5, int: "S", us: "38", eu: "48" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" }, { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 70.0, int: "3XL", us: "56", eu: "66" }];
const colTopsF = [{ half_chest: 42.0, int: "XS", us: "2", eu: "34" }, { half_chest: 44.5, int: "S", us: "4", eu: "36" }, { half_chest: 47.0, int: "M", us: "8", eu: "40" }, { half_chest: 51.0, int: "L", us: "12", eu: "44" }, { half_chest: 54.5, int: "XL", us: "16", eu: "48" }, { half_chest: 57.0, int: "2XL", us: "20", eu: "52" }, { half_chest: 61.0, int: "3XL", us: "22W", eu: "54" }, { half_chest: 66.0, int: "4XL", us: "24W", eu: "56" }];
const colBotM = [{ half_waist: 35.0, int: "XS", us: "28", eu: "38" }, { half_waist: 38.5, int: "S", us: "32", eu: "42" }, { half_waist: 42.5, int: "M", us: "34", eu: "44" }, { half_waist: 47.5, int: "L", us: "36", eu: "46" }, { half_waist: 52.5, int: "XL", us: "40", eu: "50" }, { half_waist: 57.5, int: "2XL", us: "44", eu: "54" }, { half_waist: 62.5, int: "3XL", us: "48", eu: "58" }];
const hmTopsM = [{ half_chest: 40.0, int: "XS", us: "34R", eu: "44" }, { half_chest: 42.0, int: "S", us: "36R", eu: "46" }, { half_chest: 44.0, int: "M", us: "38R", eu: "48" }, { half_chest: 46.0, int: "L", us: "40R", eu: "50" }, { half_chest: 48.0, int: "XL", us: "42R", eu: "52" }, { half_chest: 50.0, int: "2XL", us: "44R", eu: "54" }, { half_chest: 54.0, int: "3XL", us: "46R", eu: "56" }, { half_chest: 58.0, int: "4XL", us: "48R", eu: "58" }, { half_chest: 62.0, int: "5XL", us: "50R", eu: "60" }, { half_chest: 66.0, int: "6XL", us: "52R", eu: "62" }, { half_chest: 70.0, int: "7XL", us: "54R", eu: "64" }];
const levTopsM = [{ half_chest: 42.0, int: "XS", us: "-", eu: "-" }, { half_chest: 45.5, int: "S", us: "-", eu: "-" }, { half_chest: 49.0, int: "M", us: "-", eu: "-" }, { half_chest: 53.0, int: "L", us: "-", eu: "-" }, { half_chest: 57.0, int: "XL", us: "-", eu: "-" }, { half_chest: 61.0, int: "2XL", us: "-", eu: "-" }, { half_chest: 65.0, int: "3XL", us: "-", eu: "-" }, { half_chest: 69.0, int: "4XL", us: "-", eu: "-" }];
const nikTopsM = [{ half_chest: 42.0, int: "XS", us: "34", eu: "42" }, { half_chest: 46.0, int: "S", us: "36", eu: "46" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "44", eu: "54" }, { half_chest: 59.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 70.0, int: "3XL", us: "56", eu: "66" }];
const adiTopsM = [{ half_chest: 43.0, int: "XS", us: "34", eu: "42" }, { half_chest: 47.0, int: "S", us: "38", eu: "46" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" }, { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 66.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 71.0, int: "3XL", us: "56", eu: "66" }];
const pumTopsM = [{ half_chest: 42.0, int: "XS", us: "34", eu: "42" }, { half_chest: 46.0, int: "S", us: "36", eu: "46" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "44", eu: "54" }, { half_chest: 58.0, int: "XL", us: "48", eu: "58" }, { half_chest: 62.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 66.0, int: "3XL", us: "56", eu: "66" }, { half_chest: 70.0, int: "4XL", us: "60", eu: "70" }];
const tnfTopsM = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 48.0, int: "S", us: "36", eu: "46" }, { half_chest: 52.0, int: "M", us: "38", eu: "48" }, { half_chest: 56.0, int: "L", us: "40", eu: "50" }, { half_chest: 61.0, int: "XL", us: "42", eu: "52" }, { half_chest: 66.0, int: "2XL", us: "44", eu: "54" }, { half_chest: 71.0, int: "3XL", us: "46", eu: "56" }];
const filTopsM = [{ half_chest: 45.0, int: "S", us: "36", eu: "46" }, { half_chest: 49.0, int: "M", us: "38", eu: "48" }, { half_chest: 53.0, int: "L", us: "40", eu: "50" }, { half_chest: 57.0, int: "XL", us: "42", eu: "52" }, { half_chest: 61.0, int: "2XL", us: "44", eu: "54" }, { half_chest: 65.0, int: "3XL", us: "46", eu: "56" }, { half_chest: 69.0, int: "4XL", us: "48", eu: "58" }];
const conTopsM = [{ half_chest: 44.0, int: "S", us: "36", eu: "46" }, { half_chest: 48.0, int: "M", us: "38", eu: "48" }, { half_chest: 52.0, int: "L", us: "40", eu: "50" }, { half_chest: 56.0, int: "XL", us: "42", eu: "52" }, { half_chest: 60.0, int: "2XL", us: "44", eu: "54" }, { half_chest: 64.0, int: "3XL", us: "46", eu: "56" }, { half_chest: 68.0, int: "4XL", us: "48", eu: "58" }];
const hhTopsM = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 48.0, int: "S", us: "37", eu: "46" }, { half_chest: 52.0, int: "M", us: "40", eu: "50" }, { half_chest: 56.0, int: "L", us: "43", eu: "54" }, { half_chest: 61.0, int: "XL", us: "47", eu: "58" }, { half_chest: 66.0, int: "2XL", us: "51", eu: "62" }, { half_chest: 71.0, int: "3XL", us: "55", eu: "66" }];
const holTopsM = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 47.0, int: "S", us: "36", eu: "46" }, { half_chest: 50.0, int: "M", us: "38", eu: "48" }, { half_chest: 53.0, int: "L", us: "41", eu: "51" }, { half_chest: 57.0, int: "XL", us: "45", eu: "55" }, { half_chest: 61.0, int: "2XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "3XL", us: "51", eu: "61" }];
const carTopsM = [{ half_chest: 45.0, int: "S", us: "34", eu: "44" }, { half_chest: 50.0, int: "M", us: "38", eu: "48" }, { half_chest: 55.0, int: "L", us: "42", eu: "52" }, { half_chest: 60.0, int: "XL", us: "46", eu: "56" }, { half_chest: 66.0, int: "2XL", us: "50", eu: "60" }, { half_chest: 71.0, int: "3XL", us: "54", eu: "64" }];
const uniTopsM = [{ half_chest: 41.5, int: "XS", us: "32-35", eu: "42" }, { half_chest: 44.5, int: "S", us: "35-38", eu: "44" }, { half_chest: 48.5, int: "M", us: "38-41", eu: "48" }, { half_chest: 53.5, int: "L", us: "41-44", eu: "52" }, { half_chest: 59.5, int: "XL", us: "44-47", eu: "56" }, { half_chest: 65.5, int: "2XL", us: "47-50", eu: "60" }, { half_chest: 71.5, int: "3XL", us: "50-53", eu: "64" }];
const f21TopsM = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "42", eu: "52" }, { half_chest: 58.0, int: "XL", us: "46", eu: "56" }, { half_chest: 62.0, int: "2XL", us: "50", eu: "60" }, { half_chest: 66.0, int: "3XL", us: "54", eu: "64" }, { half_chest: 70.0, int: "4XL", us: "58", eu: "68" }];
const uggTopsM = [{ half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 52.0, int: "M", us: "40", eu: "50" }, { half_chest: 56.0, int: "L", us: "42", eu: "52" }, { half_chest: 60.0, int: "XL", us: "46", eu: "56" }, { half_chest: 64.0, int: "2XL", us: "50", eu: "60" }, { half_chest: 68.0, int: "3XL", us: "54", eu: "64" }, { half_chest: 72.0, int: "4XL", us: "58", eu: "68" }];
const zarTopsM = [{ half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "42", eu: "52" }, { half_chest: 57.0, int: "XL", us: "44", eu: "54" }, { half_chest: 60.0, int: "2XL", us: "46", eu: "56" }, { half_chest: 64.0, int: "3XL", us: "50", eu: "60" }, { half_chest: 68.0, int: "4XL", us: "54", eu: "64" }, { half_chest: 72.0, int: "5XL", us: "58", eu: "68" }];
const manTopsM = [{ half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "42", eu: "52" }, { half_chest: 57.0, int: "XL", us: "44", eu: "54" }, { half_chest: 60.0, int: "2XL", us: "46", eu: "56" }, { half_chest: 64.0, int: "3XL", us: "50", eu: "60" }, { half_chest: 68.0, int: "4XL", us: "54", eu: "64" }, { half_chest: 72.0, int: "5XL", us: "58", eu: "68" }];
const rlTopsM = [{ half_chest: 43.0, int: "XS", us: "34", eu: "44" }, { half_chest: 47.0, int: "S", us: "36", eu: "46" }, { half_chest: 51.0, int: "M", us: "38-40", eu: "48-50" }, { half_chest: 56.0, int: "L", us: "42-44", eu: "52-54" }, { half_chest: 61.0, int: "XL", us: "46", eu: "56" }, { half_chest: 66.0, int: "2XL", us: "48", eu: "58" }, { half_chest: 71.0, int: "3XL", us: "50", eu: "60" }];
const timTopsM = [{ half_chest: 45.0, int: "S", us: "36-38", eu: "46" }, { half_chest: 49.0, int: "M", us: "39-41", eu: "48" }, { half_chest: 54.0, int: "L", us: "42-44", eu: "52" }, { half_chest: 59.0, int: "XL", us: "45-47", eu: "56" }, { half_chest: 64.0, int: "2XL", us: "48-50", eu: "60" }, { half_chest: 69.0, int: "3XL", us: "51-53", eu: "64" }];
const thTopsM = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 47.0, int: "S", us: "36-38", eu: "46" }, { half_chest: 51.0, int: "M", us: "40", eu: "48" }, { half_chest: 55.0, int: "L", us: "42", eu: "52" }, { half_chest: 60.0, int: "XL", us: "44", eu: "56" }, { half_chest: 65.0, int: "2XL", us: "46", eu: "58" }, { half_chest: 70.0, int: "3XL", us: "48", eu: "60" }];
const ckTopsM = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 47.0, int: "S", us: "36-38", eu: "46" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "42", eu: "52" }, { half_chest: 60.0, int: "XL", us: "44", eu: "56" }, { half_chest: 65.0, int: "2XL", us: "46", eu: "58" }, { half_chest: 71.0, int: "3XL", us: "48", eu: "60" }];

// --- НОВЫЕ БРЕНДЫ (23-35) ---
const lacTopsM = [{ half_chest: 46.0, int: "3", us: "S", eu: "48" }, { half_chest: 49.0, int: "4", us: "M", eu: "50" }, { half_chest: 53.0, int: "5", us: "L", eu: "52" }, { half_chest: 57.0, int: "6", us: "XL", eu: "54" }, { half_chest: 61.0, int: "7", us: "2XL", eu: "56" }, { half_chest: 65.0, int: "8", us: "3XL", eu: "58" }, { half_chest: 70.0, int: "9", us: "4XL", eu: "60" }];
const alpTopsM = [{ half_chest: 45.0, int: "S", us: "36", eu: "46" }, { half_chest: 49.0, int: "M", us: "38", eu: "48" }, { half_chest: 54.0, int: "L", us: "42", eu: "52" }, { half_chest: 59.0, int: "XL", us: "46", eu: "56" }, { half_chest: 64.0, int: "2XL", us: "50", eu: "60" }, { half_chest: 70.0, int: "3XL", us: "54", eu: "64" }];
const gapTopsM = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 47.0, int: "S", us: "36", eu: "46" }, { half_chest: 51.0, int: "M", us: "39", eu: "49" }, { half_chest: 56.0, int: "L", us: "42", eu: "52" }, { half_chest: 61.0, int: "XL", us: "46", eu: "56" }, { half_chest: 66.0, int: "2XL", us: "50", eu: "60" }, { half_chest: 71.0, int: "3XL", us: "54", eu: "64" }];
const gucTopsM = [{ half_chest: 46.0, int: "XS", us: "36", eu: "46" }, { half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 53.0, int: "L", us: "42", eu: "52" }, { half_chest: 57.0, int: "XL", us: "44", eu: "54" }, { half_chest: 62.0, int: "2XL", us: "48", eu: "58" }, { half_chest: 67.0, int: "3XL", us: "52", eu: "62" }, { half_chest: 72.0, int: "4XL", us: "56", eu: "66" }];
const praTopsM = [{ half_chest: 46.0, int: "XS", us: "36", eu: "46" }, { half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 53.0, int: "L", us: "42", eu: "52" }, { half_chest: 57.0, int: "XL", us: "44", eu: "54" }, { half_chest: 62.0, int: "2XL", us: "48", eu: "58" }, { half_chest: 67.0, int: "3XL", us: "52", eu: "62" }, { half_chest: 71.0, int: "4XL", us: "56", eu: "66" }];
const gueTopsM = [{ half_chest: 45.0, int: "S", us: "36", eu: "46" }, { half_chest: 49.0, int: "M", us: "38", eu: "48" }, { half_chest: 54.0, int: "L", us: "42", eu: "52" }, { half_chest: 59.0, int: "XL", us: "46", eu: "56" }, { half_chest: 64.0, int: "2XL", us: "50", eu: "60" }, { half_chest: 69.0, int: "3XL", us: "54", eu: "64" }];
const mkTopsM = [{ half_chest: 45.0, int: "S", us: "36-38", eu: "46" }, { half_chest: 49.0, int: "M", us: "39-41", eu: "48" }, { half_chest: 54.0, int: "L", us: "42-44", eu: "52" }, { half_chest: 59.0, int: "XL", us: "45-47", eu: "56" }, { half_chest: 64.0, int: "2XL", us: "48-50", eu: "60" }, { half_chest: 70.0, int: "3XL", us: "52", eu: "64" }];
const burTopsM = [{ half_chest: 46.0, int: "XS", us: "36", eu: "46" }, { half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 53.0, int: "L", us: "42", eu: "52" }, { half_chest: 57.0, int: "XL", us: "44", eu: "54" }, { half_chest: 62.0, int: "2XL", us: "48", eu: "58" }, { half_chest: 67.0, int: "3XL", us: "52", eu: "62" }, { half_chest: 71.0, int: "4XL", us: "56", eu: "66" }];
const uaTopsM = [{ half_chest: 43.0, int: "XS", us: "34", eu: "44" }, { half_chest: 47.0, int: "S", us: "36", eu: "46" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" }, { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 70.0, int: "3XL", us: "56", eu: "66" }];
const bosTopsM = [{ half_chest: 46.0, int: "XS", us: "36", eu: "46" }, { half_chest: 48.0, int: "S", us: "38", eu: "48" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 53.0, int: "L", us: "42", eu: "52" }, { half_chest: 57.0, int: "XL", us: "44", eu: "54" }, { half_chest: 62.0, int: "2XL", us: "48", eu: "58" }, { half_chest: 67.0, int: "3XL", us: "52", eu: "62" }, { half_chest: 71.0, int: "4XL", us: "56", eu: "66" }];
const dknTopsM = [{ half_chest: 44.0, int: "XS", us: "34", eu: "44" }, { half_chest: 47.0, int: "S", us: "36", eu: "46" }, { half_chest: 51.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "42", eu: "52" }, { half_chest: 60.0, int: "XL", us: "44", eu: "56" }, { half_chest: 65.0, int: "2XL", us: "46", eu: "58" }, { half_chest: 70.0, int: "3XL", us: "48", eu: "60" }];

// ==========================================
// СБОРКА БАЗЫ ДАННЫХ (35 БРЕНДОВ)
// ==========================================
export const sizeDatabase = {
  tops: {
    title: "Полуобхват груди (см)", key: "half_chest", range: { min: 30, max: 70, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: colTopsM, female: colTopsF } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: hmTopsM, female: hmTopsM } },
      { name: "Levi's", logo: LOGO_LEVIS, sizes: { male: levTopsM, female: levTopsM } },
      { name: "Nike", logo: LOGO_NIKE, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Adidas", logo: LOGO_ADIDAS, sizes: { male: adiTopsM, female: adiTopsM } },
      { name: "Puma", logo: LOGO_PUMA, sizes: { male: pumTopsM, female: pumTopsM } },
      { name: "The North Face", logo: LOGO_TNF, sizes: { male: tnfTopsM, female: tnfTopsM } },
      { name: "Fila", logo: LOGO_FILA, sizes: { male: filTopsM, female: filTopsM } },
      { name: "Converse", logo: LOGO_CONVERSE, sizes: { male: conTopsM, female: conTopsM } },
      { name: "Helly Hansen", logo: LOGO_HH, sizes: { male: hhTopsM, female: hhTopsM } },
      { name: "Hollister", logo: LOGO_HOLLISTER, sizes: { male: holTopsM, female: holTopsM } },
      { name: "Carhartt", logo: LOGO_CARHARTT, sizes: { male: carTopsM, female: carTopsM } },
      { name: "Uniqlo", logo: LOGO_UNIQLO, sizes: { male: uniTopsM, female: uniTopsM } },
      { name: "Forever 21", logo: LOGO_F21, sizes: { male: f21TopsM, female: f21TopsM } },
      { name: "UGG", logo: LOGO_UGG, sizes: { male: uggTopsM, female: uggTopsM } },
      { name: "Zara", logo: LOGO_ZARA, sizes: { male: zarTopsM, female: zarTopsM } },
      { name: "Mango", logo: LOGO_MANGO, sizes: { male: manTopsM, female: manTopsM } },
      { name: "Ralph Lauren", logo: LOGO_RL, sizes: { male: rlTopsM, female: rlTopsM } },
      { name: "Timberland", logo: LOGO_TIMBERLAND, sizes: { male: timTopsM, female: timTopsM } },
      { name: "Tommy Hilfiger", logo: LOGO_TH, sizes: { male: thTopsM, female: thTopsM } },
      { name: "Calvin Klein", logo: LOGO_CK, sizes: { male: ckTopsM, female: ckTopsM } },
      { name: "Lacoste", logo: LOGO_LACOSTE, sizes: { male: lacTopsM, female: lacTopsM } },
      { name: "Alpha Industries", logo: LOGO_ALPHA, sizes: { male: alpTopsM, female: alpTopsM } },
      { name: "GAP", logo: LOGO_GAP, sizes: { male: gapTopsM, female: gapTopsM } },
      { name: "Gucci", logo: LOGO_GUCCI, sizes: { male: gucTopsM, female: gucTopsM } },
      { name: "Prada", logo: LOGO_PRADA, sizes: { male: praTopsM, female: praTopsM } },
      { name: "Guess", logo: LOGO_GUESS, sizes: { male: gueTopsM, female: gueTopsM } },
      { name: "Michael Kors", logo: LOGO_MK, sizes: { male: mkTopsM, female: mkTopsM } },
      { name: "Burberry", logo: LOGO_BURBERRY, sizes: { male: burTopsM, female: burTopsM } },
      { name: "Under Armour", logo: LOGO_UA, sizes: { male: uaTopsM, female: uaTopsM } },
      { name: "Hugo Boss", logo: LOGO_BOSS, sizes: { male: bosTopsM, female: bosTopsM } },
      { name: "DKNY", logo: LOGO_DKNY, sizes: { male: dknTopsM, female: dknTopsM } }
    ]
  },
  bottoms: {
    title: "Полуобхват талии (см)", key: "half_waist", range: { min: 25, max: 60, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: colBotM, female: colBotM } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: colBotM, female: colBotM } }
    ]
  },
  shoes: {
    title: "Длина стопы (см)", range: { min: 22, max: 32, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA }, { name: "H&M", logo: LOGO_HM }, { name: "Levi's", logo: LOGO_LEVIS },
      { name: "Nike", logo: LOGO_NIKE }, { name: "Adidas", logo: LOGO_ADIDAS }, { name: "Puma", logo: LOGO_PUMA },
      { name: "The North Face", logo: LOGO_TNF }, { name: "Fila", logo: LOGO_FILA }, { name: "Converse", logo: LOGO_CONVERSE },
      { name: "Crocs", logo: LOGO_CROCS }, { name: "Helly Hansen", logo: LOGO_HH }, { name: "Hollister", logo: LOGO_HOLLISTER },
      { name: "Carhartt", logo: LOGO_CARHARTT }, { name: "Uniqlo", logo: LOGO_UNIQLO }, { name: "Forever 21", logo: LOGO_F21 },
      { name: "UGG", logo: LOGO_UGG }, { name: "Zara", logo: LOGO_ZARA }, { name: "Mango", logo: LOGO_MANGO },
      { name: "Ralph Lauren", logo: LOGO_RL }, { name: "Timberland", logo: LOGO_TIMBERLAND }, { name: "Tommy Hilfiger", logo: LOGO_TH },
      { name: "Calvin Klein", logo: LOGO_CK }, { name: "Lacoste", logo: LOGO_LACOSTE }, { name: "GAP", logo: LOGO_GAP },
      { name: "Gucci", logo: LOGO_GUCCI }, { name: "Prada", logo: LOGO_PRADA }, { name: "Guess", logo: LOGO_GUESS },
      { name: "Michael Kors", logo: LOGO_MK }, { name: "Burberry", logo: LOGO_BURBERRY }, { name: "Under Armour", logo: LOGO_UA },
      { name: "Hugo Boss", logo: LOGO_BOSS }, { name: "DKNY", logo: LOGO_DKNY }, { name: "Dr. Martens", logo: LOGO_DRMARTENS },
      { name: "ECCO", logo: LOGO_ECCO }
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