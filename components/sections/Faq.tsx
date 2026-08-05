"use client";

import { useState } from "react";
import { useLanguage, type Language } from "@/lib/language-context";

type FaqItem = { q: string; a: string; link?: string };
type FaqCategory = { category: string; faqs: FaqItem[] };

const FAQ_DATA: Record<Language, FaqCategory[]> = {
  en: [
    {
      category: "Most Common FAQ",
      faqs: [
        {
          q: "What is ThaiPass?",
          a: "ThaiPass is a digital travel service designed to enhance your arrival experience in Thailand. By purchasing a ThaiPass, travelers can access selected benefits such as immigration fast-track services, travel vouchers, connectivity services, and other partner offers.",
        },
        {
          q: "Does ThaiPass guarantee faster immigration processing?",
          a: "No. ThaiPass provides access to designated priority lanes where available, but immigration officers control queue management and entry procedures. Processing time may vary depending on airport conditions and security requirements.",
        },
        {
          q: "Does ThaiPass guarantee entry into Thailand?",
          a: "No. Entry into Thailand is determined solely by the Royal Thai Immigration Bureau. Travelers must meet all visa and immigration requirements.",
        },
        {
          q: "Which airports support ThaiPass fast-track?",
          a: "ThaiPass fast-track services may be available at selected international airports in Thailand. Availability may vary depending on operational conditions.",
        },
      ],
    },
    {
      category: "Purchase Related Questions",
      faqs: [
        {
          q: "When should I purchase ThaiPass?",
          a: "Travelers are recommended to purchase ThaiPass before arriving in Thailand, ideally prior to departure.",
        },
        {
          q: "When will I receive my fast-track pass?",
          a: "Your digital fast-track pass will be issued immediately after successful payment and will be accessible through the ThaiPass platform.",
        },
        {
          q: "Do I need to print my ThaiPass?",
          a: "No. You may present the digital QR pass on your mobile device.",
        },
        {
          q: "Can I transfer my ThaiPass to another traveler?",
          a: "No. ThaiPass is issued to an individual traveler and is not transferable.",
        },
      ],
    },
    {
      category: "Voucher / Bundle Questions",
      faqs: [
        {
          q: "How do I redeem the transportation voucher?",
          a: "Transportation vouchers can be redeemed with participating partner services according to the instructions provided in the ThaiPass platform.",
        },
        {
          q: "Do vouchers expire?",
          a: "Yes. Promotional vouchers may have an expiration period and must be used within the stated validity timeframe.",
        },
      ],
    },
    {
      category: "Insurance Related Questions",
      faqs: [
        {
          q: "What insurance coverage is included?",
          a: "Certain ThaiPass packages may include travel insurance provided by licensed insurance partners. Coverage details, limitations, and claim procedures will be provided by the insurance provider.",
        },
        {
          q: "How do I make an insurance claim?",
          a: "Insurance claims must be submitted directly to the insurance provider according to the policy documentation. ThaiPass does not process insurance claims.",
        },
      ],
    },
    {
      category: "E-SIM Related Questions",
      faqs: [
        {
          q: "What is the eSIM benefit?",
          a: "Some ThaiPass packages include complimentary eSIM connectivity provided by partner telecommunications providers.",
        },
        {
          q: "Is my phone compatible with eSIM?",
          a: "Your device must support eSIM technology. Compatibility varies by phone model.",
        },
      ],
    },
    {
      category: "Refund Questions",
      faqs: [
        {
          q: "Can I get a refund?",
          a: "ThaiPass purchases are generally non-refundable once issued, as they are digital services delivered instantly. Refunds may be considered in limited situations such as technical errors or service unavailability.",
        },
        {
          q: "What if my flight is delayed?",
          a: "ThaiPass remains valid for the specified travel date. Travelers should follow instructions provided in the platform if travel plans change.",
        },
      ],
    },
    {
      category: "Support Questions",
      faqs: [
        {
          q: "What should I do if I cannot find the fast-track lane?",
          a: "For travelers arriving at Suvarnabhumi Airport, please proceed to Gate D5 upon landing. Our staff and agents will be there to assist you. If no one is present, the fast-track lane is located directly across from the gate.\n\nAs a last resort, please approach any airport ground staff, and they will guide you to the appropriate location.",
        },
        {
          q: "How do I contact ThaiPass support?",
          a: "Send us an email and we will get back to you as soon as possible.",
          link: "support@mythaipass.com",
        },
      ],
    },
  ],
  th: [
    {
      category: "คำถามที่พบบ่อย",
      faqs: [
        {
          q: "ThaiPass คืออะไร?",
          a: "ThaiPass คือบริการท่องเที่ยวดิจิทัลที่ออกแบบมาเพื่อยกระดับประสบการณ์การเดินทางมาถึงประเทศไทย เมื่อซื้อ ThaiPass นักท่องเที่ยวสามารถเข้าถึงสิทธิประโยชน์ที่คัดสรร เช่น บริการ Fast Track ที่สนามบิน คูปองท่องเที่ยว บริการเชื่อมต่อ และข้อเสนอจากพาร์ทเนอร์อื่น ๆ",
        },
        {
          q: "ThaiPass รับประกันการผ่านด่านตรวจคนเข้าเมืองที่รวดเร็วขึ้นหรือไม่?",
          a: "ไม่ ThaiPass ให้สิทธิ์เข้าถึงช่องทางพิเศษที่มีให้บริการ แต่เจ้าหน้าที่ตรวจคนเข้าเมืองยังคงควบคุมการจัดการคิวและขั้นตอนการเข้าประเทศ เวลาดำเนินการอาจแตกต่างกันขึ้นอยู่กับสภาพแวดล้อมของสนามบินและข้อกำหนดด้านความปลอดภัย",
        },
        {
          q: "ThaiPass รับประกันการเข้าประเทศไทยหรือไม่?",
          a: "ไม่ การเข้าประเทศไทยขึ้นอยู่กับดุลพินิจของสำนักงานตรวจคนเข้าเมืองแห่งราชอาณาจักรไทยเท่านั้น นักท่องเที่ยวต้องปฏิบัติตามข้อกำหนดด้านวีซ่าและการเข้าเมืองทั้งหมด",
        },
        {
          q: "สนามบินใดบ้างที่รองรับ Fast Track ของ ThaiPass?",
          a: "บริการ Fast Track ของ ThaiPass อาจมีให้บริการที่สนามบินนานาชาติที่คัดเลือกในประเทศไทย โดยความพร้อมให้บริการอาจแตกต่างกันตามสภาพการดำเนินงาน",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับการซื้อ",
      faqs: [
        {
          q: "ควรซื้อ ThaiPass เมื่อใด?",
          a: "แนะนำให้นักท่องเที่ยวซื้อ ThaiPass ก่อนเดินทางมาถึงประเทศไทย โดยควรซื้อก่อนออกเดินทาง",
        },
        {
          q: "จะได้รับ Fast Track Pass เมื่อใด?",
          a: "Fast Track Pass ดิจิทัลของคุณจะออกให้ทันทีหลังจากชำระเงินสำเร็จ และสามารถเข้าถึงได้ผ่านแพลตฟอร์ม ThaiPass",
        },
        {
          q: "ต้องพิมพ์ ThaiPass หรือไม่?",
          a: "ไม่ คุณสามารถแสดง QR Pass ดิจิทัลบนอุปกรณ์มือถือของคุณได้",
        },
        {
          q: "สามารถโอน ThaiPass ให้นักท่องเที่ยวคนอื่นได้หรือไม่?",
          a: "ไม่ ThaiPass ออกให้สำหรับนักท่องเที่ยวแต่ละคนและไม่สามารถโอนได้",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับคูปองและแพ็กเกจ",
      faqs: [
        {
          q: "วิธีแลกคูปองการขนส่งทำอย่างไร?",
          a: "คูปองการขนส่งสามารถแลกได้กับบริการพาร์ทเนอร์ที่เข้าร่วมตามคำแนะนำที่ระบุในแพลตฟอร์ม ThaiPass",
        },
        {
          q: "คูปองมีวันหมดอายุหรือไม่?",
          a: "มี คูปองโปรโมชั่นอาจมีระยะเวลาหมดอายุ และต้องใช้ภายในระยะเวลาที่กำหนด",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับประกันภัย",
      faqs: [
        {
          q: "ครอบคลุมประกันภัยอะไรบ้าง?",
          a: "แพ็กเกจ ThaiPass บางรายการอาจรวมประกันการเดินทางที่ให้บริการโดยบริษัทประกันภัยที่ได้รับอนุญาต รายละเอียดความคุ้มครอง ข้อยกเว้น และขั้นตอนการเรียกร้องจะได้รับจากบริษัทประกันภัย",
        },
        {
          q: "วิธีเรียกร้องประกันภัยทำอย่างไร?",
          a: "การเรียกร้องประกันภัยต้องยื่นโดยตรงต่อบริษัทประกันภัยตามเอกสารกรมธรรม์ ThaiPass ไม่ดำเนินการเรียกร้องประกันภัย",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับ E-SIM",
      faqs: [
        {
          q: "สิทธิประโยชน์ eSIM คืออะไร?",
          a: "แพ็กเกจ ThaiPass บางรายการรวมการเชื่อมต่อ eSIM ฟรีที่ให้บริการโดยผู้ให้บริการโทรคมนาคมพาร์ทเนอร์",
        },
        {
          q: "โทรศัพท์ของฉันรองรับ eSIM หรือไม่?",
          a: "อุปกรณ์ของคุณต้องรองรับเทคโนโลยี eSIM ความเข้ากันได้แตกต่างกันตามรุ่นโทรศัพท์",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับการคืนเงิน",
      faqs: [
        {
          q: "ขอคืนเงินได้หรือไม่?",
          a: "การซื้อ ThaiPass โดยทั่วไปไม่สามารถคืนเงินได้เมื่อออกให้แล้ว เนื่องจากเป็นบริการดิจิทัลที่ส่งมอบทันที อาจพิจารณาคืนเงินในสถานการณ์จำกัด เช่น ข้อผิดพลาดทางเทคนิคหรือบริการไม่พร้อมให้บริการ",
        },
        {
          q: "จะเป็นอย่างไรหากเที่ยวบินล่าช้า?",
          a: "ThaiPass ยังคงมีผลใช้ได้สำหรับวันเดินทางที่ระบุ นักท่องเที่ยวควรปฏิบัติตามคำแนะนำในแพลตฟอร์มหากแผนการเดินทางเปลี่ยนแปลง",
        },
      ],
    },
    {
      category: "คำถามด้านการสนับสนุน",
      faqs: [
        {
          q: "จะทำอย่างไรหากหาช่องทาง Fast Track ไม่พบ?",
          a: "ป้ายบอกทางในสนามบินหรือเจ้าหน้าที่ภาคพื้นดินอาจนำทางนักท่องเที่ยวไปยังสถานที่ที่เหมาะสม",
        },
        {
          q: "วิธีติดต่อฝ่ายสนับสนุน ThaiPass?",
          a: "ส่งอีเมลหาเรา แล้วเราจะติดต่อกลับโดยเร็วที่สุด",
          link: "support@mythaipass.com",
        },
      ],
    },
  ],
};

const HEADING: Record<Language, { badge: string; title: string }> = {
  en: { badge: "Got questions?", title: "Frequently Asked Questions" },
  th: { badge: "มีคำถาม?", title: "คำถามที่พบบ่อย" },
};

export function Faq() {
  const { language } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);
  const categories = FAQ_DATA[language];
  const heading = HEADING[language];

  return (
    <section id="faq" className="bg-white px-6 py-20 md:px-[118px] md:py-28">
      <div className="mx-auto flex max-w-[1203px] flex-col items-center gap-4 text-center">
        <span className="w-fit rounded-[100px] bg-navy-100 px-3 py-2 font-sans text-xs font-bold text-navy-700">
          {heading.badge}
        </span>
        <h2 className="font-serif text-[32px] font-semibold leading-[1.1] text-navy-900 sm:text-[40px]">
          {heading.title}
        </h2>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1203px] flex-col gap-10">
        {categories.map((group, groupIndex) => (
          <div key={group.category}>
            <h3 className="mb-4 font-sans text-sm font-bold tracking-wide text-navy-700 uppercase">
              {group.category}
            </h3>
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
              {group.faqs.map((faq, faqIndex) => {
                const key = `${groupIndex}-${faqIndex}`;
                const isOpen = open === key;
                return (
                  <button
                    key={key}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="w-full cursor-pointer rounded-2xl border border-neutral-300 bg-white px-6 py-5 text-left transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`font-sans text-base leading-snug text-navy-900 ${
                          isOpen ? "font-semibold" : "font-medium"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span className="mt-0.5 shrink-0 font-sans text-2xl leading-none font-light text-navy-700">
                        {isOpen ? "×" : "+"}
                      </span>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="font-sans text-sm leading-relaxed whitespace-pre-line text-neutral-800">
                        {faq.a}
                        {faq.link && (
                          <>
                            <br />
                            <a
                              href={`mailto:${faq.link}`}
                              className="text-accent hover:underline"
                              onClick={(event) => event.stopPropagation()}
                            >
                              {faq.link}
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
