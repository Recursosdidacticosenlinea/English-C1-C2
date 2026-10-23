window.UNIT = {
  slug: "the-letter-of-the-law",
  number: 33,
  title: "The Letter of the Law",
  level: "C2",
  minutes: 90,
  speakers: { "Renata": "f", "Iván": "m", "Host": "m", "Lawyer": "f" },
  focus: ["shall and may in legal texts: obligation and permission", "formal connectors: whereby, hereby, herein, thereof, notwithstanding", "provided that, in the event that, subject to, unless otherwise stated", "legal doublets and binomials: terms and conditions, null and void", "plain English: rewriting legal language clearly"],

  presentation: {
    scene: "⚖️📜🖋️🏠",
    situation: "Renata is about to rent a flat in Toronto for her master's degree. Her friend Iván, a law student, helps her understand the rental agreement before she signs.",
    warmup: {
      prompt: "Which of these documents have you read carefully before signing or accepting? Choose all that apply.",
      options: ["a rental agreement", "an employment contract", "app terms and conditions", "a privacy policy", "a bank loan", "an insurance policy", "a phone contract", "a university regulation", "a gym membership", "a warranty", "a scholarship agreement", "I usually just accept"],
      response: "Most of us accept terms without reading them. At C2, you should be able to understand legal and official language, and explain it in plain English."
    },
    dialogueTitle: "Before you sign",
    dialogue: [
      { who: "Renata", line: "*The Tenant shall pay the rent on the first day of each month.* Why *shall*? Isn't that old-fashioned?" },
      { who: "Iván", line: "In contracts, *shall* means it's an obligation. *May* means it's permitted. It's a crucial difference." },
      { who: "Renata", line: "OK. *The Landlord may enter the premises, provided that 24 hours' notice is given.*" },
      { who: "Iván", line: "So he's allowed to come in, but only if he tells you a day before. That's standard." },
      { who: "Renata", line: "And this? *Notwithstanding clause 4, the Tenant shall be liable for any damage thereto.*" },
      { who: "Iván", line: "*Notwithstanding* means *despite* or *regardless of*. *Thereto* means *to it*, the flat. So, even if clause 4 says something else, you pay for damage to the flat." },
      { who: "Renata", line: "Lovely. And *any breach hereof shall render this agreement null and void*?" },
      { who: "Iván", line: "If you break this contract, it's cancelled. *Hereof* means *of this document*. Lawyers love those words. Just make sure you understand every *shall* before you sign." }
    ]
  },

  objectives: [
    "I can understand the use of shall and may in legal texts.",
    "I can understand formal connectors such as whereby, hereby and notwithstanding.",
    "I can understand conditional expressions like provided that and subject to.",
    "I can rewrite legal language in clear, plain English."
  ],

  explanation: {
    vocabTitle: "Legal vocabulary",
    vocab: [
      { word: "a clause", icon: "📄" }, { word: "a party (to a contract)", icon: "🤝" }, { word: "the premises", icon: "🏠" },
      { word: "liable for", icon: "💸" }, { word: "a breach of contract", icon: "💔" }, { word: "terminate", icon: "✂️" },
      { word: "binding", icon: "🔗" }, { word: "null and void", icon: "🚫" }, { word: "terms and conditions", icon: "📜" },
      { word: "a deposit", icon: "💰" }, { word: "waive a right", icon: "👋" }, { word: "indemnify", icon: "🛡️" },
      { word: "the small print", icon: "🔎" }, { word: "jurisdiction", icon: "🌎" }, { word: "in good faith", icon: "🙏" }
    ],
    grammar: [
      {
        title: "Shall and may",
        head: ["Word", "Meaning in legal texts", "Example"],
        rows: [
          ["*shall*", "obligation (= must)", "*The Tenant shall pay the rent monthly.*"],
          ["*shall not*", "prohibition (= must not)", "*The Tenant shall not keep pets.*"],
          ["*may*", "permission (= is allowed to)", "*The Landlord may inspect the premises.*"],
          ["*may not*", "prohibition (= is not allowed to)", "*The Tenant may not sublet the property.*"],
          ["*is entitled to*", "has the right to", "*The Tenant is entitled to a refund of the deposit.*"]
        ]
      },
      {
        title: "Formal connectors and conditions",
        head: ["Expression", "Plain English", "Example"],
        rows: [
          ["*whereby*", "by which, according to which", "*an agreement whereby the Tenant pays…*"],
          ["*hereby*", "by this document", "*I hereby resign.*"],
          ["*herein / hereof / hereto*", "in / of / to this document", "*the terms set out herein*"],
          ["*thereof / thereto*", "of / to it (the thing mentioned)", "*the property and any part thereof*"],
          ["*notwithstanding*", "despite, regardless of", "*Notwithstanding clause 4, …*"],
          ["*provided that / providing*", "only if", "*provided that notice is given*"],
          ["*subject to*", "depending on, only if allowed by", "*subject to the Landlord's approval*"],
          ["*in the event that / of*", "if", "*in the event of late payment*"],
          ["*unless otherwise stated / agreed*", "if nothing different is said", "*Unless otherwise agreed in writing,…*"]
        ]
      },
      {
        title: "Legal binomials",
        intro: "Legal English often uses pairs of words with almost the same meaning, a tradition from the time when English, French and Latin were all used in law.",
        head: ["Binomial", "Meaning"],
        rows: [
          ["*terms and conditions*", "the rules of the agreement"],
          ["*null and void*", "no longer valid"],
          ["*cease and desist*", "stop"],
          ["*each and every*", "every"],
          ["*fit and proper*", "suitable"],
          ["*by and between*", "between"]
        ],
        note: "The **plain English** movement encourages writers of contracts and official documents to avoid unnecessary legal jargon so that ordinary people can understand their rights."
      }
    ],
    watchOut: [
      ["The tenant shall pay → The tenant will probably pay.", "*shall* = *must*: it's an obligation."],
      ["The landlord may enter → The landlord might enter.", "*may* = *is allowed to*: it's a permission."],
      ["Notwithstanding = not standing up", "*Notwithstanding* = *despite, regardless of*."],
      ["Subject to approval → the subject of the approval", "*Subject to approval* = only if it is approved."]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match each legal expression with its plain English meaning.",
      pairs: [
        ["shall", "must"],
        ["notwithstanding", "despite"],
        ["provided that", "only if"],
        ["hereby", "by means of this document"],
        ["null and void", "no longer valid"]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a lawyer who campaigns for plain English in legal documents.",
      title: "Why can't contracts be clear?",
      script: [
        { who: "Host", line: "Why are legal documents so difficult to understand?" },
        { who: "Lawyer", line: "Partly history and partly habit. Legal English developed over centuries, borrowing from Latin and French, and lawyers were trained to copy the documents of their predecessors. Phrases like hereinafter and whereas survived not because they're necessary, but because nobody dared to remove them." },
        { who: "Host", line: "Isn't there a good reason for the precision?" },
        { who: "Lawyer", line: "Precision, yes. Complexity, no. Those aren't the same thing. A sentence can be precise and clear at the same time. In fact, many legal disputes arise precisely because a clause was so complicated that the parties understood it differently." },
        { who: "Host", line: "What does plain English look like in a contract?" },
        { who: "Lawyer", line: "Short sentences, active verbs, ordinary words and a logical order. Instead of The Tenant shall be liable for any and all damage thereto, you write: You must pay for any damage to the flat. Some lawyers object that the word must sounds too direct, but it's exactly what the clause means." },
        { who: "Host", line: "Has the movement had any success?" },
        { who: "Lawyer", line: "Considerable success. Several countries now require consumer contracts and government forms to be written in plain language, and studies show that people make fewer mistakes and complain less when they understand the documents they sign. Notwithstanding some resistance from the profession, I'm optimistic. Clarity, after all, is a form of fairness." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Some legal phrases survived mainly through habit.", a: true },
            { s: "The lawyer thinks precision requires complexity.", a: false },
            { s: "Complicated clauses can cause legal disputes.", a: true },
            { s: "All lawyers like using the word must.", a: false },
            { s: "Several countries require plain language in some documents.", a: true }
          ]
        },
        {
          type: "match", title: "Plain English principles",
          prompt: "Match each principle with an example from the talk.",
          pairs: [
            ["active verbs", "You must pay…"],
            ["ordinary words", "the flat (not the premises)"],
            ["no unnecessary pairs", "any damage (not any and all damage)"],
            ["direct address", "you (not the Tenant)"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read part of a rental agreement and its plain English version.",
      title: "Rental agreement: two versions",
      text: [
        { author: "Clause 5 · Original", body: "The Tenant shall not, without the prior written consent of the Landlord, which consent shall not be unreasonably withheld, assign, sublet or otherwise part with possession of the Premises or any part thereof. Any purported assignment or subletting in breach hereof shall be null and void." },
        { author: "Clause 5 · Plain English", body: "You must not let anyone else live in the flat, or rent it to someone else, unless the landlord agrees in writing. The landlord must not refuse without a good reason. If you rent it to someone without permission, that arrangement will not be valid." },
        { author: "Clause 8 · Original", body: "Notwithstanding any other provision herein, in the event that the Rent or any part thereof remains unpaid for a period of fourteen (14) days after the same has become due, the Landlord shall be entitled, subject to applicable law, to terminate this Agreement forthwith by notice in writing to the Tenant." },
        { author: "Clause 8 · Plain English", body: "If you have not paid all your rent fourteen days after the due date, the landlord can end this agreement immediately by writing to you. This applies whatever the rest of the agreement says, but the landlord must still follow the law." }
      ],
      activities: [
        {
          type: "match", title: "Legal to plain",
          prompt: "Match the legal phrases with their plain English equivalents from the texts.",
          pairs: [
            ["sublet or otherwise part with possession", "rent it to someone else"],
            ["which consent shall not be unreasonably withheld", "must not refuse without a good reason"],
            ["shall be null and void", "will not be valid"],
            ["notwithstanding any other provision herein", "whatever the rest of the agreement says"],
            ["forthwith", "immediately"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The tenant can rent the flat to a friend without asking.", a: false },
            { s: "The landlord can refuse permission for any reason at all.", a: false },
            { s: "The landlord can end the agreement after fourteen days of unpaid rent.", a: true },
            { s: "The landlord can ignore the law when ending the agreement.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice translating legal language, then rewrite a document in plain English.",
      activities: [
        {
          type: "rewrite", title: "Into plain English",
          prompt: "Rewrite each legal sentence in plain English, starting with *You*.",
          items: [
            { q: "The Tenant shall not keep animals on the Premises.", a: ["You must not keep animals in the flat.", "You must not keep pets in the flat.", "You must not keep animals in the property.", "You must not keep animals on the premises."] },
            { q: "The Tenant may terminate this Agreement by giving one month's notice.", a: ["You can end this agreement by giving one month's notice.", "You may end this agreement by giving one month's notice.", "You can end the agreement by giving one month's notice."] },
            { q: "The Tenant shall be liable for any damage to the Premises.", a: ["You must pay for any damage to the flat.", "You must pay for any damage to the property.", "You are responsible for any damage to the flat."] }
          ]
        },
        {
          type: "gap", title: "Legal expressions",
          prompt: "Complete with one word.",
          items: [
            "Pets are allowed, [[subject]] to the landlord's approval.",
            "I [[hereby]] resign from my position with immediate effect.",
            "[[Notwithstanding]] the above, the deposit will be returned in full.",
            "The contract shall become null and [[void]].",
            "You may leave early, [[provided|providing]] that you give two weeks' notice."
          ]
        },
        {
          type: "write", title: "Plain English rewrite",
          prompt: "Your university's library has published these rules in very legal language. Rewrite them in **plain English** for students (250–300 words), using headings, short sentences and *you*. Then add a short note (2–3 sentences) explaining two changes you made and why. *Original: 1. Users shall present a valid identification card upon entry to the premises. 2. Notwithstanding clause 3, no food or beverages, save for water in sealed containers, shall be consumed within the reading rooms. 3. Users may consume refreshments in designated areas, subject to the maintenance of cleanliness thereof. 4. Materials borrowed shall be returned on or before the due date; in the event of late return, a fine shall be levied per diem. 5. Any user found to be in breach hereof may, at the discretion of the Library, be denied access to the facilities for a period not exceeding thirty days.*",
          minWords: 250, maxWords: 300,
          model: "Library rules: what you need to know<br>Coming in<br>You must show your student ID card when you enter the library. Please have it ready at the entrance.<br>Food and drink<br>You can't eat or drink in the reading rooms. The only exception is water in a bottle with a lid.<br>If you'd like a snack or a coffee, you're welcome to use the café area on the ground floor or the study lounge on the second floor. Please keep these areas clean and use the recycling bins.<br>Borrowing books and materials<br>You must return everything you borrow on or before the due date shown on your receipt. You can check your due dates and renew your books online through your library account.<br>If you return something late, you'll pay a fine for each day it's overdue. The current fines are listed at the help desk and on our website.<br>If you don't follow the rules<br>If you break any of these rules, the library may stop you from using its services for up to thirty days. We'll always tell you why and for how long.<br>Questions?<br>If anything isn't clear, please ask the staff at the help desk. We're happy to help.<br><br>Note on my changes:<br>First, I replaced legal words like notwithstanding, thereof and per diem with everyday language, because most students won't know them and might misunderstand the rules. Second, I used you and headings instead of long numbered clauses, so that students can quickly find the information they need and feel the library is speaking to them directly, rather than threatening them.",
          bank: ["You must…", "You can't…", "The only exception is…", "If you…, you'll…", "You're welcome to…", "the library may…", "up to thirty days", "I replaced… with… because…"],
          checklist: [
            "I kept **all the rules** and their meaning.",
            "I used **short sentences**, **headings** and **you**.",
            "I replaced every **legal term** with plain English.",
            "I explained **two changes** in my note."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat these legal phrases clearly.",
          items: [
            "The tenant shall pay the rent monthly.",
            "Provided that notice is given in advance.",
            "Subject to the landlord's written approval.",
            "Notwithstanding the above, the deposit is returned.",
            "The agreement shall be null and void.",
            "I hereby resign with immediate effect."
          ]
        },
        {
          type: "speak", title: "Explain the small print",
          prompt: "Record yourself for about four minutes. Choose a real document you have accepted (app terms and conditions, a phone contract, a scholarship agreement, a gym membership…) or use the rental agreement from this unit. Explain three important clauses to a friend in plain English: what each one means, why it matters, and anything surprising or unfair. Finish with your opinion: should legal documents be written in plain English by law?",
          language: ["Basically, this clause says that…", "Shall here means…", "In other words,…", "What this means in practice is…", "The catch is that…", "Subject to… means…", "Notwithstanding means…", "In my view, contracts should…"],
          seconds: 270,
          checklist: ["explain three clauses clearly?", "translate legal words into plain English?", "point out something surprising or unfair?", "give your opinion on plain English laws?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand shall and may in legal texts.", review: "Explanation: shall and may" },
    { can: "I can understand hereby, thereof, whereby and notwithstanding.", review: "Explanation: formal connectors and conditions" },
    { can: "I can understand provided that, subject to and in the event of.", review: "Explanation: formal connectors and conditions; Writing activity 2" },
    { can: "I can recognize legal binomials such as null and void.", review: "Explanation: legal binomials" },
    { can: "I can understand legal clauses and their plain English versions.", review: "Listening and Reading activities" },
    { can: "I can rewrite legal language clearly and explain it to others.", review: "Writing activities 1 and 3 and Speaking activity 2" }
  ]
};
