window.UNIT = {
  slug: "telling-tales",
  number: 24,
  title: "Telling Tales",
  level: "C1",
  minutes: 80,
  speakers: { "Carla": "f", "Beto": "m", "Host": "f", "Comedian": "m" },
  focus: ["the narrative present: So I'm standing there, and this guy comes up to me…", "vague language: sort of, kind of, or something, and stuff like that, -ish", "showing interest as a listener: No way! You're kidding! Then what?", "building suspense: Anyway, to cut a long story short,…, And then, out of nowhere,…", "exaggeration and emphasis: I literally died, a million times, absolutely"],

  presentation: {
    scene: "🗣️😂🎒✈️",
    situation: "Carla and Beto are at a party. Carla is telling Beto about something that happened to her at an airport last summer.",
    warmup: {
      prompt: "What kind of stories do you enjoy telling? Choose all that apply.",
      options: ["embarrassing moments", "travel disasters", "lucky escapes", "funny misunderstandings", "strange coincidences", "childhood memories", "first dates", "job interviews", "family events", "meeting someone famous", "getting lost", "a bad day"],
      response: "Telling a good anecdote is an art. In this unit you'll learn how fluent speakers make stories vivid, funny and engaging, and how listeners keep them going."
    },
    dialogueTitle: "The airport story",
    dialogue: [
      { who: "Carla", line: "OK, *so* last summer *I'm* at the airport in Cancún, *right*? And my flight's at six-*ish*." },
      { who: "Beto", line: "Uh-huh." },
      { who: "Carla", line: "*So I'm sitting* there, *kind of* half asleep, and this woman *comes up* to me and *asks* if I can watch her bag for five minutes." },
      { who: "Beto", line: "*Oh no.* You didn't, did you?" },
      { who: "Carla", line: "I did! And then, *out of nowhere*, three security guards *appear* and *start* asking me questions *and stuff*." },
      { who: "Beto", line: "*No way!* What was in the bag?" },
      { who: "Carla", line: "*Well*, *to cut a long story short*, it was full of mangoes. Like, *forty mangoes or something*. Totally illegal to take on the plane, apparently." },
      { who: "Beto", line: "*You're kidding!* *And then what?*" },
      { who: "Carla", line: "*Anyway*, she *never came back*, I *missed* my flight, and I *literally* ate mangoes for a week. I'm never doing *that* again." }
    ]
  },

  objectives: [
    "I can tell an anecdote using the narrative present for vividness.",
    "I can use vague language naturally in informal speech.",
    "I can show interest and encourage the speaker as a listener.",
    "I can structure an anecdote to build suspense and deliver a punchline."
  ],

  explanation: {
    vocabTitle: "Storytelling expressions",
    vocab: [
      { word: "You'll never guess what happened.", icon: "😲" }, { word: "So, there I was…", icon: "📍" }, { word: "out of nowhere", icon: "💥" },
      { word: "all of a sudden", icon: "⚡" }, { word: "to cut a long story short", icon: "✂️" }, { word: "Anyway,…", icon: "↩️" },
      { word: "As it turned out,…", icon: "🔄" }, { word: "The funny thing is,…", icon: "😂" }, { word: "I couldn't believe my eyes.", icon: "👀" },
      { word: "No way!", icon: "🙅" }, { word: "You're kidding!", icon: "😜" }, { word: "And then what?", icon: "❓" },
      { word: "That's hilarious!", icon: "🤣" }, { word: "What a nightmare!", icon: "😱" }, { word: "I'd have died!", icon: "💀" }
    ],
    grammar: [
      {
        title: "The narrative present",
        intro: "In informal storytelling, speakers often switch to the **present simple and continuous** to make the action feel immediate, especially at the most dramatic moments.",
        head: ["Past (neutral)", "Narrative present (vivid)"],
        rows: [
          ["*I was sitting at the airport.*", "*So I'm sitting at the airport…*"],
          ["*A woman came up to me and asked…*", "*…and this woman comes up to me and asks…*"],
          ["*Three guards appeared.*", "*…three guards appear out of nowhere!*"],
          ["*He said, \"What's in the bag?\"*", "*…and he goes, \"What's in the bag?\"*"]
        ],
        note: "*This* is often used instead of *a* to introduce a new person or thing: *this woman, this guy, this huge dog*. In very informal speech, *go* and *be like* replace *say*."
      },
      {
        title: "Vague language",
        head: ["Expression", "Use", "Example"],
        rows: [
          ["*sort of / kind of*", "softening, approximate", "*I was kind of half asleep.*"],
          ["*-ish*", "approximately (time, age, colour)", "*at six-ish, she was fortyish*"],
          ["*or something / or so*", "not exact", "*forty mangoes or something; an hour or so*"],
          ["*and stuff / and things like that*", "ending a list", "*asking questions and stuff*"],
          ["*a bunch of / loads of*", "a large number (informal)", "*loads of people*"],
          ["*whatsit / thingy*", "a word you can't remember", "*Pass me the thingy.*"]
        ]
      },
      {
        title: "Active listening",
        head: ["Function", "Language"],
        rows: [
          ["surprise", "*No way! / You're kidding! / Seriously?*"],
          ["sympathy", "*Oh no! / What a nightmare! / You poor thing!*"],
          ["encouragement", "*And then what? / So what did you do? / Go on…*"],
          ["reaction", "*That's hilarious! / I'd have died! / I don't believe it!*"]
        ]
      }
    ],
    watchOut: [
      ["So I was sit there and this woman come to me.", "So I'm sitting there, and this woman *comes* up to me."],
      ["(Listener says nothing for two minutes.)", "*Uh-huh… No way! And then what?*"],
      ["(In a formal report) We bought loads of stuff and things.", "(In a formal report) We purchased *a range of materials*."],
      ["It was at 6 o'clock-ish o'clock.", "It was at *six-ish*."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "So I'm standing there, and [[this]] guy comes up to me.",
        "We waited for an hour [[or]] so.",
        "My flight was at seven-[[ish]].",
        "To cut a long [[story]] short, we missed the train.",
        "\"Then what?\" \"Well, out of [[nowhere]], the lights went out.\""
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a stand-up comedian explaining what makes a good story.",
      title: "The anatomy of an anecdote",
      script: [
        { who: "Host", line: "You tell stories for a living. What's the secret?" },
        { who: "Comedian", line: "Honestly? Cutting. Most people tell stories that are way too long. They give you the whole background, what they had for breakfast, the name of their cousin's dog. Nobody cares. Start as close to the interesting part as you can." },
        { who: "Host", line: "So how do you start?" },
        { who: "Comedian", line: "With a hook. Something like You'll never guess who I saw on the bus. Immediately people want to know. Then you set the scene, quickly: where you were, who was there. Two or three sentences, max." },
        { who: "Host", line: "And then?" },
        { who: "Comedian", line: "Then you build. You slow down, add details, and that's often where I switch to the present tense: So I'm standing there, and this guy turns around. It puts the audience right there with you. And just before the big moment, pause. Silence is your best friend." },
        { who: "Host", line: "What about the ending?" },
        { who: "Comedian", line: "Get out fast. The punchline, a quick reaction, done. The worst thing you can do is explain the joke. And one more thing: listen to how your friends react. If they say And then what?, you're doing great. If they check their phones, you're doing something wrong." }
      ],
      activities: [
        {
          type: "sort", title: "Do or don't?",
          prompt: "Sort the comedian's advice.",
          bins: ["do", "don't"],
          items: [
            { text: "start close to the interesting part", bin: 0 }, { text: "begin with a hook", bin: 0 }, { text: "pause before the big moment", bin: 0 }, { text: "end quickly after the punchline", bin: 0 },
            { text: "give lots of background", bin: 1 }, { text: "explain the joke", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again and decide.",
          items: [
            { s: "The comedian says most stories are too short.", a: false },
            { s: "He often switches to the present tense when building the story.", a: true },
            { s: "He thinks silence should be avoided.", a: false },
            { s: "Listeners asking And then what? is a good sign.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a transcript of a story told on a podcast. Notice the features of spoken narrative.",
      title: "The wrong wedding",
      text: [
        { body: "So this is a few years ago, right? My cousin's getting married in Oaxaca, and I'm, like, really late, because my bus broke down halfway there or something. Anyway, I get to the church, I run in, and the ceremony's already started. So I sort of slide into the back row, very quietly, and I'm sitting there, kind of out of breath, trying to look like I've been there the whole time." },
        { body: "And the funny thing is, I don't recognize anyone. Not one person. I'm thinking, OK, it's the groom's side, they're all from his family, fine. Then the priest says the bride's name, and it's not my cousin's name. It's, like, completely different." },
        { body: "So now I'm panicking, right? Because I'm in the middle of a row, and there's no way out without everyone seeing me. And just at that moment, this old lady next to me turns around, smiles, and goes, *Which side are you from, dear?*" },
        { body: "To cut a long story short, I stayed for the whole ceremony. And the reception. And, honestly, it was one of the best parties I've ever been to. My cousin's wedding was in the other church, two blocks away. She still hasn't forgiven me." }
      ],
      activities: [
        {
          type: "match", title: "Features of the story",
          prompt: "Match each extract with the feature it shows.",
          pairs: [
            ["…halfway there or something.", "vague language"],
            ["I get to the church, I run in…", "the narrative present"],
            ["…this old lady next to me turns around…", "this to introduce a new person"],
            ["…smiles, and goes, Which side are you from?", "go meaning say"],
            ["To cut a long story short,…", "moving quickly to the end"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The speaker arrived at the church early.", a: false },
            { s: "The speaker realized the mistake when the priest said the bride's name.", a: true },
            { s: "The speaker left the wrong wedding immediately.", a: false },
            { s: "The speaker's cousin still isn't happy about it.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the features of spoken narrative, then script your own anecdote.",
      activities: [
        {
          type: "rewrite", title: "Make it vivid",
          prompt: "Rewrite each sentence in the narrative present. Start with *So*.",
          items: [
            { q: "I was waiting for the bus, and a man came up to me.", a: ["So I'm waiting for the bus, and a man comes up to me.", "So I'm waiting for the bus, and this man comes up to me."] },
            { q: "She opened the door and screamed.", a: ["So she opens the door and screams."] },
            { q: "We were walking home, and it started to rain.", a: ["So we're walking home, and it starts to rain."] }
          ]
        },
        {
          type: "gap", title: "Keep it vague",
          prompt: "Add vague language to make the story sound natural.",
          bank: ["sort of", "or so", "-ish", "and stuff", "or something", "loads of"],
          items: [
            "There were [[loads of]] people at the party.",
            "We got there at ten[[-ish]].",
            "He was [[sort of]] annoyed, but he didn't say anything.",
            "We waited for twenty minutes [[or so]].",
            "They were selling T-shirts, posters [[and stuff]].",
            "His name was Rodrigo [[or something]]."
          ]
        },
        {
          type: "write", title: "Script your anecdote",
          prompt: "Write the script of an anecdote (220–260 words) as you would **tell** it to friends: a funny, embarrassing, strange or lucky experience. Start with a hook, set the scene quickly, build the tension using the narrative present, include vague language and a pause before the punchline, and end quickly. Include at least two listener reactions in brackets, e.g. *(No way!)*.",
          minWords: 220, maxWords: 260,
          model: "You'll never guess what happened to me at my first job interview. (What?) OK, so this is about five years ago, right? I've just finished university, and I've got an interview at this really posh law firm in Polanco.<br>So I get up super early, I put on my one good suit, and I'm feeling kind of confident. Then, on the metro, this guy next to me spills an entire cup of coffee all over my shirt. All over it. (Oh no!) And I've got, like, twenty minutes or so before the interview.<br>So I'm running around the streets looking for a shop, any shop, and the only place open is this tiny market stall selling football shirts and stuff. I've got no choice, right? So I buy the only shirt in my size. It's bright yellow. With a huge number ten on the back. (No way!)<br>Anyway, I get to the office, I put my jacket on over it, and I think, OK, if I keep the jacket on, nobody will notice. And the interview's going really well, actually. And then, at the end, the senior partner stands up, shakes my hand and says, very seriously, \"Before you go... could you take off your jacket?\" (You're kidding!)<br>I'm thinking, this is it, it's over. So I take it off. And he looks at the shirt for, like, ten seconds, and then he bursts out laughing and says, \"Same team as me. You're hired.\"<br>Best coffee accident of my life.",
          bank: ["You'll never guess what happened.", "So this is…, right?", "this guy / this woman", "kind of / sort of", "or so / -ish", "And then, out of nowhere,…", "Anyway,…", "(No way!) (You're kidding!)"],
          checklist: [
            "I started with a **hook**.",
            "I used the **narrative present** when building tension.",
            "I used **vague language** naturally.",
            "I included **listener reactions** and a quick **ending**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat with lively, natural intonation.",
          items: [
            "You'll never guess what happened.",
            "So I'm sitting there, half asleep.",
            "And then, out of nowhere, they appear.",
            "To cut a long story short, I missed it.",
            "No way! And then what?",
            "It was forty mangoes or something."
          ]
        },
        {
          type: "speak", title: "Tell your anecdote",
          prompt: "Record yourself telling your anecdote from Writing activity 3, or a new one (about three minutes). Don't read it: **tell** it, as if you were with friends. Use the narrative present, vague language, a pause before the punchline and a quick ending.",
          language: ["You'll never guess…", "So, there I was…", "this guy / this woman", "and he goes,…", "kind of / sort of / or something", "And then, out of nowhere,…", "To cut a long story short,…", "The funny thing is,…"],
          seconds: 210,
          checklist: ["start with a hook?", "use the narrative present?", "use vague language naturally?", "pause before the punchline and end quickly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the narrative present to make a story vivid.", review: "Explanation: the narrative present; Writing activity 1" },
    { can: "I can use vague language like sort of, -ish and or something.", review: "Explanation: vague language; Writing activity 2" },
    { can: "I can show interest and encourage a speaker.", review: "Explanation: active listening" },
    { can: "I can structure an anecdote with a hook, build-up and punchline.", review: "Listening activities" },
    { can: "I can recognize the features of natural spoken narrative.", review: "Reading activities" },
    { can: "I can tell an engaging anecdote in English.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
