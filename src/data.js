// ==========================================
// БАЗА ОБУВИ (ЕДИНЫЙ СТАНДАРТ ISO + NB)
// ==========================================
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
// ЛОГОТИПЫ БРЕНДОВ (ОТНОСИТЕЛЬНЫЕ ПУТИ - БЕЗ СЛЭША)
// ==========================================
const LOGO_COLUMBIA = "logos/columbia.svg";
const LOGO_HM = "logos/h-m.svg";
const LOGO_LEVIS = "logos/levis.svg";
const LOGO_NIKE = "logos/nike.svg";
const LOGO_NB = "logos/new-balance.svg";
const LOGO_ADIDAS = "logos/adidas.svg";
const LOGO_PUMA = "logos/puma.svg";
const LOGO_TNF = "logos/the-north-face.svg";
const LOGO_FILA = "logos/fila.svg";
const LOGO_CONVERSE = "logos/converse.svg";
const LOGO_CROCS = "logos/crocs.svg";
const LOGO_HH = "logos/helly-hansen.svg";
const LOGO_HOLLISTER = "logos/hollister.svg";
const LOGO_CARHARTT = "logos/carhartt.svg";
const LOGO_UNIQLO = "logos/uniqlo.svg";
const LOGO_F21 = "logos/forever-21.svg";
const LOGO_UGG = "logos/ugg.svg";
const LOGO_ZARA = "logos/zara.svg";
const LOGO_MANGO = "logos/mango.svg";
const LOGO_RL = "logos/ralph-lauren.svg";
const LOGO_TIMBERLAND = "logos/timberland.svg";
const LOGO_TH = "logos/tommy-hilfiger.svg";
const LOGO_CK = "logos/calvin-klein.svg";
const LOGO_LACOSTE = "logos/lacoste.svg";
const LOGO_ALPHA = "logos/alpha-industries.svg";
const LOGO_GAP = "logos/gap.svg";
const LOGO_GUCCI = "logos/gucci.svg";
const LOGO_PRADA = "logos/prada.svg";
const LOGO_GUESS = "logos/guess.svg";
const LOGO_MK = "logos/michael-kors.svg";
const LOGO_BURBERRY = "logos/burberry.svg";
const LOGO_UA = "logos/under-armour.svg";
const LOGO_BOSS = "logos/boss.svg";
const LOGO_DKNY = "logos/dkny.svg";
const LOGO_DRMARTENS = "logos/dr-martens.svg";
const LOGO_ECCO = "logos/ecco.svg";

// --- ТАБЛИЦЫ РАЗМЕРОВ ---
const colTopsM = [{ half_chest: 42.5, int: "XS", us: "34", eu: "44" }, { half_chest: 46.5, int: "S", us: "38", eu: "48" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" }, { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 70.0, int: "3XL", us: "56", eu: "66" }];
const colBotM = [{ half_waist: 35.0, int: "XS", us: "28", eu: "38" }, { half_waist: 38.5, int: "S", us: "32", eu: "42" }, { half_waist: 42.5, int: "M", us: "34", eu: "44" }, { half_waist: 47.5, int: "L", us: "36", eu: "46" }, { half_waist: 52.5, int: "XL", us: "40", eu: "50" }, { half_waist: 57.5, int: "2XL", us: "44", eu: "54" }, { half_waist: 62.5, int: "3XL", us: "48", eu: "58" }];
const nbTopsM = [{ half_chest: 45.0, int: "S", us: "36-38", eu: "46" }, { half_chest: 49.0, int: "M", us: "39-41", eu: "48" }, { half_chest: 54.0, int: "L", us: "42-44", eu: "52" }, { half_chest: 59.0, int: "XL", us: "45-47", eu: "56" }, { half_chest: 64.0, int: "2XL", us: "48-50", eu: "60" }, { half_chest: 70.0, int: "3XL", us: "51-53", eu: "64" }];
const nbBotM = [{ half_waist: 37.0, int: "S", us: "29-31", eu: "44-46" }, { half_waist: 41.0, int: "M", us: "32-34", eu: "48-50" }, { half_waist: 46.0, int: "L", us: "35-38", eu: "52-54" }, { half_waist: 51.0, int: "XL", us: "39-42", eu: "56-58" }, { half_waist: 56.0, int: "2XL", us: "43-46", eu: "60-62" }];
const nikTopsM = [{ half_chest: 42.0, int: "XS", us: "34", eu: "42" }, { half_chest: 46.0, int: "S", us: "36", eu: "46" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "44", eu: "54" }, { half_chest: 59.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 70.0, int: "3XL", us: "56", eu: "66" }];

// ==========================================
// СБОРКА БАЗЫ ДАННЫХ (36 БРЕНДОВ)
// ==========================================
export const sizeDatabase = {
  tops: {
    title: "Полуобхват груди (см)", key: "half_chest", range: { min: 30, max: 70, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: colTopsM, female: colTopsM } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: colTopsM, female: colTopsM } },
      { name: "Levi's", logo: LOGO_LEVIS, sizes: { male: colTopsM, female: colTopsM } },
      { name: "Nike", logo: LOGO_NIKE, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "New Balance", logo: LOGO_NB, sizes: { male: nbTopsM, female: nbTopsM } },
      { name: "Adidas", logo: LOGO_ADIDAS, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Puma", logo: LOGO_PUMA, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "The North Face", logo: LOGO_TNF, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Fila", logo: LOGO_FILA, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Converse", logo: LOGO_CONVERSE, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Helly Hansen", logo: LOGO_HH, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Hollister", logo: LOGO_HOLLISTER, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Carhartt", logo: LOGO_CARHARTT, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Uniqlo", logo: LOGO_UNIQLO, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Forever 21", logo: LOGO_F21, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "UGG", logo: LOGO_UGG, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Zara", logo: LOGO_ZARA, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Mango", logo: LOGO_MANGO, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Ralph Lauren", logo: LOGO_RL, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Timberland", logo: LOGO_TIMBERLAND, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Tommy Hilfiger", logo: LOGO_TH, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Calvin Klein", logo: LOGO_CK, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Lacoste", logo: LOGO_LACOSTE, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Alpha Industries", logo: LOGO_ALPHA, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "GAP", logo: LOGO_GAP, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Gucci", logo: LOGO_GUCCI, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Prada", logo: LOGO_PRADA, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Guess", logo: LOGO_GUESS, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Michael Kors", logo: LOGO_MK, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Burberry", logo: LOGO_BURBERRY, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Under Armour", logo: LOGO_UA, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Hugo Boss", logo: LOGO_BOSS, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "DKNY", logo: LOGO_DKNY, sizes: { male: nikTopsM, female: nikTopsM } },
      { name: "Dr. Martens", logo: LOGO_DRMARTENS, sizes: { male: colTopsM, female: colTopsM } },
      { name: "ECCO", logo: LOGO_ECCO, sizes: { male: colTopsM, female: colTopsM } }
    ]
  },
  bottoms: {
    title: "Полуобхват талии (см)", key: "half_waist", range: { min: 25, max: 60, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: colBotM, female: colBotM } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: colBotM, female: colBotM } },
      { name: "Levi's", logo: LOGO_LEVIS, sizes: { male: colBotM, female: colBotM } },
      { name: "Nike", logo: LOGO_NIKE, sizes: { male: colBotM, female: colBotM } },
      { name: "New Balance", logo: LOGO_NB, sizes: { male: nbBotM, female: nbBotM } },
      { name: "Adidas", logo: LOGO_ADIDAS, sizes: { male: colBotM, female: colBotM } },
      { name: "Puma", logo: LOGO_PUMA, sizes: { male: colBotM, female: colBotM } },
      { name: "The North Face", logo: LOGO_TNF, sizes: { male: colBotM, female: colBotM } },
      { name: "Fila", logo: LOGO_FILA, sizes: { male: colBotM, female: colBotM } },
      { name: "Converse", logo: LOGO_CONVERSE, sizes: { male: colBotM, female: colBotM } },
      { name: "Crocs", logo: LOGO_CROCS, sizes: { male: colBotM, female: colBotM } },
      { name: "Helly Hansen", logo: LOGO_HH, sizes: { male: colBotM, female: colBotM } },
      { name: "Hollister", logo: LOGO_HOLLISTER, sizes: { male: colBotM, female: colBotM } },
      { name: "Carhartt", logo: LOGO_CARHARTT, sizes: { male: colBotM, female: colBotM } },
      { name: "Uniqlo", logo: LOGO_UNIQLO, sizes: { male: colBotM, female: colBotM } },
      { name: "Forever 21", logo: LOGO_F21, sizes: { male: colBotM, female: colBotM } },
      { name: "UGG", logo: LOGO_UGG, sizes: { male: colBotM, female: colBotM } },
      { name: "Zara", logo: LOGO_ZARA, sizes: { male: colBotM, female: colBotM } },
      { name: "Mango", logo: LOGO_MANGO, sizes: { male: colBotM, female: colBotM } },
      { name: "Ralph Lauren", logo: LOGO_RL, sizes: { male: colBotM, female: colBotM } },
      { name: "Timberland", logo: LOGO_TIMBERLAND, sizes: { male: colBotM, female: colBotM } },
      { name: "Tommy Hilfiger", logo: LOGO_TH, sizes: { male: colBotM, female: colBotM } },
      { name: "Calvin Klein", logo: LOGO_CK, sizes: { male: colBotM, female: colBotM } },
      { name: "Lacoste", logo: LOGO_LACOSTE, sizes: { male: colBotM, female: colBotM } },
      { name: "Alpha Industries", logo: LOGO_ALPHA, sizes: { male: colBotM, female: colBotM } },
      { name: "GAP", logo: LOGO_GAP, sizes: { male: colBotM, female: colBotM } },
      { name: "Gucci", logo: LOGO_GUCCI, sizes: { male: colBotM, female: colBotM } },
      { name: "Prada", logo: LOGO_PRADA, sizes: { male: colBotM, female: colBotM } },
      { name: "Guess", logo: LOGO_GUESS, sizes: { male: colBotM, female: colBotM } },
      { name: "Michael Kors", logo: LOGO_MK, sizes: { male: colBotM, female: colBotM } },
      { name: "Burberry", logo: LOGO_BURBERRY, sizes: { male: colBotM, female: colBotM } },
      { name: "Under Armour", logo: LOGO_UA, sizes: { male: colBotM, female: colBotM } },
      { name: "Hugo Boss", logo: LOGO_BOSS, sizes: { male: colBotM, female: colBotM } },
      { name: "DKNY", logo: LOGO_DKNY, sizes: { male: colBotM, female: colBotM } },
      { name: "Dr. Martens", logo: LOGO_DRMARTENS, sizes: { male: colBotM, female: colBotM } },
      { name: "ECCO", logo: LOGO_ECCO, sizes: { male: colBotM, female: colBotM } }
    ]
  },
  shoes: {
    title: "Длина стопы (см)", range: { min: 22, max: 32, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA }, { name: "H&M", logo: LOGO_HM }, { name: "Levi's", logo: LOGO_LEVIS },
      { name: "Nike", logo: LOGO_NIKE }, { name: "New Balance", logo: LOGO_NB },
      { name: "Adidas", logo: LOGO_ADIDAS }, { name: "Puma", logo: LOGO_PUMA },
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

export const findNearestShoe = (gender, cmValue) => {
  const data = shoeDataISO[gender];
  return data.reduce((prev, curr) => Math.abs(curr.cm - cmValue) < Math.abs(prev.cm - cmValue) ? curr : prev);
};
export const findNearestClothes = (sizes, key, target) => {
  if (!sizes || sizes.length === 0) return { int: "-", us: "-", eu: "-" };
  return sizes.reduce((prev, curr) => Math.abs(curr[key] - target) < Math.abs(prev[key] - target) ? curr : prev);
};