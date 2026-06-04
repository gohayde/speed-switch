'use client';

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
  hero_field_car: { en: 'Select Car Class', ar: 'اختر فئة السيارة' },
  hero_field_location: { en: 'Delivery Location', ar: 'موقع التوصيل' },
  hero_field_date: { en: 'Rental Dates', ar: 'تواريخ الإيجار' },
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
  why_paragraph: { en: 'The four service standards our customers highlight most in their feedback.', ar: 'المعايير الأربعة الأساسية التي يذكرها عملاؤنا دائماً في مراجعاتهم.' },
  why_sig1_title: { en: 'Fully Inspected & Serviced', ar: 'فحص وصيانة شاملة' },
  why_sig1_body: { en: 'We perform a 50-point inspection and complete detail before every handover to ensure pristine mechanical condition.', ar: 'نخضع كل سيارة لفحص شامل من 50 نقطة وتنظيف كامل قبل التسليم لضمان حالتها الميكانيكية الممتازة.' },
  why_sig2_title: { en: 'Direct Team Support', ar: 'دعم مباشر من فريقنا' },
  why_sig2_body: { en: 'Communicate directly with Ahmad and our local Dubai team on WhatsApp for fast, personalized assistance.', ar: 'تواصل مباشرة مع أحمد وفريقنا المحلي في دبي عبر واتساب للحصول على خدمة سريعة ومخصصة.' },
  why_sig3_title: { en: 'Transparent Pricing', ar: 'أسعار شفافة' },
  why_sig3_body: { en: 'The rate confirmed in your WhatsApp conversation is exactly what you pay, inclusive of all standard fees.', ar: 'السعر المؤكد في محادثة واتساب هو ما تدفعه بالضبط، شاملاً جميع الرسوم القياسية.' },
  why_sig4_title: { en: 'Prompt Deposit Returns', ar: 'إرجاع سريع للتأمين' },
  why_sig4_body: { en: 'We process your security deposit release on the same day you return the vehicle, verified by bank receipt.', ar: 'نقوم بإلغاء حجز مبلغ التأمين في نفس يوم إرجاع السيارة، مع تزويدك بإيصال البنك فوراً.' },

  // Dubai Delivery Section
  deliv_title_1: { en: 'We Come', ar: 'نأتي إليك' },
  deliv_title_2: { en: 'To You', ar: 'أينما كنت' },
  deliv_paragraph: { en: 'We coordinate delivery to any hotel, residence, or airport terminal in Dubai. Skip the rental counter queues—your vehicle is delivered directly to your location, with handovers completed in under five minutes.', ar: 'ننسق توصيل السيارة إلى أي فندق، منزل، أو مبنى في المطار في دبي. تجنب طوابير مكاتب التأجير — نقوم بتسليم سيارتك مباشرة إلى موقعك، وتكتمل عملية التسليم في أقل من خمس دقائق.' },
  deliv_highlight1_title: { en: 'Free Delivery Across Dubai', ar: 'توصيل مجاني في دبي' },
  deliv_highlight1_body: { en: 'We offer complimentary delivery and pickup anywhere in Dubai, including DXB and DWC airports.', ar: 'نقدم خدمة التوصيل والاستلام مجاناً في أي مكان في دبي، بما في ذلك مطاري DXB و DWC.' },
  deliv_highlight2_title: { en: '24/7 Flexible Coordination', ar: 'تنسيق مرن على مدار الساعة' },
  deliv_highlight2_body: { en: 'Our team coordinates delivery times and location pins directly on WhatsApp for seamless drop-off.', ar: 'يقوم فريقنا بتنسيق أوقات التسليم وموقع الخدمة مباشرة عبر واتساب لتسليم مريح وسلس.' },
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
  process_step1_body: { en: 'Select from our curated fleet of luxury SUVs, supercars, and sports sedans. We confirm availability in minutes.', ar: 'اختر من بين أسطولنا المنسق من سيارات الدفع الرباعي الفاخرة، السيارات الخارقة، وسيارات السيدان الرياضية. سنؤكد التوفر في دقائق.' },
  process_step2_title: { en: 'We Deliver\nTo You', ar: 'نوصّلها\nإليك' },
  process_step2_body: { en: 'Share your location on WhatsApp. We deliver the vehicle directly to your hotel, residence, or airport terminal in Dubai.', ar: 'شارك موقعك معنا عبر واتساب. سنقوم بتوصيل السيارة مباشرة إلى فندقك، منزلك، أو مبنى المطار في دبي.' },
  process_step3_title: { en: 'Drive\n& Enjoy', ar: 'انطلق\nواستمتع' },
  process_step3_body: { en: 'Enjoy a fully fueled, detailed vehicle. We collect it from your doorstep at the end of your rental and release the deposit immediately.', ar: 'استمتع بقيادة سيارة نظيفة وممتلئة بالوقود. سنستلمها من باب بيتك عند نهاية الإيجار ونعيد مبلغ التأمين فوراً.' },

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
  cta_title_1: { en: 'BOOK YOUR DRIVE.', ar: 'احجز رحلتك.' },
  cta_title_2: { en: 'TODAY.', ar: 'اليوم.' },
  cta_paragraph: { en: 'Choose your vehicle and secure your booking on WhatsApp in minutes. Enjoy prompt delivery and transparent, all-inclusive rates.', ar: 'اختر سيارتك وأكد حجزك عبر واتساب في دقائق. استمتع بتوصيل سريع وأسعار شفافة وشاملة بالكامل.' },

  // Footer Section
  footer_desc: { en: 'Speed Switch provides transparent, on-demand luxury car rentals across Dubai. With a curated fleet of pristine vehicles, hand-delivered to your door, we ensure a direct and reliable booking process with zero hidden fees.', ar: 'توفر سبيد سويتش خدمات تأجير السيارات الفاخرة عند الطلب وبأسعار شفافة في جميع أنحاء دبي. من خلال أسطول منسق من السيارات الممتازة التي يتم تسليمها إلى باب بيتك، نضمن لك عملية حجز مباشرة وموثوقة دون أي رسوم خفية.' },
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
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem('speed_switch_lang');
    return (saved === 'ar' ? 'ar' : 'en') as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('speed_switch_lang', lang);
    }
  };

  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.lang = language;
    htmlEl.dir = language === 'ar' ? 'rtl' : 'ltr';
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
