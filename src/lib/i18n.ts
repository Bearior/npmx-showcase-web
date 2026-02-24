export type Locale = "en" | "th";

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    faq: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  socialProof: {
    title: string;
    subtitle: string;
    testimonials: {
      name: string;
      role: string;
      quote: string;
      rating: number;
      image: string;
    }[];
    trustedBy: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      icon: string;
      slug: string;
    }[];
    viewAll: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    teamLabel: string;
    statSatisfaction: string;
    statYears: string;
    statPatients: string;
    statServices: string;
    reasons: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    phone: string;
    phoneLabel: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  footer: {
    description: string;
    quickLinks: string;
    ourServices: string;
    contactInfo: string;
    address: string;
    phone: string;
    email: string;
    openingHours: string;
    openingHoursValue: string;
    weekendHours: string;
    weekendHoursValue: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}

export const translations: Record<Locale, Translations> = {
  th: {
    nav: {
      home: "หน้าแรก",
      services: "บริการ",
      about: "ทำไมต้องเรา",
      faq: "คำถามที่พบบ่อย",
      contact: "ติดต่อ",
      bookNow: "นัดหมาย",
    },
    hero: {
      badge: "ผู้ป่วยไว้วางใจกว่า 5,000+ คน",
      title: "คลินิก NPMx",
      subtitle: "กายภาพบำบัดด้วยประสบการณ์กว่า 30 ปี",
      description:
        "ดูแลอาการปวด ฟื้นฟูร่างกาย ด้วยทีมนักกายภาพบำบัดที่มีประสบการณ์ และ เครื่องมือทันสมัย",
      ctaPrimary: "นัดหมายเลย",
      ctaSecondary: "ดูบริการ",
      stat1Label: "ผู้ป่วยหายดี",
      stat1Value: "5,000+",
      stat2Label: "นักกายภาพ",
      stat2Value: "10+",
      stat3Label: "ปีประสบการณ์",
      stat3Value: "30+",
    },
    socialProof: {
      title: "ผู้ป่วยจริง ผลลัพธ์จริง",
      subtitle: "เสียงจากผู้ที่เคยรักษากับเรา",
      testimonials: [
        {
          name: "สมชาย ก.",
          role: "ปวดหลังเรื้อรัง",
          quote:
            "ปวดหลังมา 3 ปี รักษาที่อื่นไม่หาย มาทำกายภาพที่นี่ 8 ครั้ง ดีขึ้นมาก กลับไปวิ่งได้แล้ว",
          rating: 5,
          image: "/images/patient-1.svg",
        },
        {
          name: "ณัฐญา ป.",
          role: "ออฟฟิศซินโดรม",
          quote:
            "ปวดคอ บ่า ไหล่ จากนั่งทำงาน หมอที่นี่ดูแลดีมาก อธิบายชัดเจน ตอนนี้อาการดีขึ้น 90% เลยค่ะ",
          rating: 5,
          image: "/images/patient-2.svg",
        },
        {
          name: "วิทยา ส.",
          role: "นักกีฬาฟื้นฟูหลังผ่าตัด",
          quote:
            "ผ่าตัดเข่าแล้วมาทำกายภาพที่นี่ ทีมงานมืออาชีพมาก ตอนนี้กลับไปวิ่งมาราธอนได้แล้ว",
          rating: 5,
          image: "/images/patient-3.svg",
        },
      ],
      trustedBy: "ได้รับความไว้วางใจจากบริษัทประกันชั้นนำ",
    },
    services: {
      title: "บริการของเรา",
      subtitle: "ครบจบในที่เดียว ดูแลทุกอาการปวดและการฟื้นฟู",
      items: [
        {
          title: "รักษาอาการปวดหลัง",
          description: "ปวดหลัง หมอนรองกระดูกทับเส้น กระดูกสันหลังคด ด้วยเทคนิคเฉพาะทาง",
          icon: "back",
          slug: "back-pain",
        },
        {
          title: "ออฟฟิศซินโดรม",
          description: "ปวดคอ บ่า ไหล่ จากการนั่งทำงาน รักษาตรงจุด หายจริง",
          icon: "office",
          slug: "office-syndrome",
        },
        {
          title: "ฟื้นฟูหลังผ่าตัด",
          description: "ฟื้นฟูหลังผ่าตัดกระดูก ข้อเข่า ไหล่ กลับมาใช้ชีวิตได้เร็ว",
          icon: "rehab",
          slug: "post-surgery-rehab",
        },
        {
          title: "กายภาพบำบัดนักกีฬา",
          description: "ฟื้นฟูอาการบาดเจ็บจากกีฬา กลับไปเล่นกีฬาได้อย่างมั่นใจ",
          icon: "sports",
          slug: "sports-physiotherapy",
        },
        {
          title: "นวดเพื่อการรักษา",
          description: "นวดแก้อาการปวดกล้ามเนื้อ คลายจุดตึง โดยนักกายภาพบำบัด",
          icon: "massage",
          slug: "therapeutic-massage",
        },
        {
          title: "ฝังเข็ม & Dry Needling",
          description: "ลดปวด คลายกล้ามเนื้อ ด้วยเทคนิค Dry Needling โดยผู้เชี่ยวชาญ",
          icon: "needle",
          slug: "dry-needling",
        },
      ],
      viewAll: "ดูรายละเอียด",
    },
    whyChooseUs: {
      title: "ทำไมต้อง NPMx",
      subtitle: "เราดูแลคุณเหมือนคนในครอบครัว",
      teamLabel: "ทีมนักกายภาพบำบัดของเรา",
      statSatisfaction: "ความพึงพอใจ",
      statYears: "ปีประสบการณ์",
      statPatients: "ผู้ป่วยที่รักษาแล้ว",
      statServices: "บริการ",
      reasons: [
        {
          title: "นักกายภาพมืออาชีพ",
          description: "ทีมนักกายภาพบำบัดที่มีใบประกอบวิชาชีพและประสบการณ์กว่า 10 ปี",
          icon: "doctors",
        },
        {
          title: "เครื่องมือทันสมัย",
          description: "Shockwave, Laser, Ultrasound และอุปกรณ์ฟื้นฟูมาตรฐานสากล",
          icon: "equipment",
        },
        {
          title: "ราคาคุ้มค่า",
          description: "ราคาโปร่งใส เบิกประกันได้ ไม่มีค่าใช้จ่ายแอบแฝง",
          icon: "pricing",
        },
        {
          title: "ดูแลต่อเนื่อง",
          description: "มีโปรแกรมออกกำลังกายให้ทำที่บ้าน ติดตามผลจนหายดี",
          icon: "patient",
        },
      ],
    },
    cta: {
      title: "พร้อมหายปวดแล้วใช่ไหม?",
      description:
        "นัดหมายวันนี้ ปรึกษาฟรีครั้งแรก นักกายภาพบำบัดพร้อมดูแลคุณ",
      primaryButton: "นัดหมายตอนนี้",
      secondaryButton: "โทรหาเรา",
      phone: "02-XXX-XXXX",
      phoneLabel: "โทรเลย",
      trust1: "ปรึกษาฟรีครั้งแรก",
      trust2: "ไม่ต้องรอนาน",
      trust3: "เบิกประกันได้",
    },
    faq: {
      title: "คำถามที่พบบ่อย",
      subtitle: "สิ่งที่คนส่วนใหญ่อยากรู้ก่อนมาทำกายภาพ",
      items: [
        {
          question: "ทำกายภาพบำบัด เจ็บไหม?",
          answer:
            "ส่วนใหญ่ไม่เจ็บครับ/ค่ะ นักกายภาพจะปรับความแรงให้เหมาะสมกับแต่ละคน บางเทคนิคอาจรู้สึกตึงบ้างแต่ไม่เจ็บมาก",
        },
        {
          question: "ต้องมากี่ครั้งถึงจะหาย?",
          answer:
            "ขึ้นอยู่กับอาการ โดยทั่วไป 4-8 ครั้ง จะเห็นผลชัดเจน นักกายภาพจะประเมินและวางแผนการรักษาให้ตั้งแต่ครั้งแรก",
        },
        {
          question: "เบิกประกันได้ไหม?",
          answer:
            "ได้ครับ/ค่ะ เรารับประกันสุขภาพจากบริษัทชั้นนำ ทั้ง AIA เมืองไทยประกันชีวิต กรุงเทพประกันภัย และอื่นๆ กรุณาสอบถามก่อนนัดหมาย",
        },
        {
          question: "นัดหมายยังไง?",
          answer:
            "โทร 02-XXX-XXXX หรือแอดไลน์ @npmx ทีมงานจะติดต่อกลับภายใน 30 นาที",
        },
        {
          question: "ต้องเตรียมอะไรมาบ้าง?",
          answer:
            "ใส่ชุดที่เคลื่อนไหวสะดวก นำบัตรประชาชน บัตรประกัน (ถ้ามี) และผลตรวจเดิม (ถ้ามี) มาด้วย",
        },
        {
          question: "เปิดวันไหนบ้าง?",
          answer:
            "จ.-ศ. 9:00-19:00 น. และ ส.-อา. 9:00-17:00 น. หยุดวันนักขัตฤกษ์",
        },
      ],
    },
    footer: {
      description:
        "NPMx Clinic คลินิกกายภาพบำบัดครบวงจร ดูแลอาการปวดและฟื้นฟูร่างกายด้วยทีมผู้เชี่ยวชาญ",
      quickLinks: "ลิงก์ด่วน",
      ourServices: "บริการของเรา",
      contactInfo: "ข้อมูลติดต่อ",
      address: "123 ถ.สุขุมวิท วัฒนา กรุงเทพฯ 10110",
      phone: "02-XXX-XXXX",
      email: "info@npmx.co.th",
      openingHours: "จ.-ศ.",
      openingHoursValue: "9:00 - 19:00 น.",
      weekendHours: "ส.-อา.",
      weekendHoursValue: "9:00 - 17:00 น.",
      copyright: "© 2026 NPMx Clinic สงวนลิขสิทธิ์",
      privacyPolicy: "นโยบายความเป็นส่วนตัว",
      termsOfService: "ข้อกำหนดการให้บริการ",
    },
    metadata: {
      title: "NPMx Clinic – คลินิกกายภาพบำบัด กรุงเทพ",
      description:
        "คลินิกกายภาพบำบัดครบวงจร รักษาปวดหลัง ออฟฟิศซินโดรม ฟื้นฟูหลังผ่าตัด โดยนักกายภาพผู้เชี่ยวชาญ นัดหมายวันนี้",
      ogTitle: "NPMx Clinic – หายปวด กลับมาใช้ชีวิต",
      ogDescription:
        "คลินิกกายภาพบำบัดครบวงจร นักกายภาพมืออาชีพ เครื่องมือทันสมัย นัดหมายปรึกษาฟรี",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "Why Us",
      faq: "FAQ",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      badge: "Trusted by 5,000+ patients",
      title: "End Pain. Live Again.",
      subtitle: "Expert Physical Therapy",
      description:
        "NPMx Clinic — professional physiotherapy for pain relief and full recovery. Experienced therapists, modern equipment.",
      ctaPrimary: "Book Now",
      ctaSecondary: "Our Services",
      stat1Label: "Recovered Patients",
      stat1Value: "5,000+",
      stat2Label: "Physiotherapists",
      stat2Value: "10+",
      stat3Label: "Years Experience",
      stat3Value: "12+",
    },
    socialProof: {
      title: "Real Patients. Real Results.",
      subtitle: "Hear from those who recovered with us",
      testimonials: [
        {
          name: "Somchai K.",
          role: "Chronic Back Pain",
          quote:
            "3 years of back pain — tried everything. 8 sessions here and I'm running again. Life-changing.",
          rating: 5,
          image: "/images/patient-1.svg",
        },
        {
          name: "Nattaya P.",
          role: "Office Syndrome",
          quote:
            "Neck and shoulder pain from desk work. The team explained everything clearly. 90% better now!",
          rating: 5,
          image: "/images/patient-2.svg",
        },
        {
          name: "Wittaya S.",
          role: "Post-Surgery Sports Recovery",
          quote:
            "Knee surgery rehab here was incredible. Professional team. I'm back to running marathons.",
          rating: 5,
          image: "/images/patient-3.svg",
        },
      ],
      trustedBy: "Trusted by leading insurers",
    },
    services: {
      title: "Our Services",
      subtitle: "All-in-one pain relief and rehabilitation",
      items: [
        {
          title: "Back Pain Treatment",
          description: "Herniated disc, sciatica, scoliosis — specialized techniques for lasting relief.",
          icon: "back",
          slug: "back-pain",
        },
        {
          title: "Office Syndrome",
          description: "Neck, shoulder & upper back pain from desk work. Targeted treatment that works.",
          icon: "office",
          slug: "office-syndrome",
        },
        {
          title: "Post-Surgery Rehab",
          description: "Recovery after knee, shoulder & bone surgery. Get back to life faster.",
          icon: "rehab",
          slug: "post-surgery-rehab",
        },
        {
          title: "Sports Physiotherapy",
          description: "Sports injury recovery. Return to sport with confidence.",
          icon: "sports",
          slug: "sports-physiotherapy",
        },
        {
          title: "Therapeutic Massage",
          description: "Clinical massage for muscle pain and tension relief by licensed physiotherapists.",
          icon: "massage",
          slug: "therapeutic-massage",
        },
        {
          title: "Dry Needling",
          description: "Pain reduction and muscle release with expert Dry Needling technique.",
          icon: "needle",
          slug: "dry-needling",
        },
      ],
      viewAll: "Learn More",
    },
    whyChooseUs: {
      title: "Why NPMx",
      subtitle: "We treat you like family",
      teamLabel: "Our physiotherapy team",
      statSatisfaction: "Satisfaction",
      statYears: "Years experience",
      statPatients: "Patients treated",
      statServices: "Services",
      reasons: [
        {
          title: "Licensed Therapists",
          description: "Certified physiotherapists with 10+ years of hands-on experience.",
          icon: "doctors",
        },
        {
          title: "Modern Equipment",
          description: "Shockwave, Laser, Ultrasound — international-standard rehab tools.",
          icon: "equipment",
        },
        {
          title: "Fair Pricing",
          description: "Transparent pricing. Insurance accepted. No hidden fees.",
          icon: "pricing",
        },
        {
          title: "Ongoing Care",
          description: "Home exercise programs and follow-ups until full recovery.",
          icon: "patient",
        },
      ],
    },
    cta: {
      title: "Ready to End the Pain?",
      description:
        "Book today. Free first consultation. Our physiotherapists are ready for you.",
      primaryButton: "Book Now",
      secondaryButton: "Call Us",
      phone: "02-XXX-XXXX",
      phoneLabel: "Call Now",
      trust1: "Free first consultation",
      trust2: "No long wait times",
      trust3: "Insurance accepted",
    },
    faq: {
      title: "FAQ",
      subtitle: "Common questions before your first visit",
      items: [
        {
          question: "Does physiotherapy hurt?",
          answer:
            "Usually not. Our therapists adjust intensity for your comfort. Some techniques may feel tight, but not painful.",
        },
        {
          question: "How many sessions do I need?",
          answer:
            "Depends on your condition. Typically 4-8 sessions show clear results. We'll plan your treatment from day one.",
        },
        {
          question: "Do you accept insurance?",
          answer:
            "Yes — AIA, Muang Thai Life, Bangkok Insurance, and more. Please ask before booking.",
        },
        {
          question: "How do I book?",
          answer:
            "Call 02-XXX-XXXX or LINE @npmx. We'll get back to you within 30 minutes.",
        },
        {
          question: "What should I bring?",
          answer:
            "Wear comfortable clothes. Bring your ID, insurance card (if any), and previous test results.",
        },
        {
          question: "What are your opening hours?",
          answer:
            "Mon-Fri 9:00-19:00, Sat-Sun 9:00-17:00. Closed on public holidays.",
        },
      ],
    },
    footer: {
      description:
        "NPMx Clinic — comprehensive physiotherapy for pain relief and recovery, by experienced specialists.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactInfo: "Contact Info",
      address: "123 Sukhumvit Road, Watthana, Bangkok 10110",
      phone: "02-XXX-XXXX",
      email: "info@npmx.co.th",
      openingHours: "Mon-Fri",
      openingHoursValue: "9:00 AM - 7:00 PM",
      weekendHours: "Sat-Sun",
      weekendHoursValue: "9:00 AM - 5:00 PM",
      copyright: "© 2026 NPMx Clinic. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
    metadata: {
      title: "NPMx Clinic – Physical Therapy in Bangkok",
      description:
        "Expert physiotherapy clinic in Bangkok. Back pain, office syndrome, post-surgery rehab. Licensed therapists. Book today.",
      ogTitle: "NPMx Clinic – End Pain. Live Again.",
      ogDescription:
        "Professional physiotherapy for pain relief and full recovery. Modern equipment, experienced team. Free first consultation.",
    },
  },
};
