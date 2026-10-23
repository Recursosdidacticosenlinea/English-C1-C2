window.UNIT = {
  slug: "the-go-between",
  number: 42,
  title: "The Go-Between",
  level: "C2",
  minutes: 95,
  speakers: { "Dr. Salas": "m", "Mrs. Lin": "f", "Jimena": "f", "Host": "m", "Mediator": "m" },
  focus: ["mediation: explaining a text or a conversation to someone else", "simplifying and clarifying: In other words, What this means is, Basically", "adapting register for a different audience", "facilitating communication: checking understanding, managing misunderstandings", "neutral mediation language: Both sides agree that…, The main point of disagreement is…"],

  presentation: {
    scene: "🌉🗣️🤝🩺",
    situation: "Jimena speaks English, Spanish and some Mandarin. She is helping Mrs. Lin, a Chinese neighbour who speaks basic English, understand what a doctor at a Mexican clinic is telling her about her treatment.",
    warmup: {
      prompt: "Have you ever been a go-between for someone? Choose all that apply.",
      options: ["at a doctor's", "at a bank", "for a tourist", "for a grandparent", "in a family argument", "between friends", "at work", "explaining a contract", "explaining technology", "at a school meeting", "at a government office", "online"],
      response: "Mediation means helping people understand each other: explaining, simplifying and adapting a message. The CEFR describes it as a central skill at C2."
    },
    dialogueTitle: "At the clinic",
    dialogue: [
      { who: "Dr. Salas", line: "Mrs. Lin's blood pressure is elevated, so we'll start her on a low dose of medication and monitor her for adverse effects." },
      { who: "Jimena", line: "Mrs. Lin, the doctor says your blood pressure is *a bit high*. *In other words*, it's higher than it should be, but not dangerous yet." },
      { who: "Mrs. Lin", line: "Do I need medicine?" },
      { who: "Jimena", line: "Yes, a small amount to start. *Basically*, they'll check if it causes any problems, like dizziness. Is that clear so far?" },
      { who: "Mrs. Lin", line: "Yes. But I take herbal tea every day. Is that OK?" },
      { who: "Jimena", line: "Doctor, Mrs. Lin drinks herbal tea daily. *She'd like to know* whether it's compatible with the medication." },
      { who: "Dr. Salas", line: "Ah, good question. Which herbs? Some can interact with blood pressure medicine." },
      { who: "Jimena", line: "Mrs. Lin, *what the doctor means is* that some herbs can change how the medicine works. Can you bring the tea next time so he can check it?" }
    ]
  },

  objectives: [
    "I can explain information to someone who doesn't understand it.",
    "I can simplify complex language without changing its meaning.",
    "I can adapt the register of a message for a different audience.",
    "I can help two people or groups understand each other neutrally."
  ],

  explanation: {
    vocabTitle: "Mediation",
    vocab: [
      { word: "a go-between", icon: "🌉" }, { word: "a mediator", icon: "⚖️" }, { word: "an interpreter", icon: "🗣️" },
      { word: "relay a message", icon: "📨" }, { word: "bridge the gap", icon: "🌁" }, { word: "clarify", icon: "🔍" },
      { word: "simplify", icon: "✂️" }, { word: "jargon", icon: "⚙️" }, { word: "common ground", icon: "🤝" },
      { word: "a misunderstanding", icon: "❓" }, { word: "impartial", icon: "⚪" }, { word: "facilitate", icon: "🧭" },
      { word: "lost in translation", icon: "🌀" }, { word: "get the message across", icon: "📢" }, { word: "read between the lines", icon: "📃" }
    ],
    grammar: [
      {
        title: "Explaining and simplifying",
        head: ["Function", "Language", "Example"],
        rows: [
          ["reformulating", "*In other words,… / What this means is… / Put simply,…*", "*Put simply, your blood pressure is too high.*"],
          ["simplifying", "*Basically,… / The main thing is… / The bottom line is…*", "*Basically, they want to check for side effects.*"],
          ["explaining a term", "*X is a kind of… / X basically means…*", "*Hypertension basically means high blood pressure.*"],
          ["giving an example", "*For instance,… / Something like…*", "*side effects, something like dizziness*"],
          ["checking understanding", "*Is that clear so far? / Does that make sense? / Shall I go over that again?*", "*Is that clear so far?*"]
        ]
      },
      {
        title: "Relaying messages and managing communication",
        head: ["Function", "Language"],
        rows: [
          ["relaying a question", "*She'd like to know whether… / He's asking if…*"],
          ["relaying a point", "*What the doctor means is… / He's saying that…*"],
          ["managing misunderstanding", "*I think there may be a misunderstanding. / Let me check I've got this right.*"],
          ["neutral summary", "*Both sides agree that… / The main point of disagreement is… / Where you differ is…*"],
          ["moving forward", "*Would it help if…? / Perhaps a compromise would be…*"]
        ],
        note: "A good mediator stays **neutral**. Avoid adding your own opinion: say *He's saying that the price is too high*, not *He's right, the price is too high*."
      },
      {
        title: "Adapting register",
        head: ["Original (technical / formal)", "Mediated (clear / everyday)"],
        rows: [
          ["*Your blood pressure is elevated.*", "*Your blood pressure is a bit high.*"],
          ["*We'll monitor you for adverse effects.*", "*We'll check whether the medicine causes any problems.*"],
          ["*Payment is due within thirty days of invoicing.*", "*You have a month to pay after you get the bill.*"],
          ["*Applicants must furnish proof of residence.*", "*You need to show a document with your address.*"]
        ]
      }
    ],
    watchOut: [
      ["(Repeating the doctor's words exactly)", "*Reformulate*: Put simply, your blood pressure is too high."],
      ["She asks if is it OK.", "She's asking *if it's* OK. / She'd like to know *whether it's* OK."],
      ["He's right, you're wrong.", "*He's saying that*… / *From his point of view*,… (stay neutral)"],
      ["Understand?", "*Does that make sense?* / *Is that clear so far?*"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the mediation phrases with one word.",
      items: [
        "In other [[words]], the treatment will take three months.",
        "She'd like to know [[whether|if]] she can drink coffee.",
        "Put [[simply]], the contract ends in June.",
        "Does that make [[sense]]?",
        "The main point of [[disagreement]] is the price."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a professional mediator talking about his work.",
      title: "Building bridges",
      script: [
        { who: "Host", line: "What does a mediator actually do?" },
        { who: "Mediator", line: "I help people who disagree to understand each other well enough to find a solution. I'm not a judge; I don't decide who's right. My job is to make sure each side really hears what the other is saying, which is surprisingly rare." },
        { who: "Host", line: "Why is it rare?" },
        { who: "Mediator", line: "Because when people are in conflict, they listen in order to reply, not to understand. They hear one word they dislike and stop listening. So a lot of my work is reformulating. One side says, They never pay on time. I might say: What I'm hearing is that late payments are causing you real financial problems. That version is easier for the other side to hear." },
        { who: "Host", line: "So you change the tone, but not the content." },
        { who: "Mediator", line: "Exactly. I keep the meaning but remove the attack. And I constantly check: Have I understood that correctly? If I get it wrong, the person corrects me, and in doing so they clarify their own position." },
        { who: "Host", line: "What about cultural differences?" },
        { who: "Mediator", line: "They're often at the heart of the problem. In one case, a Mexican supplier and a Dutch client almost ended a contract because the Dutch side's directness sounded aggressive, and the Mexican side's politeness sounded evasive. Once each side understood the other's communication style, the actual disagreement turned out to be quite small. Very often, the conflict isn't about the issue; it's about the way people talk about it." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The mediator decides who is right.", a: false },
            { s: "People in conflict often listen in order to reply.", a: true },
            { s: "He changes the content of what people say.", a: false },
            { s: "He checks his understanding with the speakers.", a: true },
            { s: "In the case he describes, the real disagreement was very large.", a: false }
          ]
        },
        {
          type: "match", title: "Reformulation",
          prompt: "Match the original statements with the mediator's reformulations.",
          pairs: [
            ["They never pay on time.", "Late payments are causing you financial problems."],
            ["Have I understood that correctly?", "checking his interpretation"],
            ["The Dutch side's directness", "sounded aggressive to the supplier"],
            ["The Mexican side's politeness", "sounded evasive to the client"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a technical text and a mediated version written for a different audience.",
      title: "Same information, different reader",
      text: [
        { author: "Original: university regulations", body: "Students whose cumulative grade point average falls below 7.0 at the conclusion of any academic period shall be placed on academic probation. Students on probation are required to attend a mandatory advising session within ten working days of notification and to enrol in no more than five courses in the subsequent period. Failure to achieve a cumulative average of 7.0 within two consecutive periods of probation may result in academic dismissal, subject to review by the Faculty Board." },
        { author: "Mediated version: email to a first-year student's parents", body: "Dear Mr. and Mrs. Reyes,<br>I'm writing to explain what the university's rules on academic probation mean for students like Carlos.<br>Basically, if a student's overall average drops below 7.0 at the end of a semester, they're put on probation. This isn't a punishment; it's a warning, and a chance to get extra support.<br>In practice, this means two things. First, the student has to meet an academic adviser within two weeks. Second, they can take a maximum of five courses the next semester, so that they have more time for each one.<br>If the average is still below 7.0 after two semesters on probation, the student could be asked to leave the university, although a faculty committee always reviews each case first.<br>Please don't hesitate to contact me if anything is unclear." }
      ],
      activities: [
        {
          type: "match", title: "Original and mediated",
          prompt: "Match the formal phrases with their mediated equivalents.",
          pairs: [
            ["cumulative grade point average", "overall average"],
            ["at the conclusion of any academic period", "at the end of a semester"],
            ["a mandatory advising session", "meet an academic adviser"],
            ["within ten working days", "within two weeks"],
            ["academic dismissal", "be asked to leave the university"]
          ]
        },
        {
          type: "sort", title: "What did the mediator do?",
          prompt: "Which changes did the writer make in the mediated version, and which did they avoid?",
          bins: ["did", "avoided"],
          items: [
            { text: "used everyday vocabulary", bin: 0 }, { text: "added reassurance (it's a warning)", bin: 0 }, { text: "organized the points clearly", bin: 0 },
            { text: "changed the rules", bin: 1 }, { text: "gave a personal opinion of the rules", bin: 1 }, { text: "left out the faculty review", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice simplifying and relaying messages, then mediate a text.",
      activities: [
        {
          type: "rewrite", title: "Put simply",
          prompt: "Rewrite each formal sentence in clear, everyday English, starting with *You*.",
          items: [
            { q: "Applicants are required to furnish proof of residence.", a: ["You need to show proof of your address.", "You need to show a document with your address.", "You have to show proof of your address.", "You must show proof of your address."] },
            { q: "Payment shall be made within thirty days of invoicing.", a: ["You have thirty days to pay after you get the bill.", "You must pay within thirty days of getting the bill.", "You have a month to pay after you get the bill.", "You need to pay within thirty days of receiving the bill."] },
            { q: "Use of mobile devices is prohibited in the examination hall.", a: ["You can't use your phone in the exam room.", "You cannot use your phone in the exam room.", "You can't use mobile phones in the exam room."] }
          ]
        },
        {
          type: "rewrite", title: "Relay the message",
          prompt: "Relay each direct question or statement, starting with the words given.",
          items: [
            { q: "Mrs. Lin: \"Can I drink herbal tea?\" (She'd like to know…)", a: ["She'd like to know whether she can drink herbal tea.", "She'd like to know if she can drink herbal tea."] },
            { q: "Supplier: \"The price is too low for us.\" (He's saying…)", a: ["He's saying that the price is too low for them.", "He's saying the price is too low for them."] },
            { q: "Client: \"When will the order arrive?\" (She's asking…)", a: ["She's asking when the order will arrive."] }
          ]
        },
        {
          type: "write", title: "Mediate a text",
          prompt: "Your elderly neighbour has received this letter and asks you what it means: *Dear Resident, Further to the scheduled maintenance of the municipal water network, supply to your property will be suspended between 08:00 and 18:00 on 14 and 15 March. Residents are advised to store sufficient potable water for domestic consumption during this period. Any irregularities in supply following reconnection should be reported to the Customer Service Centre, quoting the reference number shown overleaf.* Write a **friendly message** (250–300 words) explaining the letter in simple language, what your neighbour should do, and offering practical help. Then add a short note (2–3 sentences) to your teacher explaining how you adapted the register.",
          minWords: 250, maxWords: 300,
          model: "Hi Doña Carmen,<br>I've read the letter from the water company, and don't worry, it's nothing serious. Here's what it means.<br>Basically, they're going to do some repairs on the city's water pipes. Because of this, there won't be any water in your house for two days: Tuesday 14 and Wednesday 15 March, from eight in the morning until six in the evening. At night the water will come back as normal.<br>What they're asking you to do is to save enough clean drinking water before those days, so that you have enough for cooking, drinking and washing. I'd suggest filling some large bottles or the big pot you use for tamales on Monday evening. You might also want to fill a bucket for the toilet.<br>The letter also says that, after the repairs, if the water looks dirty, comes out very weakly or doesn't come back at all, you should call the company. When you call, they'll ask for a reference number, which is printed on the back of the letter. I've circled it in red so you can find it easily.<br>If it's helpful, I can come round on Monday to help you fill the bottles, and I'm happy to make the phone call for you if there's any problem afterwards. Just knock on my door or send me a message.<br>Best wishes,<br>Lucía<br><br>Note to my teacher: I replaced formal words like suspended, potable and irregularities with everyday expressions, and I used short paragraphs and practical examples. I also added reassurance and an offer of help, because my neighbour might feel worried by the formal tone of the original letter.",
          bank: ["don't worry, it's nothing serious", "Here's what it means.", "Basically,…", "What they're asking you to do is…", "I'd suggest…", "The letter also says that…", "If it's helpful, I can…", "I replaced… with… because…"],
          checklist: [
            "I explained **all** the information in the letter accurately.",
            "I used **simple, friendly** language.",
            "I explained what the neighbour **should do**.",
            "I explained how I **adapted the register** in my note."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat with a calm, clear voice.",
          items: [
            "In other words, it's a bit high.",
            "What the doctor means is this.",
            "She'd like to know whether it's safe.",
            "Is that clear so far?",
            "Both sides agree on the main point.",
            "Let me check I've got this right."
          ]
        },
        {
          type: "speak", title: "Be the go-between",
          prompt: "Record yourself for about four minutes. **Part 1:** Choose a complex text you know (a contract, regulations, a medical leaflet, a scientific article or the university rules in this unit) and explain it to someone who doesn't understand the technical language: a child, an elderly relative or a newcomer to the country. **Part 2:** Imagine two friends disagree about where to go on holiday. Summarize each person's position neutrally, identify what they agree on and suggest a compromise.",
          language: ["Basically,…", "Put simply,…", "In other words,…", "What this means is…", "Does that make sense?", "Both of you agree that…", "Where you differ is…", "Would it help if…?"],
          seconds: 270,
          checklist: ["simplify a complex text accurately?", "check the listener's understanding?", "summarize both sides neutrally?", "suggest a compromise?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can explain complex information to someone who doesn't understand it.", review: "Explanation: explaining and simplifying" },
    { can: "I can simplify formal language without changing its meaning.", review: "Explanation: adapting register; Writing activity 1" },
    { can: "I can relay questions and messages accurately.", review: "Explanation: relaying messages; Writing activity 2" },
    { can: "I can stay neutral when mediating between two sides.", review: "Explanation: note; Listening" },
    { can: "I can recognize good mediation in a text.", review: "Reading activities" },
    { can: "I can mediate texts and conversations in writing and speech.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
