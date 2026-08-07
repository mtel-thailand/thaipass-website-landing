import type { Language } from "./language-context";

export const content = {
  en: {
    header: {
      nav: {
        features: "Features",
        howItWorks: "How it Works",
        whyThaiPass: "Why ThaiPass",
        faq: "FAQ",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      download: "Download",
    },
    hero: {
      badge: "Your trusted companion",
      headline: {
        prefix: "Explore Thailand with a ",
        highlight: "companion",
        suffix: " by your side",
      },
      subcopy:
        "ThaiPass guides you through every stage of your trip - before you go, the moment you arrive, and everywhere you explore - so less time is spent managing, and more time is spent living it.",
    },
    howItWorks: {
      badge: "Everything you need",
      headline: {
        prefix: "One app for every step of your ",
        highlight: "Thailand",
        suffix: " trip",
      },
      subcopy: "From planning to arrival and beyond. ThaiPass helps you travel with confidence",
      cards: [
        {
          image: "/how-it-works/fast-track.png",
          title: "Fast Track Airport Arrival",
          description:
            "Skip the stress and get through the airport with ease. ThaiPass guides you step-by-step for a smooth arrival experience.",
          bullets: ["Fast Track & priority lanes", "Immigration & airport tips"],
        },
        {
          image: "/how-it-works/services.png",
          title: "Services - Everything sorted for you",
          description:
            "Trusted services that handle the logistics of your trip, so you can spend less time managing and more time enjoying Thailand.",
          bullets: ["Easy eSIM setup", "Travel insurance covered", "Trusted local partners"],
        },
        {
          image: "/how-it-works/transport.png",
          title: "Travel Vouchers & Transportation",
          description:
            "Book airport transfers and other transport options, and access all your vouchers in one place.",
          bullets: ["Airport transfer booking", "All your vouchers in one place"],
        },
      ],
    },
    whyThaiPass: {
      badge: "Why you'll love ThaiPass",
      headline: {
        prefix: "Travel with ",
        highlight: "peace of mind",
      },
      subcopy:
        "From planning to arrival and beyond, ThaiPass is your all-in-one companion that makes every step easier.",
      items: [
        {
          image: "/whythaipass_01.png",
          icon: "/icons/shield-check.svg",
          title: "Trusted & Official",
          description: "Accurate, up-to-date information you can rely on.",
        },
        {
          image: "/whythaipass_02.png",
          icon: "/icons/clock.svg",
          title: "Save Time & Avoid Mistakes",
          description: "We help you get it right, from the start.",
        },
        {
          image: "/whythaipass_03.png",
          icon: "/icons/phone.svg",
          title: "All-in-One Convenience",
          description: "Everything you need in one smart companion.",
        },
        {
          image: "/whythaipass_04.png",
          icon: "/icons/heart.svg",
          title: "Made for Travelers Like You",
          description: "Built with real travelers needs in mind.",
        },
      ],
    },
    cta: {
      line1: "Thailand awaits.",
      headline: {
        prefix: "Let ",
        highlight: "ThaiPass",
        suffix: " take you there.",
      },
      subcopy: "Download the app and travel with confidence.",
    },
    footer: {
      tagline: "your trusted trip companion for a smooth journey in Thailand.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
    },
  },
  th: {
    header: {
      nav: {
        features: "ฟีเจอร์",
        howItWorks: "วิธีการทำงาน",
        whyThaiPass: "ทำไมต้อง ThaiPass",
        faq: "คำถามที่พบบ่อย",
        openMenu: "เปิดเมนู",
        closeMenu: "ปิดเมนู",
      },
      download: "ดาวน์โหลด",
    },
    hero: {
      badge: "เพื่อนคู่ใจที่คุณไว้ใจได้",
      headline: {
        prefix: "สำรวจประเทศไทยไปพร้อมกับ",
        highlight: "เพื่อนคู่ใจ",
        suffix: "ที่อยู่เคียงข้างคุณ",
      },
      subcopy:
        "ThaiPass จะพาคุณไปในทุกช่วงของการเดินทาง ตั้งแต่ก่อนออกเดินทาง ทันทีที่คุณมาถึง ไปจนถึงทุกที่ที่คุณไปเที่ยว เพื่อให้คุณใช้เวลาน้อยลงกับการจัดการ และใช้เวลามากขึ้นกับการใช้ชีวิต",
    },
    howItWorks: {
      badge: "ทุกสิ่งที่คุณต้องการ",
      headline: {
        prefix: "แอปเดียวสำหรับทุกขั้นตอนการเดินทางใน",
        highlight: "ประเทศไทย",
        suffix: "ของคุณ",
      },
      subcopy:
        "ตั้งแต่การวางแผนไปจนถึงการเดินทางมาถึงและหลังจากนั้น ThaiPass ช่วยให้คุณเดินทางได้อย่างมั่นใจ",
      cards: [
        {
          image: "/how-it-works/fast-track.png",
          title: "ผ่านสนามบินอย่างรวดเร็ว",
          description:
            "ข้ามความเครียดและผ่านสนามบินได้อย่างง่ายดาย ThaiPass แนะนำคุณทีละขั้นตอนเพื่อการเดินทางมาถึงที่ราบรื่น",
          bullets: ["ช่องทางพิเศษและช่องทางด่วน", "เคล็ดลับตรวจคนเข้าเมืองและสนามบิน"],
        },
        {
          image: "/how-it-works/services.png",
          title: "บริการ - จัดการทุกอย่างให้คุณ",
          description:
            "บริการที่เชื่อถือได้ซึ่งจัดการโลจิสติกส์การเดินทางของคุณ เพื่อให้คุณใช้เวลาจัดการน้อยลงและเพลิดเพลินกับประเทศไทยได้มากขึ้น",
          bullets: ["ตั้งค่า eSIM ง่ายๆ", "ครอบคลุมประกันการเดินทาง", "พันธมิตรท้องถิ่นที่เชื่อถือได้"],
        },
        {
          image: "/how-it-works/transport.png",
          title: "บัตรกำนัลท่องเที่ยวและการเดินทาง",
          description:
            "จองรถรับส่งสนามบินและตัวเลือกการเดินทางอื่นๆ พร้อมเข้าถึงบัตรกำนัลทั้งหมดของคุณได้ในที่เดียว",
          bullets: ["จองรถรับส่งสนามบิน", "บัตรกำนัลทั้งหมดในที่เดียว"],
        },
      ],
    },
    whyThaiPass: {
      badge: "เหตุผลที่คุณจะรัก ThaiPass",
      headline: {
        prefix: "เดินทางอย่าง",
        highlight: "สบายใจ",
      },
      subcopy:
        "ตั้งแต่การวางแผนไปจนถึงการเดินทางมาถึงและหลังจากนั้น ThaiPass คือเพื่อนคู่ใจที่ครบครันซึ่งทำให้ทุกขั้นตอนง่ายขึ้น",
      items: [
        {
          image: "/whythaipass_01.png",
          icon: "/icons/shield-check.svg",
          title: "เชื่อถือได้และเป็นทางการ",
          description: "ข้อมูลที่ถูกต้องและทันสมัยที่คุณไว้วางใจได้",
        },
        {
          image: "/whythaipass_02.png",
          icon: "/icons/clock.svg",
          title: "ประหยัดเวลาและหลีกเลี่ยงข้อผิดพลาด",
          description: "เราช่วยให้คุณทำถูกต้องตั้งแต่เริ่มต้น",
        },
        {
          image: "/whythaipass_03.png",
          icon: "/icons/phone.svg",
          title: "ความสะดวกสบายครบในที่เดียว",
          description: "ทุกสิ่งที่คุณต้องการในเพื่อนคู่ใจอัจฉริยะเดียว",
        },
        {
          image: "/whythaipass_04.png",
          icon: "/icons/heart.svg",
          title: "สร้างขึ้นเพื่อนักเดินทางแบบคุณ",
          description: "สร้างขึ้นโดยคำนึงถึงความต้องการของนักเดินทางจริง",
        },
      ],
    },
    cta: {
      line1: "ประเทศไทยรอคุณอยู่",
      headline: {
        prefix: "ให้ ",
        highlight: "ThaiPass",
        suffix: " พาคุณไปที่นั่น",
      },
      subcopy: "ดาวน์โหลดแอปแล้วเดินทางอย่างมั่นใจ",
    },
    footer: {
      tagline: "เพื่อนคู่ใจที่คุณไว้วางใจได้ เพื่อการเดินทางที่ราบรื่นในประเทศไทย",
      terms: "ข้อกำหนดและเงื่อนไข",
      privacy: "นโยบายความเป็นส่วนตัว",
      refund: "นโยบายการคืนเงิน",
    },
  },
} as const satisfies Record<Language, unknown>;

export const navSections = ["features", "how-it-works", "why-thaipass", "faq"] as const;
