window.UNIT = {
  slug: "headline-news",
  number: 29,
  title: "Headline News",
  level: "C2",
  minutes: 90,
  speakers: { "Andrea": "f", "Luis": "m", "Host": "m", "Subeditor": "f" },
  focus: ["headline grammar: present simple for past events, infinitive for the future, omitted articles and auxiliaries", "headline vocabulary: bid, slam, probe, axe, clash, vow", "ambiguity in headlines: noun stacks and double meanings", "wordplay and puns in headlines", "expanding headlines into full sentences"],

  presentation: {
    scene: "📰🗞️✂️😂",
    situation: "Andrea and Luis are reading the news on their phones over breakfast. Luis is struggling with some of the headlines.",
    warmup: {
      prompt: "Where do you usually read the news? Choose all that apply.",
      options: ["news websites", "social media", "printed newspapers", "TV", "radio", "podcasts", "news apps", "email newsletters", "messaging groups", "video platforms", "friends and family", "I avoid the news"],
      response: "Headlines are a genre of their own, with special grammar and vocabulary designed to fit a lot of meaning into very few words. Sometimes, this creates confusion, or comedy."
    },
    dialogueTitle: "Decoding the headlines",
    dialogue: [
      { who: "Luis", line: "*PM SLAMS BANK BOSSES OVER PAY.* Who slammed what?" },
      { who: "Andrea", line: "The Prime Minister *has strongly criticized* the directors of the banks about their salaries. *Slam* just means *criticize* in headlines." },
      { who: "Luis", line: "OK. *MINISTER TO QUIT.* Has he quit?" },
      { who: "Andrea", line: "Not yet. The infinitive means the future: he *is going to* resign." },
      { who: "Luis", line: "*POLICE PROBE BAKERY FIRE.* What's a probe?" },
      { who: "Andrea", line: "An investigation. The police *are investigating* a fire at a bakery." },
      { who: "Luis", line: "And this one: *SQUAD HELPS DOG BITE VICTIM.* Did a squad help a dog bite someone?" },
      { who: "Andrea", line: "Ha! That's the problem with headlines. It means a team helped a person who had been bitten by a dog. Headline writers love saving words, even if it creates the occasional *howler*." }
    ]
  },

  objectives: [
    "I can understand the special grammar of headlines.",
    "I can recognize typical headline vocabulary and its everyday equivalents.",
    "I can identify ambiguity and wordplay in headlines.",
    "I can write effective headlines and expand them into full sentences."
  ],

  explanation: {
    vocabTitle: "Headline vocabulary",
    vocab: [
      { word: "bid = attempt", icon: "🎯" }, { word: "slam = criticize", icon: "💥" }, { word: "probe = investigation", icon: "🔍" },
      { word: "axe = cut / cancel", icon: "🪓" }, { word: "clash = fight / disagree", icon: "⚔️" }, { word: "vow = promise", icon: "🤞" },
      { word: "quit = resign", icon: "🚪" }, { word: "row = argument", icon: "🗯️" }, { word: "back = support", icon: "👍" },
      { word: "curb = limit", icon: "🛑" }, { word: "hike = increase", icon: "📈" }, { word: "blaze = fire", icon: "🔥" },
      { word: "spark = cause", icon: "✨" }, { word: "oust = remove from power", icon: "👢" }, { word: "boost = increase / help", icon: "🚀" }
    ],
    grammar: [
      {
        title: "Headline grammar",
        head: ["Feature", "Headline", "Full sentence"],
        rows: [
          ["present simple for past events", "*STORM HITS COAST*", "*A storm has hit / hit the coast.*"],
          ["infinitive for the future", "*PRESIDENT TO VISIT CHINA*", "*The president is going to visit China.*"],
          ["past participle for passive", "*SIX HURT IN CRASH*", "*Six people were hurt in a crash.*"],
          ["no articles or auxiliaries", "*BANK BOSS ARRESTED*", "*The boss of a bank has been arrested.*"],
          ["-ing for ongoing events", "*PRICES STILL RISING*", "*Prices are still rising.*"],
          ["noun stacks", "*CITY HOSPITAL STAFF PAY ROW*", "*an argument about the pay of staff at the city hospital*"],
          ["colon for quotations / sources", "*SURVEY: TEENS SLEEP LESS*", "*A survey shows teenagers sleep less.*"]
        ]
      },
      {
        title: "Ambiguity and wordplay",
        intro: "Because headlines omit words, they can be ambiguous, sometimes accidentally. Headline writers also use deliberate wordplay to attract attention.",
        head: ["Headline", "Intended meaning", "Other reading"],
        rows: [
          ["*SQUAD HELPS DOG BITE VICTIM*", "a team helped a person bitten by a dog", "a team helped a dog bite someone"],
          ["*KIDS MAKE NUTRITIOUS SNACKS*", "children prepare healthy snacks", "children are healthy snacks"],
          ["*MINERS REFUSE TO WORK AFTER DEATH*", "after a colleague's death", "after their own death"],
          ["*BAKERS RISE TO THE CHALLENGE* (pun)", "bakers meet the challenge", "bread rises"],
          ["*TIME FLIES AS CLOCK MUSEUM OPENS* (pun)", "time passes quickly", "the museum is about time"]
        ],
        note: "A deliberate double meaning is a **pun**. An accidental, funny ambiguity is sometimes called a **howler** or a **crash blossom**."
      }
    ],
    watchOut: [
      ["MINISTER TO QUIT → The minister has quit.", "The minister *is going to* quit."],
      ["SIX HURT IN CRASH → Six people hurt someone.", "Six people *were hurt* in a crash."],
      ["PM BACKS PLAN → The PM went back to the plan.", "The PM *supports* the plan."],
      ["FUEL PRICE HIKE → People hiked in the mountains.", "There has been an *increase* in fuel prices."]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match each headline with its meaning.",
      pairs: [
        ["MAYOR TO AXE BUS ROUTES", "The mayor is going to cut bus routes."],
        ["PROBE INTO HOSPITAL DEATHS", "There is an investigation into deaths at a hospital."],
        ["STAR VOWS TO FIGHT ON", "A celebrity promises to keep fighting."],
        ["BID TO CURB SMOKING", "An attempt to limit smoking."],
        ["ROW OVER NEW AIRPORT", "An argument about a new airport."]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a subeditor, the person who writes newspaper headlines, talking about her job.",
      title: "The art of the headline",
      script: [
        { who: "Host", line: "Most readers never think about who writes the headlines. What does a subeditor actually do?" },
        { who: "Subeditor", line: "We check the articles, cut them to fit the page and, yes, write the headlines. Journalists rarely write their own. A good headline has to summarize the story, fit an exact space and make people want to read it, often in five or six words." },
        { who: "Host", line: "That sounds incredibly difficult." },
        { who: "Subeditor", line: "It is. That's why headline English developed its own vocabulary. Words like bid, probe, row and slam are short, punchy and fit narrow columns. Nobody says I'm going to probe this in conversation, but in a headline it saves several letters." },
        { who: "Host", line: "And puns?" },
        { who: "Subeditor", line: "Puns are the fun part. Tabloid papers especially love them. A story about a cheese factory might be headlined something like A GRATE SUCCESS. Readers groan, but they remember it. The danger is that a clever pun can hide what the story's actually about, so in serious news we use them much less." },
        { who: "Host", line: "Have you ever written a headline that went wrong?" },
        { who: "Subeditor", line: "Once, early in my career, I wrote a headline that could be read two ways, and the second way was rather rude. It made it into print, and the paper received hundreds of letters. Since then I always read every headline aloud before it goes out, and I ask a colleague to read it too. Online, the problem is different: headlines need to work for search engines, so they're often longer and more literal." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Journalists usually write their own headlines.", a: false },
            { s: "Headline words like probe are common in everyday conversation.", a: false },
            { s: "Puns are used less in serious news.", a: true },
            { s: "The subeditor now reads headlines aloud before publication.", a: true },
            { s: "Online headlines tend to be shorter and less literal.", a: false }
          ]
        },
        {
          type: "match", title: "A subeditor's job",
          prompt: "Match each challenge with the subeditor's explanation.",
          pairs: [
            ["space", "fit narrow columns with short words"],
            ["puns", "memorable, but can hide the story"],
            ["ambiguity", "read aloud and ask a colleague"],
            ["online headlines", "need to work for search engines"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short article about famously ambiguous headlines.",
      title: "When headlines go wrong",
      text: [
        { body: "In 2009, a headline in a British newspaper read *Violinist linked to JAL crash blossoms*. The intended meaning was that a violinist connected to a plane crash was having a successful career; *blossoms* was a verb. Most readers, however, paused in confusion, wondering what a *crash blossom* might be. An online discussion group adopted the phrase, and *crash blossom* has since become the informal term for a headline that can be read in an unintended way." },
        { body: "Such headlines are almost inevitable given the conventions of the genre. When articles, auxiliaries and prepositions are removed, words that can function as both nouns and verbs, such as *plans*, *rises*, *cuts* or *fears*, become dangerously flexible. *Government plans cuts* is clear enough; *Police plan raises fears* is less so. Is the police plan raising fears, or are the police planning to raise fears?" },
        { body: "Some crash blossoms are simply amusing. Others can damage a newspaper's reputation or, worse, mislead readers about serious events. For this reason, many editors now insist that headlines be tested by a second reader, and some publications have abandoned the most compressed forms of headline English altogether." },
        { body: "For language learners, crash blossoms are a useful reminder that understanding English is not merely a matter of knowing words, but of knowing how grammar distributes meaning among them. A headline is, in effect, a puzzle in which the reader must reconstruct everything the writer left out." }
      ],
      activities: [
        {
          type: "sort", title: "Noun or verb?",
          prompt: "Words like *plans*, *cuts*, *rises* and *fears* can be nouns or verbs. Decide what the word in bold is in each headline.",
          bins: ["noun", "verb"],
          items: [
            { text: "Government **plans** cuts", bin: 1 }, { text: "Government plans **cuts**", bin: 0 },
            { text: "**Fears** grow over jobs", bin: 0 }, { text: "Rent **rises** again", bin: 1 },
            { text: "Rent **rises** spark protest", bin: 0 }, { text: "Mayor **cuts** budget", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read the article again. True or false?",
          items: [
            { s: "In the 2009 headline, blossoms was intended as a verb.", a: true },
            { s: "Crash blossom is now a term for ambiguous headlines.", a: true },
            { s: "Words that can be nouns or verbs reduce ambiguity.", a: false },
            { s: "Some publications have stopped using very compressed headlines.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice expanding and writing headlines, then write a short news story.",
      activities: [
        {
          type: "rewrite", title: "Expand the headline",
          prompt: "Rewrite each headline as a full sentence.",
          items: [
            { q: "PRESIDENT TO VISIT JAPAN", a: ["The president is going to visit Japan.", "The president is to visit Japan.", "The president will visit Japan."] },
            { q: "TEN INJURED IN BUS CRASH", a: ["Ten people were injured in a bus crash.", "Ten people have been injured in a bus crash."] },
            { q: "MAYOR BACKS PLAN TO CURB TRAFFIC", a: ["The mayor supports a plan to limit traffic.", "The mayor supports a plan to reduce traffic.", "The mayor has backed a plan to limit traffic."] },
            { q: "STUDENTS SLAM FEE HIKE", a: ["Students have strongly criticized the increase in fees.", "Students strongly criticize the fee increase.", "Students have criticized the increase in fees.", "Students criticize the increase in fees."] }
          ]
        },
        {
          type: "rewrite", title: "Write the headline",
          prompt: "Write a headline (4–6 words, capitals not necessary) for each sentence. Use headline vocabulary.",
          items: [
            { q: "The police are investigating a fire at a school.", a: ["Police probe school fire", "Police probe school blaze", "Police probe fire at school", "Police probe blaze at school"] },
            { q: "The company is going to cut 500 jobs.", a: ["Company to axe 500 jobs", "Firm to axe 500 jobs", "Company to cut 500 jobs"] },
            { q: "The minister has promised to reduce crime.", a: ["Minister vows to cut crime", "Minister vows to curb crime", "Minister vows to reduce crime"] }
          ]
        },
        {
          type: "write", title: "Front page",
          prompt: "Write **three** short news stories (80–100 words each, 250–300 words in total) for the front page of a local news website. Each story needs a **headline** in headline English, followed by a first paragraph that expands the information in full, standard English. Include at least one headline with a deliberate pun.",
          minWords: 250, maxWords: 300,
          model: "MAYOR TO AXE NIGHT BUSES<br>The mayor of Puebla has announced plans to cut all night bus services from January, in a bid to reduce the city's transport deficit. The decision, which is expected to save around twelve million pesos a year, has been strongly criticized by hospital and restaurant workers, many of whom rely on the buses to get home after late shifts. Opposition councillors have called for a public consultation and vowed to fight the proposal when it is presented to the city council next month.<br><br>POLICE PROBE MARKET BLAZE<br>Police are investigating the cause of a fire that destroyed more than forty stalls at a popular market in the city centre early on Tuesday morning. Firefighters battled the blaze for almost four hours before bringing it under control. No one was injured, but traders estimate their losses at several million pesos. Investigators have not ruled out arson, and the market's management has urged anyone with information to contact the authorities.<br><br>LOCAL BAKERS RISE TO THE CHALLENGE<br>A team of three young bakers from the San Francisco neighbourhood has won first prize at a national competition for traditional bread, beating more than two hundred entries from across the country. Their winning creation, a pan de muerto filled with chocolate and chile, was praised by judges for combining tradition and innovation. The bakers say they will use the prize money to open a training workshop for young people in their neighbourhood.",
          bank: ["TO + verb (future)", "past participle (passive)", "axe / probe / vow / bid / blaze", "in a bid to…", "has been strongly criticized", "vowed to…", "Investigators have not ruled out…", "a pun: RISE TO THE CHALLENGE"],
          checklist: [
            "Each story has a headline in **headline English**.",
            "Each first paragraph expands the headline in **full sentences**.",
            "I used at least **four** headline words (axe, probe, vow, bid…).",
            "At least one headline contains a deliberate **pun**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat each headline, then its meaning.",
          items: [
            "The minister is going to resign.",
            "Police are investigating a bakery fire.",
            "The mayor is going to cut bus routes.",
            "There's been a row over the airport.",
            "Students have criticized the fee increase.",
            "Headlines can be read two ways."
          ]
        },
        {
          type: "speak", title: "News bulletin",
          prompt: "Record a two-part news bulletin (about four minutes). **Part 1:** Choose four real or imagined headlines in headline English. For each one, read the headline and then explain the story in full sentences, as a radio presenter would. **Part 2:** Explain the grammar of one of your headlines and comment on whether headline English helps or confuses readers.",
          language: ["Our top story today:…", "In other news,…", "Police are investigating…", "The government has announced plans to…", "… has strongly criticized…", "… has vowed to…", "In this headline, the infinitive means…", "That's all for today."],
          seconds: 270,
          checklist: ["present four headlines?", "expand each one into full sentences?", "explain the grammar of at least one headline?", "give your opinion on headline English?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand the special grammar of headlines.", review: "Explanation: headline grammar; Writing activity 1" },
    { can: "I can recognize headline vocabulary like bid, probe and slam.", review: "Explanation: headline vocabulary; Quick check" },
    { can: "I can identify ambiguity and puns in headlines.", review: "Explanation: ambiguity and wordplay; Reading" },
    { can: "I can write headlines in headline English.", review: "Writing activity 2" },
    { can: "I can understand how professionals write headlines.", review: "Listening activities" },
    { can: "I can write and present news stories with headlines.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
