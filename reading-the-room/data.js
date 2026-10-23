window.UNIT = {
  slug: "reading-the-room",
  number: 27,
  title: "Reading the Room",
  level: "C2",
  minutes: 90,
  speakers: { "Daniela": "f", "Kenji": "m", "Host": "m", "Linguist": "f" },
  focus: ["implicature: what is meant but not said", "understatement and litotes: not bad, not unlike, hardly ideal", "indirect refusals and criticism: I'll think about it, That's brave", "hints and indirect requests: It's a bit cold in here, isn't it?", "interpreting tone, context and the cooperative principle"],

  presentation: {
    scene: "🫖🧐💬🤐",
    situation: "Kenji has just started working at an office in London. After his first presentation, his colleague Daniela helps him understand what his manager really meant.",
    warmup: {
      prompt: "What do you think these phrases often mean? Choose the ones you think are usually negative.",
      options: ["That's an interesting idea.", "I'll bear it in mind.", "Very brave.", "Not bad at all.", "With the greatest respect,", "Could we perhaps consider…?", "I hear what you're saying.", "It's quite good.", "Let's see.", "That's one way of doing it.", "I might join you later.", "No worries."],
      response: "Many of these phrases mean something quite different from their literal words. At C2, understanding what is implied is as important as understanding what is said."
    },
    dialogueTitle: "What did she mean?",
    dialogue: [
      { who: "Kenji", line: "I think the presentation went well. The manager said it was *very interesting*." },
      { who: "Daniela", line: "Hmm. Did she say anything else?" },
      { who: "Kenji", line: "She said the budget section was *quite brave*, and that she'd *bear my suggestions in mind*." },
      { who: "Daniela", line: "Ah. I'm afraid *brave* usually means *risky*, possibly *foolish*. And *I'll bear it in mind* often means *probably not*." },
      { who: "Kenji", line: "Seriously? So she didn't like it?" },
      { who: "Daniela", line: "Not necessarily. Did she say *it's not without its merits*?" },
      { who: "Kenji", line: "Yes! I thought that was a criticism." },
      { who: "Daniela", line: "That's actually positive, in a very British way. It means *it has some good points*. So: interesting ideas, a risky budget. She wants you to try again, *not entirely* from scratch." }
    ]
  },

  objectives: [
    "I can interpret implied meanings in conversation.",
    "I can understand and use understatement and litotes.",
    "I can recognize indirect refusals, criticisms and requests.",
    "I can explain how context and tone change meaning."
  ],

  explanation: {
    vocabTitle: "Talking about meaning",
    vocab: [
      { word: "imply", icon: "🤫" }, { word: "infer", icon: "🧠" }, { word: "an implication", icon: "↪️" },
      { word: "a hint", icon: "💡" }, { word: "drop a hint", icon: "🪶" }, { word: "take a hint", icon: "👌" },
      { word: "read between the lines", icon: "📃" }, { word: "subtext", icon: "📝" }, { word: "understatement", icon: "🤏" },
      { word: "tongue-in-cheek", icon: "😏" }, { word: "a veiled criticism", icon: "🎭" }, { word: "pick up on", icon: "📡" },
      { word: "miss the point", icon: "🎯" }, { word: "take something literally", icon: "📖" }, { word: "read the room", icon: "👀" }
    ],
    grammar: [
      {
        title: "Implicature: saying more than the words",
        intro: "Listeners assume speakers are being relevant and informative. When someone says *less* or *something different* from what we expect, we infer an extra meaning: an **implicature**.",
        head: ["What is said", "Context", "What is implied"],
        rows: [
          ["*Some of the students passed.*", "a teacher's report", "Not all of them passed."],
          ["*Well, the food was hot.*", "asked about a restaurant", "The food wasn't good."],
          ["*It's a bit cold in here, isn't it?*", "near an open window", "Please close the window."],
          ["*I have an early start tomorrow.*", "invited to a party", "I probably won't come."],
          ["*She's very punctual.*", "a reference letter, nothing else", "She has few other strengths."]
        ]
      },
      {
        title: "Understatement and litotes",
        head: ["Expression", "Literal", "Usually means"],
        rows: [
          ["*not bad (at all)*", "not bad", "good, even very good"],
          ["*not without its merits*", "it has some good points", "it's fairly good"],
          ["*not unlike*", "not different from", "similar to"],
          ["*hardly ideal*", "almost not ideal", "quite bad"],
          ["*a bit of a problem*", "a small problem", "a serious problem"],
          ["*not the most… *", "not the most organized", "very disorganized"]
        ],
        note: "**Litotes** expresses a positive idea by denying its opposite: *not uncommon* = fairly common; *no small achievement* = a big achievement."
      },
      {
        title: "Indirect refusals and criticism",
        head: ["Phrase", "Often means"],
        rows: [
          ["*I'll bear it in mind. / I'll think about it.*", "probably not"],
          ["*That's very brave.*", "that's risky or unwise"],
          ["*That's one way of doing it.*", "I wouldn't do it that way"],
          ["*With the greatest respect,…*", "I strongly disagree"],
          ["*I hear what you're saying.*", "I don't agree"],
          ["*Interesting.*", "(depending on tone) I don't like it"]
        ]
      }
    ],
    watchOut: [
      ["\"It's not bad.\" → It's mediocre.", "Often *good* in British understatement."],
      ["\"I'll bear it in mind.\" → They'll do it.", "Often a polite *no*."],
      ["\"It's a bit cold.\" → Just a comment.", "Often a request to close the window or turn on the heating."],
      ["\"With the greatest respect\" → I respect you a lot.", "Usually introduces strong *disagreement*."]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match each phrase with what it usually implies.",
      pairs: [
        ["That's very brave.", "That's risky."],
        ["Not bad at all.", "That's good."],
        ["I'll think about it.", "Probably not."],
        ["It's hardly ideal.", "It's quite bad."],
        ["That's no small achievement.", "That's a big achievement."]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a linguist explaining how we understand what isn't said.",
      title: "The cooperative principle",
      script: [
        { who: "Host", line: "How do we understand meanings that nobody actually states?" },
        { who: "Linguist", line: "The philosopher Paul Grice suggested that conversation is guided by a cooperative principle. We assume people are trying to be truthful, relevant, clear and as informative as necessary. When they seem to break one of those expectations, we don't assume they're being random. We look for a hidden meaning." },
        { who: "Host", line: "Can you give an example?" },
        { who: "Linguist", line: "Imagine you ask a friend, Is the new manager any good? and they reply, Well, he always wears very nice ties. That answer is technically relevant, but strangely uninformative. So you infer that there's nothing better to say about him, that he's probably not very good." },
        { who: "Host", line: "And understatement?" },
        { who: "Linguist", line: "That's another example. If someone survives a hurricane and says, It was a bit windy, they're deliberately saying much less than the truth. Listeners recognize the gap, and the gap itself carries meaning, usually humour or modesty." },
        { who: "Host", line: "Why is it so difficult for language learners?" },
        { who: "Linguist", line: "Because implicature depends on cultural norms as well as language. How direct people are, what counts as polite, how much irony is acceptable: these vary enormously. A phrase like quite good can mean very good in one variety of English and only moderately good in another. Advanced learners need to read not just the words but the room." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "According to Grice, we assume speakers are cooperative.", a: true },
            { s: "When people break expectations, we assume they're being random.", a: false },
            { s: "The answer about ties suggests the manager is excellent.", a: false },
            { s: "Understatement often carries humour or modesty.", a: true },
            { s: "Implicature works the same way in every culture.", a: false }
          ]
        },
        {
          type: "match", title: "What's implied?",
          prompt: "Match each example from the talk with its implied meaning.",
          pairs: [
            ["He always wears very nice ties.", "There's nothing better to say about him."],
            ["It was a bit windy. (after a hurricane)", "humour or modesty"],
            ["quite good (in some varieties)", "very good"],
            ["reading the room", "understanding cultural and social context"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a humorous guide to interpreting polite English.",
      title: "What they say, what they mean",
      text: [
        { body: "A few years ago, an internet table titled *What the British say, what they mean, what others understand* went viral. Its success was hardly surprising. Almost everyone who has worked in an international team has, at some point, left a meeting convinced that it went well, only to discover later that their proposal had been politely rejected." },
        { body: "Consider the phrase *I'll bear it in mind*. To a speaker of a more direct culture, it sounds like a promise to consider the idea seriously. To many British speakers, it is a courteous way of closing the topic forever. Similarly, *with the greatest respect* almost never introduces respect; it typically signals that the speaker is about to say something rather cutting." },
        { body: "It would be unfair, however, to treat this as a peculiarly British habit. Indirectness exists in every language. What varies is how much of it is expected, and in which situations. In some cultures, refusing an invitation directly is considered rude, so people say *maybe* or *I'll try*, and everyone understands. The problem arises when listeners and speakers apply different rules without realizing it." },
        { body: "The solution is not to memorize lists of hidden meanings, entertaining as they may be. It is to develop sensitivity to context: who is speaking, what they have to gain or lose, and what they are noticeably *not* saying. Often, the silence around a sentence tells us far more than the sentence itself." }
      ],
      activities: [
        {
          type: "sort", title: "What they say vs what they mean",
          prompt: "Sort the phrases: are they what is said, or what is often meant?",
          bins: ["what is said", "what is often meant"],
          items: [
            { text: "I'll bear it in mind.", bin: 0 }, { text: "With the greatest respect,", bin: 0 }, { text: "Maybe, I'll try.", bin: 0 },
            { text: "I won't consider it.", bin: 1 }, { text: "I strongly disagree.", bin: 1 }, { text: "I probably won't come.", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The writer thinks indirectness is a uniquely British habit.", a: false },
            { s: "Problems arise when people apply different rules without realizing it.", a: true },
            { s: "The writer recommends memorizing lists of hidden meanings.", a: false },
            { s: "What people don't say can be very informative.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice interpreting and producing implied meanings, then write an analysis.",
      activities: [
        {
          type: "rewrite", title: "Say it with understatement",
          prompt: "Rewrite each sentence using understatement or litotes with the words in brackets.",
          items: [
            { q: "The hotel was terrible. (hardly)", a: ["The hotel was hardly ideal.", "The hotel was hardly the best."] },
            { q: "Her performance was excellent. (not bad)", a: ["Her performance wasn't bad at all.", "Her performance was not bad at all."] },
            { q: "This is a very common problem. (uncommon)", a: ["This is not an uncommon problem.", "This isn't an uncommon problem.", "This problem is not uncommon."] },
            { q: "Winning the award was a huge achievement. (small)", a: ["Winning the award was no small achievement."] }
          ]
        },
        {
          type: "match", title: "Hints",
          prompt: "Match each hint with the request it implies.",
          pairs: [
            ["It's getting rather late, isn't it?", "Please leave."],
            ["Is anyone else feeling hungry?", "Let's stop for lunch."],
            ["I can't quite see the screen from here.", "Please move."],
            ["My glass seems to be empty.", "Please give me another drink."],
            ["Has anyone seen the report I asked for?", "Where is my report?"]
          ]
        },
        {
          type: "write", title: "Read between the lines",
          prompt: "Write a short analytical text (250–300 words) for a blog about intercultural communication. Describe a real or imagined misunderstanding caused by implied meaning (a hint not understood, a refusal taken as a yes, understatement taken literally). Explain what was said, what was meant, why the misunderstanding happened, and what we can learn from it.",
          minWords: 250, maxWords: 300,
          model: "When my friend Iván moved to Manchester to do a PhD, he was delighted by how friendly everyone seemed. During his first week, a colleague called Sarah said, \"You must come round for dinner sometime.\" Iván, who comes from a culture where such invitations are meant literally, waited patiently for her to suggest a date. Two weeks later, he asked her which evening would suit her. Sarah looked genuinely startled before agreeing to an awkward meal the following Friday.<br>What had gone wrong? For Sarah, \"You must come round sometime\" was not an invitation but a friendly expression of goodwill, rather like saying \"Nice to meet you.\" Its vagueness was the clue: a real invitation would have included a time and a place. Iván, however, interpreted the words literally, assuming that people say what they mean.<br>A few months later, the opposite happened. Iván's supervisor described his first draft as \"not without its merits, but perhaps a little ambitious in places.\" Iván was devastated, assuming his work had been rejected. In fact, by the supervisor's standards, this was a fairly positive evaluation: the draft was promising but needed focus.<br>Both misunderstandings stemmed from the same source. English, particularly in Britain, relies heavily on understatement and indirectness, and the real message is often carried by what is missing: a missing date, a missing compliment, a missing \"yes\".<br>The lesson is not that one style is better than the other. It is that, when we communicate across cultures, we need to listen not only to the words but to the gaps between them, and, when in doubt, it is perfectly acceptable to ask politely what someone means.",
          bank: ["What was said was…", "What was meant was…", "interpreted the words literally", "Its vagueness was the clue", "not without its merits", "by… standards", "stemmed from", "the real message is carried by…", "the gaps between them"],
          checklist: [
            "I described **what was said** and **what was meant**.",
            "I explained **why** the misunderstanding happened.",
            "I used vocabulary such as **imply**, **infer**, **literally**, **understatement**.",
            "I ended with a **lesson** or reflection."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Tone of voice is part of the meaning.",
          items: [
            "That's very brave of you.",
            "I'll bear it in mind.",
            "It's not without its merits.",
            "The timing is hardly ideal.",
            "It's a bit cold in here, isn't it?",
            "That's no small achievement."
          ]
        },
        {
          type: "speak", title: "What did they really mean?",
          prompt: "Record yourself for about four minutes. **Part 1:** Explain what each of these really means in context, and how the tone could change it: *1) Your boss reads your report and says, \"Well, it's certainly long.\" 2) A friend says, \"I might come to your party, it depends.\" 3) After your cooking, a guest says, \"It's very… interesting.\"* **Part 2:** Describe a time you misunderstood, or someone misunderstood you, because of an implied meaning.",
          language: ["What they're implying is…", "Read literally, it means…, but…", "The tone suggests…", "It's a veiled criticism", "It's a polite way of saying no", "I took it literally", "I didn't pick up on the hint", "Looking back, I should have read the room"],
          seconds: 270,
          checklist: ["explain all three situations?", "mention how tone changes meaning?", "describe a personal example?", "use vocabulary like imply, infer and hint?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can infer meanings that are implied but not stated.", review: "Explanation: implicature; Listening" },
    { can: "I can understand and use understatement and litotes.", review: "Explanation: understatement and litotes; Writing activity 1" },
    { can: "I can recognize indirect refusals and veiled criticism.", review: "Explanation: indirect refusals and criticism" },
    { can: "I can recognize hints and indirect requests.", review: "Writing activity 2" },
    { can: "I can explain how culture and context affect meaning.", review: "Reading activities" },
    { can: "I can analyse misunderstandings caused by implied meaning.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
