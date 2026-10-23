window.UNIT = {
  slug: "mind-games",
  number: 4,
  title: "Mind Games",
  level: "C1",
  minutes: 80,
  speakers: { "Fernanda": "f", "Diego": "m", "Host": "m", "Magician": "f" },
  focus: ["it-clefts: It was only when… that, It wasn't until… that", "wh-clefts with do: What he did was (to) leave", "all-clefts: All I wanted was…", "the reason why… is that / the thing that…", "fronting for emphasis: Strange though it may seem,…"],

  presentation: {
    scene: "🎩🃏🧠✨",
    situation: "Fernanda and Diego have just watched a street magician perform a card trick. Diego is convinced he knows how it was done.",
    warmup: {
      prompt: "Which of these do you find most fascinating? Choose all that apply.",
      options: ["magic tricks", "optical illusions", "memory techniques", "hypnosis", "puzzles", "riddles", "escape rooms", "mind-reading acts", "chess", "detective stories", "déjà vu", "lucid dreams"],
      response: "Our minds are surprisingly easy to fool. In this unit you'll learn cleft sentences and fronting, which let you highlight exactly the information you want."
    },
    dialogueTitle: "How did she do it?",
    dialogue: [
      { who: "Fernanda", line: "I still can't believe it. My card was in her shoe!" },
      { who: "Diego", line: "*What she did was* distract you. *It was when* she asked you to look at the sky *that* she switched the cards." },
      { who: "Fernanda", line: "But I was watching her hands the whole time." },
      { who: "Diego", line: "*That's exactly what* she wanted you to do. *The thing that* most people forget is that the real trick happens before you even pick a card." },
      { who: "Fernanda", line: "So, *what you're saying is* she knew which card I'd choose?" },
      { who: "Diego", line: "Probably. *It's the way* she spread the cards *that* matters. She makes one card easier to take." },
      { who: "Fernanda", line: "*All I know is* that it was brilliant. *Strange though it may seem*, I don't want to know the secret." },
      { who: "Diego", line: "*It wasn't until* I read a book on magic *that* I understood any of this. And now I can't enjoy a single trick." }
    ]
  },

  objectives: [
    "I can use it-clefts, including It wasn't until… that, to focus on key information.",
    "I can use wh-clefts and all-clefts, including What… did was.",
    "I can use fronting structures for emphasis in speech and writing.",
    "I can explain how attention and perception can be manipulated."
  ],

  explanation: {
    vocabTitle: "Perception and deception",
    vocab: [
      { word: "sleight of hand", icon: "🖐️" }, { word: "misdirection", icon: "👉" }, { word: "an optical illusion", icon: "👁️" },
      { word: "selective attention", icon: "🔦" }, { word: "fool someone", icon: "🤡" }, { word: "fall for it", icon: "🎣" },
      { word: "see through it", icon: "🔍" }, { word: "pull off a trick", icon: "🎩" }, { word: "baffling", icon: "😵" },
      { word: "gullible", icon: "🐑" }, { word: "sceptical", icon: "🤨" }, { word: "a blind spot", icon: "🙈" },
      { word: "cognitive bias", icon: "🧠" }, { word: "manipulate", icon: "🕹️" }, { word: "give the game away", icon: "🗝️" }
    ],
    grammar: [
      {
        title: "It-clefts",
        intro: "An it-cleft splits a sentence to put **one part in focus**: *It is / was + focus + that / who + rest of sentence*.",
        head: ["Neutral", "Cleft (focus in bold)"],
        rows: [
          ["*She switched the cards when you looked up.*", "*It was **when you looked up** that she switched the cards.*"],
          ["*The spread of the cards matters.*", "*It's **the way she spreads the cards** that matters.*"],
          ["*I only understood it after reading the book.*", "*It **wasn't until I read the book** that I understood it.*"],
          ["*I noticed only when she smiled.*", "*It was **only when she smiled** that I noticed.*"]
        ],
        note: "*It wasn't until… that* is very common at C1: *It wasn't until midnight that we finished.*"
      },
      {
        title: "Wh-clefts and all-clefts",
        head: ["Structure", "Example"],
        rows: [
          ["*What* + clause + *is / was* + focus", "*What I need is a holiday.*"],
          ["*What* + subject + *do / did* + *is / was* + (to) infinitive", "*What she did was (to) distract you.*"],
          ["*What happened was (that)* + clause", "*What happened was that the lights went out.*"],
          ["*All* + clause + *is / was* + focus (= the only thing)", "*All I know is that it was brilliant.*"],
          ["*The thing / reason / place / person + (that)…*", "*The reason (why) I left is that I was bored.*"]
        ]
      },
      {
        title: "Fronting for emphasis",
        head: ["Structure", "Example"],
        rows: [
          ["adjective + *though / as* + subject + verb", "*Strange though it may seem, I enjoyed it.*"],
          ["object fronted", "*That trick I will never forget.*"],
          ["*Much as* + clause (= although very)", "*Much as I admire her, I don't trust her.*"],
          ["*Try as* + subject + *might*", "*Try as I might, I couldn't see the switch.*"]
        ]
      }
    ],
    watchOut: [
      ["It was until midnight that we finished.", "It *wasn't* until midnight that we finished."],
      ["What she did was she distracted you.", "What she did was *(to) distract* you."],
      ["All what I want is sleep.", "All *(that)* I want is sleep."],
      ["The reason is because I was tired.", "The reason is *that* I was tired."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each cleft sentence with one word.",
      items: [
        "It wasn't [[until]] the next day that I realized what had happened.",
        "What she [[did]] was distract you with a question.",
        "[[All]] I wanted was a quiet evening at home.",
        "It was Diego [[who|that]] guessed the secret first.",
        "Strange [[though|as]] it may seem, I prefer not to know."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a magician explaining the psychology behind her tricks.",
      title: "The art of misdirection",
      script: [
        { who: "Host", line: "People assume magic is all about fast hands. Is it?" },
        { who: "Magician", line: "Not really. What magic is really about is attention. Our brains can only focus on a tiny part of what we see, and what I do is decide which part that will be." },
        { who: "Host", line: "How do you control where people look?" },
        { who: "Magician", line: "Mostly with my own eyes. Audiences look where the performer looks. It's when I look at the audience, not at my hands, that I can do almost anything with my hands. Humour helps too. It's during a laugh that people relax their attention." },
        { who: "Host", line: "Do scientists study this?" },
        { who: "Magician", line: "Increasingly, yes. It wasn't until the last twenty years or so that neuroscientists took magicians seriously. Now there's a whole field studying what we do, because what we exploit is exactly how perception works in everyday life." },
        { who: "Host", line: "For example?" },
        { who: "Magician", line: "Think of the famous gorilla experiment, where people counting basketball passes completely miss a person in a gorilla suit. What that shows is that we don't see the world; we see what we're paying attention to. All a magician does is make that gap visible, and, ideally, entertaining." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The magician says magic is mainly about fast hands.", a: false },
            { s: "Audiences tend to look where the performer looks.", a: true },
            { s: "People pay more attention when they are laughing.", a: false },
            { s: "Neuroscientists have always taken magicians seriously.", a: false },
            { s: "In the gorilla experiment, many people missed the gorilla.", a: true }
          ]
        },
        {
          type: "match", title: "Complete the clefts",
          prompt: "Match the beginnings and endings from the interview.",
          pairs: [
            ["What magic is really about", "is attention."],
            ["It's during a laugh", "that people relax their attention."],
            ["It wasn't until the last twenty years", "that neuroscientists took magicians seriously."],
            ["All a magician does", "is make that gap visible."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a popular science article about a surprising experiment on choice.",
      title: "Choice blindness",
      text: [
        { body: "In an experiment conducted in Sweden, researchers showed volunteers pairs of photographs of faces and asked them to choose the more attractive one. The researcher then handed over the chosen photograph and asked the volunteer to explain their choice. What the volunteers didn't know was that, in some trials, the researcher had secretly swapped the cards using a simple magic trick." },
        { body: "Astonishingly, most people failed to notice the switch. What is even more remarkable is what they did next: they happily explained why they had chosen a face they had in fact rejected. *I like her earrings*, one said, although the woman he had actually chosen wore none. It was this willingness to justify a choice they had never made that gave the phenomenon its name: *choice blindness*." },
        { body: "Later studies extended the method to jam, tea and even political opinions. In one, participants filled in a survey on moral issues, and the researchers reversed some of their answers. When asked to explain these answers, many participants argued convincingly for positions that were the opposite of what they had originally stated." },
        { body: "Unsettling though these results may be, they reveal something important. It is not the case that we first decide and then explain. Often, what we call our reasons are stories we construct after the event. All of this suggests that we should hold our certainties a little more lightly, and perhaps be more patient with people who change their minds." }
      ],
      activities: [
        {
          type: "sort", title: "What happened?",
          prompt: "Sort the statements: what did the researchers do, and what did the participants do?",
          bins: ["the researchers", "the participants"],
          items: [
            { text: "swapped the photographs secretly", bin: 0 }, { text: "reversed some survey answers", bin: 0 }, { text: "used a magic trick", bin: 0 },
            { text: "failed to notice the switch", bin: 1 }, { text: "justified choices they hadn't made", bin: 1 }, { text: "argued for opposite positions", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Focus on the key idea",
          prompt: "Rewrite each sentence as a cleft, starting with the words given.",
          items: [
            { q: "The volunteers didn't know about the swap. (What…)", a: ["What the volunteers didn't know about was the swap.", "What the volunteers did not know about was the swap."] },
            { q: "Their willingness to justify the choice surprised researchers. (It was…)", a: ["It was their willingness to justify the choice that surprised researchers.", "It was their willingness to justify the choice that surprised the researchers."] },
            { q: "The researchers only used a simple magic trick. (All…)", a: ["All the researchers used was a simple magic trick.", "All that the researchers used was a simple magic trick."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice clefts and fronting, then write a short explanatory text.",
      activities: [
        {
          type: "rewrite", title: "It wasn't until…",
          prompt: "Rewrite each sentence with *It wasn't until… that…*",
          items: [
            { q: "I only realized the truth when I got home.", a: ["It wasn't until I got home that I realized the truth."] },
            { q: "We only finished the project in March.", a: ["It wasn't until March that we finished the project."] },
            { q: "She only started painting after she retired.", a: ["It wasn't until she retired that she started painting.", "It wasn't until after she retired that she started painting."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What she did was distract the audience." },
            { a: "All I know is that it worked." },
            { a: "Try as I might, I couldn't see it." },
            { a: "It's the way she smiles that matters." }
          ]
        },
        {
          type: "write", title: "How it works",
          prompt: "Write an explanatory text (220–260 words) for a science website about **one** way our perception or memory can be fooled (for example, optical illusions, false memories, misdirection or advertising tricks). Use at least **four** cleft sentences and **one** fronting structure.",
          minWords: 220, maxWords: 260,
          model: "Most of us trust our memories. We assume that what we remember is a faithful recording of what actually happened. What research shows, however, is that memory is far more like a story we rewrite each time we tell it.<br>It was in the 1970s that psychologists first demonstrated how easily memories can be altered. In one classic study, people watched a film of a car accident and were then asked how fast the cars were going when they either hit or smashed into each other. What changed was just one word, yet those who heard smashed estimated higher speeds. A week later, many of them even remembered seeing broken glass, although there had been none.<br>What happens in cases like this is that new information blends with the original memory. All it takes is a suggestive question, a photograph or a conversation with someone who remembers events differently. It is not that we lie; it is that our brains fill in gaps automatically, and they do so with whatever material is available.<br>The consequences can be serious. Eyewitness testimony has sent innocent people to prison, and it wasn't until DNA evidence became widely available that many of these mistakes came to light.<br>Unsettling though this may sound, there is a positive side. Because memory is flexible, it allows us to update our understanding of the past. The thing to remember, then, is that confidence is not the same as accuracy.",
          bank: ["What research shows is…", "It was… that…", "What happens is that…", "All it takes is…", "It wasn't until… that…", "The thing to remember is…", "Strange though it may seem,…", "Much as…"],
          checklist: [
            "I explained **one** phenomenon clearly.",
            "I gave an **example** or a study.",
            "I used at least **four** cleft sentences.",
            "I used at least **one** fronting structure."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Stress the word in focus.",
          items: [
            "What she did was distract you.",
            "It wasn't until midnight that we finished.",
            "All I know is that it worked.",
            "It's the way she smiles that matters.",
            "Strange though it may seem, I enjoyed it.",
            "Try as I might, I couldn't see it."
          ]
        },
        {
          type: "speak", title: "Fooled!",
          prompt: "Record yourself for about three minutes. Tell the story of a time you were fooled or surprised: a magic trick, a prank, a misunderstanding or an advertisement. Explain what happened, what you didn't notice, and what you learned. Use clefts to highlight the key moments.",
          language: ["What happened was that…", "It wasn't until… that I realized…", "What I didn't notice was…", "All I could think was…", "The thing that surprised me most was…", "Strange though it may seem,…", "Try as I might,…", "I completely fell for it"],
          seconds: 210,
          checklist: ["tell the story clearly from start to finish?", "use at least three cleft sentences?", "use It wasn't until… that…?", "reflect on what you learned?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use it-clefts to focus on a person, time or reason.", review: "Explanation: it-clefts" },
    { can: "I can use It wasn't until… that… correctly.", review: "Explanation: it-clefts (note); Writing activity 1" },
    { can: "I can use wh-clefts, including What… did was.", review: "Explanation: wh-clefts and all-clefts" },
    { can: "I can use fronting structures like Strange though it may seem.", review: "Explanation: fronting for emphasis; Writing activity 2" },
    { can: "I can understand articles and talks about perception and psychology.", review: "Listening and Reading activities" },
    { can: "I can tell a story and explain a phenomenon, highlighting key information.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
