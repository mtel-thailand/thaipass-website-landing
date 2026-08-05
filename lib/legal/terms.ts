import type { LegalDoc } from "@/components/legal/LegalDocument";

export const termsDoc: LegalDoc = {
  title: "Terms & Conditions",
  intro: [
    'These Terms and Conditions ("Terms") govern your access to and use of the ThaiPass website, mobile applications, and related services (collectively, the "Services").',
    "By accessing or using ThaiPass, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Services.",
  ],
  sections: [
    {
      heading: "1. About ThaiPass",
      blocks: [
        {
          type: "p",
          text: "ThaiPass is a digital platform designed to enhance the travel experience in Thailand by providing access to selected travel-related services.",
        },
        { type: "p", text: "Services available through ThaiPass may include:" },
        {
          type: "ul",
          items: [
            "Immigration fast track access at participating airports",
            "Travel vouchers and promotional benefits",
            "Travel insurance coverage provided by third-party insurers",
            "eSIM connectivity services",
            "Digital wallet and payment functionality",
            "Other tourism-related services and promotions",
          ],
        },
        {
          type: "p",
          text: "ThaiPass operates as a technology platform that facilitates access to services offered by third-party providers. Certain services available on the platform may be provided directly by independent partners.",
        },
      ],
    },
    {
      heading: "2. Government Affiliation Disclaimer",
      blocks: [
        { type: "p", text: "ThaiPass is an independent platform." },
        { type: "p", text: "Unless explicitly stated otherwise, ThaiPass:" },
        {
          type: "ul",
          items: [
            "is not operated by the Government of Thailand",
            "is not part of the Immigration Bureau",
            "is not affiliated with Airports of Thailand (AOT) or any government authority",
          ],
        },
        {
          type: "p",
          text: "Any digital passes or services issued through ThaiPass do not guarantee entry into Thailand or expedited immigration processing.",
        },
        {
          type: "p",
          text: "All immigration decisions remain solely at the discretion of the Royal Thai Immigration Bureau and relevant authorities.",
        },
        {
          type: "p",
          text: "Users remain responsible for complying with all applicable visa, immigration, and entry requirements.",
        },
      ],
    },
    {
      heading: "3. Eligibility",
      blocks: [
        { type: "p", text: "To use ThaiPass, users must:" },
        {
          type: "ul",
          items: [
            "be at least 18 years old",
            "provide accurate and complete information",
            "comply with applicable laws and regulations",
          ],
        },
        {
          type: "p",
          text: "ThaiPass reserves the right to suspend or terminate accounts that provide false or misleading information.",
        },
      ],
    },
    {
      heading: "4. Fast Track Pass",
      blocks: [
        {
          type: "p",
          text: "ThaiPass may offer the ability to purchase a Fast Track Pass allowing access to designated immigration priority lanes at participating airports.",
        },
        { type: "p", text: "Important conditions:" },
        {
          type: "ul",
          items: [
            "Fast Track Passes are valid only for the specified airport and travel date",
            "Fast Track access may be subject to operational conditions at the airport",
            "ThaiPass does not guarantee immigration processing times",
          ],
        },
        {
          type: "p",
          text: "Immigration officers retain full authority over queue management, security checks, and entry approval.",
        },
        { type: "p", text: "Access to fast track lanes does not guarantee entry into Thailand." },
      ],
    },
    {
      heading: "5. Travel Benefits and Promotional Offers",
      blocks: [
        { type: "p", text: "Certain purchases may include additional benefits such as:" },
        {
          type: "ul",
          items: [
            "transportation vouchers",
            "promotional discounts",
            "eSIM connectivity",
            "travel insurance coverage",
          ],
        },
        {
          type: "p",
          text: "These benefits may be provided by third-party providers and are subject to the terms and conditions of those providers.",
        },
        {
          type: "p",
          text: "ThaiPass does not control the performance, availability, or quality of third-party services.",
        },
      ],
    },
    {
      heading: "6. Insurance Disclosure",
      blocks: [
        {
          type: "p",
          text: "Insurance benefits offered through ThaiPass are provided by licensed insurance providers.",
        },
        { type: "p", text: "ThaiPass:" },
        {
          type: "ul",
          items: [
            "is not an insurance company",
            "does not underwrite insurance policies",
            "does not process insurance claims",
          ],
        },
        {
          type: "p",
          text: "All coverage terms, exclusions, and claims procedures are governed by the insurance policy issued by the insurer.",
        },
        {
          type: "p",
          text: "Users should review the insurance policy documents provided by the insurer before relying on the coverage.",
        },
      ],
    },
    {
      heading: "7. eSIM and Connectivity Services",
      blocks: [
        {
          type: "p",
          text: "Connectivity services such as eSIM may be provided by third-party telecommunications providers.",
        },
        { type: "p", text: "ThaiPass does not guarantee:" },
        {
          type: "ul",
          items: ["network coverage", "service quality", "compatibility with user devices"],
        },
        {
          type: "p",
          text: "Users are responsible for ensuring their devices support the relevant technology.",
        },
      ],
    },
    {
      heading: "8. Digital Wallet and Payment Services",
      blocks: [
        { type: "p", text: "ThaiPass may offer digital wallet features that allow users to:" },
        {
          type: "ul",
          items: [
            "top up funds",
            "make payments via supported payment networks",
            "access merchant services",
          ],
        },
        {
          type: "p",
          text: "Certain wallet services may be operated by licensed financial institutions or payment service providers.",
        },
        {
          type: "p",
          text: "Users may be required to complete identity verification procedures in accordance with applicable regulations.",
        },
        { type: "p", text: "Transaction limits and compliance monitoring may apply." },
      ],
    },
    {
      heading: "9. Anti-Money Laundering and Fraud Prevention",
      blocks: [
        {
          type: "p",
          text: "ThaiPass and its payment partners may monitor transactions for compliance with applicable financial regulations including:",
        },
        {
          type: "ul",
          items: [
            "anti-money laundering laws",
            "counter-terrorism financing laws",
            "fraud prevention requirements",
          ],
        },
        {
          type: "p",
          text: "Accounts may be suspended or restricted where suspicious activities are detected.",
        },
        {
          type: "p",
          text: "ThaiPass reserves the right to report unlawful activities to relevant authorities.",
        },
      ],
    },
    {
      heading: "10. Acceptable Use",
      blocks: [
        { type: "p", text: "Users agree not to:" },
        {
          type: "ul",
          items: [
            "provide false identity or travel information",
            "use the platform for fraudulent or unlawful activities",
            "attempt to bypass platform security",
            "interfere with system operations",
            "resell services or passes without authorization",
            "use automated scripts or bots",
          ],
        },
        {
          type: "p",
          text: "Violation of this policy may result in suspension or termination of access.",
        },
      ],
    },
    {
      heading: "11. Pricing and Payments",
      blocks: [
        {
          type: "p",
          text: "Prices displayed on the platform may be shown in USD, THB, or other supported currencies.",
        },
        {
          type: "p",
          text: "Currency conversion may be performed by payment providers and exchange rates may vary.",
        },
        { type: "p", text: "All purchases are subject to payment authorization and verification." },
      ],
    },
    {
      heading: "12. Digital Service Delivery",
      blocks: [
        {
          type: "p",
          text: "Many services offered through ThaiPass are digital services delivered instantly upon purchase, including digital passes and vouchers.",
        },
        {
          type: "p",
          text: "Once issued, such digital services are considered delivered, even if not used.",
        },
      ],
    },
    {
      heading: "13. Chargebacks and Payment Disputes",
      blocks: [
        {
          type: "p",
          text: "Users agree not to initiate fraudulent chargebacks or payment disputes after receiving digital services.",
        },
        {
          type: "p",
          text: "If a chargeback is initiated after a service has been issued or used, ThaiPass reserves the right to:",
        },
        {
          type: "ul",
          items: [
            "suspend user accounts",
            "deny future access to services",
            "recover associated administrative costs",
          ],
        },
      ],
    },
    {
      heading: "14. Third-Party Service Providers",
      blocks: [
        {
          type: "p",
          text: "ThaiPass partners with independent service providers to deliver certain services available on the platform.",
        },
        { type: "p", text: "ThaiPass does not control and is not responsible for:" },
        {
          type: "ul",
          items: [
            "service disruptions",
            "provider delays",
            "quality of services",
            "disputes between users and providers",
          ],
        },
        {
          type: "p",
          text: "Users acknowledge that services may be subject to separate terms imposed by the relevant provider.",
        },
      ],
    },
    {
      heading: "15. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "To the maximum extent permitted by law, ThaiPass shall not be liable for:",
        },
        {
          type: "ul",
          items: [
            "immigration delays or entry decisions",
            "flight disruptions",
            "missed travel connections",
            "partner service failures",
            "indirect or consequential damages",
          ],
        },
        {
          type: "p",
          text: "ThaiPass's total liability shall not exceed the amount paid by the user for the relevant service.",
        },
      ],
    },
    {
      heading: "16. Service Availability",
      blocks: [
        { type: "p", text: "ThaiPass does not guarantee uninterrupted access to the Services." },
        {
          type: "p",
          text: "Temporary interruptions may occur due to maintenance, upgrades, or technical issues.",
        },
      ],
    },
    {
      heading: "17. Force Majeure",
      blocks: [
        {
          type: "p",
          text: "ThaiPass shall not be liable for delays or failure to perform services caused by events beyond its control including:",
        },
        {
          type: "ul",
          items: [
            "government actions",
            "airport operational disruptions",
            "airline delays",
            "natural disasters",
            "telecommunications failures",
            "public health emergencies",
          ],
        },
      ],
    },
    {
      heading: "18. Governing Law",
      blocks: [
        { type: "p", text: "These Terms are governed by the laws of the Kingdom of Thailand." },
        {
          type: "p",
          text: "Any disputes arising from these Terms shall be subject to the jurisdiction of the courts of Thailand.",
        },
      ],
    },
    {
      heading: "19. Contact",
      blocks: [
        { type: "p", text: "If you need any clarification, feel free to contact us:" },
        { type: "link", href: "mailto:support@mythaipass.com", label: "support@mythaipass.com" },
      ],
    },
  ],
};
