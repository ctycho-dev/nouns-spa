export type Book = {
  id: number;
  author: string;
  title: string;
  tags: string[];
  description: string;
  image?: string;
};

const BASE_URL = "https://internoun.mypinx.store/";
const BOOKS_DIR = "internoun%20books/";
const BOOKS_V2_DIR = "books_v2/";

const BOOKS: Book[] = [
  {
    id: 1,
    author: "Ryan Holiday",
    title: "Discipline Is Destiny",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%201%20Ryan%20Holiday%20Discipline%20Is%20Destiny.jpg`,
    description:
      "Big wins come from self-control, not impulse. It's about showing up daily with consistency and intent, not grinding nonstop.",
  },
  {
    id: 2,
    author: "Ryan Holiday",
    title: "Ego Is the Enemy",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}Book%202%20rayn%20holiday%20ego%20is%20the%20enemy.jpg`,
    description:
      'Keep your ego in check when you start doing well. Pride, validation, and "being right" can destroy progress faster than failure ever could.',
  },
  {
    id: 3,
    author: "Ryan Holiday & Stephen Hanselman",
    title: "Lives of the Stoics",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%203%20ryan%20holiday%20lives%20of%20stoics.jpg`,
    description:
      "It's a walk through the lives of ancient Stoics. They are shown not as distant philosophers, but as real people making hard choices.",
  },
  {
    id: 4,
    author: "Ryan Holiday",
    title: "Stillness Is the Key",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%204%20ryan%20holiday%20stillness%20is%20the%20key.jpg`,
    description:
      "A quiet book about slowing down in a loud world. It's about doing things with clarity, not chaos.",
  },
  {
    id: 5,
    author: "Ryan Holiday",
    title: "The Obstacle Is the Way",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%206%20Ryan%20Holiday%20The%20Obstacle%20Is%20the%20Way.jpg`,
    description:
      "How turning problems can lead you into momentum. It's about learning that resistance, not ease, is where growth actually happens.",
  },
  {
    id: 6,
    author: "Robert Greene",
    title: "Mastery",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%207%20Robert%20Greene%20Mastery%20.jpg`,
    description:
      "A grounded look at how mastery is not about innate talent but about daily persistence.",
  },
  {
    id: 7,
    author: "Robert Greene",
    title: "The 33 Strategies of War",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%208%20robert%20greene%20The%2033%20Strategies%20of%20War.jpg`,
    description:
      "Understand conflict: internal and external. You get a perspective on pressure, competition, and decision-making.",
  },
  {
    id: 8,
    author: "Robert Greene",
    title: "The 48 Laws of Power",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_V2_DIR}photo_2026-01-05_19-04-39.jpg`,
    description:
      "A raw guide to how people move, lead, and manipulate. It's for understanding how the world operates beneath the surface.",
  },
  {
    id: 9,
    author: "Robert Greene",
    title: "The Daily Laws",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2011%20Robert%20Greene%20The%20Daily%20Laws.jpg`,
    description:
      "Short daily notes from all of Greene's work. Reads like a morning discipline: one page, one lesson, one uncomfortable truth in a day.",
  },
  {
    id: 10,
    author: "Robert Greene",
    title: "The Laws of Human Nature",
    tags: ["Must read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2012%20Robert%20Greene%20The%20Laws%20of%20Human%20Nature.jpg`,
    description:
      "A dive into why people act the way they do. It's about how to read motives in both others and yourself.",
  },
  {
    id: 11,
    author: "Stephen Fry",
    title: "Mythos",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2014%20Stephen%20Fry%20Mythos.jpg`,
    description:
      "The modern retelling of the original stories of the gods and the world. It's mythology that reminds you how storytelling never ages.",
  },
  {
    id: 12,
    author: "Stephen Fry",
    title: "Troy",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2016%20Stephen%20Fry%20Troy.webp`,
    description:
      "The Trojan War comes back to life. Pride and destiny collide, and every myth is really about human emotion and desire.",
  },
  {
    id: 13,
    author: "Massimo Pigliucci",
    title: "How to Be a Stoic",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2017%20Massimo%20Pigliucci%20How%20to%20Be%20a%20Stoic.webp`,
    description:
      "This book connects old Stoic lessons to real modern problems. It makes Stoicism feel human: more messy, real-life choices.",
  },
  {
    id: 14,
    author: "John Sellars",
    title: "Lessons in Stoicism",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2018%20John%20Sellars%20Lessons%20in%20Stoicism.jpg`,
    description:
      "A pocket-sized summary of Stoic thinking. Short, easy-to-read pages about Stoicism without the heavy language.",
  },
  {
    id: 15,
    author: "Seneca",
    title: "Letters from a Stoic",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2019%20Seneca%20Letters%20from%20a%20Stoic.jpg`,
    description:
      "Seneca reminds you to stop rushing, think deeper, and live more intentionally.",
  },
  {
    id: 16,
    author: "Lao Tzu",
    title: "Tao Te Ching",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2021%20Lao%20Tzu%20Tao%20Te%20Ching.jpg`,
    description:
      "An old piece that reminds you how softness and stillness can be stronger than force.",
  },
  {
    id: 17,
    author: "Jordan B. Peterson",
    title: "12 Rules for Life",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2022%20Jordan%20B.%20Peterson%2012%20Rules%20for%20Life.jpg`,
    description:
      "Peterson mixes philosophy, psychology, and everyday life into lessons. This book is about discipline and balance in life.",
  },
  {
    id: 18,
    author: "Jordan B. Peterson",
    title: "Beyond Order: 12 More Rules for Life",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2023%20Jordan%20B.%20Peterson%20Beyond%20Order%2012%20More%20Rules%20for%20Life%20.jpg`,
    description:
      "That's a follow-up book with more focus on the chaos, as something you can't avoid. Feels more emotional and human than the first book.",
  },
  {
    id: 19,
    author: "Gabriel Wyner",
    title: "Fluent Forever: How to Learn Any Language Fast and Never Forget It",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2024%20Gabriel%20Wyner%20Fluent%20Forever-%20How%20to%20Learn%20Any%20Language%20Fast%20and%20Never%20Forget%20It%20.jpg`,
    description:
      "This book is focused on how your brain learns. You'll know about sounds, visuals, and habits, not really about grammar rules.",
  },
  {
    id: 20,
    author: "Rolf Dobelli",
    title: "The Art of Thinking Clearly",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2025%20Rolf%20Dobelli%20The%20Art%20of%20Thinking%20Clearly.jpg`,
    description:
      "Easy-going book with short, clean lessons on self-awareness. Heavy focus on understanding and recognizing your mental traps.",
  },
  {
    id: 21,
    author: "Olivia Fox Cabane",
    title: "The Charisma Myth",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2026%20Olivia%20Fox%20Cabane%20The%20Charisma%20Myth.jpg`,
    description:
      "Explains what charisma really is and breaks it into habits that anyone can learn.",
  },
  {
    id: 22,
    author: "Ichiro Kishimi & Fumitake Koga",
    title: "The Courage to Be Disliked",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2027%20Ichiro%20Kishimi%20%26%20Fumitake%20Koga%20The%20Courage%20to%20Be%20Disliked.jpg`,
    description:
      "A conversation-style book about letting go of other people's expectations.",
  },
  {
    id: 23,
    author: "Adam Grant",
    title: "Think Again",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2030%20Adam%20Grant%20Think%20Again.jpg`,
    description:
      'This book shows how changing your mind can be your strength, not a weakness. The phrase "I don\'t know" can be a great start.',
  },
  {
    id: 24,
    author: "Robert Sapolsky",
    title: "Behave: The Biology of Humans at Our Best and Worst",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2031%20Robert%20Sapolsky%20Behave-%20The%20Biology%20of%20Humans%20at%20Our%20Best%20and%20Worst.jpeg`,
    description:
      "It's a book about human behavior: why people do what they do, with a heavy focus on biology, society, and timing.",
  },
  {
    id: 25,
    author: "Peter Attia, MD",
    title: "Outlive: The Science & Art of Longevity",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2032%20Peter%20Attia,%20MD%20Outlive-%20The%20Science%20%26%20Art%20of%20Longevity.jpg`,
    description:
      'This book is a guide on how to live better and age well. It\'s more about practical habits rather than "biohack" myths.',
  },
  {
    id: 26,
    author: "Jean-François Marmion",
    title: "The Psychology of Stupidity",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2033%20Jean-Fran%C3%A7ois%20Marmion%20The%20Psychology%20of%20Stupidity.jpg`,
    description:
      "A set of essays on why people act irrationally. It also shows how intelligence and arrogance can get mixed up.",
  },
  {
    id: 27,
    author: "Richard Dawkins",
    title: "The Selfish Gene (40th Anniversary Edition)",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2034%20Richard%20Dawkins%20The%20Selfish%20Gene%20(40th%20Anniversary%20Edition).jpg`,
    description:
      "An infamous scientist wrote a book on how evolution really works, but this time it's focused on genes, not species.",
  },
  {
    id: 28,
    author: "Elizabeth Kolbert",
    title: "The Sixth Extinction",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2035%20Elizabeth%20Kolbert%20The%20Sixth%20Extinction.jpg`,
    description:
      "A journey through Earth's history told through extinction. Serious and data-backed, but still very readable.",
  },
  {
    id: 29,
    author: "Matthew Walker",
    title: "Why We Sleep",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2036%20Matthew%20Walker%20Why%20We%20Sleep.jpg`,
    description:
      "This book is a quiet reminder that sleep isn't optional and how every part of your health, focus, and memory depends on it.",
  },
  {
    id: 30,
    author: "Richard Koch",
    title: "The 80/20 Principle",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2038%20Richard%20Koch%20The%2080:20%20Principle.jpg`,
    description:
      "Explains how a small part of what you do creates most of the results. This book may actually affect how you spend your time.",
  },
  {
    id: 31,
    author: "Naval Ravikant (compiled by Eric Jorgenson)",
    title: "The Almanack of Naval Ravikant",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2039%20Naval%20Ravikant%20(compiled%20by%20Eric%20Jorgenson)%20The%20Almanack%20of%20Naval%20Ravikant.jpg`,
    description:
      "A mix of thoughts on money, happiness, and leverage. It reads like a collection of ideas of different kinds of freedom.",
  },
  {
    id: 32,
    author: "Nassim Nicholas Taleb",
    title: "The Black Swan",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2040%20Nassim%20Nicholas%20Taleb%20The%20Black%20Swan.jpg`,
    description:
      "This book is philosophy + math. It’s about rare events that change everything, and why we never see them coming.",
  },
  {
    id: 33,
    author: "Albert-László Barabási",
    title: "The Formula",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2041%20Albert-L%C3%A1szl%C3%B3%20Barab%C3%A1si%20The%20Formula.jpg`,
    description:
      'The author looks at success through networks and timing. Less "luck," more structure behind why things spread.',
  },
  {
    id: 34,
    author: "Benjamin Graham",
    title: "The Intelligent Investor",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2042%20Benjamin%20Graham%20The%20Intelligent%20Investor.jpg`,
    description:
      "A classic on staying rational with money. Focuses more on patience and judgment than flashy tactics.",
  },
  {
    id: 35,
    author: "George S. Clason",
    title: "The Richest Man in Babylon",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2043%20George%20S.%20Clason%20The%20Richest%20Man%20in%20Babylon.jpg`,
    description:
      "Easy-to-read book with old stories that explain modern money and how to invest, save, and be patient.",
  },
  {
    id: 36,
    author: "Henrik Kniberg",
    title: "Scrum and XP from the Trenches",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2044%20Henrik%20Kniberg%20Scrum%20and%20XP%20from%20the%20Trenches.jpg`,
    description:
      "Practical notes on running a team with agile. Clear, no-jargon lessons on how teamwork actually works.",
  },
  {
    id: 37,
    author: "Nassim Nicholas Taleb",
    title: "Skin in the Game: Hidden Asymmetries in Daily Life",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2045%20Nassim%20Nicholas%20Taleb%20Skin%20in%20the%20Game%20Hidden%20Asymmetries%20in%20Daily%20Life.jpg`,
    description:
      "Taleb writes that you shouldn't trust anyone who risks nothing. He'll make you rethink what safe means in business, in work, and in life.",
  },
  {
    id: 38,
    author: "Dale Carnegie",
    title: "The Art of Public Speaking",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2046%20Dale%20Carnegie%20The%20Art%20of%20Public%20Speaking.jpg`,
    description:
      "This book is an old-school but still remains timeless. Carnegie teaches you that good speaking is really just listening and practice.",
  },
  {
    id: 39,
    author: "Rick Rubin",
    title: "The Creative Act: A Way of Being",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2047%20Rick%20Rubin%20The%20Creative%20Act-%20A%20Way%20of%20Being.jpg`,
    description:
      "This book is about how to exist creatively. And if it ever felt pressured to you, then you'll understand how to bring it up without force.",
  },
  {
    id: 40,
    author: "Henry Kissinger, Eric Schmidt & Daniel Huttenlocher",
    title: "The Age of AI",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2049%20Henry%20Kissinger,%20Eric%20Schmidt%20%26%20Daniel%20Huttenlocher%20The%20Age%20of%20AI.jpg`,
    description:
      "How AI changes power, politics, and decision-making. It reads like a warning on what changes when machines outpace humans.",
  },
  {
    id: 41,
    author: "Will & Ariel Durant",
    title: "Lessons of History",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2050%20Will%20%26%20Ariel%20Durant%20Lessons%20of%20History.jpg`,
    description:
      "A compact summary of what the Durants learned about civilization. It's about recurring patterns in human nature across time.",
  },
  {
    id: 42,
    author: "Edward Chancellor",
    title: "The Price of Time: The Real Story of Interest",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}the%20price%20of%20time.jpg`,
    description:
      "A deep history of interest rates and why they shape everything from markets to inequality.",
  },
  {
    id: 43,
    author: "Chris Dixon",
    title: "Read Write Own: Building the Next Era of the Internet",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}read%20write%20own.jpg`,
    description:
      "A clear case for why crypto changes the internet's incentive structure, not just payments.",
  },
  {
    id: 44,
    author: "Peter Thiel (with Blake Masters)",
    title: "Zero to One",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Author-%20Peter%20Thiel%20(with%20Blake%20Masters)%20Zero%20to%20One.jpg`,
    description:
      "A startup strategy book about building something genuinely new instead of competing in crowded markets.",
  },
  {
    id: 45,
    author: "Richard Rumelt",
    title: "Good Strategy / Bad Strategy",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Richard%20Rumelt%20Good%20Strategy%20_%20Bad%20Strategy.jpg`,
    description:
      "A practical framework for what strategy actually is: diagnosis, guiding policy, and coherent action.",
  },
  {
    id: 46,
    author: "Eric Ries",
    title: "The Lean Startup",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Eric%20Ries%20The%20Lean%20Startup.jpg`,
    description:
      "A method for building products through fast experiments, validated learning, and iteration.",
  },
  {
    id: 47,
    author: "Marcus Aurelius",
    title: "Meditations",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Marcus%20Aurelius%20Meditations.jpg`,
    description:
      "Personal notes on discipline and perspective under pressure. A timeless guide for staying steady and clear-headed.",
  },
  {
    id: 48,
    author: "John Doerr",
    title: "Measure What Matters",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}John%20Doerr%20Measure%20What%20Matters.jpg`,
    description:
      "A practical guide to OKRs: how to set goals, define measurable outcomes, and align teams.",
  },
  {
    id: 49,
    author: "David Deutsch",
    title: "The Beginning of Infinity",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}David%20Deutsch%20The%20Beginning%20of%20Infinity.jpg`,
    description:
      "Big-picture thinking on progress and how ideas grow. Great for building a long-term, innovation-focused worldview.",
  },
  {
    id: 50,
    author: "Philip E. Tetlock & Dan Gardner",
    title: "Superforecasting: The Art and Science of Prediction",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Philip%20E.%20Tetlock%20&%20Dan%20Gardner%20Superforecasting-%20The%20Art%20and%20Science%20of%20Prediction.jpg`,
    description:
      "How to think probabilistically and improve judgment under uncertainty.",
  },
  {
    id: 51,
    author: "Thomas S. Kuhn",
    title: "The Structure of Scientific Revolutions",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Thomas%20S.%20Kuhn%20The%20Structure%20of%20Scientific%20Revolutions.jpg`,
    description:
      'A classic on how big breakthroughs happen when the "default way of thinking" breaks and gets replaced.',
  },
  {
    id: 52,
    author: "Andrew S. Grove",
    title: "Only the Paranoid Survive",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Andrew%20S.%20Grove%20Only%20the%20Paranoid%20Survive.jpg`,
    description:
      "A practical guide to spotting inflection points early. Operator-level thinking on adapting before the market forces you to.",
  },
  {
    id: 53,
    author: "Peter F. Drucker",
    title: "The Effective Executive",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Peter%20F.%20Drucker%20The%20Effective%20Executive.jpg`,
    description:
      "A guide to priorities, time, and decision-making. It's about focus: doing the right things, not more things.",
  },
  {
    id: 54,
    author: "Epictetus",
    title: "The Enchiridion & Discourses",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Epictetus%20The%20Enchiridion%20&%20Discourses.jpg`,
    description:
      "Pure Stoic fundamentals on self-control, clarity, and not being owned by external chaos.",
  },
  {
    id: 55,
    author: "Andrew S. Grove",
    title: "High Output Management",
    tags: [],
    image: `${BASE_URL}${BOOKS_V2_DIR}Andrew%20S.%20Grove%20High%20Output%20Management.jpg`,
    description:
      "A very concrete playbook for running teams and building execution systems that scale.",
  },
];

export default BOOKS;
