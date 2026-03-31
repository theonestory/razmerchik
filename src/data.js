// --- БАЗА ОБУВИ (ISO) ---
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

// --- БАЗА ОДЕЖДЫ: ТАЛИЯ (ПОЛУОБХВАТЫ) ---
const bottomsMale = [
  { half_waist: 33, int: "XXS", us: "26", eu: "36" }, { half_waist: 34, int: "XS", us: "27", eu: "37" },
  { half_waist: 35.5, int: "XS", us: "28", eu: "38" }, { half_waist: 37, int: "S", us: "29", eu: "39" },
  { half_waist: 38, int: "S", us: "30", eu: "40" }, { half_waist: 39.5, int: "M", us: "31", eu: "41" },
  { half_waist: 40.5, int: "M", us: "32", eu: "42" }, { half_waist: 42, int: "L", us: "33", eu: "43" },
  { half_waist: 43, int: "L", us: "34", eu: "44" }, { half_waist: 44.5, int: "L", us: "35", eu: "45" },
  { half_waist: 45.5, int: "XL", us: "36", eu: "46" }, { half_waist: 48, int: "XL", us: "38", eu: "48" },
  { half_waist: 50.5, int: "XXL", us: "40", eu: "50" }, { half_waist: 53, int: "XXL", us: "42", eu: "52" },
  { half_waist: 55.5, int: "3XL", us: "44", eu: "54" }
];

const bottomsFemale = [
  { half_waist: 30, int: "XXS", us: "00", eu: "30" }, { half_waist: 31, int: "XXS", us: "0", eu: "32" },
  { half_waist: 32.5, int: "XS", us: "2", eu: "34" }, { half_waist: 34, int: "XS", us: "4", eu: "34" },
  { half_waist: 35, int: "S", us: "6", eu: "36" }, { half_waist: 36, int: "S", us: "8", eu: "38" },
  { half_waist: 37.5, int: "M", us: "10", eu: "40" }, { half_waist: 38.5, int: "M", us: "12", eu: "42" },
  { half_waist: 40, int: "L", us: "14", eu: "44" }, { half_waist: 42.5, int: "L", us: "16", eu: "46" },
  { half_waist: 44, int: "XL", us: "18", eu: "48" }, { half_waist: 46.5, int: "XL", us: "20", eu: "50" },
  { half_waist: 49, int: "XXL", us: "22", eu: "52" }, { half_waist: 51.5, int: "XXL", us: "24", eu: "54" },
  { half_waist: 54, int: "3XL", us: "26", eu: "56" }
];

// --- БАЗА ОДЕЖДЫ: ГРУДЬ (ПОЛУОБХВАТЫ) ---
const topsMale = [
  { half_chest: 36, int: "XS", us: "13.5", eu: "35" }, { half_chest: 39.5, int: "XS", us: "14", eu: "36" },
  { half_chest: 40, int: "S", us: "14.5", eu: "37" }, { half_chest: 43.5, int: "S", us: "15", eu: "38" },
  { half_chest: 44, int: "M", us: "15.5", eu: "39" }, { half_chest: 47.5, int: "M", us: "15.5", eu: "40" },
  { half_chest: 51.5, int: "L", us: "16.5", eu: "42" }, { half_chest: 52, int: "XL", us: "17", eu: "43" },
  { half_chest: 55.5, int: "XL", us: "17.5", eu: "44" },
  // ДОБАВЛЕННЫЕ РАЗМЕРЫ (чтобы карусель работала до 70см)
  { half_chest: 59, int: "XXL", us: "18", eu: "45" },
  { half_chest: 62.5, int: "3XL", us: "18.5", eu: "46" },
  { half_chest: 66, int: "4XL", us: "19", eu: "47" },
  { half_chest: 70, int: "5XL", us: "19.5", eu: "48" }
];

const topsFemale = [
  { half_chest: 38.5, int: "XXS", us: "0", eu: "32" }, { half_chest: 40.5, int: "XS", us: "2", eu: "34" },
  { half_chest: 42.5, int: "S", us: "4", eu: "36" }, { half_chest: 44.5, int: "M", us: "6", eu: "38" },
  { half_chest: 46.5, int: "L", us: "8", eu: "40" }, { half_chest: 48.5, int: "XL", us: "10", eu: "42" },
  { half_chest: 50.5, int: "XXL", us: "12", eu: "44" }, { half_chest: 53.0, int: "3XL", us: "14", eu: "46" },
  { half_chest: 56.0, int: "4XL", us: "16", eu: "48" }, { half_chest: 59.0, int: "5XL", us: "18", eu: "50" },
  { half_chest: 62.0, int: "6XL", us: "20", eu: "52" }, { half_chest: 65.5, int: "7XL", us: "22", eu: "54" }
];

export const sizeDatabase = {
  tops: {
    title: "Полуобхват груди (см)",
    key: "half_chest",
    range: { min: 30, max: 70, step: 0.5 },
    brands: [
      { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", sizes: { male: topsMale, female: topsFemale } },
      { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", sizes: { male: topsMale, female: topsFemale } }
    ]
  },
  bottoms: {
    title: "Полуобхват талии (см)",
    key: "half_waist",
    range: { min: 25, max: 60, step: 0.5 },
    brands: [
      { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", sizes: { male: bottomsMale, female: bottomsFemale } },
      { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", sizes: { male: bottomsMale, female: bottomsFemale } },
      { name: "Levi's", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Levi%27s_logo.svg", sizes: { male: bottomsMale, female: bottomsFemale } }
    ]
  },
  shoes: {
    title: "Длина стопы (см)",
    range: { min: 22, max: 32, step: 0.5 },
    brands: [
      { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
      { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
      { name: "New Balance", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg" },
      { name: "Reebok", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Reebok_2019_logo.svg" }
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