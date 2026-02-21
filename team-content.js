/* ============================================================
   TEAM PAGE — CONTENT FILE
   Edit all text here. Save the file. Reload team.html.

   HOW TO ADD A PHOTO:
   Set  photo: "filename.jpg"  and place the file in the
   same folder as team.html.

   TO ADD A MEMBER: Copy any member block, paste at the end
   of the relevant array, change the values.

   TO HIDE A MEMBER: Change  active: true  to  active: false
   ============================================================ */

const TEAM_CONTENT = {

  // ── PAGE TEXT ──────────────────────────────────────────────
  page: {
    heroEyebrow:  "The People Behind the Mission",
    heroTitle:    "Led by conviction.",
    heroTitleEm:  "Powered by faith.",
    heroBody:     "HFM is led by a diverse, qualified team of professionals united by a shared calling to serve the fatherless. Our teams span Uganda, the United States, the United Kingdom, and Kenya.",
    boardIntro:   "Our Board of Directors provides strategic oversight, accountability, and governance across all HFM operations — bringing together expertise from law, medicine, finance, ministry, and international development.",
  },

  // ── UGANDA TEAM (core, shown on homepage too) ──────────────
  uganda: {
    country:  "Uganda",
    flag:     "🇺🇬",
    subtitle: "Kampala — Field Operations & Leadership",
    members: [
      {
        active: true,
        id: "joel-shalom",
        photo: "",            // e.g. "joel-photo.jpg"
        initials: "NJS",
        name: "Nimurungi Joel Shalom",
        role: "CEO & Founder",
        short: "PG Cert. Safeguarding — University of Reading, UK · BA Economics — Makerere University",
        quals: [
          { degree: "PG Cert. Safeguarding & Child Protection", institution: "University of Reading, UK" },
          { degree: "BA Economics", institution: "Makerere University, Uganda" },
        ],
        bio: "Joel founded HFM in 2018 after a deeply personal encounter with the reality of orphaned children in his community. He leads the organisation with a rare combination of academic rigour, pastoral heart, and entrepreneurial vision. He is responsible for strategy, fundraising, and international partnerships.",
        country: "Uganda",
      },
      {
        active: true,
        id: "asiimwe-kevin",
        photo: "",
        initials: "AK",
        name: "Asiimwe Kevin",
        role: "Director of Expansion",
        short: "MSc Computer Science — Tiffin University, USA · BSc Computer Science — Makerere University",
        quals: [
          { degree: "MSc Computer Science", institution: "Tiffin University, USA" },
          { degree: "BSc Computer Science", institution: "Makerere University, Uganda" },
        ],
        bio: "Kevin drives HFM's technology infrastructure, digital strategy, and geographic expansion into new districts. He has led the development of HFM's beneficiary tracking systems and oversees the organisation's online presence and donor management platforms.",
        country: "Uganda",
      },
      {
        active: true,
        id: "jonathan-atukori",
        photo: "",
        initials: "AJ",
        name: "Atukorirebikuru Jonathan",
        role: "Director of Community Engagement",
        short: "BSc Community Development — Mbarara University of Science & Technology",
        quals: [
          { degree: "BSc Community Development", institution: "Mbarara University of Science & Technology" },
        ],
        bio: "Jonathan is HFM's bridge to the communities we serve. He leads community outreach, beneficiary identification, and local partnerships. His deep roots in Ugandan culture and language make him an irreplaceable connector between HFM and the families on the ground.",
        country: "Uganda",
      },
      {
        active: true,
        id: "gift-nakato",
        photo: "",
        initials: "NGA",
        name: "Nakato Gift Angel",
        role: "Director of Operations",
        short: "MBChB — Bachelor of Medicine & Bachelor of Surgery",
        quals: [
          { degree: "MBChB (Bachelor of Medicine & Bachelor of Surgery)", institution: "Makerere University College of Health Sciences" },
        ],
        bio: "Gift oversees HFM's day-to-day operations, including programme delivery, financial management, and compliance. Her medical background gives her unique insight into the health needs of the children we serve, and she leads HFM's healthcare programme with both clinical expertise and deep compassion.",
        country: "Uganda",
      },
    ],
  },

  // ── USA TEAM ───────────────────────────────────────────────
  usa: {
    country:  "United States",
    flag:     "🇺🇸",
    subtitle: "North America — Fundraising & Diaspora Relations",
    members: [
      {
        active: true,
        id: "david-chen",
        photo: "",
        initials: "DC",
        name: "David Chen",
        role: "US Director of Development",
        short: "MBA (Non-Profit Management) — Georgetown University · BA International Relations — UCLA",
        quals: [
          { degree: "MBA, Non-Profit Management", institution: "Georgetown University" },
          { degree: "BA International Relations", institution: "UCLA" },
        ],
        bio: "David leads HFM's fundraising strategy in North America, managing major donor relationships, corporate partnerships, and grant applications. He brings 12 years of international development experience across Sub-Saharan Africa and Southeast Asia.",
        country: "USA",
      },
      {
        active: true,
        id: "priya-washington",
        photo: "",
        initials: "PW",
        name: "Priya Washington",
        role: "Partnerships & Church Relations (USA)",
        short: "MDiv — Fuller Theological Seminary · BA Psychology — University of Michigan",
        quals: [
          { degree: "Master of Divinity (MDiv)", institution: "Fuller Theological Seminary" },
          { degree: "BA Psychology", institution: "University of Michigan" },
        ],
        bio: "Priya connects HFM with the American church community, building child sponsorship campaigns and mission partnership programmes. She has established relationships with over 40 churches across 15 US states.",
        country: "USA",
      },
      {
        active: true,
        id: "marcus-johnson",
        photo: "",
        initials: "MJ",
        name: "Marcus Johnson",
        role: "Communications & Media (USA)",
        short: "MA Journalism — Northwestern University · BA Communications — Howard University",
        quals: [
          { degree: "MA Journalism", institution: "Northwestern University — Medill School" },
          { degree: "BA Communications", institution: "Howard University" },
        ],
        bio: "Marcus tells HFM's story to America. He oversees all media production, documentary work, social media strategy, and press relations in North America, ensuring donors see and feel the impact of their giving.",
        country: "USA",
      },
    ],
  },

  // ── UK TEAM ────────────────────────────────────────────────
  uk: {
    country:  "United Kingdom",
    flag:     "🇬🇧",
    subtitle: "London — European Outreach & Policy",
    members: [
      {
        active: true,
        id: "amara-osei",
        photo: "",
        initials: "AO",
        name: "Amara Osei-Bonsu",
        role: "UK Director",
        short: "LLM International Human Rights Law — LSE · LLB — University of Ghana",
        quals: [
          { degree: "LLM International Human Rights Law", institution: "London School of Economics (LSE)" },
          { degree: "LLB (Bachelor of Laws)", institution: "University of Ghana, Legon" },
        ],
        bio: "Amara leads HFM's UK operations, focusing on policy engagement, diaspora fundraising, and ensuring HFM's compliance with international safeguarding standards. She previously worked with UNICEF and the African Development Bank.",
        country: "UK",
      },
      {
        active: true,
        id: "sophie-hartley",
        photo: "",
        initials: "SH",
        name: "Sophie Hartley",
        role: "UK Partnerships Coordinator",
        short: "MSc International Development — University of Edinburgh · BA Theology — Durham University",
        quals: [
          { degree: "MSc International Development", institution: "University of Edinburgh" },
          { degree: "BA Theology", institution: "Durham University" },
        ],
        bio: "Sophie coordinates HFM's relationships with UK-based churches, schools, and corporate donors. She organises HFM's annual UK awareness campaigns and oversees the UK child sponsorship programme.",
        country: "UK",
      },
      {
        active: true,
        id: "kwame-boateng",
        photo: "",
        initials: "KB",
        name: "Kwame Boateng",
        role: "Finance & Compliance (UK)",
        short: "ACCA (Chartered Accountant) · BSc Accounting — University of Manchester",
        quals: [
          { degree: "ACCA (Association of Chartered Certified Accountants)", institution: "ACCA Global" },
          { degree: "BSc Accounting & Finance", institution: "University of Manchester" },
        ],
        bio: "Kwame ensures that every pound donated through HFM's UK channels is accounted for with full transparency and integrity. He manages UK charity compliance, financial auditing, and donor reporting.",
        country: "UK",
      },
    ],
  },

  // ── KENYA TEAM ─────────────────────────────────────────────
  kenya: {
    country:  "Kenya",
    flag:     "🇰🇪",
    subtitle: "Nairobi — East Africa Regional Coordination",
    members: [
      {
        active: true,
        id: "grace-wanjiku",
        photo: "",
        initials: "GW",
        name: "Grace Wanjiku Kamau",
        role: "East Africa Regional Director",
        short: "MPH (Public Health) — University of Nairobi · BSc Nursing — Kenyatta University",
        quals: [
          { degree: "Master of Public Health (MPH)", institution: "University of Nairobi" },
          { degree: "BSc Nursing", institution: "Kenyatta University" },
        ],
        bio: "Grace coordinates HFM's regional strategy across East Africa, facilitating knowledge transfer between programmes in Uganda, Kenya, and South Sudan. Her public health background ensures HFM's programmes remain evidence-based and outcome-focused.",
        country: "Kenya",
      },
      {
        active: true,
        id: "james-njoroge",
        photo: "",
        initials: "JN",
        name: "James Njoroge",
        role: "East Africa Refugee Response Coordinator",
        short: "MSW (Social Work) — University of Nairobi · BA Sociology — Egerton University",
        quals: [
          { degree: "Master of Social Work (MSW)", institution: "University of Nairobi" },
          { degree: "BA Sociology", institution: "Egerton University" },
        ],
        bio: "James oversees HFM's refugee response programming across East Africa, coordinating with UNHCR, partner NGOs, and local churches. He has direct experience working in refugee settlements in Uganda, Kenya, and Ethiopia.",
        country: "Kenya",
      },
      {
        active: true,
        id: "faith-muthoni",
        photo: "",
        initials: "FM",
        name: "Faith Muthoni Kariuki",
        role: "East Africa Communications & Stories",
        short: "BA Journalism & Media Studies — Daystar University, Nairobi",
        quals: [
          { degree: "BA Journalism & Media Studies", institution: "Daystar University, Nairobi" },
        ],
        bio: "Faith documents HFM's work across East Africa — capturing children's stories, filming field updates, and producing content that brings our mission to life for donors around the world. Her work has been featured in several international Christian publications.",
        country: "Kenya",
      },
    ],
  },

  // ── BOARD OF DIRECTORS ─────────────────────────────────────
  board: {
    title:    "Board of Directors",
    subtitle: "Providing governance, accountability, and strategic direction across all HFM operations.",
    members: [
      {
        active: true,
        id: "board-joel",
        photo: "",
        initials: "NJS",
        name: "Nimurungi Joel Shalom",
        role: "Board Chair & CEO",
        short: "Founder — HFM Uganda",
        bio: "Joel chairs the Board and ensures alignment between governance and operational delivery. As founder, he brings both visionary leadership and deep institutional knowledge to the board table.",
        country: "Uganda",
      },
      {
        active: true,
        id: "board-amara",
        photo: "",
        initials: "AO",
        name: "Amara Osei-Bonsu",
        role: "Board Member — Legal & Safeguarding",
        short: "LLM Human Rights Law — LSE · UK Director, HFM",
        bio: "Amara chairs the Board's Safeguarding & Compliance Committee, ensuring HFM's child protection policies meet international standards. Her legal background is invaluable in navigating multi-jurisdictional governance.",
        country: "UK",
      },
      {
        active: true,
        id: "board-kwame",
        photo: "",
        initials: "KB",
        name: "Kwame Boateng",
        role: "Board Treasurer",
        short: "ACCA Chartered Accountant · Finance Lead, HFM UK",
        bio: "Kwame serves as Treasurer, overseeing financial accountability, audit processes, and donor fund stewardship. He ensures HFM maintains the highest standards of financial integrity and transparency.",
        country: "UK",
      },
      {
        active: true,
        id: "board-grace-k",
        photo: "",
        initials: "GW",
        name: "Grace Wanjiku Kamau",
        role: "Board Member — Health & Programmes",
        short: "MPH — University of Nairobi · East Africa Director, HFM",
        bio: "Grace provides expert oversight of HFM's health and community programmes, ensuring programme design is evidence-based, outcome-measured, and aligned with international development best practices.",
        country: "Kenya",
      },
      {
        active: true,
        id: "board-david",
        photo: "",
        initials: "DC",
        name: "David Chen",
        role: "Board Member — Fundraising & Strategy",
        short: "MBA Non-Profit Management — Georgetown · US Director, HFM",
        bio: "David provides strategic counsel on HFM's long-term growth, international fundraising, and organisational sustainability. He chairs the Board's Development Committee.",
        country: "USA",
      },
      {
        active: true,
        id: "board-independent-1",
        photo: "",
        initials: "RO",
        name: "Rev. Robert Opio",
        role: "Independent Board Member — Spiritual Oversight",
        short: "MTh Theology — Uganda Christian University · Senior Pastor, Kampala",
        bio: "Rev. Robert provides spiritual oversight and accountability to the Board, ensuring HFM's work remains rooted in its faith foundation and that the organisation's culture reflects its Christian values at every level.",
        country: "Uganda",
      },
    ],
  },

}; // end TEAM_CONTENT
