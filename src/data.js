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
  ]
};

// --- ОБЩАЯ БАЗА И БРЕНДЫ ---
export const sizeDatabase = {
  tops: {
    title: "Полуобхват груди (см)",
    key: "half_chest",
    range: { min: 40, max: 80, step: 1 },
    brands: [
      { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", sizes: [{ half_chest: 60, int: "3XL", us: "35", eu: "28" }] },
      { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", sizes: [{ half_chest: 60, int: "3XL", us: "35", eu: "28" }] }
    ]
  },
  bottoms: {
    title: "Полуобхват талии (см)",
    key: "half_waist",
    range: { min: 30, max: 80, step: 1 },
    brands: [
      { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", sizes: [{ half_waist: 60, int: "W40", us: "35", eu: "28" }] }
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

// --- УМНЫЕ ФУНКЦИИ ПОИСКА ---
export const findNearestShoe = (gender, cmValue) => {
  const data = shoeDataISO[gender];
  return data.reduce((prev, curr) => Math.abs(curr.cm - cmValue) < Math.abs(prev.cm - cmValue) ? curr : prev);
};

export const findNearestClothes = (sizes, key, target) => {
  return sizes.reduce((prev, curr) => Math.abs(curr[key] - target) < Math.abs(prev[key] - target) ? curr : prev);
};