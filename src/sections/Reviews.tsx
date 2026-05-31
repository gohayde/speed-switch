import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const getTranslatedReviews = (language: 'en' | 'ar') => {
  const reviews = [
    {
      name: 'Haidar Najem',
      stars: 5,
      quote: 'I rented a Mercedes G63 AMG from this amazing company for a week, and it was just perfect! It was totally worth every penny I spent. The customer service was fantastic, making it a truly luxurious experience. Highly recommend!',
      quoteAR: 'لقد استأجرت سيارة مرسيدس G63 AMG من هذه الشركة الرائعة لمدة أسبوع، وكانت تجربة مثالية تماماً! كانت تستحق كل درهم دفعته. خدمة العملاء كانت مذهلة، مما جعلها تجربة فاخرة بحق. أنصح بها بشدة!',
      tag: 'Luxury Experience',
      tagAR: 'تجربة فاخرة',
    },
    {
      name: 'Abdullah Al Mamun',
      stars: 5,
      quote: 'Great service from Speed Switch Car Rental! The process was quick, the car was in excellent condition, and the staff were friendly and professional. Highly recommend for a hassle-free experience!',
      quoteAR: 'خدمة رائعة من شركة سبيد سويتش لتأجير السيارات! الإجراءات كانت سريعة جداً، والسيارة في حالة ممتازة، والموظفون ودودون ومحترفون. أنصح بالتعامل معهم لتجربة خالية من المتاعب!',
      tag: 'Hassle-Free',
      tagAR: 'سهلة ومريحة',
    },
    {
      name: 'Mohamad Trad',
      stars: 5,
      quote: 'Fantastic service! The team at the rental center was incredibly helpful and made the whole process very easy. The car was clean, reliable, and fairly priced. A great experience from start to finish. Thank you!',
      quoteAR: 'خدمة رائعة! كان فريق العمل في مركز التأجير متعاوناً للغاية وسهّل العملية برمتها. السيارة نظيفة وموثوقة وبسعر عادل. تجربة رائعة من البداية للنهاية. شكراً لكم!',
      tag: 'Clean Cars',
      tagAR: 'سيارات نظيفة',
    },
    {
      name: 'Faisal',
      stars: 5,
      quote: 'I thank Mr. Ahmed for the warm welcome, prompt service, and for delivering the car to the hotel without delay. It was an excellent experience, and I recommend dealing with him because he is honest and trustworthy. The security deposit was refunded on time without any delay.',
      quoteAR: 'أشكر الأستاذ أحمد على الاستقبال الحار، الخدمة السريعة، وتوصيل السيارة للفندق دون أي تأخير. تجربة ممتازة وأنصح بالتعامل معه لأمانته ومصداقيته. تم إرجاع التأمين في موعده دون تأخير.',
      tag: 'Door Delivery',
      tagAR: 'توصيل للباب',
    },
    {
      name: 'Deema Alharbi',
      stars: 5,
      quote: 'An excellent car rental company. I rented a car from them and it was beyond description. Honestly, they offer all options at reasonable prices compared to other companies. I highly recommend them, especially Mr. Ahmed — he is a respectful and helpful person, available 24 hours a day, and answers any questions.',
      quoteAR: 'شركة ممتازة لتأجير السيارات. استأجرت سيارة وكانت تفوق الوصف. بصراحة يقدمون أفضل الخيارات بأسعار مناسبة جداً مقارنة بالغير. أنصح بالتعامل معهم وبشدة، وخاصة الأستاذ أحمد الاحترام والمساعدة متوفر ٢٤ ساعة ويجيب على أي سؤال.',
      tag: '24/7 Support',
      tagAR: 'دعم ٢٤/٧',
    },
    {
      name: 'Katherine Barakat',
      stars: 5,
      quote: 'Amazing service and an amazing company! I rented a Tahoe, and the car was in excellent condition. Everything went smoothly from start to finish. Highly recommend.',
      quoteAR: 'خدمة مذهلة وشركة رائعة! استأجرت سيارة تاهو وكانت في حالة ممتازة. سارت الأمور بسلاسة فائقة من البداية للنهاية. أنصح بها بشدة.',
      tag: 'Smooth Process',
      tagAR: 'عملية سلسة',
    },
    {
      name: 'AbdulRahman Hajji',
      stars: 5,
      quote: 'They are amazing, their prices are great and their service is fast. They delivered the car to my hotel and I returned it at the airport. Thank you, and I hope to do business with them again. I highly recommend them.',
      quoteAR: 'رائعون جداً، أسعار ممتازة وخدمة سريعة. سلموني السيارة في الفندق واستلموها مني في المطار. شكراً لكم وأتمنى التعامل معكم مجدداً. أنصح بهم بشدة.',
      tag: 'Fast Service',
      tagAR: 'خدمة سريعة',
    },
    {
      name: 'Moa Diab',
      stars: 5,
      quote: 'Thanks for a great service Ahmad. Rented a Lambo for 4 days, Ahmad always answered any questions I had. Highly recommended.',
      quoteAR: 'شكراً على الخدمة الرائعة يا أحمد. استأجرت لامبو لمدة 4 أيام، وكان أحمد يجيب دائماً على أي استفسار لدي. أنصح بهم بشدة.',
      tag: 'Responsive',
      tagAR: 'استجابة سريعة',
    },
    {
      name: 'Tim',
      stars: 5,
      quote: 'Honestly, the kindest, most accurate, and fastest rental company I\'ve dealt with in Dubai. Thank you so much to Mr. Ahmed for his excellent service, ethics, and honesty. All the best!',
      quoteAR: 'بصراحة، ألطف وأسرع وأدق شركة تأجير تعاملت معها في دبي. شكراً جزيلاً للأستاذ أحمد على خدمته الممتازة وأخلاقه وأمانته. كل التوفيق!',
      tag: 'Best in Dubai',
      tagAR: 'الأفضل في دبي',
    },
    {
      name: 'Mona',
      stars: 5,
      quote: 'I rented a car from this company. It\'s a very reliable company with excellent service, credibility, and reasonable prices. I recommend dealing with Mr. Ahmed because of his professionalism and honesty, especially regarding car rentals.',
      quoteAR: 'استأجرت سيارة من هذه الشركة. إنها شركة موثوقة للغاية مع خدمة ممتازة ومصداقية عالية وأسعار معقولة. أنصح بالتعامل مع الأستاذ أحمد لمهنيته وأمانته.',
      tag: 'Reliable',
      tagAR: 'موثوقة',
    },
    {
      name: 'Joudi Kouzma',
      stars: 5,
      quote: 'I took the BMW M3 from Ahmad for 14 days, and it was one of the easiest lease agreements I dealt with. Excellent service.',
      quoteAR: 'أخذت سيارة بي إم دبليو M3 من أحمد لمدة 14 يوماً، وكانت واحدة من أسهل معاملات الإيجار التي تعاملت معها على الإطلاق. خدمة ممتازة.',
      tag: 'Easy Process',
      tagAR: 'إجراءات سهلة',
    },
    {
      name: 'Hassan Alharbi',
      stars: 5,
      quote: 'This is the first time I\'ve rented a clean car from the agency with zero mileage. Ahmed\'s service was excellent, and I have full appreciation for them and their work.',
      quoteAR: 'هذه أول مرة أستأجر فيها سيارة نظيفة وجديدة تماماً كأنها من الوكالة وبعداد أصفار. خدمة أحمد كانت ممتازة وتقديري الكامل لهم ولعملهم.',
      tag: 'Zero Mileage',
      tagAR: 'عداد أصفار',
    },
    {
      name: 'Mohammad Al Ahmad',
      stars: 5,
      quote: 'Highly recommended rental car company, delivery was done to my preferred location with exquisite quality and service. Deposit given on time.',
      quoteAR: 'شركة تأجير سيارات أنصح بها بشدة، تم التوصيل لموقعي المفضل بجودة وخدمة راقية للغاية. وتم إرجاع مبلغ التأمين في الوقت المحدد.',
      tag: 'Door Delivery',
      tagAR: 'توصيل للباب',
    },
    {
      name: 'Sara Nd',
      stars: 5,
      quote: 'I rented BMW 3 series very good condition special interior amazing car plus fast delivery and perfect customer service.',
      quoteAR: 'استأجرت بي إم دبليو الفئة الثالثة، كانت في حالة ممتازة مع مقصورة داخلية رائعة وتوصيل سريع وخدمة عملاء مثالية.',
      tag: 'Fast Delivery',
      tagAR: 'توصيل سريع',
    },
    {
      name: 'Manal Alqarni',
      stars: 5,
      quote: 'I rented from them, their service was very professional and flexible, and their cars were beautiful and clean. I will definitely come back and rent from them every time.',
      quoteAR: 'استأجرت منهم وكانت خدمتهم مهنية ومرنة للغاية، وسياراتهم جميلة ونظيفة جداً. سأعود بالتأكيد للاستئجار منهم في كل زيارة.',
      tag: 'Clean Cars',
      tagAR: 'سيارات نظيفة',
    },
    {
      name: 'Ward Alkhadra',
      stars: 5,
      quote: 'I rented a car from them when I visited Dubai and honestly, I was very happy. They have a great selection of cars; you can find everything you could want, from luxury to standard. The staff at the office were very helpful and made the process seamless.',
      quoteAR: 'استأجرت سيارة منهم أثناء زيارتي لدبي وبصراحة كنت سعيدة للغاية. لديهم تشكيلة رائعة من السيارات الفاخرة والعادية. كان موظفو المكتب متعاونين للغاية.',
      tag: 'Wide Selection',
      tagAR: 'خيارات واسعة',
    },
    {
      name: 'Nazer Khawam',
      stars: 5,
      quote: 'The epitome of respect, sophistication, and professionalism, in addition to impeccable quality. May God bless these young men.',
      quoteAR: 'قمة الاحترام والتعامل الراقي والمهني بالإضافة للجودة العالية جداً. بارك الله في هؤلاء الشباب.',
      tag: 'Professionalism',
      tagAR: 'احترافية عالية',
    },
    {
      name: 'Mohamad Al zahab',
      stars: 5,
      quote: 'Complete trust and the utmost respect for deadlines and the customer — the best car rental company I\'ve ever dealt with.',
      quoteAR: 'ثقة كاملة واحترام شديد للمواعيد والعميل — أفضل شركة تأجير سيارات تعاملت معها على الإطلاق.',
      tag: 'Trusted',
      tagAR: 'محل ثقة',
    },
    {
      name: 'Lama Oraini',
      stars: 5,
      quote: 'Ahmed was so helpful and very kind and he\'s the best and whenever I come to Dubai he\'s the first call to rent a car.',
      quoteAR: 'كان أحمد متعاوناً ولطيفاً للغاية وهو الأفضل دائماً، وعندما آتي إلى دبي يكون هو خياري الأول والوحيد لتأجير السيارات.',
      tag: 'Kind Crew',
      tagAR: 'طاقم لطيف',
    },
    {
      name: 'Jihane Sr',
      stars: 5,
      quote: 'Very good car rental, service the cars are so clean, and the crew was so kind. Deposit back in same time. Thanks very much, we\'ll try again.',
      quoteAR: 'شركة تأجير ممتازة وسيارات نظيفة للغاية وفريق عمل ودود. تم إرجاع مبلغ التأمين فوراً. شكراً جزيلاً وسنتعامل معكم مجدداً بالتأكيد.',
      tag: 'Deposit Returned',
      tagAR: 'استرداد التأمين',
    },
    {
      name: 'Kevin S',
      stars: 5,
      quote: 'The vehicle was new, the price was reasonable, and Ahmad was very helpful and assisted a lot.',
      quoteAR: 'السيارة كانت جديدة تماماً وبسعر معقول جداً، وكان أحمد متعاوناً للغاية وساعدنا في الكثير من الأمور.',
      tag: 'New Vehicle',
      tagAR: 'سيارة جديدة',
    },
    {
      name: 'Jenleeh felisilda',
      stars: 5,
      quote: 'Very good and speed rental service. I rented a BMW from them — it was clean and brand new.',
      quoteAR: 'خدمة سريعة وممتازة للغاية. استأجرت سيارة بي إم دبليو وكانت نظيفة وجديدة كلياً.',
      tag: 'Brand New Cars',
      tagAR: 'سيارات جديدة',
    },
    {
      name: 'Majd Saad',
      stars: 5,
      quote: 'Wonderful stuff, no deposit option with fast service. Thank you so much Mr. Ahmed and all the team.',
      quoteAR: 'طاقم عمل رائع، يتوفر خيار الإيجار بدون مبلغ تأمين مع خدمة سريعة جداً. شكراً جزيلاً للسيد أحمد وجميع أفراد الفريق.',
      tag: 'No Deposit',
      tagAR: 'بدون تأمين',
    },
    {
      name: 'Faye Wali',
      stars: 5,
      quote: 'Amazing service, good car, and very enjoyable. I rented for 2 weeks and it was very efficient.',
      quoteAR: 'خدمة مذهلة، سيارة ممتازة وممتعة للغاية. استأجرت لمدة أسبوعين وكانت العملية في غاية الكفاءة والسهولة.',
      tag: 'Great Value',
      tagAR: 'قيمة رائعة',
    },
  ];

  return reviews.map(r => ({
    name: language === 'ar' ? r.name : r.name,
    stars: r.stars,
    quote: language === 'ar' ? r.quoteAR : r.quote,
    tag: language === 'ar' ? r.tagAR : r.tag,
  }));
};

function GoogleBadge() {
  const { t } = useLanguage();
  return (
    <div className="inline-flex items-center gap-3.5 border border-black/5 bg-white px-5 py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.02)] rounded-2xl">
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-label="Google">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      <div className="text-left rtl:text-right">
        <div className="flex items-center gap-1.5 rtl:flex-row-reverse">
          <span className="text-[15px] font-black leading-none text-[#111215]">4.9</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={11} fill="#F7BF35" className="text-[#F7BF35]" />
            ))}
          </div>
        </div>
        <p className="mt-1 text-[11px] font-bold leading-none text-black/40">{t('reviews_google_rating')}</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { language, t } = useLanguage();
  const reduce = useReducedMotion();
  const reviews = getTranslatedReviews(language);
  const tripled = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="relative overflow-hidden bg-[oklch(99%_0.003_82)] text-[#111215] pt-14 pb-16 max-[900px]:py-12 max-[640px]:py-10">
      {/* Top gold hairline */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(247,191,53,0.18), transparent)' }}
      />


      {/* Header */}
      <div className="mx-auto max-w-[1340px] px-8 max-[640px]:px-5 mb-10 relative z-10">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.72, ease: EASE_EXPO }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="m-0 font-display font-black uppercase leading-[0.84] tracking-[-0.022em] flex flex-col items-center"
              style={{ fontSize: 'clamp(44px, 5.8vw, 86px)' }}
            >
              <span>{t('reviews_title_1')}</span>
              <span className="bg-[#111215] text-[#F7BF35] px-6 py-2.5 mt-3.5 inline-block select-none rounded-2xl font-display font-black leading-none">
                {t('reviews_title_2')}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <GoogleBadge />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Speed+Switch+Car+Rental+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black/10 bg-white px-5 py-3.5 rounded-2xl text-[13px] font-bold text-[#111215]/70 hover:text-[#111215] hover:border-black/20 transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              {t('reviews_all_btn')}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden w-full py-4 select-none">
        <div className="absolute left-0 top-0 bottom-0 w-44 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, oklch(99% 0.003 82), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-44 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, oklch(99% 0.003 82), transparent)' }} />

        <div className="reviews-marquee-track">
          {tripled.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="w-[280px] flex flex-col justify-between shrink-0 bg-white border border-black/10 p-5 rounded-[20px] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#F7BF35]/50 hover:bg-[#F7BF35]/[0.01] relative text-left rtl:text-right"
            >

              {/* Stars + tag */}
              <div className="flex items-center justify-between gap-3 mb-4 rtl:flex-row-reverse">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <Star key={s} size={11} fill="#F7BF35" className="text-[#F7BF35]" />
                  ))}
                </div>
                <span className="border border-[#111215]/10 px-2.5 py-1 rounded-full text-[9px] font-black text-[#111215]/60 tracking-wider uppercase bg-black/[0.025]">
                  {review.tag}
                </span>
              </div>

              {/* Quote */}
              <p className="m-0 text-[13px] font-semibold leading-[1.6] text-[#111215] mb-4 min-h-[60px]" style={{ textWrap: 'pretty' }}>
                "{review.quote}"
              </p>

              {/* Name only, no avatar */}
              <div className="border-t border-black/5 pt-3 flex items-center gap-2 rtl:flex-row-reverse">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-label="Google">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-[13.5px] font-extrabold leading-none text-[#111215]">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

