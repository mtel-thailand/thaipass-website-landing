import type { LegalDoc } from "@/components/legal/LegalDocument";

export const refundDoc: LegalDoc = {
  title: "Refund Policy",
  intro: [
    "ThaiPass strives to provide a smooth experience for travelers. This Refund Policy outlines the circumstances under which refunds may be issued.",
  ],
  sections: [
    {
      heading: "1. Fast Track Pass Purchases",
      blocks: [
        {
          type: "p",
          text: "Fast Track Pass purchases are generally non-refundable once issued.",
        },
        { type: "p", text: "However, refunds may be considered in the following situations:" },
        {
          type: "ul",
          items: [
            "Flight cancellation before arrival",
            "Duplicate purchase due to system error",
            "Service unavailable due to operational reasons",
          ],
        },
        { type: "p", text: "Requests must be submitted within 7 days of the travel date." },
      ],
    },
    {
      heading: "2. Travel Benefits",
      blocks: [
        { type: "p", text: "Benefits such as:" },
        { type: "ul", items: ["transport vouchers", "eSIM services", "insurance coverage"] },
        {
          type: "p",
          text: "may be subject to the individual refund policies of the respective providers.",
        },
        {
          type: "p",
          text: "ThaiPass may not be able to process refunds once benefits have been activated.",
        },
      ],
    },
    {
      heading: "3. Wallet Top-Ups",
      blocks: [
        { type: "p", text: "Wallet balances may not be refundable unless required by law." },
        {
          type: "p",
          text: "Users are responsible for ensuring they only top up amounts they intend to use.",
        },
      ],
    },
    {
      heading: "4. Processing Time",
      blocks: [
        {
          type: "p",
          text: "Approved refunds will typically be processed within 7–14 business days, depending on the payment method used.",
        },
      ],
    },
    {
      heading: "5. How to Request a Refund",
      blocks: [
        { type: "p", text: "Refund requests may be submitted to:" },
        { type: "link", href: "mailto:support@mythaipass.com", label: "support@mythaipass.com" },
        { type: "p", text: "Please include:" },
        { type: "ul", items: ["order number", "email address", "reason for request"] },
      ],
    },
  ],
};
