window.UNIT = {
  slug: "the-formal-email",
  number: 10,
  title: "The Formal Email",
  level: "C1",
  minutes: 85,
  speakers: { "Paulina": "f", "Óscar": "m", "Officer": "f", "Caller": "m" },
  focus: ["structure of a formal letter or email", "openings and closings: Dear Sir or Madam, Yours faithfully / sincerely", "stating the purpose: I am writing with regard to…", "making requests and complaints: I would be grateful if…, I must insist that…", "formal fixed phrases: Please find attached, at your earliest convenience"],

  presentation: {
    scene: "📧🏛️✍️📎",
    situation: "Paulina has been offered a place on a master's programme in Canada, but the university has charged her the wrong fees. Her friend Óscar helps her write a formal email to the finance office.",
    warmup: {
      prompt: "Who have you written a formal email or letter to? Choose all that apply.",
      options: ["a university", "an employer", "a bank", "a landlord", "a government office", "a hotel", "an airline", "a teacher", "a doctor's office", "a company's customer service", "a scholarship committee", "an embassy"],
      response: "Formal emails follow conventions that readers expect. In this unit you'll learn the structure and the phrases that make your emails clear, polite and effective."
    },
    dialogueTitle: "Getting the tone right",
    dialogue: [
      { who: "Paulina", line: "I want to tell them they've made a huge mistake and I'm furious." },
      { who: "Óscar", line: "You can be firm without being angry. Start by saying *why* you're writing: *I am writing with regard to the tuition fees charged to my account.*" },
      { who: "Paulina", line: "OK. Then I explain they charged me the international rate, but I have a scholarship." },
      { who: "Óscar", line: "Exactly. Give the facts: dates, amounts, reference numbers. *According to my scholarship letter, dated 3 June,...*" },
      { who: "Paulina", line: "And then I ask them to fix it." },
      { who: "Óscar", line: "*I would be grateful if you could* correct the amount and confirm in writing. If it's urgent, add a deadline: *before 15 August, when payment is due.*" },
      { who: "Paulina", line: "Should I end with *Yours faithfully*?" },
      { who: "Óscar", line: "Only if you don't know their name. If you write *Dear Mr. Clarke*, end with *Yours sincerely*. Or *Kind regards* in a modern email." }
    ]
  },

  objectives: [
    "I can organize a formal email with a clear purpose, details, request and closing.",
    "I can use appropriate openings, closings and fixed formal phrases.",
    "I can make requests and complaints firmly but politely.",
    "I can write a formal email of complaint or request of 220–260 words."
  ],

  explanation: {
    vocabTitle: "Formal phrases",
    vocab: [
      { word: "I am writing with regard to…", icon: "✍️" }, { word: "I am writing to enquire about…", icon: "❓" }, { word: "Further to our conversation,…", icon: "📞" },
      { word: "Please find attached…", icon: "📎" }, { word: "I would be grateful if you could…", icon: "🙏" }, { word: "I would appreciate it if…", icon: "💐" },
      { word: "at your earliest convenience", icon: "⏱️" }, { word: "I regret to say that…", icon: "😔" }, { word: "I must insist that…", icon: "✋" },
      { word: "Should you require any further information,…", icon: "ℹ️" }, { word: "I look forward to hearing from you.", icon: "📬" }, { word: "Yours faithfully,", icon: "🖋️" },
      { word: "Yours sincerely,", icon: "🖊️" }, { word: "Kind regards,", icon: "😊" }, { word: "Thank you in advance for your assistance.", icon: "🤝" }
    ],
    grammar: [
      {
        title: "Structure of a formal email",
        head: ["Part", "Purpose", "Example"],
        rows: [
          ["Greeting", "name or general", "*Dear Ms. Clarke, / Dear Sir or Madam,*"],
          ["Paragraph 1", "reason for writing", "*I am writing with regard to the fees charged to my account (ref. 20-4471).*"],
          ["Paragraph 2", "background and facts", "*On 3 June, I was awarded a scholarship covering 50% of tuition. However,…*"],
          ["Paragraph 3", "request or desired action", "*I would be grateful if you could correct the amount and confirm this in writing.*"],
          ["Paragraph 4", "closing line", "*Should you require any further information, please do not hesitate to contact me.*"],
          ["Sign-off", "matches the greeting", "*Yours sincerely, / Yours faithfully, / Kind regards,*"]
        ],
        note: "*Dear Sir or Madam → Yours faithfully.* *Dear Ms. Clarke → Yours sincerely.* In modern emails, *Kind regards* or *Best regards* is acceptable with both."
      },
      {
        title: "Requests and complaints: from polite to firm",
        head: ["Level", "Language"],
        rows: [
          ["polite request", "*I would be grateful if you could… / Could you possibly…?*"],
          ["stronger request", "*I would appreciate a prompt response. / I would ask you to…*"],
          ["complaint", "*I wish to express my dissatisfaction with… / I was disappointed to find that…*"],
          ["firm", "*I must insist that… / I expect the matter to be resolved by…*"],
          ["final warning", "*Should this not be resolved, I will have no choice but to…*"]
        ]
      }
    ],
    watchOut: [
      ["Dear Sir or Madam, … Yours sincerely,", "Dear Sir or Madam, … *Yours faithfully,*"],
      ["I am writing for complain about…", "I am writing *to complain* about…"],
      ["I look forward to hear from you.", "I look forward to *hearing* from you."],
      ["Please find attach my CV.", "Please find *attached* my CV."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the formal phrases with one word.",
      items: [
        "I am writing with [[regard|reference|respect]] to your advertisement.",
        "Please find [[attached]] a copy of my receipt.",
        "I would be [[grateful]] if you could reply by Friday.",
        "I look forward to [[hearing]] from you.",
        "[[Should]] you require any further information, please contact me."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a phone call to a university admissions office. Then use the information to write an email.",
      title: "A call to the admissions office",
      script: [
        { who: "Officer", line: "Good morning, Graduate Admissions, how can I help?" },
        { who: "Caller", line: "Hello. I received an offer for the master's in environmental engineering, but I need to defer my start date. Is that possible?" },
        { who: "Officer", line: "It can be, yes. Deferrals are considered case by case. Could I ask why you'd like to defer?" },
        { who: "Caller", line: "I've been offered a one-year research position at my current university, and I think the experience would be really valuable before the master's." },
        { who: "Officer", line: "That sounds like a strong reason. What you'll need to do is send a formal request by email to the programme director, Dr. Hall. Include your applicant number, the reason for the deferral and any supporting documents, such as a letter from the research supervisor." },
        { who: "Caller", line: "Is there a deadline?" },
        { who: "Officer", line: "Requests must be received by the thirtieth of June. And please note that deferrals are for a maximum of one year, and your scholarship may not automatically transfer. You should ask about that specifically in your email." },
        { who: "Caller", line: "That's really helpful. Thank you." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Deferrals are never allowed.", a: false },
            { s: "The caller wants to defer because of a research job.", a: true },
            { s: "The request should be sent to the admissions officer.", a: false },
            { s: "The deadline for requests is 30 June.", a: true },
            { s: "The scholarship transfers automatically.", a: false }
          ]
        },
        {
          type: "match", title: "What to include",
          prompt: "Match the parts of the email with the information from the call.",
          pairs: [
            ["recipient", "Dr. Hall, the programme director"],
            ["reason", "a one-year research position"],
            ["supporting document", "a letter from the research supervisor"],
            ["specific question", "whether the scholarship can be transferred"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a formal email of complaint. Notice its structure and tone.",
      title: "A complaint to an airline",
      text: [
        { body: "Dear Sir or Madam," },
        { body: "I am writing to express my dissatisfaction with the service I received on flight AM 472 from Mexico City to Madrid on 12 May, and to request compensation for the costs I incurred as a result." },
        { body: "The flight was scheduled to depart at 21:40. However, passengers were not informed of any delay until 23:15, when it was announced that the flight had been cancelled owing to a technical problem. No member of staff was available at the gate to provide information, and we were eventually told to collect our luggage and make our own arrangements for the night." },
        { body: "I was therefore obliged to pay 3,200 pesos for a hotel room and a further 450 pesos for a taxi. Furthermore, as I was travelling to attend a conference, I missed the first day of the event, for which I had already paid. Please find attached copies of all relevant receipts." },
        { body: "I would be grateful if you could reimburse these expenses in full. I would also appreciate an explanation of why passengers were left without assistance for so long. Under current regulations, I believe I am also entitled to additional compensation for the cancellation, and I must insist that this be considered." },
        { body: "Should I not receive a satisfactory response within fourteen days, I will have no choice but to refer the matter to the consumer protection authority." },
        { body: "I look forward to your prompt reply.<br>Yours faithfully,<br>Patricia Gómez<br>Booking reference: KX7T2P" }
      ],
      activities: [
        {
          type: "sort", title: "Which paragraph?",
          prompt: "Sort the information into the part of the email where it appears.",
          bins: ["purpose", "facts", "request", "warning"],
          items: [
            { text: "to request compensation", bin: 0 }, { text: "the flight was cancelled at 23:15", bin: 1 },
            { text: "no staff at the gate", bin: 1 }, { text: "reimburse expenses in full", bin: 2 },
            { text: "an explanation of the lack of assistance", bin: 2 }, { text: "consumer protection authority", bin: 3 }
          ]
        },
        {
          type: "rewrite", title: "Find the formal phrase",
          prompt: "Find the phrase in the email that means the same. Write it.",
          items: [
            { q: "I'm not happy with the service.", a: ["I am writing to express my dissatisfaction with the service", "to express my dissatisfaction with the service", "my dissatisfaction with the service", "express my dissatisfaction"] },
            { q: "because of a technical problem", a: ["owing to a technical problem"] },
            { q: "I had to pay", a: ["I was therefore obliged to pay", "I was obliged to pay"] },
            { q: "If you don't answer properly in two weeks", a: ["Should I not receive a satisfactory response within fourteen days"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice formal phrases, then write your own email.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I am writing with regard to your advertisement." },
            { a: "Please find attached a copy of my CV." },
            { a: "I would be grateful if you could reply." },
            { a: "I look forward to hearing from you." }
          ]
        },
        {
          type: "match", title: "Informal to formal",
          prompt: "Match each informal phrase with its formal equivalent.",
          pairs: [
            ["I'm sending you…", "Please find attached…"],
            ["Can you…?", "I would be grateful if you could…"],
            ["ASAP", "at your earliest convenience"],
            ["Any questions, just ask.", "Should you require any further information, please do not hesitate to contact me."],
            ["Write back soon.", "I look forward to hearing from you."]
          ]
        },
        {
          type: "write", title: "Your formal email",
          prompt: "Use the information from the **Listening** to write the caller's formal email (220–260 words) to **Dr. Hall**, requesting a one-year deferral. Include: the reason for writing, background, the reason for the deferral, the attached document, a question about the scholarship, and an appropriate closing.",
          minWords: 220, maxWords: 260,
          model: "Dear Dr. Hall,<br>I am writing to request a deferral of my place on the Master's in Environmental Engineering from the coming September intake to the following academic year. My applicant number is GA-2025-1187.<br>I was delighted to receive an offer of admission to the programme in April, and I remain fully committed to joining it. However, I have recently been offered a one-year research position at the Institute of Water Studies at my current university, where I would be working on a project to monitor river pollution in central Mexico.<br>I believe this experience would be highly relevant to the master's programme, particularly to the modules on water resource management, and that it would allow me to contribute more effectively to research during my studies. Please find attached a letter from my prospective supervisor, Dr. Laura Méndez, which confirms the details of the position.<br>I understand that deferrals are considered on an individual basis and are granted for a maximum of one year. I would also be grateful if you could clarify whether the partial scholarship I was awarded could be transferred to the following year, or whether I would need to reapply for it.<br>Thank you for considering my request. Should you require any further information, please do not hesitate to contact me. I look forward to hearing from you.<br>Yours sincerely,<br>Andrés Villalobos",
          bank: ["I am writing to request…", "My applicant number is…", "I remain fully committed to…", "However,…", "Please find attached…", "I would be grateful if you could clarify whether…", "Should you require any further information,…", "Yours sincerely,"],
          checklist: [
            "My greeting and sign-off **match** (Dear Dr. Hall → Yours sincerely).",
            "The **purpose** is clear in the first paragraph.",
            "I included **all** the information from the call.",
            "I used **formal phrases** and no contractions."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat these formal phrases.",
          items: [
            "I am writing with regard to my application.",
            "Please find attached a copy of the receipt.",
            "I would be grateful if you could help.",
            "I look forward to hearing from you.",
            "I must insist that this be resolved.",
            "Thank you in advance for your assistance."
          ]
        },
        {
          type: "speak", title: "A formal phone call",
          prompt: "Record yourself leaving a formal voice message (about three minutes) for the customer service department of a company. You ordered a laptop three weeks ago, paid in full, and it has not arrived. Explain who you are, give the facts (order number, dates, amount), say what you want them to do, and mention what you will do if the problem is not solved.",
          language: ["Good morning, my name is… and I'm calling with regard to…", "My order number is…", "On… I placed an order for…", "Unfortunately,…", "I would be grateful if you could…", "I must insist that…", "Should this not be resolved by…, I will…", "I can be reached on…"],
          seconds: 210,
          checklist: ["introduce yourself and the purpose?", "give clear facts and numbers?", "make a polite but firm request?", "mention a deadline or next step?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can organize a formal email in clear paragraphs.", review: "Explanation: structure of a formal email; Reading activity 1" },
    { can: "I can choose the right greeting and sign-off.", review: "Explanation: structure (note)" },
    { can: "I can use formal fixed phrases correctly.", review: "Explanation: vocabulary; Writing activities 1 and 2" },
    { can: "I can make requests and complaints, from polite to firm.", review: "Explanation: requests and complaints" },
    { can: "I can take notes from a phone call to use in writing.", review: "Listening activities" },
    { can: "I can write a complete, effective formal email.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
