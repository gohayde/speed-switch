import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Gauge, Zap, Cog, Repeat, User } from 'lucide-react';

const WHATSAPP_NUMBER = "971521430808";
const INCLUDED_TERMS = [
  "Comprehensive insurance included",
  "Standard mileage included",
  "Free Dubai hotel or residence delivery",
];

interface CarData {
  id: string;
  name: string;
  image: string;
  pricePerDay: number;
  currency: string;
  stats: {
    topSpeed: string;
    horsepower: string;
    engine: string;
    transmission: string;
    seats: string;
  };
  whatsappMessage: string;
  details: {
    title: string;
    description: string;
    price: string;
    features: string[];
    requirements: string[];
  };
}

const cars: CarData[] = [
  {
    id: "lamborghini-urus",
    name: "Lamborghini Urus",
    image: "/assets/hero-car.png",
    pricePerDay: 2200,
    currency: "AED",
    stats: { topSpeed: "300 km/h", horsepower: "650 HP", engine: "V8 Engine", transmission: "Automatic", seats: "4 Seater" },
    whatsappMessage: "Hi, I want to book the Lamborghini Urus.",
    details: {
      title: "Lamborghini Urus",
      description: "A luxury performance SUV with aggressive styling, premium comfort, and powerful road presence. The perfect blend of a super sports car soul with SUV functionality.",
      price: "AED 2,200 /day",
      features: [
        "High performance twin-turbo V8 engine",
        "Immaculate premium leather interior",
        "Perfect for cruising Dubai's highways and streets",
        "Available for daily and flexible weekly rental",
        ...INCLUDED_TERMS,
      ],
      requirements: [
        "Valid driving license (International for tourists)",
        "Emirates ID or Passport copy with visa entry page",
        "Refundable security deposit confirmed before handover"
      ]
    }
  },
  {
    id: "audi-rs3",
    name: "Audi RS3 Sedan",
    image: "/assets/audi-rs3.png",
    pricePerDay: 600,
    currency: "AED",
    stats: { topSpeed: "290 km/h", horsepower: "400 HP", engine: "2.5L TFSI", transmission: "Automatic", seats: "5 Seater" },
    whatsappMessage: "Hi, I want to book the Audi RS3.",
    details: {
      title: "Audi RS3 Sedan",
      description: "The ultimate high-performance compact sedan, delivering blistering acceleration, razor-sharp handling, and aggressive motorsport styling. Legendary five-cylinder performance in a refined package.",
      price: "AED 600 /day",
      features: [
        "Iconic 2.5L inline 5-cylinder turbocharged engine",
        "Quattro intelligent all-wheel-drive system",
        "Aggressive RS honeycomb grille and styling details",
        "Audi Virtual Cockpit Plus with RS-specific layouts",
        ...INCLUDED_TERMS,
      ],
      requirements: [
        "Valid driving license (International for tourists)",
        "Emirates ID or Passport copy with visa entry page",
        "Refundable security deposit confirmed before handover"
      ]
    }
  },
  {
    id: "g63-brabus",
    name: "Mercedes G63 Brabus 800",
    image: "/assets/g63-brabus.png",
    pricePerDay: 2500,
    currency: "AED",
    stats: { topSpeed: "240 km/h", horsepower: "800 HP", engine: "V8 Biturbo", transmission: "Automatic", seats: "5 Seater" },
    whatsappMessage: "Hi, I want to book the G63 Brabus.",
    details: {
      title: "Mercedes G63 Brabus 800",
      description: "A heavily tuned, high-status luxury SUV combining legendary military-grade off-road heritage with brute-force performance and extreme carbon aerodynamic enhancements.",
      price: "AED 2,500 /day",
      features: [
        "Brabus 800 HP power enhancement and tuning pack",
        "Aggressive carbon fiber widebody aerodynamic styling",
        "Sport valved exhaust system with sidepipe signature exit",
        "Custom premium quilted leather comfort interior",
        ...INCLUDED_TERMS,
      ],
      requirements: [
        "Valid driving license (International for tourists)",
        "Emirates ID or Passport copy with visa entry page",
        "Refundable security deposit confirmed before handover"
      ]
    }
  }
];

export default function PickYourCar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reduce = useReducedMotion();

  const activeCar = cars[activeIndex];
  const prevIndex = (activeIndex - 1 + cars.length) % cars.length;
  const nextIndex = (activeIndex + 1) % cars.length;

  const handleNext = () => {
    setDirection('next');
    setActiveIndex((prev) => (prev + 1) % cars.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const handleSelectCar = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
  };

  const closeModal = () => setIsModalOpen(false);

  const headingVariants: any = {
    hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 16 },
    visible: {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const STATS = [
    { icon: <Gauge size={15} strokeWidth={1.6} />,  value: activeCar.stats.topSpeed },
    { icon: <Zap size={15} strokeWidth={1.6} />,    value: activeCar.stats.horsepower },
    { icon: <Cog size={15} strokeWidth={1.6} />,    value: activeCar.stats.engine },
    { icon: <Repeat size={15} strokeWidth={1.6} />, value: activeCar.stats.transmission },
    { icon: <User size={15} strokeWidth={1.6} />,   value: activeCar.stats.seats },
  ];

  const MODAL_STATS = [
    { icon: <Gauge size={14} strokeWidth={1.6} />,  label: 'Top Speed',    val: activeCar.stats.topSpeed },
    { icon: <Zap size={14} strokeWidth={1.6} />,    label: 'Horsepower',   val: activeCar.stats.horsepower },
    { icon: <Cog size={14} strokeWidth={1.6} />,    label: 'Engine',       val: activeCar.stats.engine },
    { icon: <Repeat size={14} strokeWidth={1.6} />, label: 'Transmission', val: activeCar.stats.transmission },
    { icon: <User size={14} strokeWidth={1.6} />,   label: 'Seats',        val: activeCar.stats.seats },
  ];

  return (
    <section id="vehicles" className="relative pt-16 pb-16 overflow-x-hidden" style={{ background: 'oklch(11% 0.007 82)' }}>
      {/* Ambient glow */}
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[380px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(207,166,74,0.14), transparent 70%)' }}
      />

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="font-extrabold uppercase text-white leading-[0.92] text-center mb-10 font-display"
          style={{ fontSize: 'clamp(38px,5.2vw,72px)', letterSpacing: '-0.02em', textWrap: 'balance' } as React.CSSProperties}
          variants={reduce ? undefined : headingVariants}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
        >
          PICK YOUR DREAM<br />CAR TODAY
        </motion.h2>

        {/* ── Carousel ── */}
        <div className="relative max-w-[1000px] mx-auto">
          <motion.div
            className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] select-none"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            dragSnapToOrigin
            onDragEnd={(_, info) => {
              if (info.velocity.x < -300 || info.offset.x < -60) handleNext();
              else if (info.velocity.x > 300 || info.offset.x > 60) handlePrev();
            }}
          >
            {/* Left ghost car */}
            <div
              onClick={() => handleSelectCar(prevIndex)}
              className="absolute left-0 top-0 bottom-0 w-[22%] flex items-center justify-center cursor-pointer pointer-events-auto z-10"
              style={{ opacity: 0.18 }}
            >
              <img
                src={cars[prevIndex].image}
                alt=""
                className="w-full h-full object-contain"
                style={{ transform: 'scale(0.72)' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            {/* Center car — fixed container, absolute children so position never shifts */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[56%] z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCar.id}
                  initial={{
                    opacity: 0,
                    x: direction === 'next' ? 60 : direction === 'prev' ? -60 : 0,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: direction === 'next' ? -60 : direction === 'prev' ? 60 : 0,
                  }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.img
                    layoutId={`car-img-${activeCar.id}`}
                    src={activeCar.image}
                    alt={activeCar.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
                    transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right ghost car */}
            <div
              onClick={() => handleSelectCar(nextIndex)}
              className="absolute right-0 top-0 bottom-0 w-[22%] flex items-center justify-center cursor-pointer pointer-events-auto z-10"
              style={{ opacity: 0.18 }}
            >
              <img
                src={cars[nextIndex].image}
                alt=""
                className="w-full h-full object-contain"
                style={{ transform: 'scale(0.72)' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </motion.div>

          {/* Car name */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeCar.id + '-name'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="text-white/60 text-[13px] font-semibold tracking-widest uppercase mt-2 mb-5"
            >
              {activeCar.name}
            </motion.p>
          </AnimatePresence>

          {/* Nav + dots */}
          <div className="flex items-center justify-center gap-5 mb-8">
            <button
              onClick={handlePrev}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-white/40 hover:border-white/40 hover:text-white/80 active:scale-90 transition-all duration-150 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={14} strokeWidth={2} />
            </button>

            <div className="flex items-center gap-2">
              {cars.map((car, index) => (
                <button
                  key={car.id}
                  onClick={() => handleSelectCar(index)}
                  className="h-6 flex items-center px-0.5 cursor-pointer"
                  aria-label={`Select ${car.name}`}
                >
                  <span className={`block h-[3px] rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#CFA64A] w-7' : 'w-[5px] bg-white/20 hover:bg-white/40'
                  }`} />
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#CFA64A] text-black hover:bg-[#b8913d] active:scale-90 transition-all duration-150 cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={14} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ── Stats strip — icon + value only, no label ── */}
        <div className="relative z-10 max-w-[600px] mx-auto px-4 mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCar.id + '-stats'}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.22 }}
              className="flex items-center justify-between"
            >
              {STATS.map(({ icon, value }, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                  {i > 0 && (
                    <div className="absolute" />
                  )}
                  <div className="text-[#CFA64A]/60">{icon}</div>
                  <span className="text-[12px] sm:text-[13px] font-bold text-white/80 leading-none whitespace-nowrap">{value}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Subtle dividers between stats */}
          <div className="absolute inset-y-0 left-4 right-4 flex pointer-events-none" aria-hidden>
            {[1,2,3,4].map(i => (
              <div key={i} className="flex-1 border-r border-white/[0.06] last:border-r-0" />
            ))}
          </div>
        </div>

        {/* ── Price / action bar ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCar.id + '-bar'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 max-w-[640px] mx-auto bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] px-5 py-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            {/* Price */}
            <div className="text-left w-full sm:w-auto">
              <span className="block text-[9px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-0.5">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="text-[26px] font-black text-[#111] leading-none tracking-tight">AED {activeCar.pricePerDay.toLocaleString()}</span>
                <span className="text-[11px] font-medium text-gray-400 ml-0.5">/ day</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activeCar.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-5 py-[11px] rounded-xl bg-[#CFA64A] hover:bg-[#b8913d] text-white font-bold text-[11px] tracking-[0.12em] uppercase transition-all duration-200 cursor-pointer active:scale-95 text-center shadow-[0_4px_14px_rgba(207,166,74,0.3)]"
              >
                Book Now
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 sm:flex-none px-5 py-[11px] rounded-xl border border-[#111]/15 hover:border-[#111]/30 bg-transparent text-[#111] font-bold text-[11px] tracking-[0.12em] uppercase transition-all duration-200 cursor-pointer active:scale-95"
              >
                View Details
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Details modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCar.name} details`}
            onKeyDown={(e) => { if (e.key === 'Escape') closeModal(); }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/55 backdrop-blur-[3px] cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[88vh] overflow-y-auto relative z-10 border border-black/[0.05] text-left"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-black transition-all cursor-pointer z-20 active:scale-95"
                aria-label="Close"
              >
                <X size={15} />
              </button>

              <div className="p-5 md:p-7">
                <div className="mb-5">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight mt-0.5 font-display">
                    {activeCar.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-6">
                  <div
                    className="rounded-xl p-3 flex items-center justify-center aspect-[4/3] relative overflow-hidden border border-black/[0.04]"
                    style={{ background: 'oklch(14% 0.007 82)' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#CFA64A]/5 to-transparent pointer-events-none" />
                    <motion.img
                      layoutId={`car-img-${activeCar.id}`}
                      src={activeCar.image}
                      alt={activeCar.name}
                      className="max-w-full max-h-full object-contain"
                      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                    />
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                      {activeCar.details.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {MODAL_STATS.map(({ icon, label, val }) => (
                        <div key={label} className="bg-gray-50 rounded-lg p-2.5 border border-black/[0.04] flex items-center gap-2.5">
                          <span className="text-[#CFA64A] shrink-0">{icon}</span>
                          <div>
                            <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">{label}</span>
                            <span className="text-[11px] font-extrabold text-gray-800 leading-none">{val}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-3">
                      <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider block">Daily Rental Rate</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-black text-[#1A1A1A]">AED {activeCar.pricePerDay.toLocaleString()}</span>
                        <span className="text-xs font-medium text-gray-400">/ day</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-5 mb-5">
                  <div>
                    <h4 className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-1 h-3 rounded-sm bg-[#CFA64A]" /> Key Features
                    </h4>
                    <ul className="space-y-2">
                      {activeCar.details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11.5px] text-gray-600 leading-normal">
                          <span className="text-[#CFA64A] font-bold shrink-0 mt-px">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-1 h-3 rounded-sm bg-[#CFA64A]" /> Requirements
                    </h4>
                    <ul className="space-y-2">
                      {activeCar.details.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11.5px] text-gray-600 leading-normal">
                          <span className="text-[#CFA64A] font-bold shrink-0 mt-px">→</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-[10px] text-gray-400 leading-relaxed text-center sm:text-left max-w-xs">
                    Rate includes insurance, standard mileage, and free Dubai delivery.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activeCar.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#CFA64A] hover:bg-[#b8913d] text-white font-bold text-[11px] tracking-[0.12em] uppercase transition-all duration-200 shadow-[0_4px_14px_rgba(207,166,74,0.3)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    Book Now on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
