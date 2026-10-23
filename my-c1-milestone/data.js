window.UNIT = {
  slug: "my-c1-milestone",
  number: 25,
  title: "My C1 Milestone",
  level: "C1",
  minutes: 90,
  speakers: { "Renata": "f", "Dr. Ortiz": "m", "Interviewer": "f", "Candidate": "m" },
  focus: ["C1 review: deduction, conditional inversion, clefts and stance adverbs", "concession, participle clauses and complex noun phrases", "register, reporting verbs, distancing and the subjunctive", "formal prepositional phrases, collocations and cause and effect", "final project: My C1 Milestone"],

  presentation: {
    scene: "🏔️🎓🗺️✨",
    situation: "Renata has reached the end of the C1 units. She is presenting her final project, *My C1 Milestone*, to her adviser, Dr. Ortiz, at the CAA.",
    warmup: {
      prompt: "What can you do in English now that you couldn't do before C1? Choose all that apply.",
      options: ["write a discursive essay", "chair a meeting", "write a formal complaint", "adapt my register", "tell an engaging anecdote", "report allegations fairly", "use idiomatic collocations", "speculate precisely", "concede and refute", "write a magazine article", "understand lectures", "be tactful in difficult situations"],
      response: "That's an impressive list. C1 is the level of effective operational proficiency. In this unit you'll review the key structures and reflect on your progress before moving on to C2."
    },
    dialogueTitle: "Renata's presentation",
    dialogue: [
      { who: "Renata", line: "Good afternoon. *Had anyone told me* a year ago that I'd be presenting this in English, I *wouldn't have believed* them." },
      { who: "Renata", line: "*What made the biggest difference was* learning to adapt my register. *Admittedly*, I still sound too formal sometimes, but I'm *acutely aware* of it now." },
      { who: "Renata", line: "*Having chaired* several meetings at work, I've become far more confident. *It wasn't until* I recorded myself *that* I noticed how often I hesitated." },
      { who: "Renata", line: "*Much as* I enjoyed the speaking units, writing was *by far* the greatest challenge. My early essays *must have been* painful to read!" },
      { who: "Dr. Ortiz", line: "*Be that as it may*, your last essay was excellent. What's your next goal?" },
      { who: "Renata", line: "I'm *on the verge of* applying for a master's degree abroad. My adviser recommended that I *start* the C2 units *in light of* the academic reading I'll need." },
      { who: "Renata", line: "*All things considered*, this has been a *steep but deeply rewarding* learning curve. Thank you. I'd be happy to take any questions." }
    ]
  },

  objectives: [
    "I can use a wide range of C1 structures accurately and flexibly.",
    "I can reflect critically on my progress, strengths and areas for improvement.",
    "I can write a well-organized reflective text using varied C1 language.",
    "I can give a fluent, structured presentation about my C1 learning journey."
  ],

  explanation: {
    vocabTitle: "Reflecting at an advanced level",
    vocab: [
      { word: "a milestone", icon: "🏔️" }, { word: "proficiency", icon: "🎓" }, { word: "range and accuracy", icon: "🎯" },
      { word: "flexibility", icon: "🤸" }, { word: "spontaneity", icon: "⚡" }, { word: "self-awareness", icon: "🪞" },
      { word: "a plateau", icon: "➖" }, { word: "a breakthrough", icon: "💡" }, { word: "fossilized errors", icon: "🦴" },
      { word: "fine-tune", icon: "🎛️" }, { word: "consolidate", icon: "🧱" }, { word: "stretch myself", icon: "🧘" },
      { word: "a steep learning curve", icon: "📈" }, { word: "autonomous learner", icon: "🦋" }, { word: "the next step", icon: "👣" }
    ],
    grammar: [
      {
        title: "C1 grammar at a glance (1)",
        head: ["Use", "Structure", "Unit", "Example"],
        rows: [
          ["deduction about the past", "*must / can't / might well have + pp*", "1", "*My early essays must have been painful to read.*"],
          ["formal conditionals", "*Had I…, Should you…, Were it not for…*", "2", "*Had anyone told me, I wouldn't have believed it.*"],
          ["stance", "*admittedly, arguably, presumably*", "3", "*Admittedly, I still sound too formal.*"],
          ["focus", "*It wasn't until… that / What… was*", "4", "*It wasn't until I recorded myself that I noticed.*"],
          ["comparison", "*by far, nowhere near as, the more… the more*", "13", "*Writing was by far the greatest challenge.*"],
          ["future with nuance", "*be on the verge of, be set to*", "16", "*I'm on the verge of applying.*"]
        ]
      },
      {
        title: "C1 grammar at a glance (2)",
        head: ["Use", "Structure", "Unit", "Example"],
        rows: [
          ["concise clauses", "*Having + pp, All things considered*", "17", "*Having chaired several meetings, I'm more confident.*"],
          ["concession", "*much as, albeit, notwithstanding*", "18", "*Much as I enjoyed speaking, writing was harder.*"],
          ["distancing", "*is said to have, there is thought to be*", "22", "*C1 is said to be the hardest level to reach.*"],
          ["formal demands", "*recommend that + base form*", "23", "*She recommended that I start the C2 units.*"],
          ["formal phrases", "*in light of, in the wake of*", "21", "*in light of the academic reading I'll need*"],
          ["collocation", "*deeply rewarding, acutely aware*", "9", "*I'm acutely aware of it now.*"]
        ]
      }
    ],
    watchOut: [
      ["Had I knew, I would have studied more.", "Had I *known*, I would have studied more."],
      ["It wasn't until I recorded myself when I noticed.", "It wasn't until I recorded myself *that* I noticed."],
      ["She recommended that I starts the C2 units.", "She recommended that I *start* the C2 units."],
      ["Despite I enjoyed it, it was hard.", "*Although* I enjoyed it, it was hard. / *Despite enjoying* it,…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "[[Had]] I known how useful it would be, I'd have started earlier.",
        "It wasn't [[until]] my third essay that I understood how to concede.",
        "[[Much]] as I love speaking, writing is my priority now.",
        "My adviser insisted that I [[be|remain|stay]] more concise.",
        "[[Having]] finished the C1 units, I feel ready for C2."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to part of a mock C1 speaking exam. A candidate is answering questions about learning and success.",
      title: "A C1 speaking exam",
      script: [
        { who: "Interviewer", line: "Some people believe that natural talent matters more than hard work in learning a language. What's your view?" },
        { who: "Candidate", line: "That's an interesting question. Admittedly, some people do seem to have a gift for languages; they pick up accents remarkably quickly. But I'd argue that persistence matters far more in the long run. What I've noticed is that the people who succeed are the ones who keep going when progress feels slow." },
        { who: "Interviewer", line: "Can you give an example?" },
        { who: "Candidate", line: "Certainly. A friend of mine was, by her own admission, terrible at languages at school. Having moved abroad for work, she had no choice but to practise every day, and within three years she was arguably more fluent than I was, despite my having studied for much longer." },
        { who: "Interviewer", line: "Why do you think many adults give up?" },
        { who: "Candidate", line: "I suspect it stems from unrealistic expectations. Adults are used to being competent, so feeling like a beginner can be deeply uncomfortable. Had they been warned that progress isn't a straight line, perhaps fewer of them would abandon it at the first plateau." },
        { who: "Interviewer", line: "And what would you recommend to someone starting today?" },
        { who: "Candidate", line: "I'd strongly recommend that they find something they genuinely enjoy in the language, whether it's music, series or conversation, and do it every day. Much as courses help, it's the daily habit that really makes the difference. Small steps, consistently, are nowhere near as dramatic as an intensive course, but they're far more effective." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The candidate thinks talent is the most important factor.", a: false },
            { s: "The candidate's friend had been good at languages at school.", a: false },
            { s: "The friend became very fluent after moving abroad.", a: true },
            { s: "The candidate thinks unrealistic expectations make adults give up.", a: true },
            { s: "The candidate recommends intensive courses above all.", a: false }
          ]
        },
        {
          type: "match", title: "Identify the C1 structure",
          prompt: "Match each extract from the exam with the structure it shows.",
          pairs: [
            ["Admittedly, some people do seem to have a gift…", "a stance adverb"],
            ["What I've noticed is that…", "a wh-cleft"],
            ["Having moved abroad for work,…", "a perfect participle clause"],
            ["Had they been warned,…", "conditional inversion"],
            ["I'd strongly recommend that they find…", "the subjunctive"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read two learners' reflections at the end of C1.",
      title: "Looking back, looking ahead",
      text: [
        { author: "Joaquín, engineer", body: "When I started the C1 units, I assumed my problem was vocabulary. It turned out to be register. I could write a perfectly grammatical email that sounded either rude or absurdly formal. Learning to move between registers, and to soften criticism without hiding it, has transformed the way I work with international clients. My biggest remaining weakness is spontaneity: in fast meetings I still rehearse sentences in my head before speaking, by which time the topic has usually changed. Over the next year, I intend to join a conversation club and stop waiting for the perfect sentence." },
        { author: "Ana Sofía, medical student", body: "For me, the turning point was the unit on cause and effect. In medicine, distinguishing correlation from causation is essential, and suddenly I had the language to discuss research critically instead of just repeating it. Writing essays was by far the hardest part; my first attempts were long, repetitive and, frankly, rather boring. Having learned to plan a thesis and concede counter-arguments, I now write more clearly in Spanish, too. My goal for C2 is to read academic articles without a dictionary and to summarize them accurately for my colleagues." }
      ],
      activities: [
        {
          type: "sort", title: "Who says it?",
          prompt: "Sort the ideas according to who expresses them.",
          bins: ["Joaquín", "Ana Sofía"],
          items: [
            { text: "register was the real problem", bin: 0 }, { text: "rehearses sentences before speaking", bin: 0 }, { text: "will join a conversation club", bin: 0 },
            { text: "correlation vs causation was the turning point", bin: 1 }, { text: "essays were the hardest part", bin: 1 }, { text: "wants to summarize academic articles", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "C1 grammar challenge",
          prompt: "Rewrite each sentence using the word in brackets. Keep the meaning.",
          items: [
            { q: "I only understood register when I wrote to a client. (until)", a: ["It wasn't until I wrote to a client that I understood register.", "It was not until I wrote to a client that I understood register."] },
            { q: "If I had known, I would have practised more. (Had)", a: ["Had I known, I would have practised more.", "Had I known, I'd have practised more."] },
            { q: "Writing was much harder than anything else. (by far)", a: ["Writing was by far the hardest part.", "Writing was by far the hardest thing.", "Writing was by far the most difficult part."] },
            { q: "I enjoyed the course very much, but it was exhausting. (Much as)", a: ["Much as I enjoyed the course, it was exhausting."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Review C1 structures, then write your reflective text.",
      activities: [
        {
          type: "rewrite", title: "Find the mistake",
          prompt: "Each sentence has one mistake. Write the correct sentence.",
          items: [
            { q: "She must have be exhausted after the exam.", a: ["She must have been exhausted after the exam."] },
            { q: "The rise is largely attributable for tourism.", a: ["The rise is largely attributable to tourism."] },
            { q: "They denied to know about the problem.", a: ["They denied knowing about the problem.", "They denied having known about the problem."] },
            { q: "The report is due publishing next week.", a: ["The report is due to be published next week."] },
            { q: "Progress was steady, albeit it was slow.", a: ["Progress was steady, albeit slow.", "Progress was steady, albeit slowly."] }
          ]
        },
        {
          type: "sort", title: "Which C1 area?",
          prompt: "Sort the examples by the area of C1 language they belong to.",
          bins: ["grammar for emphasis", "formal register", "spoken interaction"],
          items: [
            { text: "Never had I…", bin: 0 }, { text: "What surprised me was…", bin: 0 },
            { text: "I am writing with regard to…", bin: 1 }, { text: "in light of…", bin: 1 },
            { text: "Could we let her finish first?", bin: 2 }, { text: "No way! And then what?", bin: 2 }
          ]
        },
        {
          type: "write", title: "My C1 milestone",
          prompt: "Write a reflective text (250–300 words) about your C1 journey. Describe where you started, the most useful units and why, the challenges you faced, the skills you still need to improve, and your plans for C2. Use at least **ten** different C1 structures from the units (inversion, clefts, stance adverbs, participle clauses, concession, collocations, formal phrases, etc.).",
          minWords: 250, maxWords: 300,
          model: "When I began the C1 units, I considered myself a confident user of English. Admittedly, I could hold a conversation and write a clear email, but I was nowhere near as precise or flexible as I imagined. Had someone shown me my first essay at the time, I would probably have defended it; today, I can see that it was repetitive and far too informal.<br>What made the greatest difference was the work on register. It wasn't until I rewrote a message to a client three times, each time in a different tone, that I truly understood how much the choice of a single verb can change the reader's impression. Having practised tact and diplomacy, I now give feedback to colleagues in English without sounding blunt.<br>Writing was, by far, the most demanding skill. Much as I enjoyed planning essays, conceding counter-arguments did not come naturally to me. I tended to ignore the other side entirely. In light of my adviser's comments, I began reading opinion columns every week, which gradually gave me a wider range of concessive structures.<br>Speaking presented different challenges. In fast discussions, I am still acutely aware of hesitating, and I occasionally rely on the same phrases. Spontaneity remains my main area for improvement, albeit one in which I have made steady progress.<br>All things considered, reaching this milestone has been a steep but deeply rewarding learning curve. My adviser has recommended that I focus on academic reading and summarizing during C2, as I am on the verge of applying for a master's degree. Come what may, I intend to keep reading, listening and, above all, speaking every single day.",
          bank: ["Admittedly,", "nowhere near as…", "Had someone…", "What made the greatest difference was…", "It wasn't until… that…", "Having practised…,", "by far", "Much as…,", "In light of…", "acutely aware", "albeit", "All things considered,", "recommended that I + base form", "on the verge of"],
          checklist: [
            "I described my **starting point**, **progress** and **challenges**.",
            "I mentioned **specific units** and why they helped.",
            "I identified an **area for improvement** and **C2 plans**.",
            "I used at least **ten** different C1 structures."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat these C1 sentences.",
          items: [
            "Had I known, I'd have started earlier.",
            "What made the difference was practice.",
            "It wasn't until then that I noticed.",
            "Writing was by far the greatest challenge.",
            "Much as I enjoyed it, it was exhausting.",
            "All things considered, it was deeply rewarding."
          ]
        },
        {
          type: "speak", title: "Final project: My C1 Milestone",
          prompt: "Record a presentation of about four minutes about your C1 journey. Structure it clearly: **1)** introduction and starting point, **2)** two units or skills that changed the way you use English, with examples, **3)** a challenge and how you dealt with it, **4)** what you still need to improve, **5)** your goals for C2. Finish by inviting questions. Use a wide range of C1 structures.",
          language: ["Had anyone told me…,", "What made the biggest difference was…", "It wasn't until… that…", "Having…,", "Admittedly,…", "Much as I…,", "by far the…", "All things considered,…", "I'd be happy to take any questions."],
          seconds: 270,
          checklist: ["follow the five-part structure?", "give specific examples from the units?", "use at least eight C1 structures?", "speak fluently without reading everything?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use deduction, conditional inversion and cleft sentences accurately.", review: "Units 1, 2 and 4; Explanation: C1 grammar at a glance (1)" },
    { can: "I can use concession, participle clauses and stance adverbs flexibly.", review: "Units 3, 17 and 18; Explanation: C1 grammar at a glance (2)" },
    { can: "I can adapt my register for formal and informal situations.", review: "Units 6, 8 and 10" },
    { can: "I can report, distance myself from claims and write formal demands.", review: "Units 15, 22 and 23" },
    { can: "I can write well-structured essays, articles and formal letters.", review: "Units 5, 10 and 20; Writing activity 3" },
    { can: "I can give a fluent presentation about my learning journey.", review: "Speaking activity 2" }
  ]
};
