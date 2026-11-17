export type CaseEvidence = {
  solutionHeading: string;
  valueHeading: string;
  galleryHeading: string;
  sequenceHeading: string;
  intro: string;
  note: string;
  steps: Array<{ title: string; description: string }>;
};

export const caseEvidence: Record<string, CaseEvidence> = {
  hiltech: {
    solutionHeading: "From product discovery to a structured RFQ.",
    valueHeading: "Connecting commercial intent to the team behind it.",
    galleryHeading: "The catalogue, scope and request journey.",
    sequenceHeading: "The buyer's enquiry has a life after the website.",
    intro:
      "Enterprise buyers explore solutions, compare specifications and clarify scope before asking for a quotation. Each public interaction should carry useful context into the commercial team.",
    steps: [
      { title: "Explore the context", description: "Corporate and solution pages establish where the infrastructure products fit." },
      { title: "Find the right components", description: "A searchable catalogue and product details support technical discovery." },
      { title: "Make the enquiry structured", description: "The RFQ basket and scope-finder turn scattered interest into a coherent request." },
      { title: "Continue the work internally", description: "Admin workflows support RFQ review, quotation and customer follow-up." }
    ],
    note:
      "Evidence: working public pages and implemented workflow surfaces. No unverified lead, conversion or revenue figures are claimed."
  },
  balcona: {
    solutionHeading: "One order, five operational perspectives.",
    valueHeading: "A shared state instead of disconnected dashboards.",
    galleryHeading: "The guest, the floor and the operating team.",
    sequenceHeading: "A café order doesn't end at checkout.",
    intro:
      "Each role needs a different interface, but all of them should act on the same order, table, bill and stock state. The system follows the order instead of asking teams to reconcile separate screens.",
    steps: [
      { title: "Guest", description: "A table QR opens the Arabic-first menu and ordering experience." },
      { title: "Cashier", description: "The team receives and acts on a live queue of orders and payments." },
      { title: "Kitchen", description: "Production boards expose preparation state and handoff." },
      { title: "Floor", description: "Service follows the same order through delivery to the table." },
      { title: "Owner", description: "Operational dashboards connect activity with stock and revenue views." }
    ],
    note:
      "Demonstrated in a hosted staging system with seeded venue data. Demo sales and dashboards are not represented as live client revenue."
  },
  tuscanini: {
    solutionHeading: "Arabic ordering, decision by decision.",
    valueHeading: "Keeping the customer's next step visible.",
    galleryHeading: "From discovery to the order summary.",
    sequenceHeading: "Make every ordering choice intelligible.",
    intro:
      "Restaurant checkout is a sequence of small decisions. The mobile experience has to preserve context as customers move from browsing and choosing food to customisation and reviewing the basket.",
    steps: [
      { title: "Discover", description: "Categories, menu browsing and offers bring the right products into view." },
      { title: "Configure", description: "Product options and recommendations let customers shape the order." },
      { title: "Review", description: "The cart brings selected items and their details into one place." },
      { title: "Continue", description: "Checkout and summary screens complete the staged journey that is being refined and tested." }
    ],
    note:
      "Live staged experience. Checkout and interaction quality remain under active review; this case study does not claim verified production conversion."
  }
};
