import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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
      <div ref={emblaRef}><div className="flex items-center h-16">{steps.map((v, i) => (
        <div key={i} className="flex-[0_0_20%] shrink-0 flex justify-center items-center cursor-pointer" onClick={() => emblaApi?.scrollTo(i)}>
          <span className={`transition-all duration-300 font-black select-none ${v === value ? 'text-[42px] text-black' : 'text-[24px] text-gray-300'}`}>{v}</span>
        </div>
      ))}</div></div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-[#D2D238] text-[28px] font-bold leading-none select-none pointer-events-none">•</div>
    </div>
  );
};

const InfoScreen = ({ onClose }) => (
  <motion.div 
    initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} 
    transition={{ type: "spring", damping: 30, stiffness: 250 }}
    className="absolute inset-0 bg-[#F2F2F7] z-[200] flex flex-col overflow-hidden select-text"
  >
    <div className="p-5 flex items-center bg-white border-b border-black/5 shadow-sm shrink-0">
      <button onClick={onClose} className="flex items-center gap-2 active:opacity-50 transition-opacity">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <span className="text-[14px] font-bold text-black uppercase tracking-tight italic">закрыть</span>
      </button>
    </div>
    <div className="flex-1 overflow-y-auto px-6 py-8 space-y-10 scrollbar-hide pb-20">
      <section>
        <h3 className="text-black bg-white border-2 border-black inline-block px-2 py-1 text-sm font-black uppercase mb-3 italic">🛠️ О приложении</h3>
        <p className="text-black/70 leading-relaxed font-bold italic text-sm italic">
          Забудьте о «рулетке» с размерами и бесконечных возвратах. Мы создали этот инструмент, чтобы вы точно знали, какой размер брать у мировых брендов, не выходя из примерочной. 👟
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-black text-sm font-black uppercase border-b-2 border-black/10 pb-1 italic text-xs italic">💎 Почему «Размерчик»?</h3>
        <ul className="text-black/70 font-bold italic text-sm space-y-2">
          <li>✅ 30+ мировых брендов в единой базе.</li>
          <li>✅ Точность на основе ваших реальных замеров (см).</li>
          <li>✅ Один ввод данных — мгновенный результат по всем маркам.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-black text-sm font-black uppercase mb-3 border-b-2 border-black/10 pb-1 italic text-xs italic">👕 Грудь</h3>
        <p className="text-black/70 leading-relaxed font-bold italic text-sm italic">Измерьте расстояние от одной подмышки до другой на любимой вещи.</p>
      </section>

      <section>
        <h3 className="text-black text-sm font-black uppercase mb-3 border-b-2 border-black/10 pb-1 italic text-xs italic">👖 Талия</h3>
        <p className="text-black/70 leading-relaxed font-bold italic text-sm italic">Замеряется пояс удобных джинсов от края до края.</p>
      </section>

      <div className="pt-10 pb-10 text-center opacity-20 font-black text-xs uppercase tracking-widest italic text-black">Размерчик v1.9</div>
    </div>
  </motion.div>
);

export default function App() {
  const tabs = ['tops', 'bottoms', 'shoes'];
  const [activeTab, setActiveTab] = useState('tops'); 
  const [[currentIndex, direction], setDirection] = useState([0, 0]); 
  const [gender, setGender] = useState('male'); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showMenu, setShowMenu] = useState(false); 
  const menuRef = useRef(null);
  
  const [sizes, setSizes] = useState(() => {
    const saved = localStorage.getItem('size_app_values');
    return saved ? JSON.parse(saved) : { tops: 45, bottoms: 35, shoes: 28.0 };
  });

  useEffect(() => { localStorage.setItem('size_app_values', JSON.stringify(sizes)); }, [sizes]);
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) { tg.ready(); tg.expand(); tg.setHeaderColor('#D2D238'); }
    const handleClickOutside = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setShowMenu(false); };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTabChange = (newTab) => {
    const newIdx = tabs.indexOf(newTab);
    const oldIdx = tabs.indexOf(activeTab);
    if (newIdx === oldIdx) return;
    setDirection([newIdx, newIdx > oldIdx ? 1 : -1]);
    setActiveTab(newTab);
    setIsScrolled(false); 
    window.Telegram?.WebApp?.HapticFeedback?.selectionChanged();
  };

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop > 30) setIsScrolled(true);
    else if (scrollTop <= 10) setIsScrolled(false);
  };

  const handleShare = (brandName, sizeData) => {
    const currentValue = sizes[activeTab];
    let mText = activeTab === 'tops' ? `груди (${currentValue} см)` : activeTab === 'bottoms' ? `талии (${currentValue} см)` : `стельки (${currentValue} см)`;
    let sText = activeTab === 'shoes' ? `EU: ${sizeData.eu}, US: ${sizeData.us}` : `Int: ${sizeData.int}, US: ${sizeData.us}, EU: ${sizeData.eu}`;
    const message = `⚡️ Размерчик подсказал замеры ${mText} для ${brandName}: ${sText}\n\nhttps://t.me/i_know_my_size_bot`;
    const shareUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(message)}`;
    if (window.Telegram?.WebApp) { window.Telegram.WebApp.openTelegramLink(shareUrl); } else { window.open(shareUrl, '_blank'); }
  };

  const currentCategory = sizeDatabase[activeTab];
  const cardVariants = { enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }), center: { x: 0, opacity: 1 }, exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0 }) };
  const fadeVariants = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 } };

  return (
    <div className="min-h-screen bg-[#D2D238] w-full flex flex-col relative overflow-hidden font-sans">
      <AnimatePresence>{showInfo && <InfoScreen onClose={() => setShowInfo(false)} />}</AnimatePresence>
      
      <div className="flex-1 flex flex-col pt-4">
        <div className="px-5 mb-5 flex gap-2 shrink-0 z-50 relative">
          <div className="flex-1 bg-black/10 rounded-full flex p-1 h-11 relative overflow-hidden">
            <motion.div className="absolute top-1 bottom-1 bg-black rounded-full" animate={{ left: `calc(${tabs.indexOf(activeTab) * 33.33}% + 4px)`, width: 'calc(33.33% - 8px)' }} transition={{ type: "spring", stiffness: 400, damping: 35 }} />
            {tabs.map((tab) => (
              <button key={tab} onClick={() => handleTabChange(tab)} className={`flex-1 z-10 text-[14px] font-black transition-colors duration-300 ${activeTab === tab ? 'text-[#D2D238]' : 'text-black/40'}`}>
                {tab === 'tops' ? 'Грудь' : tab === 'bottoms' ? 'Талия' : 'Стопа'}
              </button>
            ))}
          </div>
          
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => { setShowMenu(!showMenu); window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light'); }} 
              className={`w-11 h-11 rounded-full flex items-center justify-center border border-black/5 active:scale-95 transition-all ${showMenu ? 'bg-black text-[#D2D238]' : 'bg-black/10 text-black'}`}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>

            <AnimatePresence>
              {showMenu && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: -10, x: 20 }} animate={{ opacity: 1, scale: 1, y: 0, x: 0 }} exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  className="absolute top-14 right-0 w-48 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-black/5 z-[100] overflow-hidden"
                >
                  <button onClick={() => { setGender('male'); setShowMenu(false); }} className={`w-full px-5 py-3.5 text-left text-[14px] font-bold flex items-center justify-between active:bg-black/5 ${gender === 'male' ? 'text-black' : 'text-black/40'}`}>
                    <span>Я мужчина</span>
                    {gender === 'male' && <div className="w-2 h-2 rounded-full bg-[#D2D238]" />}
                  </button>
                  <div className="h-[1px] bg-black/5 mx-2" />
                  <button onClick={() => { setGender('female'); setShowMenu(false); }} className={`w-full px-5 py-3.5 text-left text-[14px] font-bold flex items-center justify-between active:bg-black/5 ${gender === 'female' ? 'text-black' : 'text-black/40'}`}>
                    <span>Я женщина</span>
                    {gender === 'female' && <div className="w-2 h-2 rounded-full bg-[#D2D238]" />}
                  </button>
                  <div className="h-[1px] bg-black/5 mx-2" />
                  <button onClick={() => { setShowInfo(true); setShowMenu(false); }} className="w-full px-5 py-3.5 text-left text-[14px] font-bold text-black active:bg-black/5">
                    Полезное
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex-1 bg-[#F2F2F7] rounded-t-[32px] relative shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className={`absolute top-0 left-0 right-0 z-30 pt-8 px-4 pb-6 h-[155px] pointer-events-none`}>
            <motion.div animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -20 : 0 }} transition={{ duration: 0.4 }} className={`${isScrolled ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                <p className="text-center text-[13px] font-black text-black/30 mb-[18px] uppercase tracking-widest leading-none italic">{currentCategory.title}</p>
                <RulerPicker key={activeTab} value={sizes[activeTab]} onChange={(val) => setSizes(prev => ({...prev, [activeTab]: val}))} min={currentCategory.range.min} max={currentCategory.range.max} step={currentCategory.range.step} />
            </motion.div>
          </div>
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div 
                key={activeTab} custom={direction} variants={cardVariants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 350, damping: 35 }, opacity: { duration: 0.2 } }}
                onScroll={handleScroll} className="absolute inset-0 overflow-y-auto scrollbar-hide px-4 pt-[155px] pb-10 space-y-3 pointer-events-auto"
              >
                {currentCategory.brands.map((brand, idx) => {
                  const size = activeTab === 'shoes' ? findNearestShoe(gender, sizes.shoes) : findNearestClothes(brand.sizes[gender], currentCategory.key, sizes[activeTab]);
                  return (
                    <div key={idx} className="bg-white rounded-[100px] p-4 flex items-center shadow-[0_2px_8_rgba(0,0,0,0.03)] relative">
                      <div className="w-14 h-14 mr-4 shrink-0 overflow-hidden flex items-center justify-center">
                        <img src={brand.logo} className="w-full h-full object-contain" alt={brand.name} />
                      </div>
                      <div className="flex-1 flex pr-2 mt-[3px]">
                        <div className="flex-1 flex flex-col items-center">
                          <AnimatePresence mode="popLayout"><motion.div key={activeTab === 'shoes' ? size.eu : size.int} variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.2 }} className="text-[24px] font-black text-[#838383] leading-none">{activeTab === 'shoes' ? size.eu : size.int}</motion.div></AnimatePresence>
                          <div className="text-[11px] font-bold text-black/20 uppercase mt-1 italic">{activeTab === 'shoes' ? 'Eu' : 'Int'}</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <AnimatePresence mode="popLayout"><motion.div key={size.us} variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.2 }} className="text-[24px] font-black text-[#838383] leading-none">{size.us}</motion.div></AnimatePresence>
                          <div className="text-[11px] font-bold text-black/20 uppercase mt-1 italic">Us</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <AnimatePresence mode="popLayout"><motion.div key={activeTab === 'shoes' ? size.uk : size.eu} variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.2 }} className="text-[24px] font-black text-[#838383] leading-none">{activeTab === 'shoes' ? size.uk : size.eu}</motion.div></AnimatePresence>
                          <div className="text-[11px] font-bold text-black/20 uppercase mt-1 italic">{activeTab === 'shoes' ? 'Uk' : 'Eu'}</div>
                        </div>
                      </div>
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShare(brand.name, size); }} className="p-4 -mr-2 text-[#838383] opacity-40 active:opacity-100 transition-all shrink-0 relative z-[99]">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
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