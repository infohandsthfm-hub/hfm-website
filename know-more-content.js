/* ============================================================
   KNOW MORE PAGE — CONTENT FILE
   Edit all text here. Save the file. Reload know-more.html.
   Do NOT change the key names (left side of colon).
   Only change the values (right side, inside quotes).
   ============================================================ */

const KNOW_MORE_CONTENT = {

  // ── ORG INFO ───────────────────────────────────────────────
  orgName:    "Hands to the Fatherless Ministries",
  orgTagline: "Ministries — HFM Uganda",
  orgEmail:   "info.handsthfm@gmail.com",

  // ── PAGE HERO ──────────────────────────────────────────────
  heroEyebrow:  "Stay Connected",
  heroTitle:    "Know more.",
  heroTitleEm:  "Give more. Be more.",   // italic line
  heroBody:     "Join the HFM community — receive stories from Uganda, volunteer, partner with us, or sponsor a child. Every way you engage transforms lives.",

  // ── TAB LABELS ─────────────────────────────────────────────
  tab1: "Newsletter",
  tab2: "Ways to Help",
  tab3: "Volunteer",
  tab4: "Partner With Us",
  tab5: "Stories",

  // ── NEWSLETTER TAB ─────────────────────────────────────────
  nlEyebrow:    "Monthly Newsletter",
  nlTitle:      "Stories that move you.",
  nlTitleEm:    "News that matters.",     // italic line
  nlBody:       "Our monthly newsletter brings the realities of Uganda into your home — children's stories, ministry updates, prayer requests, and ways you can respond.",

  nlPerks: [
    "Monthly impact stories featuring real children we serve",
    "Video updates from the field in Uganda",
    "Urgent prayer and giving alerts",
    "First access to events and campaigns",
    "Financial transparency reports",
  ],
  nlPrivacyNote:  "Your data is safe — never shared or sold",
  nlTestimonial:  '"I feel like I actually know the children I sponsor — HFM\'s updates are so personal and real."',
  nlTestimonialBy:"— Newsletter subscriber, USA",

  // Newsletter form
  nlFormTitle:    "Join Our Community",
  nlFormBtn:      "Join & Stay Updated",
  nlFormNote:     "No spam. Unsubscribe any time.",
  // Success message
  nlSuccessTitle: "You're in the community!",
  nlSuccessBody:  "Welcome! Your first newsletter arrives next month. Watch your inbox for stories from Uganda.",

  // ── WAYS TO HELP TAB ───────────────────────────────────────
  waysEyebrow: "Get Involved",
  waysTitle:   "Every act of love counts.",
  waysBody:    "There is a place for you in this mission — whether you give money, time, skills, or prayer. Here are the most impactful ways to help.",

  ways: [
    {
      icon:  "fa-heart",
      title: "Give a Gift",
      body:  "A one-time or monthly gift to our general fund or a specific cause — education, health, vocational training, or community needs.",
      link:  "donate.html",
      cta:   "Give Now",
    },
    {
      icon:  "fa-graduation-cap",
      title: "Sponsor a Child",
      body:  "$30/month covers school fees, books, uniforms, and meals for one child. Receive their story, progress updates, and letters.",
      link:  "donate.html?cause=education",
      cta:   "Sponsor",
    },
    {
      icon:  "fa-hands-praying",
      title: "Pray With Us",
      body:  "Join our prayer community and receive monthly prayer points directly from Uganda. Free, powerful, and deeply appreciated.",
      link:  "#newsletter",   // switches to newsletter tab
      cta:   "Join Prayers",
    },
    {
      icon:  "fa-users",
      title: "Volunteer",
      body:  "Use your professional skills on the ground in Uganda or remotely — medical, education, technology, communications, and more.",
      link:  "#volunteer",    // switches to volunteer tab
      cta:   "Volunteer",
    },
    {
      icon:  "fa-building",
      title: "Church Partnership",
      body:  "Link your congregation with HFM — raise awareness, host fundraisers, partner in mission trips, and build lasting relationship.",
      link:  "#partner",      // switches to partner tab
      cta:   "Partner",
    },
    {
      icon:  "fa-share-nodes",
      title: "Spread the Word",
      body:  "Share our story on social media, forward this website to your networks, or host an awareness event in your community.",
      link:  "htfm.html#contact",
      cta:   "Contact Us",
    },
  ],

  // ── VOLUNTEER TAB ──────────────────────────────────────────
  volEyebrow: "Serve With Us",
  volTitle:   "Your skills are needed",
  volTitleEm: "here.",             // italic word
  volBody1:   "HFM welcomes short-term and long-term volunteers — both on the ground in Uganda and remotely from wherever you are in the world.",
  volBody2:   "Whether you are a doctor, teacher, software developer, photographer, social worker, or communicator — there is a place for you in this mission. We match volunteers with specific needs on the ground.",

  volSkillAreas: [
    { icon: "fa-stethoscope",       label: "Medical",                   desc: "Doctors, nurses, dentists, mental health specialists, nutritionists" },
    { icon: "fa-chalkboard-teacher",label: "Education",                 desc: "Teachers, curriculum developers, literacy coaches, tutors" },
    { icon: "fa-laptop-code",       label: "Technology & Communications",desc: "Developers, designers, photographers, videographers, copywriters" },
    { icon: "fa-briefcase",         label: "Business & Finance",        desc: "Accountants, business coaches, grant writers, fundraisers" },
  ],

  // Volunteer form
  volFormTitle:     "Volunteer Application",
  volFormBtn:       "Send Application",
  volSuccessTitle:  "Application received!",
  volSuccessBody:   "We'll review your application and get back to you within 5 working days.",

  // ── PARTNER TAB ────────────────────────────────────────────
  partnerEyebrow: "Partnership",
  partnerTitle:   "Build something",
  partnerTitleEm: "lasting.",        // italic word
  partnerBody:    "HFM partners with churches, organisations, corporations, and individuals to create meaningful, long-term impact in Uganda. Every partnership is personal.",

  partnerCards: [
    {
      badge: "Church Partnership",
      title: "Link Your Congregation",
      body:  "Connect your church directly with a community in Uganda. Joint prayer, mission trips, child sponsorship drives, and shared ministry vision.",
      emailSubject: "Church Partnership Enquiry",
    },
    {
      badge: "Corporate CSR",
      title: "Corporate Social Impact",
      body:  "Partner your company with HFM for employee giving, CSR reporting, team volunteering, and matched giving campaigns.",
      emailSubject: "Corporate Partnership Enquiry",
    },
    {
      badge: "NGO Collaboration",
      title: "Organisation Partnership",
      body:  "Collaborate on joint programmes, share resources, and co-design solutions for Uganda's most vulnerable communities.",
      emailSubject: "NGO Partnership Enquiry",
    },
    {
      badge: "Major Giving",
      title: "Transformational Gift",
      body:  "Fund an entire school, build a health centre, or endow a programme — leave a legacy that transforms generations.",
      emailSubject: "Major Gift Enquiry",
    },
  ],

  partnerFormEyebrow: "Send a Partnership Enquiry",
  partnerFormTitle:   "Let's talk about what's possible.",
  partnerFormBody:    "Every partnership starts with a conversation. Tell us who you are and what you're passionate about — we'll explore together.",
  partnerFormBtn:     "Send Enquiry",
  partnerSuccessTitle:"Enquiry sent!",
  partnerSuccessBody: "We'll reply within 48 hours. We look forward to exploring partnership with you.",

  // ── STORIES TAB ────────────────────────────────────────────
  storiesEyebrow: "Impact Stories",
  storiesTitle:   "Lives being",
  storiesTitleEm: "transformed.",   // italic word
  storiesBody:    "Every child has a story. These are a few of the lives that have been touched by the generosity of people like you.",

  stories: [
    {
      category: "Education",
      title:    "From the streets to secondary school",
      body:     "Samuel lost both parents at age 7. Today, sponsored by HFM supporters, he is top of his class in secondary school and dreams of becoming an engineer.",
      icon:     "fa-graduation-cap",
    },
    {
      category: "Healthcare",
      title:    "A mother's health, a family's future",
      body:     "Grace was diagnosed with a serious condition that threatened her ability to care for her three children. HFM's medical programme funded her treatment and recovery.",
      icon:     "fa-heart-pulse",
    },
    {
      category: "Vocational Training",
      title:    "Esther's tailoring business",
      body:     "With HFM's vocational training and a small business grant, Esther now runs her own tailoring shop and employs two other young women in her community.",
      icon:     "fa-briefcase",
    },
    {
      category: "Spiritual Formation",
      title:    "Finding identity in faith",
      body:     "David grew up feeling invisible — no parents, no name, no future. Through HFM's Bible club and discipleship programme, he found both community and purpose.",
      icon:     "fa-church",
    },
    {
      category: "Family Strengthening",
      title:    "Keeping siblings together",
      body:     "When their grandmother could no longer care for five orphaned grandchildren, HFM stepped in — supporting the household to keep the family together and off the streets.",
      icon:     "fa-house",
    },
  ],

  storiesMoreTitle: "More stories coming",
  storiesMoreBody:  "Subscribe to our newsletter to receive new stories every month from Uganda.",
  storiesMoreBtn:   "Subscribe Free",

  // ── FOOTER ─────────────────────────────────────────────────
  footerOrg:  "Hands to the Fatherless Ministries",
  footerReg:  "Registered NGO — Uganda NGO Bureau · 2018",
  footerCopy: "© 2025 HFM Uganda. All rights reserved.",

};
