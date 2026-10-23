window.UNIT = {
  slug: "money-talks",
  number: 13,
  title: "Money Talks",
  level: "C1",
  minutes: 80,
  speakers: { "Tania": "f", "Nico": "m", "Host": "f", "Economist": "m" },
  focus: ["modifying comparatives: considerably, marginally, a great deal, far", "nowhere near as / not nearly as… as, every bit as… as", "superlatives: by far the, far and away the, easily the", "the + comparative, the + comparative: The more you earn, the more you spend", "money idioms: make ends meet, tighten your belt, splash out"],

  presentation: {
    scene: "💰🏦📉🛍️",
    situation: "Tania has just moved out of her parents' house and is trying to live on her first salary. Her brother Nico, who studies economics, offers some advice.",
    warmup: {
      prompt: "What do you spend most of your money on? Choose all that apply.",
      options: ["rent", "food", "transport", "clothes", "eating out", "streaming services", "phone", "books", "travel", "gifts", "concerts", "savings"],
      response: "Talking about money often means comparing: prices, salaries, options. In this unit you'll learn to make comparisons with precision."
    },
    dialogueTitle: "Making ends meet",
    dialogue: [
      { who: "Tania", line: "I don't understand. I earn *considerably more* than I did as an intern, but I've got *far less* money at the end of the month." },
      { who: "Nico", line: "That's lifestyle inflation. *The more* you earn, *the more* you spend. Where's it all going?" },
      { who: "Tania", line: "Rent, mostly. It's *by far the biggest* expense. My flat is *nowhere near as* cheap as I thought it would be." },
      { who: "Nico", line: "And eating out? You post a photo of a restaurant every night." },
      { who: "Tania", line: "OK, that's *marginally more* than I'd like. But cooking is *every bit as* expensive when you live alone." },
      { who: "Nico", line: "It really isn't. Cooking at home is *easily the simplest* way to save. You'd need to *tighten your belt* for a few months." },
      { who: "Tania", line: "I just want to *splash out* now and then." },
      { who: "Nico", line: "Of course. But *the sooner* you start saving, *the easier* it gets. Even ten per cent makes *a great deal of* difference." }
    ]
  },

  objectives: [
    "I can modify comparatives to show how big a difference is.",
    "I can use nowhere near as… as and every bit as… as.",
    "I can use the… the… structure to describe how two things change together.",
    "I can discuss personal finances and economic choices."
  ],

  explanation: {
    vocabTitle: "Money idioms and expressions",
    vocab: [
      { word: "make ends meet", icon: "🪢" }, { word: "tighten your belt", icon: "🧷" }, { word: "splash out (on)", icon: "💦" },
      { word: "live beyond your means", icon: "📉" }, { word: "cost an arm and a leg", icon: "🦵" }, { word: "a rip-off", icon: "🏴‍☠️" },
      { word: "a bargain", icon: "🏷️" }, { word: "be strapped for cash", icon: "🪙" }, { word: "save for a rainy day", icon: "🌧️" },
      { word: "break the bank", icon: "🏦" }, { word: "be in the red", icon: "🔴" }, { word: "lifestyle inflation", icon: "🎈" },
      { word: "disposable income", icon: "💳" }, { word: "the cost of living", icon: "🛒" }, { word: "budget", icon: "📒" }
    ],
    grammar: [
      {
        title: "Modifying comparatives",
        head: ["Size of difference", "Modifiers", "Example"],
        rows: [
          ["big", "*far, much, a great deal, considerably, significantly, a lot*", "*Rent is considerably higher in the centre.*"],
          ["small", "*slightly, marginally, a little, a bit*", "*Prices are marginally lower this year.*"],
          ["none", "*no (+ comparative)*", "*The new plan is no cheaper than the old one.*"],
          ["with nouns", "*far more / fewer / less, many more, much more*", "*There are far fewer jobs than before.*"]
        ]
      },
      {
        title: "as… as structures",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*nowhere near as / not nearly as… as*", "much less", "*My flat is nowhere near as big as yours.*"],
          ["*not quite as… as*", "a little less", "*It's not quite as expensive as I expected.*"],
          ["*every bit as… as*", "equally (emphatic)", "*Cooking is every bit as fun as eating out.*"],
          ["*twice / three times as… as*", "multiplied", "*Rent here is twice as high as in my town.*"],
          ["*just as… as*", "exactly equal", "*The second-hand one is just as good.*"]
        ]
      },
      {
        title: "Superlatives and double comparatives",
        head: ["Structure", "Example"],
        rows: [
          ["*by far / far and away / easily* + superlative", "*Rent is by far the biggest expense.*"],
          ["*one of the* + superlative + plural noun", "*It's one of the most expensive cities in the world.*"],
          ["*the + comparative…, the + comparative…*", "*The more you earn, the more you spend.*"],
          ["short form", "*The sooner, the better.*"],
          ["*comparative + and + comparative*", "*Prices are getting higher and higher.*"]
        ]
      }
    ],
    watchOut: [
      ["It's very more expensive.", "It's *much / far* more expensive."],
      ["My flat is nowhere near big as yours.", "My flat is nowhere near *as* big as yours."],
      ["More you save, more you have.", "*The* more you save, *the* more you have."],
      ["It's by far the more expensive option of the three.", "It's by far the *most* expensive option of the three."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with one word.",
      items: [
        "Rent is [[far|much|considerably|significantly]] higher in the capital than in my town.",
        "This phone is nowhere [[near]] as good as the advert claims.",
        "The more you earn, [[the]] more you spend.",
        "Housing is by [[far]] the biggest expense for young people.",
        "The second-hand bike is every [[bit]] as good as a new one."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an economist talking about why young people find it hard to save.",
      title: "Generation broke?",
      script: [
        { who: "Host", line: "Young adults today are often described as worse with money than previous generations. Is that fair?" },
        { who: "Economist", line: "Not really. In many countries, young people are actually spending far less on things like cars and alcohol than their parents did. The problem is that their essential costs are considerably higher." },
        { who: "Host", line: "Housing, mainly?" },
        { who: "Economist", line: "By far the biggest factor, yes. In many cities, rent takes up nearly half of a young person's income. A generation ago, it was nowhere near as high, often closer to a quarter. So the amount left for saving is much smaller." },
        { who: "Host", line: "What about the idea that they waste money on coffee and avocado toast?" },
        { who: "Economist", line: "It's a nice headline, but the numbers don't add up. Even if you gave up coffee completely, it would take you decades to save a deposit for a house. Small savings matter, but they're nowhere near enough to compensate for structural costs." },
        { who: "Host", line: "So what can young people do?" },
        { who: "Economist", line: "Start early, even with small amounts. The longer your money is invested, the more it grows, thanks to compound interest. Someone who saves a little from the age of twenty-five will often end up with significantly more than someone who saves twice as much from the age of forty." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Young people spend more on cars than their parents did.", a: false },
            { s: "Housing is the biggest factor affecting young people's savings.", a: true },
            { s: "A generation ago, rent took about half of a young person's income.", a: false },
            { s: "The economist thinks giving up coffee solves the problem.", a: false },
            { s: "Starting to save early is very important because of compound interest.", a: true }
          ]
        },
        {
          type: "gap", title: "Complete the comparisons",
          prompt: "Complete what the economist said with one word.",
          items: [
            "Their essential costs are [[considerably]] higher.",
            "By [[far]] the biggest factor, yes.",
            "It was [[nowhere]] near as high.",
            "The [[longer]] your money is invested, the more it grows."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article comparing two approaches to personal finance.",
      title: "Frugal or free?",
      text: [
        { body: "Few topics divide personal-finance writers as sharply as frugality. On one side are the minimalists, who argue that the less you own, the freer you are. They cook every meal, buy second-hand clothes and treat any purchase over a few hundred pesos as a decision requiring a week's reflection. Some of them retire in their forties, having saved well over half of their income for two decades." },
        { body: "On the other side are those who argue that extreme frugality is nowhere near as liberating as it sounds. Constantly calculating the cost of every coffee, they say, is every bit as stressful as being in debt. They point out that the strategy works far better for people with high salaries: saving half of a large income still leaves plenty to live on, whereas saving half of a modest one may be simply impossible." },
        { body: "The research suggests the truth lies somewhere in between. Studies of happiness and spending find that money spent on experiences and on other people tends to bring considerably more satisfaction than money spent on possessions. Meanwhile, having even a small emergency fund is one of the strongest predictors of financial well-being, far more so than the size of one's salary." },
        { body: "The most sensible approach, then, may be to cut back sharply on the things you do not truly value, and to spend without guilt on the few things you do. As one writer puts it, the goal is not to spend as little as possible, but to spend as consciously as possible." }
      ],
      activities: [
        {
          type: "sort", title: "Who says what?",
          prompt: "Sort the ideas: do they belong to the minimalists, their critics, or the research?",
          bins: ["minimalists", "critics", "research"],
          items: [
            { text: "the less you own, the freer you are", bin: 0 }, { text: "treat big purchases as major decisions", bin: 0 },
            { text: "calculating every cost is stressful", bin: 1 }, { text: "it works better for high earners", bin: 1 },
            { text: "experiences bring more satisfaction than things", bin: 2 }, { text: "an emergency fund predicts well-being", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Some minimalists retire in their forties.", a: true },
            { s: "Critics say frugality works equally well for everyone.", a: false },
            { s: "Salary size predicts financial well-being better than an emergency fund.", a: false },
            { s: "The writer recommends spending consciously.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice precise comparisons, then write a comparative article.",
      activities: [
        {
          type: "rewrite", title: "Say it precisely",
          prompt: "Rewrite each sentence using the words in brackets.",
          items: [
            { q: "My flat is much smaller than yours. (nowhere near)", a: ["My flat is nowhere near as big as yours.", "My flat is nowhere near as large as yours."] },
            { q: "If you start saving earlier, it's easier. (The… the…)", a: ["The earlier you start saving, the easier it is.", "The earlier you start saving, the easier it gets.", "The sooner you start saving, the easier it is.", "The sooner you start saving, the easier it gets."] },
            { q: "No other expense is as big as rent. (by far)", a: ["Rent is by far the biggest expense.", "Rent is by far the largest expense."] },
            { q: "Second-hand clothes are equally good. (every bit)", a: ["Second-hand clothes are every bit as good.", "Second-hand clothes are every bit as good as new ones."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "The more you earn, the more you spend." },
            { a: "Rent is twice as high as before." },
            { a: "It's no cheaper than the old one." },
            { a: "Prices are getting higher and higher." }
          ]
        },
        {
          type: "write", title: "Then and now",
          prompt: "Write an article (220–260 words) for a student website comparing the cost of living for young people today with the situation of their parents' generation (or comparing two cities you know). Include housing, food, transport and leisure. Use at least **six** different comparative structures from this unit.",
          minWords: 220, maxWords: 260,
          model: "When my parents moved to Puebla in the 1990s, they rented a two-bedroom flat for a fraction of what I now pay for a single room. Comparing our experiences has made me realize how much the cost of living for young people has changed.<br>Housing is by far the biggest difference. My parents spent roughly a quarter of their salaries on rent, whereas many of my friends spend nearly half. As a result, buying a home, which my parents did at twenty-eight, now seems nowhere near as achievable for my generation.<br>Food, on the other hand, is not quite as different as you might expect. Supermarket prices have risen, but so have the options: we can buy far more variety than our parents could. Eating out, however, is considerably more expensive, and the more we rely on delivery apps, the more we spend.<br>Transport presents a mixed picture. Public transport is marginally better than it was, but owning a car is significantly more expensive, which explains why far fewer of my friends drive.<br>Interestingly, leisure is the one area where my generation may be better off. Streaming, free online courses and cheap flights mean we have access to a great deal more entertainment and travel than our parents had at our age.<br>Overall, young people today are every bit as hard-working as previous generations. The real problem is that the essentials cost much more, leaving far less for saving and planning for the future.",
          bank: ["by far the biggest", "nowhere near as…", "not quite as… as", "considerably more", "the more…, the more…", "marginally better", "far fewer", "every bit as… as"],
          checklist: [
            "I compared at least **four** areas of life.",
            "I used at least **six** different comparative structures.",
            "I used **modifiers** to show the size of differences.",
            "My conclusion **summarizes** the overall comparison."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the weak form of *as* (/əz/).",
          items: [
            "The more you earn, the more you spend.",
            "Rent is by far the biggest expense.",
            "It's nowhere near as cheap as I thought.",
            "Cooking is every bit as expensive.",
            "The sooner you start, the easier it gets.",
            "I need to tighten my belt."
          ]
        },
        {
          type: "speak", title: "Money choices",
          prompt: "Record yourself for about three minutes. Compare **two** of these options and say which you would choose and why: *renting vs buying a home; owning a car vs using public transport and apps; spending on experiences vs saving for the future.* Use precise comparisons.",
          language: ["considerably / marginally more…", "nowhere near as… as", "every bit as… as", "by far the…", "The more…, the more…", "It costs an arm and a leg", "In the long run,…", "On balance, I'd choose… because…"],
          seconds: 210,
          checklist: ["compare two options clearly?", "use modifiers like considerably or marginally?", "use at least one as… as structure?", "use the… the… structure?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can modify comparatives with far, considerably and marginally.", review: "Explanation: modifying comparatives" },
    { can: "I can use nowhere near as… as and every bit as… as.", review: "Explanation: as… as structures; Writing activity 1" },
    { can: "I can use by far and far and away with superlatives.", review: "Explanation: superlatives and double comparatives" },
    { can: "I can use the… the… to describe connected changes.", review: "Explanation: double comparatives; Writing activity 2" },
    { can: "I can follow arguments about personal finance and economics.", review: "Listening and Reading activities" },
    { can: "I can compare options and situations precisely.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
