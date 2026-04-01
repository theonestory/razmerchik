// --- КОНСТАНТЫ ЛОГОТИПОВ ---
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

// --- ТАБЛИЦЫ РАЗМЕРОВ (XXS - 7XL, XL = 48/48.5) ---
const colTopsM = [
  { half_chest: 36.0, int: "XXS", us: "32", eu: "42" },
  { half_chest: 38.0, int: "XS", us: "34", eu: "44" },
  { half_chest: 40.0, int: "S", us: "36", eu: "46" },
  { half_chest: 42.0, int: "M", us: "38", eu: "48" },
  { half_chest: 45.0, int: "L", us: "40", eu: "50" },
  { half_chest: 48.0, int: "XL", us: "42", eu: "52" },
  { half_chest: 48.5, int: "XL", us: "42", eu: "52" },
  { half_chest: 52.0, int: "2XL", us: "46", eu: "56" },
  { half_chest: 56.0, int: "3XL", us: "50", eu: "60" },
  { half_chest: 61.0, int: "4XL", us: "54", eu: "64" },
  { half_chest: 66.0, int: "5XL", us: "58", eu: "68" },
  { half_chest: 71.0, int: "6XL", us: "62", eu: "72" },
  { half_chest: 76.0, int: "7XL", us: "66", eu: "76" }
];

const colBotM = [
  { half_waist: 28.0, int: "XXS", us: "26", eu: "42" },
  { half_waist: 31.0, int: "XS", us: "28", eu: "44" },
  { half_waist: 34.0, int: "S", us: "30", eu: "46" },
  { half_waist: 37.0, int: "M", us: "32", eu: "48" },
  { half_waist: 40.0, int: "L", us: "34", eu: "50" },
  { half_waist: 43.0, int: "XL", us: "36", eu: "52" },
  { half_waist: 48.0, int: "2XL", us: "40", eu: "56" },
  { half_waist: 53.0, int: "3XL", us: "44", eu: "60" },
  { half_waist: 58.0, int: "4XL", us: "48", eu: "64" },
  { half_waist: 64.0, int: "5XL", us: "52", eu: "68" },
  { half_waist: 70.0, int: "7XL", us: "56", eu: "72" }
];

const colTopsF = [
  { half_chest: 32.0, int: "XXS", us: "0", eu: "32" },
  { half_chest: 35.0, int: "XS", us: "2", eu: "34" },
  { half_chest: 38.0, int: "S", us: "4", eu: "36" },
  { half_chest: 41.0, int: "M", us: "8", eu: "40" },
  { half_chest: 44.0, int: "L", us: "12", eu: "44" },
  { half_chest: 47.0, int: "XL", us: "16", eu: "48" },
  { half_chest: 52.0, int: "3XL", us: "20", eu: "52" },
  { half_chest: 60.0, int: "5XL", us: "24", eu: "56" },
  { half_chest: 70.0, int: "7XL", us: "28", eu: "60" }
];

const colBotF = [
  { half_waist: 28.0, int: "XXS", us: "22", eu: "32" },
  { half_waist: 31.0, int: "XS", us: "24", eu: "34" },
  { half_waist: 34.0, int: "S", us: "26", eu: "36" },
  { half_waist: 37.0, int: "M", us: "28", eu: "38" },
  { half_waist: 40.0, int: "L", us: "31", eu: "40" },
  { half_waist: 43.0, int: "XL", us: "34", eu: "43" },
  { half_waist: 48.0, int: "3XL", us: "38", eu: "47" },
  { half_waist: 55.0, int: "5XL", us: "44", eu: "53" },
  { half_waist: 65.0, int: "7XL", us: "52", eu: "61" }
];

export const shoeDataISO = {
  male: [
    { cm: 24.1, eu: 38.5, us: 6, uk: 5.5 }, { cm: 24.8, eu: 40, us: 7, uk: 6.5 }, { cm: 25.4, eu: 41, us: 8, uk: 7.5 }, { cm: 26.0, eu: 42, us: 9, uk: 8.5 }, { cm: 27.0, eu: 44, us: 10.5, uk: 10 }, { cm: 28.0, eu: 45, us: 12, uk: 11.5 }, { cm: 29.0, eu: 46.5, us: 13, uk: 12.5 }, { cm: 30.5, eu: 48, us: 14.5, uk: 14 }, { cm: 32.0, eu: 50, us: 16, uk: 15.5 }
  ],
  female: [
    { cm: 22.0, eu: 35, us: 4.5, uk: 2 }, { cm: 23.0, eu: 36, us: 5.5, uk: 3 }, { cm: 23.8, eu: 37.5, us: 7, uk: 4.5 }, { cm: 24.6, eu: 39, us: 8.5, uk: 6 }, { cm: 25.4, eu: 40.5, us: 9.5, uk: 7 }, { cm: 26.2, eu: 41.5, us: 11, uk: 8.5 }, { cm: 27.0, eu: 42, us: 11.5, uk: 9 }, { cm: 28.5, eu: 44, us: 13.5, uk: 11 }
  ]
};

const allBrandList = [
  { name: "Adidas", logo: LOGO_ADIDAS },
  { name: "Alpha Industries", logo: LOGO_ALPHA },
  { name: "Boss", logo: LOGO_BOSS },
  { name: "Burberry", logo: LOGO_BURBERRY },
  { name: "Calvin Klein", logo: LOGO_CK },
  { name: "Carhartt", logo: LOGO_CARHARTT },
  { name: "Columbia", logo: LOGO_COLUMBIA },
  { name: "DKNY", logo: LOGO_DKNY },
  { name: "Fila", logo: LOGO_FILA },
  { name: "Forever 21", logo: LOGO_F21 },
  { name: "Gap", logo: LOGO_GAP },
  { name: "Gucci", logo: LOGO_GUCCI },
  { name: "Guess", logo: LOGO_GUESS },
  { name: "H&M", logo: LOGO_HM },
  { name: "Helly Hansen", logo: LOGO_HH },
  { name: "Hollister", logo: LOGO_HOLLISTER },
  { name: "Lacoste", logo: LOGO_LACOSTE },
  { name: "Levi's", logo: LOGO_LEVIS },
  { name: "Mango", logo: LOGO_MANGO },
  { name: "Michael Kors", logo: LOGO_MK },
  { name: "Nike", logo: LOGO_NIKE },
  { name: "Prada", logo: LOGO_PRADA },
  { name: "Puma", logo: LOGO_PUMA },
  { name: "Ralph Lauren", logo: LOGO_RL },
  { name: "The North Face", logo: LOGO_TNF },
  { name: "Tommy Hilfiger", logo: LOGO_TH },
  { name: "Under Armour", logo: LOGO_UA },
  { name: "Uniqlo", logo: LOGO_UNIQLO },
  { name: "Zara", logo: LOGO_ZARA }
];

export const sizeDatabase = {
  tops: {
    title: "Полуобхват груди (см)", key: "half_chest", range: { min: 30, max: 80, step: 0.5 },
    brands: allBrandList.map(b => ({ ...b, sizes: { male: colTopsM, female: colTopsF } }))
  },
  bottoms: {
    title: "Полуобхват талии (см)", key: "half_waist", range: { min: 25, max: 75, step: 0.5 },
    brands: allBrandList.map(b => ({ ...b, sizes: { male: colBotM, female: colBotF } }))
  },
  shoes: {
    title: "Длина стельки (см)", range: { min: 21, max: 33, step: 0.5 },
    brands: [
      { name: "Adidas", logo: LOGO_ADIDAS }, { name: "Converse", logo: LOGO_CONVERSE },
      { name: "Crocs", logo: LOGO_CROCS }, { name: "Dr. Martens", logo: LOGO_DRMARTENS },
      { name: "New Balance", logo: LOGO_NB }, { name: "Nike", logo: LOGO_NIKE },
      { name: "Puma", logo: LOGO_PUMA }, { name: "Timberland", logo: LOGO_TIMBERLAND }, { name: "UGG", logo: LOGO_UGG }
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