import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sizeDatabase, findNearestShoe, findNearestClothes } from './data';

const RulerPicker = ({ value, onChange, min, max, step }) => {
  const steps = useMemo(() => {
    const s = [];
    for (let i = min; i <= max; i += step) s.push(i);
    return s;
  }, [min, max, step]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'x', align: 'center', containScroll: false, duration: 35 });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    const newVal = steps[index];
    if (newVal !== undefined && newVal !== value) {
      onChange(newVal);
      window.Telegram?.WebApp?.HapticFeedback?.selectionChanged();
    }
  }, [emblaApi, value, onChange, steps]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const startIdx = steps.indexOf(value);
    if (startIdx !== -1) emblaApi.scrollTo(startIdx, true);
  }, [emblaApi, value, steps]);

  return (
    <div className="relative w-full overflow-hidden mask-edges pt-1 pb-[10px] pointer-events-auto">
      <div ref={emblaRef}>
        <div className="flex items-center h-16">
          {steps.map((v, i) => (
            <div key={i} className="flex-[0_0_20%] shrink-0 flex justify-center items-center cursor-pointer" onClick={() => emblaApi?.scrollTo(i)}>
              <span className={`transition-all duration-300 font-black select-none ${v === value ? 'text-[42px] text-black' : 'text-[24px] text-gray-300'}`}>
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-[#D2D238] text-[28px] font-bold leading-none select-none pointer-events-none">•</div>
    </div>
  );
};

export default function App() {
  const tabs = ['tops', 'bottoms', 'shoes'];
  const [activeTab, setActiveTab] = useState('tops'); 
  const [[currentIndex, direction], setDirection] = useState([0, 0]); 
  const [gender] = useState('male');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [sizes, setSizes] = useState(() => {
    const saved = localStorage.getItem('size_app_values');
    return saved ? JSON.parse(saved) : { tops: 45, bottoms: 35, shoes: 28.0 };
  });

  useEffect(() => {
    localStorage.setItem('size_app_values', JSON.stringify(sizes));
  }, [sizes]);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      tg.setHeaderColor('#D2D238');
    }
  }, []);

  const handleTabChange = (newTab) => {
    const newIdx = tabs.indexOf(newTab);
    const oldIdx = tabs.indexOf(activeTab);
    if (newIdx === oldIdx) return;
    setDirection([newIdx, newIdx > oldIdx ? 1 : -1]);
    setActiveTab(newTab);
    setIsScrolled(false); 
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');
  };

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop > 30) setIsScrolled(true);
    else if (scrollTop <= 10) setIsScrolled(false);
  };

  const handleShare = (brandName, sizeData) => {
    const currentValue = sizes[activeTab];
    let mText = activeTab === 'tops' ? `полуобхвата груди (${currentValue} см)` : activeTab === 'bottoms' ? `полуобхвата талии (${currentValue} см)` : `стельки (${currentValue} см)`;
    let emoji = activeTab === 'tops' ? "👕" : activeTab === 'bottoms' ? "👖" : "👟";
    let sText = activeTab === 'shoes' ? `EU: ${sizeData.eu}, US: ${sizeData.us}, UK: ${sizeData.uk}` : `Международный: ${sizeData.int}, US: ${sizeData.us}, EU: ${sizeData.eu}`;

    const message = `⚡️⚡️⚡️ Размерчик подсказал\nПривет, вот замеры ${mText} для ${brandName}\n${emoji} ${sText}\n\nhttps://t.me/i_know_my_size_bot`;
    
    // Прямая ссылка шэринга (как работало вчера)
    const shareUrl = `https://t.me/share/url?text=${encodeURIComponent(message)}`;
    
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.HapticFeedback?.notificationOccurred('success');
      window.Telegram.WebApp.openTelegramLink(shareUrl);
    } else {
      window.open(shareUrl, '_blank');
    }
  };

  const currentCategory = sizeDatabase[activeTab];
  const fadeVariants = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 } };

  return (
    <div className="min-h-screen bg-[#D2D238] w-full flex flex-col relative overflow-hidden">
      <div className="flex-1 flex flex-col pt-4">
        
        <div className="px-5 mb-5 flex gap-2 shrink-0 z-50">
          <div className="flex-1 bg-black/10 rounded-full flex p-1 h-11 relative overflow-hidden">
            <motion.div className="absolute top-1 bottom-1 bg-black rounded-full" animate={{ left: `calc(${tabs.indexOf(activeTab) * 33.33}% + 4px)`, width: 'calc(33.33% - 8px)' }} transition={{ type: "spring", stiffness: 400, damping: 35 }} />
            {tabs.map((tab) => (
              <button key={tab} onClick={() => handleTabChange(tab)} className={`flex-1 z-10 text-[14px] font-black transition-colors duration-300 ${activeTab === tab ? 'text-[#D2D238]' : 'text-black/40'}`}>
                {tab === 'tops' ? 'Грудь' : tab === 'bottoms' ? 'Талия' : 'Стопа'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-[#F2F2F7] rounded-t-[32px] relative shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
          
          {/* СЛОЙ 1: РУЛЕТКА (z-10) */}
          <div className="absolute top-0 left-0 right-0 z-10 pt-8 px-4 pb-6 pointer-events-none">
            <motion.div 
                animate={{ opacity: isScrolled ? 0 : 1, scale: isScrolled ? 0.9 : 1, y: isScrolled ? -20 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto"
            >
                <p className="text-center text-[13px] font-black text-black/30 mb-[18px] uppercase tracking-widest leading-none">{currentCategory.title}</p>
                <RulerPicker key={activeTab} value={sizes[activeTab]} onChange={(val) => setSizes(prev => ({...prev, [activeTab]: val}))} min={currentCategory.range.min} max={currentCategory.range.max} step={currentCategory.range.step} />
            </motion.div>
          </div>

          {/* СЛОЙ 2: КАРТОЧКИ (z-20) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div 
                key={activeTab} 
                onScroll={handleScroll}
                className="absolute inset-0 overflow-y-auto scrollbar-hide px-4 pt-[155px] pb-10 space-y-3 pointer-events-auto"
              >
                {currentCategory.brands.map((brand, idx) => {
                  const size = activeTab === 'shoes' ? findNearestShoe(gender, sizes.shoes) : findNearestClothes(brand.sizes[gender], currentCategory.key, sizes[activeTab]);
                  return (
                    <div key={idx} className="bg-white rounded-[100px] p-4 flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] relative">
                      <div className="w-14 h-14 bg-[#CFCFC9] rounded-full flex items-center justify-center mr-4 shrink-0 overflow-hidden p-2">
                        <img src={brand.logo} className="w-full h-full object-contain" alt="logo" />
                      </div>
                      <div className="flex-1 flex pr-2 mt-[3px]">
                        <div className="flex-1 flex flex-col items-center">
                          <AnimatePresence mode="popLayout">
                            <motion.div key={activeTab === 'shoes' ? size.eu : size.int} variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.2 }} className="text-[24px] font-black text-[#838383] leading-none">
                              {activeTab === 'shoes' ? size.eu : size.int}
                            </motion.div>
                          </AnimatePresence>
                          <div className="text-[11px] font-bold text-black/20 uppercase mt-1">{activeTab === 'shoes' ? 'Eu' : 'Int'}</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <AnimatePresence mode="popLayout">
                            <motion.div key={size.us} variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.2 }} className="text-[24px] font-black text-[#838383] leading-none">
                              {size.us}
                            </motion.div>
                          </AnimatePresence>
                          <div className="text-[11px] font-bold text-black/20 uppercase mt-1">Us</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <AnimatePresence mode="popLayout">
                            <motion.div key={activeTab === 'shoes' ? size.uk : size.eu} variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.2 }} className="text-[24px] font-black text-[#838383] leading-none">
                              {activeTab === 'shoes' ? size.uk : size.eu}
                            </motion.div>
                          </AnimatePresence>
                          <div className="text-[11px] font-bold text-black/20 uppercase mt-1">{activeTab === 'shoes' ? 'Uk' : 'Eu'}</div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleShare(brand.name, size);
                        }} 
                        className="p-4 -mr-2 text-[#838383] opacity-40 active:opacity-100 transition-all shrink-0 relative z-[9999]"
                        style={{ touchAction: 'manipulation', cursor: 'pointer' }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}