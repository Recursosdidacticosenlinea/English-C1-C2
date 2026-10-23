window.UNIT = {
  slug: "the-opinion-column",
  number: 35,
  title: "The Opinion Column",
  level: "C2",
  minutes: 95,
  speakers: { "Claire": "f", "Andrés": "m", "Host": "f", "Columnist": "m" },
  focus: ["cohesion: reference (this, such, the former / the latter), substitution and ellipsis", "signposting an argument: Let me be clear, The point is this, Consider…", "voice and stance: irony, rhetorical questions, personal anecdote", "anticipating objections: Some will say…, To which I would reply…", "endings: the twist, the return, the call to action"],

  presentation: {
    scene: "🗞️✒️🔥💬",
    situation: "Claire is a columnist for a national newspaper. She is discussing her next column with her editor, Andrés, who thinks her draft is well argued but lacks personality.",
    warmup: {
      prompt: "Which of these would you most like to read an opinion column about? Choose all that apply.",
      options: ["homework", "tipping", "school uniforms", "working from home", "tourism", "online dating", "nostalgia", "public transport", "celebrity culture", "four-day weeks", "children and phones", "voting at 16"],
      response: "An opinion column is persuasive writing with a personality. In this unit you'll learn how columnists build a strong voice and a tightly connected argument."
    },
    dialogueTitle: "Finding your voice",
    dialogue: [
      { who: "Andrés", line: "Your argument against homework is solid, but it reads like a report. Where are *you* in it?" },
      { who: "Claire", line: "I thought columns should be objective." },
      { who: "Andrés", line: "Fair, but not neutral. Readers want a voice. Start with a moment: your son at eleven p.m., crying over fractions." },
      { who: "Claire", line: "OK. And then I present the research?" },
      { who: "Andrés", line: "Yes, but connect it. You repeat *homework* in every sentence. Use *this*, *such tasks*, *the former*. Let the ideas flow." },
      { who: "Claire", line: "And the people who'll say homework builds discipline?" },
      { who: "Andrés", line: "Meet them head-on. *Some will say that homework teaches discipline. Perhaps. But…* That's more powerful than ignoring them." },
      { who: "Claire", line: "And the ending? I've just summarized everything." },
      { who: "Andrés", line: "Go back to your son. Last line: he's asleep by nine, and his fractions are no worse for it." }
    ]
  },

  objectives: [
    "I can use reference, substitution and ellipsis to make a text cohesive.",
    "I can signpost an argument clearly for the reader.",
    "I can develop a distinctive voice and anticipate objections.",
    "I can write a persuasive, well-crafted opinion column."
  ],

  explanation: {
    vocabTitle: "The columnist's toolkit",
    vocab: [
      { word: "a column", icon: "🗞️" }, { word: "a columnist", icon: "✒️" }, { word: "an op-ed", icon: "📰" },
      { word: "voice", icon: "🎙️" }, { word: "a hot take", icon: "🔥" }, { word: "contrarian", icon: "↩️" },
      { word: "a straw man", icon: "🌾" }, { word: "head-on", icon: "🐏" }, { word: "make the case for", icon: "💼" },
      { word: "cohesion", icon: "🧵" }, { word: "signposting", icon: "🪧" }, { word: "a throughline", icon: "➰" },
      { word: "a kicker (final line)", icon: "🥾" }, { word: "polemical", icon: "⚔️" }, { word: "tongue-in-cheek", icon: "😏" }
    ],
    grammar: [
      {
        title: "Cohesion: reference, substitution and ellipsis",
        intro: "Cohesive texts avoid repetition by referring back to ideas already mentioned.",
        head: ["Device", "Example"],
        rows: [
          ["*this / that / these* + summarizing noun", "*Children now spend two hours a night on homework. **This trend** is worrying.*"],
          ["*such* + noun", "*Such tasks rarely improve learning.*"],
          ["*the former / the latter*", "*Some favour homework, others oppose it; the latter are growing in number.*"],
          ["*do so / do the same*", "*Finland reduced homework; other countries should do the same.*"],
          ["*one / ones*", "*The best schools are the ones that trust their teachers.*"],
          ["ellipsis", "*Some teachers set homework daily; others, rarely.*"]
        ]
      },
      {
        title: "Signposting and anticipating objections",
        head: ["Function", "Language"],
        rows: [
          ["stating your position", "*Let me be clear: … / My argument is simple. / Here is the uncomfortable truth.*"],
          ["introducing evidence", "*Consider the evidence. / Take, for example,… / The numbers are striking.*"],
          ["anticipating objections", "*Some will say that… / Critics will object that… / Now, you might argue…*"],
          ["answering objections", "*Perhaps. But… / To which I would reply… / That may be true, but it misses the point.*"],
          ["returning to the main point", "*Which brings me back to… / The point is this:…*"]
        ]
      },
      {
        title: "Voice and endings",
        head: ["Technique", "Example"],
        rows: [
          ["personal anecdote", "*At eleven o'clock last Tuesday, my son was still crying over fractions.*"],
          ["controlled irony", "*Nothing says childhood like four hours of worksheets.*"],
          ["rhetorical question", "*Is this really the best use of a ten-year-old's evening?*"],
          ["the return (ending)", "*He's asleep by nine now. His fractions are no worse for it.*"],
          ["call to action (ending)", "*Ask your child's school one question: what is this homework for?*"]
        ],
        note: "Avoid the **straw man**: misrepresenting the opposing view to make it easier to attack. Strong columns present the best version of the other side."
      }
    ],
    watchOut: [
      ["Homework is bad. Homework is stressful. Homework doesn't help.", "Homework is stressful, and *such tasks* rarely help. *This* matters because…"],
      ["The former and the latter (with three items)", "*the former / the latter* = only for **two** items"],
      ["Everyone who disagrees just hates children.", "*Some will argue that homework builds discipline.* (fair version)"],
      ["In conclusion, homework is bad, as I have said.", "*He's asleep by nine now. His fractions are no worse for it.*"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "Children spend hours on homework every night. [[This|Such]] situation is unsustainable.",
        "Some parents support homework; others oppose it. The [[latter]] argue it causes stress.",
        "Several countries have banned homework for young children, and we should do [[so]] too.",
        "Some will [[say|argue]] that homework teaches discipline.",
        "That may be true, but it misses the [[point]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a veteran columnist talking about his craft.",
      title: "Writing with conviction",
      script: [
        { who: "Host", line: "You've written a weekly column for twenty years. What makes a column work?" },
        { who: "Columnist", line: "One idea. Just one. Young writers try to say everything they think about a subject in eight hundred words, and the result is a list. A column is an argument with a single throughline, and everything in it should serve that line." },
        { who: "Host", line: "How do you make readers care?" },
        { who: "Columnist", line: "You give them a person or a moment before you give them a statistic. Numbers persuade the head, but stories open the door. Then, once they're inside, you show them the evidence. Readers can tell when you're manipulating them, so the evidence has to be real." },
        { who: "Host", line: "What about opposing views?" },
        { who: "Columnist", line: "That's where most columns fail. It's tempting to attack the silliest version of the other side. It feels good, but it convinces nobody who doesn't already agree with you. I try to present the opposing argument so fairly that its supporters would recognize it, and then explain why I still disagree. That's what earns trust." },
        { who: "Host", line: "And the ending?" },
        { who: "Columnist", line: "The ending is what people remember, so I often write it first. The best endings return to the opening image with new meaning, or leave the reader with a question that won't go away. What they should never do is summarize. If your reader needs a summary of eight hundred words, you've already lost them." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The columnist advises including as many ideas as possible.", a: false },
            { s: "He often starts with a person or a moment.", a: true },
            { s: "He thinks evidence is unnecessary if the story is good.", a: false },
            { s: "He tries to present opposing arguments fairly.", a: true },
            { s: "He recommends ending with a summary.", a: false }
          ]
        },
        {
          type: "match", title: "His advice",
          prompt: "Match each element of a column with his advice.",
          pairs: [
            ["the idea", "one throughline that everything serves"],
            ["the opening", "a person or a moment before statistics"],
            ["opposing views", "present them so fairly their supporters would agree"],
            ["the ending", "return to the opening image or leave a question"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a model opinion column. Notice the cohesion and the voice.",
      title: "Let them be bored",
      text: [
        { body: "Last Sunday afternoon, my nine-year-old daughter announced, with the gravity of a judge delivering a sentence, that she was bored. I reached instinctively for a solution: a tablet, a board game, a craft kit. Then I stopped. What, I wondered, would happen if I did nothing?" },
        { body: "What happened was this. For twenty minutes, she complained. For the next two hours, she built an elaborate city out of cardboard boxes, complete with a hospital, a library and a surprisingly well-funded zoo. I had not seen her so absorbed in months." },
        { body: "This should not have surprised me. Psychologists have argued for years that boredom is not the enemy of childhood but one of its engines. When children are not entertained, they are forced to entertain themselves, and such moments are often where imagination begins. Yet we have filled every spare minute of our children's lives with screens, classes and organized activities, as if an empty afternoon were a parenting failure." },
        { body: "Some will say this is easy for parents with time and space to spare, and they have a point. Not every family can afford to leave a child to their own devices on a Sunday afternoon, nor does every home have room for a cardboard city. But the solution to that inequality is not more screens; it is more parks, more libraries, more safe streets where children can do what children have always done." },
        { body: "My daughter's city is still standing in the corner of the living room. It has, I'm told, recently elected a mayor. I have not been invited to the ceremony. Apparently, I'm not bored enough." }
      ],
      activities: [
        {
          type: "match", title: "Techniques in the column",
          prompt: "Match each extract with the technique it shows.",
          pairs: [
            ["…with the gravity of a judge delivering a sentence…", "humour and irony"],
            ["This should not have surprised me.", "cohesive reference to the previous paragraph"],
            ["…such moments are often where imagination begins.", "cohesion with such"],
            ["Some will say this is easy for parents with time…", "anticipating an objection"],
            ["Apparently, I'm not bored enough.", "a memorable final line that returns to the start"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The writer immediately gave her daughter a tablet.", a: false },
            { s: "The daughter complained for two hours.", a: false },
            { s: "The writer accepts that the objection has some validity.", a: true },
            { s: "The writer's solution to inequality is more public spaces.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice cohesion and voice, then write your own opinion column.",
      activities: [
        {
          type: "rewrite", title: "Avoid repetition",
          prompt: "Rewrite the second sentence, replacing the repeated words with the reference word in brackets.",
          items: [
            { q: "Many cities are banning cars from the centre. Banning cars from the centre reduces pollution. (This)", a: ["This reduces pollution.", "This measure reduces pollution.", "This policy reduces pollution."] },
            { q: "Some people prefer trains; others prefer planes. The people who prefer planes say they're faster. (The latter)", a: ["The latter say they're faster.", "The latter say they are faster."] },
            { q: "Finland reduced homework. Other countries should reduce homework too. (do the same)", a: ["Other countries should do the same."] }
          ]
        },
        {
          type: "sort", title: "Fair or straw man?",
          prompt: "Is each sentence a fair presentation of the opposing view, or a straw man?",
          bins: ["fair", "straw man"],
          items: [
            { text: "Some argue that homework helps children develop study habits.", bin: 0 }, { text: "Critics will point out that tourism creates jobs.", bin: 0 }, { text: "Supporters of the plan say it will reduce traffic.", bin: 0 },
            { text: "People who like homework obviously hate children.", bin: 1 }, { text: "Anyone who supports tourism wants to destroy our city.", bin: 1 }, { text: "Its supporters simply don't care about the poor.", bin: 1 }
          ]
        },
        {
          type: "write", title: "Your column",
          prompt: "Write an opinion column (280–340 words) for a national newspaper on a topic you feel strongly about (you can choose one from the warm-up). Begin with a personal moment or image, state one clear argument, support it with evidence, present and answer the strongest objection fairly, and end with a memorable final line. Make the text cohesive and give it a clear voice.",
          minWords: 280, maxWords: 340,
          model: "In Praise of the Slow Bus<br>Every morning at 7:15, I take the number 32 bus to work. It is slow, it is crowded and, at least twice a week, it stops for no apparent reason outside a shop that sells wedding dresses. It is also, I have come to believe, one of the most important places in my city.<br>Let me be clear: I am not romanticizing bad public transport. Our buses need more investment, more frequent services and drivers who are paid properly. But the current debate has become strangely narrow. Every proposal I read, whether for a new motorway, a private shuttle or an app that summons a car to your door, assumes that the only thing that matters about a journey is its speed.<br>Consider what that assumption leaves out. On the 32, a retired teacher helps a teenager with her algebra. A man selling sweets tells the same joke every morning, and every morning someone laughs. Such encounters cannot be measured in minutes saved, yet they are precisely what a city is for: strangers sharing space, briefly and peacefully.<br>Some will say that this is a luxury that busy workers can't afford, and they have a point. A two-hour commute is not charming; it is exhausting, and it falls hardest on those who earn the least. But the answer to that is better buses, not fewer of them. Every family that abandons public transport for a private car makes the streets more congested, the air dirtier and the remaining buses slower, which, in turn, pushes more people into cars. It is a cycle we have been riding for decades.<br>The point is this: a city that gives up on its buses gives up on the idea that rich and poor, young and old, might occasionally sit side by side.<br>This morning, the 32 stopped outside the wedding shop again. Nobody knows why. Nobody, I noticed, seemed to mind.",
          bank: ["Let me be clear:", "Consider what that assumption leaves out.", "Such encounters…", "Some will say that…, and they have a point.", "But the answer to that is…", "which, in turn,…", "The point is this:", "a final line that returns to the opening"],
          checklist: [
            "I opened with a **personal moment** or image.",
            "I argued **one clear idea** with evidence.",
            "I presented and answered the **strongest objection** fairly.",
            "My text is **cohesive** and ends with a **memorable line**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat with conviction.",
          items: [
            "Let me be clear about this.",
            "Consider the evidence for a moment.",
            "Some will say that it builds discipline.",
            "Perhaps. But that misses the point.",
            "Such moments are where imagination begins.",
            "The point is this."
          ]
        },
        {
          type: "speak", title: "The spoken column",
          prompt: "Record a spoken opinion piece (about four minutes) for a radio programme, as a columnist would deliver it. Use the column you wrote or a new topic. Begin with a personal moment, state your argument, give evidence, answer an objection fairly, and end with a memorable final line. Speak with conviction and a clear personal voice.",
          language: ["Last week, I…", "Let me be clear:…", "Consider…", "Take, for example,…", "Some will say that…", "Perhaps. But…", "Which brings me back to…", "The point is this:…"],
          seconds: 270,
          checklist: ["begin with a personal moment?", "argue one clear idea?", "answer an objection fairly?", "end with a memorable line?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use reference words like this, such and the latter to link ideas.", review: "Explanation: cohesion; Writing activity 1" },
    { can: "I can use substitution and ellipsis to avoid repetition.", review: "Explanation: cohesion" },
    { can: "I can signpost an argument and anticipate objections.", review: "Explanation: signposting and anticipating objections" },
    { can: "I can present opposing views fairly, avoiding straw men.", review: "Explanation: note; Writing activity 2" },
    { can: "I can analyse the techniques of a skilled columnist.", review: "Listening and Reading activities" },
    { can: "I can write and deliver a persuasive column with a clear voice.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
