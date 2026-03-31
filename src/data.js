// ==========================================
// БАЗА ОБУВИ (РАЗНЫЕ СЕТКИ ДЛЯ М И Ж)
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

// --- ЛОГОТИПЫ ---
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

// --- ТАБЛИЦЫ РАЗМЕРОВ (МУЖСКИЕ) ---
const colTopsM = [{ half_chest: 42.5, int: "XS", us: "34", eu: "44" }, { half_chest: 46.5, int: "S", us: "38", eu: "48" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" }, { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 70.0, int: "3XL", us: "56", eu: "66" }];
const colBotM = [{ half_waist: 35.0, int: "XS", us: "28", eu: "38" }, { half_waist: 38.5, int: "S", us: "32", eu: "42" }, { half_waist: 42.5, int: "M", us: "34", eu: "44" }, { half_waist: 47.5, int: "L", us: "36", eu: "46" }, { half_waist: 52.5, int: "XL", us: "40", eu: "50" }, { half_waist: 57.5, int: "2XL", us: "44", eu: "54" }, { half_waist: 62.5, int: "3XL", us: "48", eu: "58" }];

// --- ТАБЛИЦЫ РАЗМЕРОВ (ЖЕНСКИЕ) ---
// В женских сетках аналогичный полуобхват груди соответствует меньшему размеру в EU/US
const colTopsF = [{ half_chest: 40.0, int: "XS", us: "2", eu: "34" }, { half_chest: 43.0, int: "S", us: "4", eu: "36" }, { half_chest: 46.0, int: "M", us: "8", eu: "40" }, { half_chest: 50.0, int: "L", us: "12", eu: "44" }, { half_chest: 54.0, int: "XL", us: "16", eu: "48" }];
const colBotF = [{ half_waist: 32.0, int: "XS", us: "25", eu: "34" }, { half_waist: 34.0, int: "S", us: "27", eu: "36" }, { half_waist: 37.0, int: "M", us: "29", eu: "38" }, { half_waist: 40.0, int: "L", us: "31", eu: "40" }, { half_waist: 43.0, int: "XL", us: "33", eu: "42" }];

// Специфические для Nike (пример)
const nikTopsM = [{ half_chest: 42.0, int: "XS", us: "34", eu: "42" }, { half_chest: 46.0, int: "S", us: "36", eu: "46" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 54.0, int: "L", us: "44", eu: "54" }, { half_chest: 59.0, int: "XL", us: "48", eu: "58" }];
const nikTopsF = [{ half_chest: 38.0, int: "XS", us: "0-2", eu: "32" }, { half_chest: 41.0, int: "S", us: "4-6", eu: "34-36" }, { half_chest: 44.0, int: "M", us: "8-10", eu: "38-40" }, { half_chest: 48.0, int: "L", us: "12-14", eu: "42-44" }, { half_chest: 52.0, int: "XL", us: "16-18", eu: "46-48" }];

export const sizeDatabase = {
  tops: {
    title: "Полуобхват груди (см)", key: "half_chest", range: { min: 30, max: 75, step: 0.5 },
    brands: [
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: colTopsM, female: colTopsF } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Nike", logo: LOGO_NIKE, sizes: { male: nikTopsM, female: nikTopsF } },
      { name: "Adidas", logo: LOGO_ADIDAS, sizes: { male: nikTopsM, female: nikTopsF } },
      { name: "Levi's", logo: LOGO_LEVIS, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Carhartt", logo: LOGO_CARHARTT, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Zara", logo: LOGO_ZARA, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Mango", logo: LOGO_MANGO, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Tommy Hilfiger", logo: LOGO_TH, sizes: { male: colTopsM, female: colTopsF } }
      // ... при необходимости можно добавить остальные бренды
    ]
  },
  bottoms: {
    title: "Полуобхват талии (см)", key: "half_waist", range: { min: 25, max: 65, step: 0.5 },
    brands: [
      { name: "Levi's", logo: LOGO_LEVIS, sizes: { male: colBotM, female: colBotF } },
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: colBotM, female: colBotF } },
      { name: "Zara", logo: LOGO_ZARA, sizes: { male: colBotM, female: colBotF } },
      { name: "Carhartt", logo: LOGO_CARHARTT, sizes: { male: colBotM, female: colBotF } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: colBotM, female: colBotF } }
    ]
  },
  shoes: {
    title: "Длина стопы (см)", range: { min: 22, max: 32, step: 0.5 },
    brands: [
      { name: "Nike", logo: LOGO_NIKE }, { name: "New Balance", logo: LOGO_NB },
      { name: "Adidas", logo: LOGO_ADIDAS }, { name: "Puma", logo: LOGO_PUMA },
      { name: "Converse", logo: LOGO_CONVERSE }, { name: "Timberland", logo: LOGO_TIMBERLAND },
      { name: "Dr. Martens", logo: LOGO_DRMARTENS }, { name: "Carhartt", logo: LOGO_CARHARTT }
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