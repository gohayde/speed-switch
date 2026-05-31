import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, animate } from 'framer-motion';
import { X, Gauge, Zap, Cog, Repeat, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const WHATSAPP_NUMBER = "971521430808";

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
    image: "/assets/hero-car.webp",
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
        "Available for daily and flexible weekly rental"
      ],
      requirements: [
        "Valid driving licence (UAE or international)",
        "Emirates ID or Passport copy with visa entry page",
        "Refundable security deposit confirmed before handover"
      ]
    }
  },
  {
    id: "bentley-bentayga",
    name: "Bentley Bentayga V8",
    image: "/assets/bentley.webp",
    pricePerDay: 2400,
    currency: "AED",
    stats: { topSpeed: "290 km/h", horsepower: "550 HP", engine: "V8 Biturbo", transmission: "Automatic", seats: "5 Seater" },
    whatsappMessage: "Hi, I want to book the Bentley Bentayga V8.",
    details: {
      title: "Bentley Bentayga V8",
      description: "Bentley's benchmark SUV: brute twin-scroll power wrapped in handcrafted Mulliner leather. Effortless across the city, commanding on the highway.",
      price: "AED 2,400 /day",
      features: [
        "Handcrafted Mulliner premium leather interior",
        "Effortless twin-scroll turbocharged V8 performance",
        "Bentley Dynamic Ride active roll control system",
        "Naim premium surround sound audio system"
      ],
      requirements: [
        "Valid driving licence (UAE or international)",
        "Emirates ID or Passport copy with visa entry page",
        "Refundable security deposit confirmed before handover"
      ]
    }
  },
  {
    id: "audi-rs3",
    name: "Audi RS3 Sedan",
    image: "/assets/audi-rs3.webp",
    pricePerDay: 600,
    currency: "AED",
    stats: { topSpeed: "290 km/h", horsepower: "400 HP", engine: "2.5L TFSI", transmission: "Automatic", seats: "5 Seater" },
    whatsappMessage: "Hi, I want to book the Audi RS3.",
    details: {
      title: "Audi RS3 Sedan",
      description: "Four hundred horsepower through a 2.5L five-cylinder, Quattro all-wheel drive, and motorsport-derived handling in a compact sedan. The RS3 is the sharpest car in its class.",
      price: "AED 600 /day",
      features: [
        "Iconic 2.5L inline 5-cylinder turbocharged engine",
        "Quattro intelligent all-wheel-drive system",
        "Aggressive RS honeycomb grille and styling details",
        "Audi Virtual Cockpit Plus with RS-specific layouts"
      ],
      requirements: [
        "Valid driving licence (UAE or international)",
        "Emirates ID or Passport copy with visa entry page",
        "Refundable security deposit confirmed before handover"
      ]
    }
  },
  {
    id: "g63-brabus",
    name: "Mercedes G63 Brabus 800",
    image: "/assets/g63-brabus.webp",
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
        "Custom premium quilted leather comfort interior"
      ],
      requirements: [
        "Valid driving licence (UAE or international)",
        "Emirates ID or Passport copy with visa entry page",
        "Refundable security deposit confirmed before handover"
      ]
    }
  }
];

export default function PickYourCar() {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reduce = useReducedMotion();

  const activeCar = cars[activeIndex];
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSelectCar = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const openModal = (e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (triggerRef.current) {
      setTimeout(() => triggerRef.current?.focus(), 50);
    }
  };

  // Keyboard navigation inside the active Modal (Tab-trapping & Focus restore)
  const handleModalKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }
    if (e.key === 'Tab') {
      if (!modalRef.current) return;
      const focusables = modalRef.current.querySelectorAll<HTMLElement>(
        'button, a, [tabindex="0"]'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      // Set active focus on close button or modal container initially
      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector('button[aria-label^="Close"]');
        if (closeBtn) {
          (closeBtn as HTMLElement).focus();
        } else {
          modalRef.current?.focus();
        }
      }, 80);
    }
  }, [isModalOpen]);

  const trackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackX = useMotionValue(0);
  const lastWheelTime = useRef(0);

  const SLIDE_W = 0.74; // fraction of container width each slide occupies

  const getOffset = (index: number, containerWidth: number) => {
    const slideWidth = containerWidth * SLIDE_W;
    const centerPad = (containerWidth * (1 - SLIDE_W)) / 2;
    return -(index * slideWidth) + centerPad;
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    animate(trackX, getOffset(activeIndex, w), { type: 'spring', stiffness: 320, damping: 36, mass: 0.8 });
  }, [activeIndex]);

  // Non-passive wheel listener so we can preventDefault and stop page scroll
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8) return;
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 450) return;
      lastWheelTime.current = now;
      if (e.deltaY > 0) {
        setActiveIndex(prev => (prev + 1) % cars.length);
      } else {
        setActiveIndex(prev => (prev - 1 + cars.length) % cars.length);
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const handleDragEnd = (_: any, info: any) => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    const slideWidth = w * SLIDE_W;
    const centerPad = (w * (1 - SLIDE_W)) / 2;
    const current = trackX.get() - centerPad;
    let targetIndex = Math.round(-current / slideWidth);
    if (info.velocity.x < -200) targetIndex = Math.min(activeIndex + 1, cars.length - 1);
    if (info.velocity.x > 200) targetIndex = Math.max(activeIndex - 1, 0);
    targetIndex = Math.max(0, Math.min(cars.length - 1, targetIndex));
    if (targetIndex !== activeIndex) {
      setActiveIndex(targetIndex);
    } else {
      animate(trackX, getOffset(activeIndex, w), { type: 'spring', stiffness: 400, damping: 40 });
    }
  };

  const headingVariants: any = {
    hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 16 },
    visible: {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Dynamically translate car values
  const getTranslatedCar = (car: CarData): CarData => {
    if (language !== 'ar') {
      // Inject standard terms for English
      return {
        ...car,
        details: {
          ...car.details,
          features: [...car.details.features, "Comprehensive insurance included", "Standard mileage included", "Free Dubai hotel or residence delivery"]
        }
      };
    }

    const translationsAR: Record<string, Partial<CarData>> = {
      "lamborghini-urus": {
        name: "لامبورغيني أوروس",
        stats: { topSpeed: "٣٠٠ كم/س", horsepower: "٦٥٠ حصان", engine: "محرك V8 ثنائي التوربو", transmission: "أوتوماتيك", seats: "٤ مقاعد" },
        whatsappMessage: "مرحباً، أود حجز سيارة لامبورغيني أوروس.",
        details: {
          title: "لامبورغيني أوروس",
          description: "سيارة دفع رباعي رياضية فائقة الأداء تجمع بين هيبة سيارات السوبر سبورت والحضور الطاغي مع مستويات راحة فاخرة. تجسيد مثالي للأداء الجبار والموثوقية المطلقة.",
          price: "٢,٢٠٠ درهم / يوم",
          features: [
            "محرك V8 ثنائي التوربو فائق الأداء والسرعة",
            "مقصورة داخلية من الجلد الطبيعي الفاخر بالكامل",
            "مثالية للتنقل في طرق وشوارع دبي السريعة والأنيقة",
            "متاحة للتأجير اليومي والتأجير الأسبوعي المرن",
            "تأمين شامل متكامل",
            "المسافة المقطوعة القياسية مشمولة",
            "توصيل مجاني للفنادق والمنازل في دبي"
          ],
          requirements: [
            "رخصة قيادة سارية المفعول (إماراتية أو دولية معترف بها)",
            "بطاقة الهوية الإماراتية أو نسخة جواز السفر مع صفحة تأشيرة الدخول",
            "مبلغ تأمين مسترد يتم تأكيده قبل عملية الاستلام"
          ]
        }
      },
      "bentley-bentayga": {
        name: "بنتلي بينتايغا V8",
        stats: { topSpeed: "٢٩٠ كم/س", horsepower: "٥٥٠ حصان", engine: "V8 ثنائي التوربو", transmission: "أوتوماتيك", seats: "٥ مقاعد" },
        whatsappMessage: "مرحباً، أود حجز سيارة بنتلي بينتايغا V8.",
        details: {
          title: "بنتلي بينتايغا V8",
          description: "المرجع الفاخر لسيارات الدفع الرباعي الرياضية: قوة جبارة مغلفة بجلد مولينير الفاخر والمصنوع يدوياً بدقة فائقة. أداء مذهل وحضور راقٍ ومهيب.",
          price: "٢,٤٠٠ درهم / يوم",
          features: [
            "جلد مولينير الفاخر والمصنوع يدوياً بالكامل بدقة متناهية",
            "أداء فائق واستجابة مذهلة بمحرك V8 ثنائي التوربو",
            "نظام التحكم النشط بالثبات والالتفاف الذكي",
            "نظام صوتي محيطي فاخر للغاية من Naim",
            "تأمين شامل متكامل",
            "المسافة المقطوعة القياسية مشمولة",
            "توصيل مجاني للفنادق والمنازل في دبي"
          ],
          requirements: [
            "رخصة قيادة سارية المفعول (إماراتية أو دولية معترف بها)",
            "بطاقة الهوية الإماراتية أو نسخة جواز السفر مع صفحة تأشيرة الدخول",
            "مبلغ تأمين مسترد يتم تأكيده قبل عملية الاستلام"
          ]
        }
      },
      "audi-rs3": {
        name: "أودي RS3 سيدان",
        stats: { topSpeed: "٢٩٠ كم/س", horsepower: "٤٠٠ حصان", engine: "٢.٥ لتر TFSI أسطوري", transmission: "أوتوماتيك", seats: "٥ مقاعد" },
        whatsappMessage: "مرحباً، أود حجز سيارة أودي RS3.",
        details: {
          title: "أودي RS3 سيدان",
          description: "أربعمائة حصان جامح مستمد من محرك 5 أسطوانات، مع نظام دفع كواترو الرياضي الذكي، لتوفر تجربة قيادة رياضية لا مثيل لها في فئتها المدمجة.",
          price: "٦٠٠ درهم / يوم",
          features: [
            "محرك أسطوري توربو 5 أسطوانات حائز على جوائز عالمية",
            "نظام كواترو (Quattro) للدفع الرباعي الذكي فائق الثبات",
            "شبكة أمامية هجومية وفتحات تهوية بتصميم RS الرياضي",
            "شاشة أودي الرقمية بالكامل مع واجهة معلومات RS الخاصة بالسباق",
            "تأمين شامل متكامل",
            "المسافة المقطوعة القياسية مشمولة",
            "توصيل مجاني للفنادق والمنازل في دبي"
          ],
          requirements: [
            "رخصة قيادة سارية المفعول (إماراتية أو دولية معترف بها)",
            "بطاقة الهوية الإماراتية أو نسخة جواز السفر مع صفحة تأشيرة الدخول",
            "مبلغ تأمين مسترد يتم تأكيده قبل عملية الاستلام"
          ]
        }
      },
      "g63-brabus": {
        name: "مرسيدس G63 برابوس 800",
        stats: { topSpeed: "٢٤٠ كم/س", horsepower: "٨٠٠ حصان", engine: "V8 ثنائي التوربو معدل", transmission: "أوتوماتيك", seats: "٥ مقاعد" },
        whatsappMessage: "مرحباً، أود حجز سيارة مرسيدس G63 برابوس 800.",
        details: {
          title: "مرسيدس G63 برابوس 800",
          description: "القوة المطلقة والهيبة المطلقة؛ دمج مثالي لإرث الفئة G الأسطوري مع تعديلات برابوس الحصرية بقوة 800 حصان وأجزاء ألياف الكربون فائقة الخفة.",
          price: "٢,٥٠٠ درهم / يوم",
          features: [
            "محرك برابوس 800 حصان معدل لتقديم عزم دوران مرعب",
            "هيكل عريض هجومي مع حزمة تعديل برابوس الخارجية من الكاربون فايبر",
            "نظام عادم رياضي ذكي بفتحات جانبية مميزة الصوت الجبار",
            "مقصورة حصرية فاخرة من الجلد المبطن عالي الفخامة",
            "تأمين شامل متكامل",
            "المسافة المقطوعة القياسية مشمولة",
            "توصيل مجاني للفنادق والمنازل في دبي"
          ],
          requirements: [
            "رخصة قيادة سارية المفعول (إماراتية أو دولية معترف بها)",
            "بطاقة الهوية الإماراتية أو نسخة جواز السفر مع صفحة تأشيرة الدخول",
            "مبلغ تأمين مسترد يتم تأكيده قبل عملية الاستلام"
          ]
        }
      }
    };

    const tr = translationsAR[car.id];
    return tr ? { ...car, ...tr } as CarData : car;
  };

  const activeCarTranslated = getTranslatedCar(activeCar);

  const STATS = [
    { icon: <Gauge size={24} strokeWidth={1.5} />,  value: activeCarTranslated.stats.topSpeed },
    { icon: <Zap size={24} strokeWidth={1.5} />,    value: activeCarTranslated.stats.horsepower },
    { icon: <Cog size={24} strokeWidth={1.5} />,    value: activeCarTranslated.stats.engine },
    { icon: <Repeat size={24} strokeWidth={1.5} />, value: activeCarTranslated.stats.transmission },
    { icon: <User size={24} strokeWidth={1.5} />,   value: activeCarTranslated.stats.seats },
  ];

  const MODAL_STATS = [
    { icon: <Gauge size={18} strokeWidth={1.5} />,  label: language === 'ar' ? 'السرعة القصوى' : 'Top Speed',    val: activeCarTranslated.stats.topSpeed },
    { icon: <Zap size={18} strokeWidth={1.5} />,    label: language === 'ar' ? 'القوة الحصانية' : 'Horsepower',   val: activeCarTranslated.stats.horsepower },
    { icon: <Cog size={18} strokeWidth={1.5} />,    label: language === 'ar' ? 'المحرك' : 'Engine',       val: activeCarTranslated.stats.engine },
    { icon: <Repeat size={18} strokeWidth={1.5} />, label: language === 'ar' ? 'ناقل الحركة' : 'Transmission', val: activeCarTranslated.stats.transmission },
    { icon: <User size={18} strokeWidth={1.5} />,   label: language === 'ar' ? 'المقاعد' : 'Seats',        val: activeCarTranslated.stats.seats },
  ];

  return (
    <section id="vehicles" className="relative pt-4 pb-8 overflow-hidden" style={{ background: '#F7BF35' }}>
      {/* Vertical dot navigator — right edge / left edge in RTL */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
        style={{ right: '16px' }}
      >
        {cars.map((car, i) => (
          <button
            key={car.id}
            onClick={() => handleSelectCar(i)}
            aria-label={`Go to ${getTranslatedCar(car).name}`}
            className="flex items-center justify-center w-11 h-11 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111215]/40 rounded-full"
          >
            <span
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 10 : 7,
                height: i === activeIndex ? 10 : 7,
                background: i === activeIndex ? '#111215' : 'rgba(17,18,21,0.3)',
                boxShadow: i === activeIndex ? '0 0 0 3px rgba(17,18,21,0.15)' : 'none',
              }}
            />
          </button>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pr-10 md:pr-16 rtl:pl-10 rtl:pr-4 md:rtl:pl-16 md:rtl:pr-4">

        {/* Eyebrow and Headline */}
        <motion.h2
          className="font-extrabold uppercase text-[#111215] leading-[0.88] text-center mb-6 font-display flex flex-col items-center gap-3"
          style={{ fontSize: 'clamp(36px,4.4vw,62px)', letterSpacing: '-0.025em', textWrap: 'balance' } as React.CSSProperties}
          variants={reduce ? undefined : headingVariants}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span>{t('fleet_title_1')}</span>
          <span className="bg-[#111215] text-[#F7BF35] px-5 py-2 inline-block rounded-2xl font-display font-black leading-none shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            {t('fleet_title_2')}
          </span>
        </motion.h2>

        {/* ── Carousel Stage ── */}
        <div ref={carouselRef} className="relative max-w-[1000px] mx-auto mb-3 overflow-hidden">
          <div ref={trackRef} className="relative w-full">
            <motion.div
              className="flex h-[180px] sm:h-[220px] md:h-[260px] lg:h-[290px] select-none cursor-grab active:cursor-grabbing"
              style={{ x: trackX, width: `${cars.length * SLIDE_W * 100}%` }}
              drag="x"
              dragConstraints={{
                left: -(cars.length - 1) * (trackRef.current?.offsetWidth ?? 0) * SLIDE_W,
                right: (trackRef.current?.offsetWidth ?? 0) * (1 - SLIDE_W) / 2,
              }}
              dragElastic={0.08}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
            >
              {cars.map((car, i) => {
                const tc = getTranslatedCar(car);
                return (
                  <div
                    key={car.id}
                    className="flex items-center justify-center h-full"
                    style={{ width: `${100 / cars.length}%`, padding: '0 6%' }}
                  >
                    <motion.img
                      layoutId={i === activeIndex ? `car-img-${car.id}` : undefined}
                      src={car.image}
                      alt={tc.name}
                      animate={{
                        opacity: i === activeIndex ? 1 : 0.45,
                        scale: i === activeIndex ? 1 : 0.82,
                        filter: i === activeIndex
                          ? 'drop-shadow(0 16px 36px rgba(0,0,0,0.10)) brightness(1)'
                          : 'drop-shadow(0 4px 8px rgba(0,0,0,0.04)) brightness(0.9)',
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={(e) => i === activeIndex && openModal(e)}
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Car name */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCarTranslated.id + '-name'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="text-[#111215] text-[13px] font-black tracking-[0.2em] uppercase mt-0 mb-3 font-sans bg-white/45 px-5 py-1.5 inline-block rounded-full border border-black/5"
          >
            {activeCarTranslated.name}
          </motion.p>
        </AnimatePresence>

        {/* ── Stats Strip ── */}
        <div className="relative z-10 max-w-[620px] mx-auto px-4 mb-5 overflow-hidden py-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCarTranslated.id + '-stats'}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.22 }}
              className="flex items-center justify-between"
            >
              {STATS.map(({ icon, value }, i) => (
                <div key={i} className="flex flex-col items-center gap-2.5 flex-1 relative">
                  <div className="text-[#111215]">{icon}</div>
                  <span className="text-[12px] sm:text-[13px] font-extrabold text-[#111215] leading-none whitespace-nowrap">{value}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Subtle borders between metrics */}
          <div className="absolute inset-y-0 left-4 right-4 flex pointer-events-none" aria-hidden>
            {[1,2,3,4].map(i => (
              <div key={i} className="flex-1 border-r border-black/[0.05] last:border-r-0" />
            ))}
          </div>
        </div>

        {/* ── Price / Action Bar ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCarTranslated.id + '-bar'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 max-w-[640px] mx-auto bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.10)] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            {/* Price */}
            <div className="text-left rtl:text-right w-full sm:w-auto">
              <span className="block text-[9px] font-bold text-black/35 uppercase tracking-[0.2em] mb-0.5">{t('fleet_starting_from')}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-[26px] font-black text-[#111215] leading-none tracking-tight whitespace-nowrap">
                  {language === 'ar'
                    ? `${activeCarTranslated.pricePerDay.toLocaleString()} درهم`
                    : `AED ${activeCarTranslated.pricePerDay.toLocaleString()}`}
                </span>
                <span className="text-[11px] font-medium text-black/40 ml-0.5 rtl:mr-1">/ {t('fleet_day')}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activeCarTranslated.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="speed-cta flex-grow sm:flex-grow-0 sm:shrink-0"
              >
                <span>{t('cta_book_whatsapp')}</span>
                <span className="speed-cta-arrow">
                  <ArrowRight size={13} strokeWidth={2} />
                </span>
              </a>
              <button
                onClick={(e) => openModal(e)}
                className="speed-cta-secondary flex-grow sm:flex-grow-0 sm:shrink-0"
              >
                <span>{t('cta_view_details')}</span>
                <span className="speed-cta-secondary-arrow">
                  <ArrowRight size={13} strokeWidth={2} />
                </span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Details Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCarTranslated.name} details`}
            onKeyDown={handleModalKeyDown}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/45 backdrop-blur-[2px] cursor-pointer"
            />

            {/* Modal card — scrollable container that fits in smaller/landscape viewports */}
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="bg-white rounded-[24px] shadow-[0_32px_64px_rgba(0,0,0,0.12)] w-full max-w-2xl relative z-10 border border-black/5 text-left rtl:text-right overflow-y-auto max-h-[90vh] focus:outline-none"
            >
              {/* Close button - Positioned absolutely at the top corner of the entire modal */}
              <button
                onClick={closeModal}
                className="absolute top-4 p-1.5 rounded-full bg-black/5 hover:bg-black/10 text-black/50 hover:text-black transition-all cursor-pointer z-30 active:scale-95"
                style={{ right: '16px' }}
                aria-label={`Close ${activeCarTranslated.name} details`}
              >
                <X size={14} strokeWidth={2} />
              </button>

              {/* Top: photo + header info */}
              <div className="flex gap-0 flex-col sm:flex-row sm:rtl:flex-row-reverse">
                {/* Photo panel */}
                <div
                  className="w-full sm:w-[42%] sm:shrink-0 flex items-center justify-center p-5 relative"
                  style={{ background: 'oklch(96% 0.003 82)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#F7BF35]/8 to-transparent pointer-events-none" />
                  <motion.img
                    layoutId={`car-img-${activeCarTranslated.id}`}
                    src={activeCarTranslated.image}
                    alt={activeCarTranslated.name}
                    className="w-full object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                    style={{ maxHeight: 180 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 26 }}
                  />
                </div>

                {/* Right/Left info panel */}
                <div className="flex-1 p-5 pt-5 relative flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#111215] tracking-tight font-display mb-1 pr-8 rtl:pl-8 rtl:pr-0">
                      {activeCarTranslated.name}
                    </h3>
                    <p className="text-black/50 text-[11.5px] leading-relaxed mb-4">
                      {activeCarTranslated.details.description}
                    </p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-1.5">
                      {MODAL_STATS.map(({ icon, label, val }) => (
                        <div key={label} className="bg-black/[0.025] rounded-lg px-2.5 py-2 flex items-center gap-2 rtl:flex-row-reverse">
                          <span className="text-[#F7BF35] shrink-0">{icon}</span>
                          <div>
                            <span className="block text-[7.5px] font-extrabold text-black/35 uppercase tracking-wider leading-none mb-0.5">{label}</span>
                            <span className="text-[10.5px] font-black text-black/85 leading-none">{val}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-4 border-t border-black/5 pt-3 flex items-baseline gap-1">
                    <span className="text-[9px] font-bold text-black/35 uppercase tracking-wider mr-1 rtl:ml-1">{t('fleet_from')}</span>
                    <span className="text-xl font-black text-[#111215]">
                      {language === 'ar'
                        ? `${activeCarTranslated.pricePerDay.toLocaleString()} درهم`
                        : `AED ${activeCarTranslated.pricePerDay.toLocaleString()}`}
                    </span>
                    <span className="text-xs font-semibold text-black/40">/ {t('fleet_day')}</span>
                  </div>
                </div>
              </div>

              {/* Bottom: features + requirements + CTA */}
              <div className="px-5 pb-5 pt-4 border-t border-black/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-[#111215] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 rtl:flex-row-reverse">
                      <span className="w-1 h-2.5 rounded-sm bg-[#F7BF35]" /> {t('fleet_key_features')}
                    </h4>
                    <ul className="space-y-1.5 list-none p-0 m-0">
                      {activeCarTranslated.details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11px] text-black/60 leading-snug rtl:flex-row-reverse">
                          <span className="text-[#F7BF35] font-bold shrink-0 text-[10px] mt-px">✓</span>
                          <span className="rtl:text-right">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-[#111215] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 rtl:flex-row-reverse">
                      <span className="w-1 h-2.5 rounded-sm bg-[#F7BF35]" /> {t('fleet_requirements')}
                    </h4>
                    <ul className="space-y-1.5 list-none p-0 m-0">
                      {activeCarTranslated.details.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11px] text-black/60 leading-snug rtl:flex-row-reverse">
                          <span className="text-[#F7BF35] font-bold shrink-0 text-[10px] mt-px">→</span>
                          <span className="rtl:text-right">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activeCarTranslated.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="speed-cta w-full"
                  style={{ justifyContent: 'center' }}
                >
                  <span>{t('cta_book_whatsapp')}</span>
                  <span className="speed-cta-arrow">
                    <ArrowRight size={13} strokeWidth={2} />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

