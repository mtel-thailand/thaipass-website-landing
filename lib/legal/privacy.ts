import type { LegalDoc } from "@/components/legal/LegalDocument";

export const privacyDoc: LegalDoc = {
  title: "Privacy Policy",
  intro: [
    "ThaiPass respects your privacy and is committed to protecting your personal data in accordance with applicable laws including the Thailand Personal Data Protection Act (PDPA).",
  ],
  sections: [
    {
      heading: "1. Information We Collect",
      blocks: [
        { type: "p", text: "We may collect the following information:" },
        { type: "sub", text: "Personal Information" },
        {
          type: "ul",
          items: [
            "Name",
            "Passport information",
            "Nationality",
            "Contact details",
            "Email address",
            "Phone number",
          ],
        },
        { type: "sub", text: "Travel Information" },
        { type: "ul", items: ["Flight details", "Arrival date", "Airport information"] },
        { type: "sub", text: "Payment Information" },
        { type: "ul", items: ["Payment method", "Transaction records"] },
        { type: "sub", text: "Technical Information" },
        {
          type: "ul",
          items: ["IP address", "Device information", "Browser type", "Usage data"],
        },
      ],
    },
    {
      heading: "2. How We Use Your Information",
      blocks: [
        { type: "p", text: "Your information may be used for:" },
        {
          type: "ul",
          items: [
            "Processing purchases",
            "Issuing fast track passes",
            "Facilitating travel benefits",
            "Providing customer support",
            "Fraud prevention",
            "Compliance with legal requirements",
          ],
        },
      ],
    },
    {
      heading: "3. Sharing of Information",
      blocks: [
        { type: "p", text: "Your information may be shared with:" },
        {
          type: "ul",
          items: [
            "Immigration or government authorities when required",
            "Payment processors",
            "Insurance providers",
            "eSIM providers",
            "Transport partners",
          ],
        },
        { type: "p", text: "ThaiPass only shares information necessary to deliver services." },
      ],
    },
    {
      heading: "4. Data Security",
      blocks: [
        { type: "p", text: "ThaiPass implements appropriate security measures including:" },
        {
          type: "ul",
          items: ["Encryption", "Secure servers", "Access control", "Monitoring systems"],
        },
        { type: "p", text: "However, no system is completely secure." },
      ],
    },
    {
      heading: "5. Data Retention",
      blocks: [
        { type: "p", text: "Personal data will be retained only for as long as necessary for:" },
        { type: "ul", items: ["Service delivery", "Legal compliance", "Fraud prevention"] },
      ],
    },
    {
      heading: "6. Your Rights",
      blocks: [
        { type: "p", text: "Under PDPA, you may have rights to:" },
        {
          type: "ul",
          items: ["Access your data", "Request correction", "Request deletion", "Withdraw consent"],
        },
        { type: "p", text: "Requests may be submitted via email." },
      ],
    },
    {
      heading: "7. International Transfers",
      blocks: [
        {
          type: "p",
          text: "Data may be transferred to service providers located outside Thailand when necessary to provide services.",
        },
        { type: "p", text: "Appropriate safeguards will be implemented." },
      ],
    },
    {
      heading: "8. Contact",
      blocks: [
        { type: "p", text: "For privacy-related inquiries:" },
        { type: "link", href: "mailto:privacy@mythaipass.com", label: "privacy@mythaipass.com" },
      ],
    },
  ],
};
