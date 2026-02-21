/* ============================================================
   HFM DONATE — CONTENT + CONFIG
   Edit EVERYTHING here (text, amounts, causes, Stripe links).
   Save and reload donate.html.
   ============================================================ */

const DONATE_CONTENT = {
  // ── ORG ─────────────────────────────────────────────
  orgName: "Hands to the Fatherless Ministries",
  orgTagline: "Ministries — HFM Uganda",
  backLinkText: "Back to Site",
  backLinkHref: "htfm.html",
  logoSrc: "logo.png",

  // ── HERO ────────────────────────────────────────────
  heroWm: "GIVE",
  heroEyebrow: "Secure Giving Portal",
  heroTitle: "Your gift",
  heroTitleEm: "changes everything.",
  heroBody:
    "Every child we serve has a name. Every gift you give has a story. Choose your cause, set your amount, and watch your generosity become transformation.",
  heroScripture:
    '"Pure religion… is to look after orphans and widows in their distress." — James 1:27',

  stats: [
    { num: "320+", label: "Children", highlight: "Served" },
    { num: "5+", label: "Districts", highlight: "Reached" },
    { num: "100%", label: "Funds", highlight: "to the Field" },
  ],

  // ── STEP LABELS ─────────────────────────────────────
  step1Label: "Giving Frequency",
  step2Label: "Choose Amount",
  step3Label: "Choose Your Cause",
  step4Label: "Your Details",
  step5Label: "Payment Method",

  // ── FREQUENCY ───────────────────────────────────────
  freqOnceLabel: "One-time",
  freqMonthlyLabel: "Monthly",
  freqMonthlyBadge: "SAVE 10%",

  // ── CURRENCY (display) ──────────────────────────────
  currencySymbol: "$",
  currencyCode: "USD",

  // ── AMOUNTS ─────────────────────────────────────────
  amounts: [
    [10, "A meal a week"],
    [25, "Books & supplies"],
    [50, "Medical care"],
    [100, "School term"],
    [200, "Seeds business"],
    [500, "Full sponsorship"],
    [1000, "Transform a family"],
  ],
  defaultAmount: 50,
  customPlaceholder: "Enter custom amount",

  // ── CAUSES ──────────────────────────────────────────
  causes: {
    general: { label: "General Fund", desc: "Directed where need is greatest", iconFA: "fa-heart" },
    education: { label: "Education", desc: "School fees, books & uniforms", iconFA: "fa-graduation-cap" },
    health: { label: "Healthcare", desc: "Medical care & mental health", iconFA: "fa-heart-pulse" },
    vocational: { label: "Vocational", desc: "Skills & job training", iconFA: "fa-briefcase" },
    business: { label: "Business", desc: "Micro-grants for families", iconFA: "fa-store" },
    community: { label: "Community", desc: "Water, food & infrastructure", iconFA: "fa-globe-africa" },
  },
  defaultCause: "education",

  // ── FORM PLACEHOLDERS ───────────────────────────────
  placeholderFirstName: "Joel",
  placeholderLastName: "Shalom",
  placeholderEmail: "you@example.com",
  placeholderPhone: "+256 700 000 000",

  dedicationLabel: "Make this gift in honour or memory of someone",
  dedicationPlaceholder: "e.g. In memory of Jane Doe",
  receiptLabel: "Send me a donation receipt by email",
  updatesLabel: "Send me impact updates about the children my gift supports",

  // ── PAYMENT METHODS ─────────────────────────────────
  payMethods: {
    card: { title: "Card", desc: "Secure checkout", panelText: "You’ll be redirected to a secure Stripe checkout to complete your gift." },
    bank: { title: "Bank Transfer", desc: "Direct wire", panelText: "Use the details below to make a bank transfer. Reference your name + cause." },
  },

  // ── STRIPE LINKS (PASTE YOUR LINKS HERE) ────────────
  // Create 2 Stripe Payment Links:
  //   1) One-time link
  //   2) Monthly link (Subscription link)
  stripeLinks: {
    card_once: "PASTE_STRIPE_ONE_TIME_LINK_HERE",
    card_monthly: "PASTE_STRIPE_MONTHLY_LINK_HERE",
  },

  // ── BANK DETAILS (optional fallback) ────────────────
  bank: {
    bankName: "Stanbic Bank Uganda",
    accountName: "Hands to the Fatherless Ministries",
    accountNumber: "9030012345678",
    swift: "SBICUGKX",
    referenceNote: "Your Name + Cause",
  },

  // ── SUMMARY ─────────────────────────────────────────
  summaryTitle: "Your Gift Summary",
  summaryCauseLabel: "Designated Cause",
  summaryFreqLabel: "Frequency",
  summaryGivingAsLabel: "Giving as",
  impactLabel: "Your Impact",
  trustTitle: "Why give with HFM",
  trustBadges: [
    { icon: "fa-shield-halved", text: "<strong>Secure checkout</strong> — processed by Stripe" },
    { icon: "fa-envelope", text: "<strong>Receipts</strong> — sent to your email when enabled" },
    { icon: "fa-lock", text: "<strong>Privacy</strong> — donor data is never sold" },
  ],

  // ── IMPACT MESSAGES (used for summary “Your Impact”) ─
  impactMap: {
    10: {
      general: "A <strong>$10 gift</strong> provides a nutritious meal a week for a child in need.",
      education: "<strong>$10</strong> covers exercise books for a school term.",
      health: "<strong>$10</strong> supports basic medications and vitamins.",
      vocational: "<strong>$10</strong> contributes to training materials.",
      business: "<strong>$10</strong> goes toward seed capital for a small trade.",
      community: "<strong>$10</strong> supports clean water access for a family.",
    },
    25: {
      general: "A <strong>$25 gift</strong> supports urgent needs across programs.",
      education: "<strong>$25</strong> buys a school uniform for one child.",
      health: "<strong>$25</strong> pays for a check-up and basic treatment.",
      vocational: "<strong>$25</strong> funds a week of vocational training.",
      business: "<strong>$25</strong> seeds a small household trade.",
      community: "<strong>$25</strong> supports community food projects.",
    },
    50: {
      general: "A <strong>$50 gift</strong> supports education, health and meals.",
      education: "<strong>$50</strong> pays school fees for one term.",
      health: "<strong>$50</strong> supports check-ups and medications for one child.",
      vocational: "<strong>$50</strong> covers a month of training.",
      business: "<strong>$50</strong> provides start-up supplies for a small business.",
      community: "<strong>$50</strong> funds emergency food relief for a family.",
    },
    100: {
      general: "A <strong>$100 gift</strong> gives a strong foundation of support.",
      education: "<strong>$100</strong> supports a full school term (fees + materials).",
      health: "<strong>$100</strong> supports basic family medical care.",
      vocational: "<strong>$100</strong> covers two months of training.",
      business: "<strong>$100</strong> seeds a viable small business.",
      community: "<strong>$100</strong> supports household water/infrastructure needs.",
    },
    200: {
      general: "A <strong>$200 gift</strong> is highly transformational.",
      education: "<strong>$200</strong> supports education for a full year (core costs).",
      health: "<strong>$200</strong> supports deeper family health needs.",
      vocational: "<strong>$200</strong> funds a certification course.",
      business: "<strong>$200</strong> seeds a business with sustainability chance.",
      community: "<strong>$200</strong> supports a community upgrade.",
    },
    500: {
      general: "A <strong>$500 gift</strong> supports a year of holistic care.",
      education: "<strong>$500</strong> sponsors a child for a full academic year.",
      health: "<strong>$500</strong> supports community health outreach.",
      vocational: "<strong>$500</strong> equips a cohort with training/tools.",
      business: "<strong>$500</strong> seeds a cooperative business.",
      community: "<strong>$500</strong> supports water access for many households.",
    },
    1000: {
      general: "A <strong>$1,000 gift</strong> transforms an entire family.",
      education: "<strong>$1,000</strong> sponsors two children for a full year.",
      health: "<strong>$1,000</strong> supports a medical outreach program.",
      vocational: "<strong>$1,000</strong> equips a training workshop.",
      business: "<strong>$1,000</strong> seeds a community cooperative.",
      community: "<strong>$1,000</strong> supports major infrastructure.",
    },
  },

  // ── SUBMIT AREA ─────────────────────────────────────
  submitButtonIconLeft: "fa-heart",
  submitButtonIconRight: "fa-arrow-right",
  submitNote: "Secure checkout · Receipt available",
};
