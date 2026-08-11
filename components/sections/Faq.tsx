"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage, type Language } from "@/lib/language-context";
import { Reveal } from "@/components/Reveal";

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
          q: "When do I use my fast-track pass?",
          a: "Use your FastPass when you want to skip the immigration queue and get through the airport quickly — one pass covers one person for a single arrival or departure, activated with a 10-minute slide-to-start countdown once you're ready to head to the meeting point.",
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
          a: "ThaiPass คือบริการท่องเที่ยวดิจิทัลที่ช่วยให้การเดินทางมาถึงประเทศไทยราบรื่นขึ้น เมื่อซื้อ ThaiPass คุณจะได้รับสิทธิประโยชน์ที่คัดสรรมาให้ เช่น บริการ Fast Track ที่สนามบิน คูปองท่องเที่ยว บริการเชื่อมต่ออินเทอร์เน็ต และข้อเสนอพิเศษจากพาร์ทเนอร์",
        },
        {
          q: "ThaiPass การันตีว่าจะผ่านด่านตรวจคนเข้าเมืองได้เร็วขึ้นหรือไม่?",
          a: "ไม่การันตี ThaiPass ให้สิทธิ์เข้าช่องทางพิเศษในจุดที่มีให้บริการ แต่การจัดการคิวและขั้นตอนต่าง ๆ ยังขึ้นอยู่กับเจ้าหน้าที่ตรวจคนเข้าเมือง ระยะเวลาอาจแตกต่างกันไปตามสถานการณ์ของสนามบินและมาตรการด้านความปลอดภัย",
        },
        {
          q: "ThaiPass การันตีว่าจะเข้าประเทศไทยได้หรือไม่?",
          a: "ไม่การันตี การอนุญาตให้เข้าประเทศไทยเป็นดุลยพินิจของสำนักงานตรวจคนเข้าเมืองแห่งราชอาณาจักรไทยเท่านั้น นักท่องเที่ยวยังต้องมีคุณสมบัติครบตามข้อกำหนดวีซ่าและการเข้าเมือง",
        },
        {
          q: "สนามบินไหนบ้างที่ใช้ Fast Track ของ ThaiPass ได้?",
          a: "บริการ Fast Track ของ ThaiPass มีให้บริการที่สนามบินนานาชาติที่คัดเลือกในประเทศไทย ความพร้อมให้บริการอาจแตกต่างกันไปตามแต่ละช่วงเวลา",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับการซื้อ",
      faqs: [
        {
          q: "ควรซื้อ ThaiPass เมื่อไหร่?",
          a: "แนะนำให้ซื้อ ThaiPass ก่อนออกเดินทางมาไทย เพื่อให้พร้อมตั้งแต่ก่อนถึงสนามบิน เพื่อความสะดวก",
        },
        {
          q: "จะได้รับ Fast Track Pass เมื่อไหร่?",
          a: "Fast Track Pass แบบดิจิทัลจะออกให้คุณทันทีหลังชำระเงินสำเร็จ และเข้าดูได้ทันทีผ่านแพลตฟอร์ม ThaiPass",
        },
        {
          q: "ต้องใช้ Fast Track Pass ตอนไหน?",
          a: "ใช้ FastPass เมื่อต้องการข้ามคิวตรวจคนเข้าเมืองและผ่านสนามบินได้เร็วขึ้น หนึ่งพาสใช้ได้กับ 1 คน สำหรับการเดินทางเข้าหรือออกครั้งเดียว โดยจะเริ่มนับถอยหลัง 10 นาทีเมื่อเลื่อนเริ่มใช้งาน ก่อนเดินไปยังจุดนัดพบ",
        },
        {
          q: "ต้องปริ้น ThaiPass หรือไม่?",
          a: "ไม่จำเป็น สามารถแสดง QR Pass แบบดิจิทัลบนมือถือได้เลย",
        },
        {
          q: "โอน ThaiPass ให้คนอื่นได้หรือไม่?",
          a: "ไม่ได้ ThaiPass ออกให้เฉพาะบุคคล ไม่สามารถโอนสิทธิ์ให้ผู้อื่นได้",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับคูปองและแพ็กเกจ",
      faqs: [
        {
          q: "แลกคูปองสำหรับใช้บริการรถ/ขนส่งโดยสารได้อย่างไร?",
          a: "แลกคูปองได้กับพาร์ทเนอร์ที่ร่วมรายการ ตามขั้นตอนที่ระบุไว้ในแพลตฟอร์ม ThaiPass",
        },
        {
          q: "คูปองมีวันหมดอายุหรือไม่?",
          a: "มี คูปองโปรโมชั่นบางรายการมีระยะเวลาการใช้งาน ควรใช้ให้ทันภายในเวลาที่กำหนด",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับประกันภัย",
      faqs: [
        {
          q: "ครอบคลุมประกันภัยอะไรบ้าง?",
          a: "บางแพ็กเกจของ ThaiPass มีประกันการเดินทางรวมอยู่ด้วย ให้บริการโดยพาร์ทเนอร์ประกันภัยที่ได้รับใบอนุญาต รายละเอียดความคุ้มครอง ข้อยกเว้น และขั้นตอนเคลม จะระบุโดยบริษัทประกันโดยตรง",
        },
        {
          q: "เคลมประกันได้อย่างไร?",
          a: "ต้องยื่นเรื่องเคลมโดยตรงกับบริษัทประกันตามที่ระบุในกรมธรรม์ ThaiPass ไม่ได้เป็นผู้ดำเนินการเคลมให้",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับ E-SIM",
      faqs: [
        {
          q: "สิทธิประโยชน์ eSIM คืออะไร?",
          a: "บางแพ็กเกจของ ThaiPass มี eSIM ฟรีให้ใช้งาน จากพาร์ทเนอร์ผู้ให้บริการโทรคมนาคม",
        },
        {
          q: "มือถือของฉันรองรับ eSIM หรือไม่?",
          a: "ต้องเป็นเครื่องที่รองรับเทคโนโลยี eSIM ซึ่งความเข้ากันได้จะแตกต่างกันไปตามรุ่นเครื่อง",
        },
      ],
    },
    {
      category: "คำถามเกี่ยวกับการคืนเงิน",
      faqs: [
        {
          q: "ขอคืนเงินได้หรือไม่?",
          a: "โดยทั่วไป ThaiPass ไม่สามารถคืนเงินได้หลังจากออกสิทธิ์แล้ว เนื่องจากเป็นบริการดิจิทัลที่อนุมัติให้ใช้งานได้ทันทีหลังซื้อ แต่อาจพิจารณาคืนเงินได้ในบางกรณี เช่น ระบบขัดข้องหรือบริการไม่พร้อมให้บริการ",
        },
        {
          q: "ถ้าเที่ยวบินล่าช้าจะทำอย่างไร?",
          a: "ThaiPass ยังใช้ได้ตามวันเดินทางที่ระบุไว้ หากแผนการเดินทางเปลี่ยน ให้ทำตามคำแนะนำที่ระบุในแพลตฟอร์ม",
        },
      ],
    },
    {
      category: "คำถามด้านการสนับสนุน",
      faqs: [
        {
          q: "หาช่องทาง Fast Track ไม่เจอ ต้องทำอย่างไร?",
          a: "หากลงที่สนามบินสุวรรณภูมิ ให้เดินไปที่ประตู D5 เจ้าหน้าที่และตัวแทนของเราจะรออยู่ที่นั่นเพื่อดูแล หากไม่มีใครอยู่ ช่องทาง Fast Track จะอยู่ตรงข้ามกับประตูดังกล่าว หรือหากยังหาไม่พบ สามารถสอบถามเจ้าหน้าที่ภาคพื้นดินคนใดก็ได้ที่สนามบิน เพื่อขอคำแนะนำเส้นทาง",
        },
        {
          q: "ติดต่อฝ่ายสนับสนุน ThaiPass ได้อย่างไร?",
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
    <section id="faq" className="bg-white px-6 py-20 md:px-10 xl:px-[118px] md:py-28">
      <Reveal className="mx-auto flex max-w-[1203px] flex-col items-center gap-4 text-center">
        <span className="w-fit rounded-[100px] bg-navy-100 px-3 py-2 font-sans text-xs font-bold text-navy-700">
          {heading.badge}
        </span>
        <h2 className="font-serif text-[32px] font-semibold leading-[1.1] text-navy-900 sm:text-[40px]">
          {heading.title}
        </h2>
      </Reveal>

      <div className="mx-auto mt-16 flex max-w-[1203px] flex-col gap-10">
        {categories.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: Math.min(groupIndex, 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
