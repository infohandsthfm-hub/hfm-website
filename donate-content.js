/* ============================================================
   DONATE PAGE — CONTENT + SPONSOR PARAM CONFIG
   Edit all text here. Reload donate.html.
   ============================================================ */

const DONATE_CONTENT = {

  // ── ORG INFO ───────────────────────────────────────────────
  orgName:      "Hands to the Fatherless Ministries",
  orgTagline:   "Ministries — HFM Uganda",
  orgEmail:     "info.handsthfm@gmail.com",

  // ── HERO SECTION ───────────────────────────────────────────
  heroEyebrow:  "Secure Giving Portal",
  heroTitle:    "Your gift",
  heroTitleEm:  "changes everything.",
  heroBody:     "Every child we serve has a name. Every gift you give has a story. Choose your cause, set your amount, and watch your generosity become transformation.",
  heroScripture: '"Pure religion… is to look after orphans and widows in their distress." — James 1:27',

  // ── HERO STATS ─────────────────────────────────────────────
  stat1Num:   "320+",
  stat1Label: "Children Served",
  stat2Num:   "5+",
  stat2Label: "Districts Reached",
  stat3Num:   "100%",
  stat3Label: "Funds to the Field",

  // ── STEP LABELS ────────────────────────────────────────────
  step1Label: "Giving Frequency",
  step2Label: "Choose Amount",
  step3Label: "Choose Your Cause",
  step4Label: "Your Details",
  step5Label: "Payment Method",

  // ── FREQUENCY TOGGLE ───────────────────────────────────────
  freqOnceLabel:    "One-time",
  freqMonthlyLabel: "Monthly",
  freqMonthlyBadge: "SAVE 10%",

  // ── AMOUNT BUTTONS ─────────────────────────────────────────
  amounts: [
    [10,   "A meal a week"],
    [25,   "Books & supplies"],
    [50,   "Medical care"],
    [100,  "School term"],
    [200,  "Seeds business"],
    [500,  "Full sponsorship"],
    [1000, "Transform a family"],
  ],
  defaultAmount:      50,
  customPlaceholder:  "Enter custom amount",

  // ── CAUSE CARDS ────────────────────────────────────────────
  causes: {
    general:    { label: "General Fund",  desc: "Directed where need is greatest" },
    education:  { label: "Education",     desc: "School fees, books & uniforms"    },
    health:     { label: "Healthcare",    desc: "Medical care & mental health"      },
    vocational: { label: "Vocational",    desc: "Skills & job training"             },
    business:   { label: "Business",      desc: "Micro-grants for families"         },
    community:  { label: "Community",     desc: "Water, food & infrastructure"      },

    // Optional special cause key used by sponsor-a-child
    sponsor:    { label: "Sponsor a Child", desc: "Monthly support for a specific child" },
  },
  defaultCause: "education",

  // ── DONOR FORM ─────────────────────────────────────────────
  placeholderFirstName:  "Joel",
  placeholderLastName:   "Shalom",
  placeholderEmail:      "you@example.com",
  placeholderPhone:      "+256 700 000 000",
  dedicationLabel:       "Make this gift in honour or memory of someone",
  dedicationPlaceholder: "e.g. In memory of Jane Doe",
  receiptLabel:          "Send me a donation receipt by email",
  updatesLabel:          "Send me impact updates about the children my gift supports",

  // ── PAYMENT — CARD ─────────────────────────────────────────
  cardAcceptedLabel: "Accepted:",
  cardNetworks:      ["VISA", "MC", "AMEX"],

  // ── PAYMENT — MOBILE MONEY ─────────────────────────────────
  mobileIntro:   "Complete your gift via Mobile Money. We will send you payment instructions by email after you confirm below.",
  mobileStep1:   'Dial <strong>*165*3#</strong> (MTN) or <strong>*185*9#</strong> (Airtel) on your phone',
  mobileStep2:   'Select <strong>"Send Money"</strong> and enter our number: <strong>+256 700 HFM HFM</strong>',
  mobileStep4:   "Enter the transaction ID below so we can match your gift and send your receipt",
  mobileIdHint:  "Found in your SMS confirmation from your network",

  // ── PAYMENT — BANK TRANSFER ────────────────────────────────
  bankIntro:      "Use the details below to make a direct bank transfer. Reference your name and cause in the payment description.",
  bankName:       "Stanbic Bank Uganda",
  bankAccName:    "Hands to the Fatherless Ministries",
  bankAccNumber:  "9030012345678",
  bankSwift:      "SBICUGKX",
  bankRefNote:    "Your Name + Cause",
  bankConfirmHint:"Enter once transfer is complete — helps us match your gift faster",

  // ── SUBMIT BUTTON ──────────────────────────────────────────
  submitNote1: "Secure & encrypted",
  submitNote2: "100% goes to the field",
  submitNote3: "Receipt by email",

  // ── SUMMARY PANEL ──────────────────────────────────────────
  summaryTitle:      "Your Gift Summary",
  summarySection1:   "Designated Cause",
  summarySection2:   "Frequency",
  summaryDonorLabel: "Giving as",
  impactLabel:       "Your Impact",
  trustTitle:        "Why give with HFM",

  trustBadges: [
    { text: "<strong>100% to the field</strong> — zero admin fees taken from donations" },
    { text: "<strong>Registered NGO</strong> — Uganda NGO Bureau, 2018" },
    { text: "<strong>Receipts always sent</strong> — within 24hrs to your inbox" },
    { text: "<strong>Your data is safe</strong> — never shared or sold to any third party" },
    { text: "<strong>Faith-governed</strong> — stewardship is a sacred responsibility" },
  ],

  // ── THANK-YOU OVERLAY ──────────────────────────────────────
  tyTitle:     "Thank you.",
  tyTitleEm:   "you.",
  tyScripture: '"Well done, good and faithful servant." — Matthew 25:21',
  tyBtnReturn: "Return to Site",
  tyBtnAgain:  "Give Again",

  // ===========================================================
  // SPONSOR-A-CHILD → DONATE URL PARAM SUPPORT
  // ===========================================================
  sponsorParams: {
    // query string keys expected
    keys: {
      child:  "child",
      amount: "amount",
      freq:   "freq",     // monthly | once
      cause:  "cause",    // education|health|... or sponsor
      photo:  "photo",    // optional
      tag:    "tag",      // optional label (e.g. Sponsor a Child)
    },

    // Banner text & labels
    bannerLabel: "Sponsoring",
    bannerDefaultTag: "Sponsor a Child",
    bannerNoteTemplate: "{amount}{currency} {freq} sponsorship — complete the form to activate",
    bannerButtonText: "Change Child",
    bannerButtonHref: "children.html",

    // Title override template
    pageTitleTemplate: "Sponsor {child} — HFM",

    // If child sponsorship is detected, force these defaults if missing
    defaults: {
      freq: "monthly",
      cause: "sponsor",
    }
  }
};
