import React, { createContext, useState, useContext, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface TranslationDict {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: TranslationDict = {
  // Navigation & General
  nav_fleet: { en: 'Fleet', ar: 'الأسطول' },
  nav_why_us: { en: 'Why Us', ar: 'لماذا نحن' },
  nav_delivery: { en: 'Delivery', ar: 'التوصيل' },
  nav_process: { en: 'Process', ar: 'الخطوات' },
  nav_reviews: { en: 'Reviews', ar: 'الآراء' },
  nav_faq: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  cta_book_whatsapp: { en: 'Book on WhatsApp', ar: 'احجز عبر واتساب' },
  cta_ask_whatsapp: { en: 'Ask on WhatsApp', ar: 'استفسر عبر واتساب' },
  cta_view_details: { en: 'View Details', ar: 'عرض التفاصيل' },
  cta_view_fleet: { en: 'View fleet', ar: 'عرض الأسطول' },
  close: { en: 'Close', ar: 'إغلاق' },

  // Hero Section
  hero_title_1: { en: 'Drive Dubai', ar: 'قد في دبي' },
  hero_title_2: { en: 'In Style', ar: 'بأناقة' },
  hero_subtitle: { en: 'Pick your car. Pick your date. We bring it to you. Anywhere in Dubai, any time.', ar: 'اختر سيارتك. حدد تاريخك. نأتي بها إليك. في أي مكان في دبي، وفي أي وقت.' },
  hero_field_car: { en: 'Car Type', ar: 'نوع السيارة' },
  hero_field_location: { en: 'Location', ar: 'الموقع' },
  hero_field_date: { en: 'Date', ar: 'التاريخ' },
  hero_dropdown_car_title: { en: 'Select Category', ar: 'اختر الفئة' },
  hero_dropdown_loc_title: { en: 'Choose Location from Map', ar: 'اختر الموقع من الخريطة' },
  hero_dropdown_date_title: { en: 'Select Date Range', ar: 'اختر الفترة الزمنية' },
  hero_whatsapp_template: {
    en: 'Hi, I want to check availability for a {car} in {location} for {date}.',
    ar: 'مرحباً، أود التحقق من توفر سيارة {car} في {location} للفترة {date}.'
  },
  hero_calendar_mon: { en: 'Mon', ar: 'الإثنين' },
  hero_calendar_tue: { en: 'Tue', ar: 'الثلاثاء' },
  hero_calendar_wed: { en: 'Wed', ar: 'الأربعاء' },
  hero_calendar_thu: { en: 'Thu', ar: 'الخميس' },
  hero_calendar_fri: { en: 'Fri', ar: 'الجمعة' },
  hero_calendar_sat: { en: 'Sat', ar: 'السبت' },
  hero_calendar_sun: { en: 'Sun', ar: 'الأحد' },

  // Why Rent / Why Us
  why_subtitle: { en: 'THE RENTAL', ar: 'خدمة التأجير' },
  why_subtitle_2: { en: 'DUBAI', ar: 'التي تثق بها' },
  why_subtitle_highlight: { en: 'TRUSTS', ar: 'دبي' },
  why_paragraph: { en: 'Four standards our customers name, unprompted, in their own words.', ar: 'أربعة معايير يذكرها عملاؤنا دائماً في تقييماتهم دون تردد.' },
  why_sig1_title: { en: 'Flawless. Every Time.', ar: 'مثالية. في كل مرة.' },
  why_sig1_body: { en: 'Cleaned and serviced before every handover. Reliable condition, without exception.', ar: 'يتم تنظيف وصيانة السيارات بالكامل قبل كل تسليم. حالة ممتازة وموثوقة بلا استثناء.' },
  why_sig2_title: { en: 'People You Know', ar: 'أشخاص تعرفهم' },
  why_sig2_body: { en: 'Ahmad and the team are named in hundreds of Google reviews. Real people, not a hotline.', ar: 'أحمد وفريق العمل مذكورون بالاسم في مئات التقييمات. أشخاص حقيقيون يهتمون بك، وليس مجرد هاتف مجيب.' },
  why_sig3_title: { en: 'Price. Full Stop.', ar: 'سعر واضح. نقطة.' },
  why_sig3_body: { en: 'The quote you receive is the total you pay. No line items added at handover.', ar: 'السعر الذي نرسله لك هو ما تدفعه بالضبط. لا رسوم خفية أو إضافات عند التسليم.' },
  why_sig4_title: { en: 'Deposit Back Today', ar: 'استرداد التأمين اليوم' },
  why_sig4_body: { en: 'Same-day deposit returns are the standard here. Renters name it specifically in their reviews.', ar: 'استرداد مبلغ التأمين في نفس يوم إرجاع السيارة هو المعيار لدينا، ويسعد عملاؤنا بكتابة ذلك في مراجعاتهم.' },

  // Dubai Delivery Section
  deliv_title_1: { en: 'We Come', ar: 'نأتي إليك' },
  deliv_title_2: { en: 'To You', ar: 'أينما كنت' },
  deliv_paragraph: { en: 'Across every district in Dubai, we deliver your chosen vehicle directly to your door. Tourists and residents alike: no queues, no counters, just your car exactly where you need it.', ar: 'في جميع أنحاء دبي، نقوم بتوصيل سيارتك المفضلة مباشرة إلى باب بيتك أو فندقك. للسياح والمقيمين: لا طوابير، لا مكاتب، فقط سيارتك جاهزة حيث تريدها.' },
  deliv_highlight1_title: { en: 'Free Delivery Across Dubai', ar: 'توصيل مجاني في دبي' },
  deliv_highlight1_body: { en: 'Free delivery to any hotel, residence, or airport terminal.', ar: 'توصيل مجاني إلى أي فندق، منزل، أو مبنى في المطار.' },
  deliv_highlight2_title: { en: 'On-Demand Handovers', ar: 'تسليم عند الطلب 24/7' },
  deliv_highlight2_body: { en: 'Tracked and coordinated directly on WhatsApp.', ar: 'تنسيق مرن ومتابعة مباشرة وسهلة عبر الواتساب.' },
  deliv_active_badge: { en: 'Taking bookings now', ar: 'متاح للحجز الآن' },
  deliv_map_btn: { en: 'Open Interactive Map ↗', ar: 'افتح الخريطة التفاعلية ↗' },
  deliv_footer_text: { en: 'Custom Handovers in Sharjah, Abu Dhabi, and surrounding Emirates available on request.', ar: 'توصيل مخصص إلى الشارقة، أبوظبي، والإمارات الأخرى متاح عند الطلب.' },

  // Fleet Section
  fleet_title_1: { en: 'PICK YOUR', ar: 'اختر سيارة' },
  fleet_title_2: { en: 'DREAM CAR TODAY', ar: 'أحلامك اليوم' },
  fleet_starting_from: { en: 'Starting from', ar: 'تبدأ من' },
  fleet_day: { en: 'day', ar: 'يوم' },
  fleet_from: { en: 'From', ar: 'من' },
  fleet_key_features: { en: 'Key Features', ar: 'الميزات الرئيسية' },
  fleet_requirements: { en: 'Requirements', ar: 'المتطلبات' },

  // Rental Process Section
  process_title: { en: 'Pick. Delivered.\nDrive.', ar: 'اختر. استلم.\nانطلق.' },
  process_step1_title: { en: 'Choose\nYour Car', ar: 'اختر\nسيارتك' },
  process_step1_body: { en: 'Browse Lamborghinis, G-Wagons, McLarens. Pick the car. We confirm in minutes.', ar: 'تصفح تشكيلتنا من لامبورغيني، جي-واجن، ماكلارين. حدد سيارتك وسنؤكد حجزك في دقائق.' },
  process_step2_title: { en: 'We Deliver\nTo You', ar: 'نوصّلها\nإليك' },
  process_step2_body: { en: 'Send us a location. Your car arrives at your hotel, villa, or office anywhere in Dubai.', ar: 'أرسل لنا موقعك، وسنقوم بتوصيل السيارة مباشرة إلى فندقك، فيلتك، أو مكتبك في أي مكان في دبي.' },
  process_step3_title: { en: 'Drive\n& Enjoy', ar: 'انطلق\nواستمتع' },
  process_step3_body: { en: 'Full tank. Clean car. We collect from your door. Deposit back the same day.', ar: 'خزان وقود ممتلئ، سيارة فائقة النظافة. نستلمها من باب بيتك، ونعيد لك مبلغ التأمين في نفس اليوم.' },

  // Reviews Section
  reviews_title_1: { en: 'Loved by our', ar: 'ثقة ومحبة' },
  reviews_title_2: { en: 'customers', ar: 'عملائنا' },
  reviews_google_rating: { en: 'Google review rating', ar: 'تقييم مراجعات جوجل' },
  reviews_all_btn: { en: 'All reviews on Google ↗', ar: 'جميع التقييمات على جوجل ↗' },

  // FAQ Section
  faq_title_1: { en: 'Common', ar: 'الأسئلة' },
  faq_title_2: { en: 'questions', ar: 'الشائعة' },
  faq_paragraph: { en: 'What renters ask most before booking with Speed Switch.', ar: 'الإجابات عن الاستفسارات الأكثر شيوعاً قبل حجز سيارتك معنا.' },

  // Final CTA
  cta_title_1: { en: 'YOUR CAR.', ar: 'سيارتك بانتظارك' },
  cta_title_2: { en: 'TODAY.', ar: 'اليوم.' },
  cta_paragraph: { en: 'Premium fleet. Same-day handover. No queues, no paperwork.', ar: 'أسطول راقٍ ومميز. تسليم في نفس اليوم. بلا طوابير أو معاملات ورقية معقدة.' },

  // Footer Section
  footer_desc: { en: 'Experience the absolute pinnacle of luxury driving in Dubai. We deliver an immaculate fleet of high-end supercars and SUVs directly to your doorstep with guaranteed transparent pricing and 5-star service.', ar: 'عش التجربة الاستثنائية لقيادة السيارات الفاخرة في دبي. نوفر أسطولاً استثنائياً من السيارات الخارقة والرياضية إلى باب فندقك أو منزلك بأسعار شفافة وخدمة خمس نجوم.' },
  footer_explore: { en: 'Explore', ar: 'اكتشف المزيد' },
  footer_location: { en: 'HQ Location', ar: 'الموقع الرئيسي' },
  footer_office: { en: 'Office 3107, 31st Floor, Prime Tower,\nMarasi Drive, Business Bay, Dubai', ar: 'المكتب 3107، الطابق 31، برج برايم تاور،\nشارع مراسي درايف، الخليج التجاري، دبي' },
  footer_open: { en: 'Open 24 Hours / 7 Days', ar: 'مفتوح 24 ساعة / 7 أيام' },
  footer_rights: { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('speed_switch_lang');
    return (saved === 'ar' ? 'ar' : 'en') as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('speed_switch_lang', lang);
  };

  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.lang = language;
    htmlEl.dir = 'ltr';
  }, [language]);

  const t = (key: string): string => {
    const item = translations[key];
    if (!item) return key;
    return item[language] || item['en'];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
