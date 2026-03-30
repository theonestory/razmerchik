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
  
  // Добавляем внутренний стейт для мгновенного визуального обновления
  const [activeIndex, setActiveIndex] = useState(() => values.indexOf(value));
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    axis: 'x', 
    align: 'center', 
    containScroll: false,
    duration: 35 
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const centerIndex = emblaApi.selectedScrollSnap();
    setActiveIndex(centerIndex); // Обновляем визуальное состояние
    
    const newValue = values[centerIndex];
    if (newValue !== undefined && newValue !== value) {
      onChange(newValue);
      window.Telegram?.WebApp?.HapticFeedback?.selectionChanged();
    }
  }, [emblaApi, values, onChange, value]);

  useEffect(() => {
    if (emblaApi) {
      const idx = values.indexOf(value);
      if (idx !== -1) {
        emblaApi.scrollTo(idx, true);
        setActiveIndex(idx);
      }
      emblaApi.on('select', onSelect);
      return () => emblaApi.off('select', onSelect);
    }
  }, [emblaApi, range]);

  return (
    <div className="relative mask-edges w-full py-2 overflow-hidden">
      <div ref={emblaRef}>
        <div className="flex touch-pan-y items-center h-16">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="flex-[0_0_20%] flex justify-center items-center cursor-pointer" 
              onClick={() => emblaApi?.scrollTo(i, false)}
            >
              <span className={`transition-all duration-300 tracking-tighter select-none ${i === activeIndex ? 'text-[42px] font-black text-black' : 'text-[24px] font-bold text-gray-400'}`}>
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 text-[#D2D238] text-[24px] leading-none select-none pointer-events-none">
        •
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
    <div className="min-h-screen bg-[#D2D238] w-full flex flex-col relative selection:bg-transparent overflow-x-hidden pt-0">
      
      <div className="bg-[#D2D238] pb-11 px-5 relative shrink-0 pt-4">
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

      <div className="bg-[#F2F2F7] -mt-6 rounded-t-[32px] relative z-10 flex-1 pt-8 px-4 pb-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        
        <div className="mb-6">
          <p className="text-center text-[13px] font-black text-black/30 mb-1 uppercase tracking-widest leading-none">
            {currentCategory.parameter_name}
          </p>
          <RulerPicker 
            key={activeTab}
            value={sizes[activeTab]} 
            onChange={(val) => setSizes(prev => ({...prev, [activeTab]: val}))}
            range={currentCategory.range}
          />
        </div>

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