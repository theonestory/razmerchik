import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const sizeDatabase = {
  categories: {
    tops: { parameter_name: "Полуобхват груди (см)", param_key: "half_chest", range: { min: 40, max: 80, step: 1 }, default_val: 60, 
      brands: [
        { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", sizes: [{ half_chest: 60, int: "3XL", us: "35", eu: "28" }] },
        { name: "New Balance", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg", sizes: [{ half_chest: 60, int: "3XL", us: "35", eu: "28" }] },
        { name: "Uniqlo", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg", sizes: [{ half_chest: 60, int: "3XL", us: "35", eu: "28" }] },
        { name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg", sizes: [{ half_chest: 60, int: "3XL", us: "35", eu: "28" }] }
      ] 
    },
    bottoms: { parameter_name: "Полуобхват талии (см)", param_key: "half_waist", range: { min: 30, max: 80, step: 1 }, default_val: 60, 
      brands: [{ name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", sizes: [{ half_waist: 60, int: "W40", us: "35", eu: "28" }] }] 
    },
    shoes: { parameter_name: "Длина стельки (см)", param_key: "insole", range: { min: 20, max: 35, step: 0.5 }, default_val: 27.5, 
      brands: [{ name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", sizes: [{ insole: 27.5, int: "12", us: "10", eu: "9" }] }] 
    }
  }
};

const generateRuler = (min, max, step) => {
  const ruler = [];
  for (let i = min; i <= max; i += step) ruler.push(i);
  return ruler;
};

const findNearestSize = (sizes, key, target) => {
  return sizes.reduce((prev, curr) => Math.abs(curr[key] - target) < Math.abs(prev[key] - target) ? curr : prev);
};

const RulerPicker = ({ value, onChange, range }) => {
  const values = useMemo(() => generateRuler(range.min, range.max, range.step), [range]);
  
  // Добавили duration: 35 для максимальной плавности
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    axis: 'x', 
    align: 'center', 
    containScroll: false,
    duration: 35 
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const centerIndex = emblaApi.selectedScrollSnap();
    if (values[centerIndex] !== undefined) {
      onChange(values[centerIndex]);
      window.Telegram?.WebApp?.HapticFeedback?.selectionChanged();
    }
  }, [emblaApi, values, onChange]);

  useEffect(() => {
    if (!emblaApi) return;
    const idx = values.indexOf(value);
    if (idx !== -1) emblaApi.scrollTo(idx, true);
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, values, value, onSelect]);

  return (
    <div className="relative mask-edges w-full py-2 overflow-hidden">
      <div ref={emblaRef}>
        <div className="flex touch-pan-y items-center h-16">
          {values.map((v, i) => (
            <div key={i} className="flex-[0_0_20%] flex justify-center items-center cursor-default">
              <span className={`transition-all duration-300 tracking-tighter ${v === value ? 'text-[42px] font-black text-black' : 'text-[24px] font-bold text-gray-400'}`}>
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Новая иконка молнии */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.18029 14.8661C7.03901 15.0033 6.80164 14.9037 6.80237 14.7088L6.81432 11.5369L2.73033 11.5435C2.55169 11.5438 2.45931 11.3303 2.58137 11.1993L8.8197 4.50294C8.96098 4.36574 9.19835 4.46533 9.19762 4.66023L9.18567 7.83207L13.2697 7.82553C13.4483 7.82524 13.5407 8.03867 13.4186 8.16973L7.18029 14.8661Z" fill="#D2D238"/>
          <path d="M12.9157 1.09635C12.8711 1.00693 12.7797 0.95 12.6793 0.95H7.31972L7.31911 0.949999C7.21852 0.950004 7.12693 1.00713 7.08226 1.0967L5.09341 5.08372L7.49132 5.0841L9.13117 1.79632L11.7588 6.01255L10.0258 6.0129L7.18567 7.83207L8.81971 4.50294L11.7228 1.41872L13.5074 4.14811L12.3552 4.1483L11.8341 3.25141C11.7891 3.17398 11.7061 3.1263 11.6163 3.12632C11.5265 3.12634 11.4435 3.17406 11.3986 3.2515L10.7497 4.3678L12.7877 7.64161C12.8395 7.72481 12.8344 7.82987 12.7749 7.90795L7.18029 14.8661L7.54589 14.4925L12.9157 1.09635Z" fill="#D2D238"/>
        </svg>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('tops');
  const [userPhoto, setUserPhoto] = useState(null);
  
  const [sizes, setSizes] = useState(() => {
    const saved = localStorage.getItem('user_sizes');
    return saved ? JSON.parse(saved) : { tops: 60, bottoms: 60, shoes: 27.5 };
  });

  useEffect(() => {
    localStorage.setItem('user_sizes', JSON.stringify(sizes));
  }, [sizes]);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      tg.setHeaderColor('#D2D238');
      const user = tg.initDataUnsafe?.user;
      if (user?.photo_url) setUserPhoto(user.photo_url);
    }
  }, []);

  const currentCategory = sizeDatabase.categories[activeTab];

  return (
    // Убрали pt-2 вверху,pt-8 -> pt-6
    <div className="min-h-screen bg-[#D2D238] w-full flex flex-col relative selection:bg-transparent overflow-x-hidden pt-6">
      
      {/* HEADER: Убрали pb-10 -> pb-6, pt-8 -> pt-6 */}
      <div className="bg-[#D2D238] pb-6 px-5 relative shrink-0 pt-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full overflow-hidden border-2 border-black/5 flex-shrink-0">
            <img 
              src={userPhoto || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
              alt="avatar" 
              className="w-full h-full object-cover scale-110" 
            />
          </div>
          <div className="flex-1 bg-black/10 rounded-full flex p-1 h-10">
            {['tops', 'bottoms', 'shoes'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 text-[14px] font-black rounded-full transition-all ${activeTab === tab ? 'bg-black text-[#D2D238]' : 'text-black/30'}`}>
                {tab === 'tops' ? 'Верх' : tab === 'bottoms' ? 'Низ' : 'Обувь'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT: pt-8 -> pt-6 */}
      <div className="bg-[#F2F2F7] -mt-6 rounded-t-[32px] relative z-10 flex-1 pt-6 px-4 pb-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        
        {/* ЛИНЕЙКА */}
        <div className="mb-6">
          <p className="text-center text-[13px] font-black text-black/30 mb-1 uppercase tracking-widest leading-none">
            {currentCategory.parameter_name}
          </p>
          <RulerPicker 
            value={sizes[activeTab]} 
            onChange={(val) => setSizes(prev => ({...prev, [activeTab]: val}))}
            range={currentCategory.range}
          />
        </div>

        {/* БРЕНДЫ */}
        <div className="space-y-3">
          {currentCategory.brands.map((brand, idx) => {
            const size = findNearestSize(brand.sizes, currentCategory.param_key, sizes[activeTab]);
            return (
              <div key={idx} className="bg-white rounded-[32px] p-5 flex items-center shadow-sm active:scale-[0.98] transition-transform">
                <div className="w-16 h-16 bg-[#D1D1D6] rounded-full flex items-center justify-center mr-5 shrink-0">
                  <img src={brand.logo} className="w-9 h-9 object-contain brightness-0 invert" alt="logo" />
                </div>
                <div className="flex-1 flex justify-between pr-2">
                  <div className="text-center"><div className="text-[28px] font-black text-gray-800 tracking-tighter leading-none">{size.int}</div><div className="text-[11px] font-black text-gray-300">INT</div></div>
                  <div className="text-center"><div className="text-[28px] font-black text-gray-800 tracking-tighter leading-none">{size.us}</div><div className="text-[11px] font-black text-gray-300">US</div></div>
                  <div className="text-center"><div className="text-[28px] font-black text-gray-800 tracking-tighter leading-none">{size.eu}</div><div className="text-[11px] font-black text-gray-300">EU</div></div>
                </div>
                <div className="text-gray-200 pl-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}