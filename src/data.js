// --- КОНСТАНТЫ ЛОГОТИПОВ (Все 36 из твоей папки) ---
const LOGO_ADIDAS = "logos/adidas.svg";
const LOGO_ALPHA = "logos/alpha-industries.svg";
const LOGO_BOSS = "logos/boss.svg";
const LOGO_BURBERRY = "logos/burberry.svg";
const LOGO_CK = "logos/calvin-klein.svg";
const LOGO_COLUMBIA = "logos/columbia.svg";
const LOGO_CONVERSE = "logos/converse.svg";
const LOGO_CROCS = "logos/crocs.svg";
const LOGO_DKNY = "logos/dkny.svg";
const LOGO_DRMARTENS = "logos/dr-martens.svg";
const LOGO_ECCO = "logos/ecco.svg";
const LOGO_FILA = "logos/fila.svg";
const LOGO_F21 = "logos/forever-21.svg";
const LOGO_GAP = "logos/gap.svg";
const LOGO_GUCCI = "logos/gucci.svg";
const LOGO_PRADA = "logos/prada.svg";
const LOGO_GUESS = "logos/guess.svg";
const LOGO_HM = "logos/h-m.svg";
const LOGO_HH = "logos/helly-hansen.svg";
const LOGO_HOLLISTER = "logos/hollister.svg";
const LOGO_LACOSTE = "logos/lacoste.svg";
const LOGO_LEVIS = "logos/levis.svg";
const LOGO_MANGO = "logos/mango.svg";
const LOGO_MK = "logos/michael-kors.svg";
const LOGO_NB = "logos/new-balance.svg";
const LOGO_NIKE = "logos/nike.svg";
const LOGO_PUMA = "logos/puma.svg";
const LOGO_RL = "logos/ralph-lauren.svg";
const LOGO_TNF = "logos/the-north-face.svg";
const LOGO_TIMBERLAND = "logos/timberland.svg";
const LOGO_TH = "logos/tommy-hilfiger.svg";
const LOGO_UGG = "logos/ugg.svg";
const LOGO_UA = "logos/under-armour.svg";
const LOGO_UNIQLO = "logos/uniqlo.svg";
const LOGO_ZARA = "logos/zara.svg";
const LOGO_CARHARTT = "logos/carhartt.svg";

// --- ТАБЛИЦЫ РАЗМЕРОВ (БАЗОВЫЕ СЕТКИ) ---
const colTopsM = [{ half_chest: 42.5, int: "XS", us: "34", eu: "44" }, { half_chest: 46.5, int: "S", us: "38", eu: "48" }, { half_chest: 50.0, int: "M", us: "40", eu: "50" }, { half_chest: 55.0, int: "L", us: "44", eu: "54" }, { half_chest: 60.0, int: "XL", us: "48", eu: "58" }, { half_chest: 65.0, int: "2XL", us: "52", eu: "62" }, { half_chest: 70.0, int: "3XL", us: "56", eu: "66" }];
const colBotM = [{ half_waist: 35.0, int: "XS", us: "28", eu: "38" }, { half_waist: 38.5, int: "S", us: "32", eu: "42" }, { half_waist: 42.5, int: "M", us: "34", eu: "44" }, { half_waist: 47.5, int: "L", us: "36", eu: "46" }, { half_waist: 52.5, int: "XL", us: "40", eu: "50" }, { half_waist: 57.5, int: "2XL", us: "44", eu: "54" }, { half_waist: 62.5, int: "3XL", us: "48", eu: "58" }];

const colTopsF = [{ half_chest: 37.0, int: "XXS", us: "0", eu: "32" }, { half_chest: 40.0, int: "XS", us: "2", eu: "34" }, { half_chest: 43.0, int: "S", us: "4", eu: "36" }, { half_chest: 46.0, int: "M", us: "8", eu: "40" }, { half_chest: 50.0, int: "L", us: "12", eu: "44" }, { half_chest: 54.0, int: "XL", us: "16", eu: "48" }, { half_chest: 59.0, int: "2XL", us: "20", eu: "52" }];
const colBotF = [{ half_waist: 30.0, int: "XXS", us: "24", eu: "32" }, { half_waist: 32.0, int: "XS", us: "25", eu: "34" }, { half_waist: 34.5, int: "S", us: "27", eu: "36" }, { half_waist: 37.0, int: "M", us: "29", eu: "38" }, { half_waist: 40.0, int: "L", us: "31", eu: "40" }, { half_waist: 43.5, int: "XL", us: "33", eu: "42" }, { half_waist: 47.0, int: "2XL", us: "36", eu: "46" }, { half_waist: 51.0, int: "3XL", us: "40", eu: "50" }];

export const shoeDataISO = {
  male: [
    { cm: 24.1, eu: 38.5, us: 6, uk: 5.5 }, { cm: 24.4, eu: 39, us: 6.5, uk: 6 }, { cm: 24.8, eu: 40, us: 7, uk: 6.5 }, { cm: 25.4, eu: 41, us: 8, uk: 7.5 }, { cm: 25.7, eu: 41.5, us: 8.5, uk: 8 }, { cm: 26.0, eu: 42, us: 9, uk: 8.5 }, { cm: 26.7, eu: 43, us: 10, uk: 9.5 }, { cm: 27.0, eu: 44, us: 10.5, uk: 10 }, { cm: 27.3, eu: 44.5, us: 11, uk: 10.5 }, { cm: 27.9, eu: 45, us: 12, uk: 11.5 }, { cm: 28.3, eu: 46, us: 12.5, uk: 12 }, { cm: 28.6, eu: 46.5, us: 13, uk: 12.5 }, { cm: 29.4, eu: 47.5, us: 14, uk: 13.5 }, { cm: 30.2, eu: 48.5, us: 15, uk: 14.5 }, { cm: 31.0, eu: 49.5, us: 16, uk: 15.5 }
  ],
  female: [
    { cm: 22.0, eu: 35, us: 4.5, uk: 2 }, { cm: 22.5, eu: 35.5, us: 5, uk: 2.5 }, { cm: 23.0, eu: 36, us: 5.5, uk: 3 }, { cm: 23.5, eu: 37, us: 6.5, uk: 4 }, { cm: 23.8, eu: 37.5, us: 7, uk: 4.5 }, { cm: 24.1, eu: 38, us: 7.5, uk: 5 }, { cm: 24.6, eu: 39, us: 8.5, uk: 6 }, { cm: 25.1, eu: 40, us: 9, uk: 6.5 }, { cm: 25.4, eu: 40.5, us: 9.5, uk: 7 }, { cm: 25.9, eu: 41, us: 10.5, uk: 8 }, { cm: 26.2, eu: 41.5, us: 11, uk: 8.5 }, { cm: 26.7, eu: 42, us: 11.5, uk: 9 }, { cm: 27.1, eu: 42.5, us: 12, uk: 9.5 }, { cm: 27.6, eu: 43, us: 12.5, uk: 10 }, { cm: 28.0, eu: 44, us: 13, uk: 10.5 }
  ]
};

// --- ФОРМИРОВАНИЕ БАЗЫ ДАННЫХ ---
export const sizeDatabase = {
  tops: {
    title: "Полуобхват груди (см)", key: "half_chest", range: { min: 30, max: 75, step: 0.5 },
    brands: [
      { name: "Adidas", logo: LOGO_ADIDAS, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Alpha Industries", logo: LOGO_ALPHA, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Boss", logo: LOGO_BOSS, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Burberry", logo: LOGO_BURBERRY, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Calvin Klein", logo: LOGO_CK, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Carhartt", logo: LOGO_CARHARTT, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: colTopsM, female: colTopsF } },
      { name: "DKNY", logo: LOGO_DKNY, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Fila", logo: LOGO_FILA, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Forever 21", logo: LOGO_F21, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Gap", logo: LOGO_GAP, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Gucci", logo: LOGO_GUCCI, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Guess", logo: LOGO_GUESS, sizes: { male: colTopsM, female: colTopsF } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Helly Hansen", logo: LOGO_HH, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Hollister", logo: LOGO_HOLLISTER, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Lacoste", logo: LOGO_LACOSTE, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Levi's", logo: LOGO_LEVIS, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Mango", logo: LOGO_MANGO, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Michael Kors", logo: LOGO_MK, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Nike", logo: LOGO_NIKE, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Prada", logo: LOGO_PRADA, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Puma", logo: LOGO_PUMA, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Ralph Lauren", logo: LOGO_RL, sizes: { male: colTopsM, female: colTopsF } },
      { name: "The North Face", logo: LOGO_TNF, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Tommy Hilfiger", logo: LOGO_TH, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Under Armour", logo: LOGO_UA, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Uniqlo", logo: LOGO_UNIQLO, sizes: { male: colTopsM, female: colTopsF } },
      { name: "Zara", logo: LOGO_ZARA, sizes: { male: colTopsM, female: colTopsF } }
    ]
  },
  bottoms: {
    title: "Полуобхват талии (см)", key: "half_waist", range: { min: 25, max: 65, step: 0.5 },
    brands: [
      { name: "Adidas", logo: LOGO_ADIDAS, sizes: { male: colBotM, female: colBotF } },
      { name: "Boss", logo: LOGO_BOSS, sizes: { male: colBotM, female: colBotF } },
      { name: "Calvin Klein", logo: LOGO_CK, sizes: { male: colBotM, female: colBotF } },
      { name: "Carhartt", logo: LOGO_CARHARTT, sizes: { male: colBotM, female: colBotF } },
      { name: "Columbia", logo: LOGO_COLUMBIA, sizes: { male: colBotM, female: colBotF } },
      { name: "Forever 21", logo: LOGO_F21, sizes: { male: colBotM, female: colBotF } },
      { name: "Gap", logo: LOGO_GAP, sizes: { male: colBotM, female: colBotF } },
      { name: "Gucci", logo: LOGO_GUCCI, sizes: { male: colBotM, female: colBotF } },
      { name: "Guess", logo: LOGO_GUESS, sizes: { male: colBotM, female: colBotF } },
      { name: "H&M", logo: LOGO_HM, sizes: { male: colBotM, female: colBotF } },
      { name: "Levi's", logo: LOGO_LEVIS, sizes: { male: colBotM, female: colBotF } },
      { name: "Nike", logo: LOGO_NIKE, sizes: { male: colBotM, female: colBotF } },
      { name: "Puma", logo: LOGO_PUMA, sizes: { male: colBotM, female: colBotF } },
      { name: "Ralph Lauren", logo: LOGO_RL, sizes: { male: colBotM, female: colBotF } },
      { name: "Uniqlo", logo: LOGO_UNIQLO, sizes: { male: colBotM, female: colBotF } },
      { name: "Zara", logo: LOGO_ZARA, sizes: { male: colBotM, female: colBotF } }
    ]
  },
  shoes: {
    title: "Длина стопы (см)", range: { min: 22, max: 32, step: 0.5 },
    brands: [
      { name: "Adidas", logo: LOGO_ADIDAS },
      { name: "Columbia", logo: LOGO_COLUMBIA },
      { name: "Converse", logo: LOGO_CONVERSE },
      { name: "Crocs", logo: LOGO_CROCS },
      { name: "Dr. Martens", logo: LOGO_DRMARTENS },
      { name: "Ecco", logo: LOGO_ECCO },
      { name: "Fila", logo: LOGO_FILA },
      { name: "Gucci", logo: LOGO_GUCCI },
      { name: "Lacoste", logo: LOGO_LACOSTE },
      { name: "New Balance", logo: LOGO_NB },
      { name: "Nike", logo: LOGO_NIKE },
      { name: "Prada", logo: LOGO_PRADA },
      { name: "Puma", logo: LOGO_PUMA },
      { name: "Reebok", logo: LOGO_ADIDAS }, // Заглушка
      { name: "Timberland", logo: LOGO_TIMBERLAND },
      { name: "Tommy Hilfiger", logo: LOGO_TH },
      { name: "UGG", logo: LOGO_UGG }
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