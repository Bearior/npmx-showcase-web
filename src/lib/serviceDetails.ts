export interface ServiceDetail {
  slug: string;
  th: {
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    process: { step: string; text: string }[];
    duration: string;
    ctaText: string;
  };
  en: {
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    process: { step: string; text: string }[];
    duration: string;
    ctaText: string;
  };
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "back-pain",
    th: {
      title: "รักษาอาการปวดหลัง",
      subtitle: "หายปวด กลับมาใช้ชีวิตได้เต็มที่",
      description:
        "ปวดหลัง หมอนรองกระดูกทับเส้น กระดูกสันหลังเสื่อม เราดูแลครบทุกอาการด้วยเทคนิคเฉพาะทาง เครื่องมือทันสมัย และนักกายภาพบำบัดที่มีประสบการณ์",
      benefits: [
        "ลดปวดตั้งแต่ครั้งแรก",
        "ไม่ต้องผ่าตัด",
        "โปรแกรมออกกำลังกายที่บ้าน",
        "ติดตามผลจนหายดี",
      ],
      process: [
        { step: "1", text: "ตรวจประเมินอาการละเอียด" },
        { step: "2", text: "วางแผนการรักษาเฉพาะบุคคล" },
        { step: "3", text: "รักษาด้วยเทคนิคและเครื่องมือ" },
        { step: "4", text: "ฝึกออกกำลังกายป้องกัน" },
      ],
      duration: "ครั้งละ 45-60 นาที · 4-8 ครั้ง",
      ctaText: "นัดหมายรักษาปวดหลัง",
    },
    en: {
      title: "Back Pain Treatment",
      subtitle: "End the pain. Live fully again.",
      description:
        "Herniated disc, sciatica, degenerative spine — we treat all back conditions with specialized techniques, modern equipment, and experienced physiotherapists.",
      benefits: [
        "Pain relief from session one",
        "Non-surgical approach",
        "Home exercise program included",
        "Follow-up until full recovery",
      ],
      process: [
        { step: "1", text: "Detailed assessment" },
        { step: "2", text: "Personalized treatment plan" },
        { step: "3", text: "Treatment with techniques & equipment" },
        { step: "4", text: "Preventive exercise training" },
      ],
      duration: "45-60 min per session · 4-8 sessions",
      ctaText: "Book Back Pain Treatment",
    },
  },
  {
    slug: "office-syndrome",
    th: {
      title: "ออฟฟิศซินโดรม",
      subtitle: "นั่งทำงานไม่ต้องทนปวดอีกต่อไป",
      description:
        "ปวดคอ บ่า ไหล่ หลัง จากการนั่งทำงานนาน รักษาตรงจุดด้วยเทคนิครักษาเฉพาะทาง ปรับท่าทาง ป้องกันอาการกลับมา",
      benefits: [
        "รักษาตรงจุดที่ปวด",
        "คำแนะนำจัดโต๊ะทำงาน",
        "ท่าบริหารทำที่ออฟฟิศได้",
        "ผลลัพธ์เห็นชัดใน 3-5 ครั้ง",
      ],
      process: [
        { step: "1", text: "ตรวจท่าทางและจุดปวด" },
        { step: "2", text: "รักษาด้วยเทคนิคเฉพาะ" },
        { step: "3", text: "ปรับสรีระและท่านั่ง" },
        { step: "4", text: "แนะนำบริหารป้องกัน" },
      ],
      duration: "ครั้งละ 30-45 นาที · 3-6 ครั้ง",
      ctaText: "นัดหมายรักษาออฟฟิศซินโดรม",
    },
    en: {
      title: "Office Syndrome",
      subtitle: "Work without pain.",
      description:
        "Neck, shoulder, and back pain from prolonged sitting. Targeted treatment, posture correction, and prevention to keep pain from coming back.",
      benefits: [
        "Targeted pain relief",
        "Desk setup advice",
        "Office-friendly stretches",
        "Noticeable results in 3-5 sessions",
      ],
      process: [
        { step: "1", text: "Posture & pain assessment" },
        { step: "2", text: "Specialized treatment" },
        { step: "3", text: "Posture correction" },
        { step: "4", text: "Preventive exercises" },
      ],
      duration: "30-45 min per session · 3-6 sessions",
      ctaText: "Book Office Syndrome Treatment",
    },
  },
  {
    slug: "post-surgery-rehab",
    th: {
      title: "ฟื้นฟูหลังผ่าตัด",
      subtitle: "กลับมาใช้ชีวิตได้เร็วและปลอดภัย",
      description:
        "โปรแกรมฟื้นฟูหลังผ่าตัดกระดูก ข้อเข่า ไหล่ กล้ามเนื้อ ออกแบบเฉพาะบุคคล ดูแลตั้งแต่หลังผ่าตัดจนกลับมาแข็งแรง",
      benefits: [
        "โปรแกรมฟื้นฟูเฉพาะบุคคล",
        "ประสานงานกับแพทย์ผ่าตัด",
        "ติดตามพัฒนาการทุกครั้ง",
        "ฟื้นตัวเร็วกว่าปกติ",
      ],
      process: [
        { step: "1", text: "ประเมินสภาพหลังผ่าตัด" },
        { step: "2", text: "วางแผนฟื้นฟูร่วมกับแพทย์" },
        { step: "3", text: "ฝึกเคลื่อนไหวและเสริมกล้ามเนื้อ" },
        { step: "4", text: "ฟื้นฟูจนกลับสู่ปกติ" },
      ],
      duration: "ครั้งละ 45-60 นาที · 8-16 ครั้ง",
      ctaText: "นัดหมายฟื้นฟูหลังผ่าตัด",
    },
    en: {
      title: "Post-Surgery Rehab",
      subtitle: "Recover faster and safer.",
      description:
        "Personalized rehab programs after bone, knee, shoulder, and muscle surgery. From post-op care to full strength recovery.",
      benefits: [
        "Personalized rehab program",
        "Coordinated with your surgeon",
        "Progress tracked every session",
        "Faster-than-average recovery",
      ],
      process: [
        { step: "1", text: "Post-surgery assessment" },
        { step: "2", text: "Rehab plan with your doctor" },
        { step: "3", text: "Mobility & strength training" },
        { step: "4", text: "Full recovery program" },
      ],
      duration: "45-60 min per session · 8-16 sessions",
      ctaText: "Book Post-Surgery Rehab",
    },
  },
  {
    slug: "sports-physiotherapy",
    th: {
      title: "กายภาพบำบัดนักกีฬา",
      subtitle: "กลับไปเล่นกีฬาได้อย่างมั่นใจ",
      description:
        "ฟื้นฟูอาการบาดเจ็บจากกีฬา เสริมสร้างกล้ามเนื้อ ป้องกันการบาดเจ็บซ้ำ ดูแลโดยนักกายภาพบำบัดเฉพาะทางด้านกีฬา",
      benefits: [
        "ดูแลโดยผู้เชี่ยวชาญด้านกีฬา",
        "เทคนิครักษาเฉพาะนักกีฬา",
        "ลดเวลาพักฟื้น",
        "โปรแกรมป้องกันบาดเจ็บ",
      ],
      process: [
        { step: "1", text: "วิเคราะห์การเคลื่อนไหว" },
        { step: "2", text: "รักษาจุดบาดเจ็บ" },
        { step: "3", text: "ฝึกเสริมความแข็งแรง" },
        { step: "4", text: "กลับสู่สนาม" },
      ],
      duration: "ครั้งละ 45-60 นาที · 4-12 ครั้ง",
      ctaText: "นัดหมายกายภาพนักกีฬา",
    },
    en: {
      title: "Sports Physiotherapy",
      subtitle: "Get back in the game.",
      description:
        "Sports injury recovery, muscle strengthening, and injury prevention by physiotherapists specialized in sports medicine.",
      benefits: [
        "Sports-specialized therapists",
        "Athlete-focused techniques",
        "Reduced recovery time",
        "Injury prevention program",
      ],
      process: [
        { step: "1", text: "Movement analysis" },
        { step: "2", text: "Injury treatment" },
        { step: "3", text: "Strength training" },
        { step: "4", text: "Return to sport" },
      ],
      duration: "45-60 min per session · 4-12 sessions",
      ctaText: "Book Sports Physiotherapy",
    },
  },
  {
    slug: "therapeutic-massage",
    th: {
      title: "นวดเพื่อการรักษา",
      subtitle: "คลายปวด คลายตึง ด้วยมือผู้เชี่ยวชาญ",
      description:
        "นวดแก้อาการปวดกล้ามเนื้อ คลายจุดตึง ลดปวดศีรษะ ด้วยเทคนิคการนวดทางการแพทย์ โดยนักกายภาพบำบัดผู้มีใบประกอบวิชาชีพ",
      benefits: [
        "คลายปวดได้ตั้งแต่ครั้งแรก",
        "นวดโดยนักกายภาพบำบัด",
        "ปลอดภัย ไม่ทำให้บาดเจ็บ",
        "ช่วยให้นอนหลับดีขึ้น",
      ],
      process: [
        { step: "1", text: "ตรวจจุดปวดและตึง" },
        { step: "2", text: "นวดด้วยเทคนิครักษา" },
        { step: "3", text: "ยืดกล้ามเนื้อเฉพาะจุด" },
        { step: "4", text: "แนะนำดูแลตนเอง" },
      ],
      duration: "ครั้งละ 30-60 นาที",
      ctaText: "นัดหมายนวดบำบัด",
    },
    en: {
      title: "Therapeutic Massage",
      subtitle: "Expert hands for real relief.",
      description:
        "Clinical massage for muscle pain, tension, and headaches. Medical massage techniques by licensed physiotherapists.",
      benefits: [
        "Relief from first session",
        "Done by licensed physiotherapists",
        "Safe, no risk of injury",
        "Better sleep quality",
      ],
      process: [
        { step: "1", text: "Pain & tension assessment" },
        { step: "2", text: "Therapeutic massage" },
        { step: "3", text: "Targeted stretching" },
        { step: "4", text: "Self-care guidance" },
      ],
      duration: "30-60 min per session",
      ctaText: "Book Therapeutic Massage",
    },
  },
  {
    slug: "dry-needling",
    th: {
      title: "ฝังเข็ม & Dry Needling",
      subtitle: "ลดปวด คลายกล้ามเนื้อ อย่างตรงจุด",
      description:
        "เทคนิค Dry Needling ช่วยลดปวด คลายจุดกดเจ็บ แก้ปัญหากล้ามเนื้อตึงเรื้อรัง โดยนักกายภาพบำบัดผู้เชี่ยวชาญเฉพาะทาง",
      benefits: [
        "เห็นผลไวใน 1-2 ครั้ง",
        "แก้ปวดเรื้อรังได้ดี",
        "ปลอดภัย โดยผู้เชี่ยวชาญ",
        "ใช้ร่วมกับการรักษาอื่นได้",
      ],
      process: [
        { step: "1", text: "หาจุดกดเจ็บ (Trigger Point)" },
        { step: "2", text: "ฝังเข็มคลายกล้ามเนื้อ" },
        { step: "3", text: "รักษาเสริมด้วยเทคนิคอื่น" },
        { step: "4", text: "ติดตามผล วางแผนต่อ" },
      ],
      duration: "ครั้งละ 30-45 นาที · 2-6 ครั้ง",
      ctaText: "นัดหมาย Dry Needling",
    },
    en: {
      title: "Dry Needling",
      subtitle: "Pinpoint pain relief.",
      description:
        "Dry Needling technique for trigger point release, chronic muscle tension, and pain reduction by specialized physiotherapists.",
      benefits: [
        "Fast results in 1-2 sessions",
        "Effective for chronic pain",
        "Safe, by certified experts",
        "Combines with other treatments",
      ],
      process: [
        { step: "1", text: "Find trigger points" },
        { step: "2", text: "Needling for muscle release" },
        { step: "3", text: "Complementary treatment" },
        { step: "4", text: "Follow-up & plan" },
      ],
      duration: "30-45 min per session · 2-6 sessions",
      ctaText: "Book Dry Needling",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((s) => s.slug);
}
