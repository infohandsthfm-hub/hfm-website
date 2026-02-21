/* ============================================================
   HFM DONATE — CONTENT + CONFIG (UG + International)
   Edit EVERYTHING here (text, amounts, causes, payment links).
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

  // ── CURRENCY DISPLAY ────────────────────────────────
  // Tip: If you want Uganda-first, use "UGX" + "UGX" symbol text.
  // If you want international-first, keep USD. Your gateway can still accept cards globally.
  currencySymbol: "UGX ",
  currencyCode: "UGX",

  // ── AMOUNTS ─────────────────────────────────────────
  // These are DISPLAY amounts. Make sure your payment links support these or accept custom amount.
  amounts: [
    [20000, "Food support"],
    [50000, "School supplies"],
    [100000, "Medical support"],
    [200000, "School term help"],
    [500000, "Family support"],
    [1000000, "Major impact"],
    [2000000, "Transform a family"],
  ],
  defaultAmount: 100000,
  customPlaceholder: "Enter custom amount (UGX)",

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
  // Flutterwave supports cards + mobile money for Uganda (MTN/Airtel) depending on configuration. :contentReference[oaicite:3]{index=3}
  payMethods: {
    card: { title: "Card", desc: "Visa/Mastercard", panelText: "You’ll be redirected to a secure checkout to complete your gift." },
    mobile: { title: "Mobile Money", desc: "MTN/Airtel", panelText: "You’ll be redirected to a secure Mobile Money checkout (UGX)." },
    bank: { title: "Bank Transfer", desc: "Direct wire", panelText: "Use the details below to make a bank transfer. Reference your name + cause." },
  },

  // ── PAYMENT LINKS (PASTE YOUR HOSTED CHECKOUT LINKS HERE) ──
  // Create hosted payment links in your provider dashboard (Flutterwave recommended for UG).
  // You can use the SAME link for card+mobile if your checkout lets donor pick a method.
  payLinks: {
    // One-time
    card_once:   "PASTE_CHECKOUT_LINK_FOR_ONE_TIME_CARD_HERE",
    mobile_once: "PASTE_CHECKOUT_LINK_FOR_ONE_TIME_MOMO_HERE",

    // Monthly (only if your provider supports recurring for your account)
    card_monthly:   "PASTE_CHECKOUT_LINK_FOR_MONTHLY_CARD_HERE",
    mobile_monthly: "PASTE_CHECKOUT_LINK_FOR_MONTHLY_MOMO_HERE",
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
  impactLabel: "Your Impact",
  trustTitle: "Why give with HFM",
  trustBadges: [
    { icon: "fa-shield-halved", text: "<strong>Secure checkout</strong> — card & Mobile Money supported" },
    { icon: "fa-envelope", text: "<strong>Receipts</strong> — sent to your email when enabled" },
    { icon: "fa-lock", text: "<strong>Privacy</strong> — donor data is never sold" },
  ],

  // ── IMPACT MESSAGES ─────────────────────────────────
  impactMap: {
    20000:  { general:"<strong>UGX 20,000</strong> helps provide meals or urgent supplies.", education:"<strong>UGX 20,000</strong> supports basic scholastic materials.", health:"<strong>UGX 20,000</strong> supports basic medications.", vocational:"<strong>UGX 20,000</strong> contributes to training materials.", business:"<strong>UGX 20,000</strong> supports seed capital for a small trade.", community:"<strong>UGX 20,000</strong> supports community relief." },
    50000:  { general:"<strong>UGX 50,000</strong> supports the most urgent needs across programs.", education:"<strong>UGX 50,000</strong> supports books & supplies.", health:"<strong>UGX 50,000</strong> supports checkups and basic treatment.", vocational:"<strong>UGX 50,000</strong> supports skills training costs.", business:"<strong>UGX 50,000</strong> helps a family start a small trade.", community:"<strong>UGX 50,000</strong> supports food and essentials." },
    100000: { general:"<strong>UGX 100,000</strong> supports education, health and meals.", education:"<strong>UGX 100,000</strong> supports a child’s school term needs.", health:"<strong>UGX 100,000</strong> supports medical care for a child.", vocational:"<strong>UGX 100,000</strong> supports training fees.", business:"<strong>UGX 100,000</strong> supports start-up supplies.", community:"<strong>UGX 100,000</strong> supports household relief." },
    200000: { general:"<strong>UGX 200,000</strong> makes a major difference for a child.", education:"<strong>UGX 200,000</strong> supports fees + materials.", health:"<strong>UGX 200,000</strong> supports ongoing medical needs.", vocational:"<strong>UGX 200,000</strong> supports certification costs.", business:"<strong>UGX 200,000</strong> seeds a stronger family business.", community:"<strong>UGX 200,000</strong> supports community needs." },
    500000: { general:"<strong>UGX 500,000</strong> is highly transformational.", education:"<strong>UGX 500,000</strong> supports deeper education sponsorship.", health:"<strong>UGX 500,000</strong> supports outreach and treatment.", vocational:"<strong>UGX 500,000</strong> supports tools & training.", business:"<strong>UGX 500,000</strong> supports a cooperative income plan.", community:"<strong>UGX 500,000</strong> supports infrastructure needs." },
    1000000:{ general:"<strong>UGX 1,000,000</strong> supports holistic care.", education:"<strong>UGX 1,000,000</strong> supports sponsorship for multiple children.", health:"<strong>UGX 1,000,000</strong> supports community health outreach.", vocational:"<strong>UGX 1,000,000</strong> supports workshop + equipment.", business:"<strong>UGX 1,000,000</strong> supports a cooperative business.", community:"<strong>UGX 1,000,000</strong> supports major community projects." },
    2000000:{ general:"<strong>UGX 2,000,000</strong> transforms a family’s future.", education:"<strong>UGX 2,000,000</strong> funds long-term education sponsorship.", health:"<strong>UGX 2,000,000</strong> supports full outreach programs.", vocational:"<strong>UGX 2,000,000</strong> supports full training + tools.", business:"<strong>UGX 2,000,000</strong> seeds sustainable income for multiple families.", community:"<strong>UGX 2,000,000</strong> supports major infrastructure." },
  },

  // ── SUBMIT AREA ─────────────────────────────────────
  submitButtonIconLeft: "fa-heart",
  submitButtonIconRight: "fa-arrow-right",
  submitNote: "Secure checkout · Receipt available",
};
