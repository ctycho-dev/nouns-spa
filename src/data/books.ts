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

const BOOKS: Book[] = [
  {
    id: 1,
    author: "Ryan Holiday",
    title: "Discipline Is Destiny",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%201%20Ryan%20Holiday%20Discipline%20Is%20Destiny.jpg`,
    description:
      "The biggest victories come from self-control, not impulse. It’s less about grinding endlessly and more about showing up, quietly, every day, with consistency and intent.",
  },
  {
    id: 2,
    author: "Ryan Holiday",
    title: "Ego Is the Enemy",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}Book%202%20rayn%20holiday%20ego%20is%20the%20enemy.jpg`,
    description:
      "Keep your ego in check when you start doing well. Pride, validation, and “being right” can destroy progress faster than failure ever could.",
  },
  {
    id: 3,
    author: "Ryan Holiday & Stephen Hanselman",
    title: "Lives of the Stoics",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%203%20ryan%20holiday%20lives%20of%20stoics.jpg`,
    description:
      "It’s a walk through the lives of ancient Stoics. They are shown not as distant philosophers, but as real people making hard choices. This book is more about character than theory.",
  },
  {
    id: 4,
    author: "Ryan Holiday",
    title: "Stillness Is the Key",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%204%20ryan%20holiday%20stillness%20is%20the%20key.jpg`,
    description:
      "A quiet book about slowing down in a loud world. It’s about doing things with clarity, not chaos.",
  },
  {
    id: 5,
    author: "Ryan Holiday & Stephen Hanselman",
    title: "The Daily Stoic",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%205%20Ryan%20Holiday%20%26%20Stephen%20Hanselman%20the%20daily%20stoic.jpg`,
    description:
      "A daily read about Stoicism that feels direct and simple. Short, thoughtful notes that slowly work their way into how you handle small moments.",
  },
  {
    id: 6,
    author: "Ryan Holiday",
    title: "The Obstacle Is the Way",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%206%20Ryan%20Holiday%20The%20Obstacle%20Is%20the%20Way.jpg`,
    description:
      "How turning problems can lead you into momentum. It’s about learning that resistance, not ease, is where growth actually happens.",
  },
  {
    id: 7,
    author: "Robert Greene",
    title: "Mastery",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%207%20Robert%20Greene%20Mastery%20.jpg`,
    description:
      "A grounded look at how mastery is not about innate talent but about daily persistence. Doing the same thing for years until it turns into something only you can do.",
  },
  {
    id: 8,
    author: "Robert Greene",
    title: "The 33 Strategies of War",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%208%20robert%20greene%20The%2033%20Strategies%20of%20War.jpg`,
    description:
      "Understand conflict: internal and external. You get a perspective on pressure, competition, and decision-making.",
  },
  {
    id: 9,
    author: "Robert Greene",
    title: "The 48 Laws of Power",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%209%20robert%20greene%20The%2048%20Laws%20of%20Power.webp`,
    description:
      "A raw guide to how people move, lead, and manipulate. This book tells the truth about how influence really works. It’s far from comfort reading; it’s for understanding how the world actually operates beneath the polite surface.",
  },
  {
    id: 10,
    author: "Robert Greene",
    title: "The Art of Seduction",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2010%20Robert%20Greene%20The%20Art%20of%20Seduction.jpg`,
    description:
      "This book is not about romance, but more about persuasion and presence. It’s a mix of history, manipulation, and self-awareness.",
  },
  {
    id: 11,
    author: "Robert Greene",
    title: "The Daily Laws",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2011%20Robert%20Greene%20The%20Daily%20Laws.jpg`,
    description:
      "Short daily notes from all of Greene’s work. Reads like a morning discipline: one page, one lesson, one uncomfortable truth in a day.",
  },
  {
    id: 12,
    author: "Robert Greene",
    title: "The Laws of Human Nature",
    tags: ["Must read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2012%20Robert%20Greene%20The%20Laws%20of%20Human%20Nature.jpg`,
    description:
      "A deep dive into why people act the way they do. This book teaches you to read motives in both others and yourself. No judgment, just awareness.",
  },
  {
    id: 13,
    author: "Stephen Fry",
    title: "Heroes",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2013%20Stephen%20Fry%20Heroes.jpg`,
    description:
      "Classic Greek heroes retold with Stephen Fry’s humor and wit. The story is more than just mythology; it’s about bravery, ego, and the messy, human side of greatness.",
  },
  {
    id: 14,
    author: "Stephen Fry",
    title: "Mythos",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2014%20Stephen%20Fry%20Mythos.jpg`,
    description:
      "The modern retelling of the original stories of the gods and the world. It’s the kind of mythology that reminds you how storytelling never ages.",
  },
  {
    id: 15,
    author: "Stephen Fry",
    title: "Odyssey",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2015%20Stephen%20Fry%20Odyssey.jpg`,
    description:
      "Stephen Fry retells Odysseus’s story with a mix of drama and wit. It’s a journey of finding your way home, even when every force tries to stop you.",
  },
  {
    id: 16,
    author: "Stephen Fry",
    title: "Troy",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2016%20Stephen%20Fry%20Troy.webp`,
    description:
      "Stephen Fry brings the Trojan War back to life. This book shows how pride and destiny collide, and how every myth is really about human emotion and desire.",
  },
  {
    id: 17,
    author: "Massimo Pigliucci",
    title: "How to Be a Stoic",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2017%20Massimo%20Pigliucci%20How%20to%20Be%20a%20Stoic.webp`,
    description:
      "This book connects old Stoic lessons to real modern problems. It makes Stoicism feel human: more messy, real-life choices.",
  },
  {
    id: 18,
    author: "John Sellars",
    title: "Lessons in Stoicism",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2018%20John%20Sellars%20Lessons%20in%20Stoicism.jpg`,
    description:
      "A pocket-sized summary of Stoic thinking. Short, easy-to-read pages about Stoicism without the heavy language.",
  },
  {
    id: 19,
    author: "Seneca",
    title: "Letters from a Stoic",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2019%20Seneca%20Letters%20from%20a%20Stoic.jpg`,
    description:
      "Feels like reading long messages from a wise old friend. Seneca reminds you to stop rushing, think deeper, and live more intentionally. It’s about realizing you don’t need as much as you think.",
  },
  {
    id: 20,
    author: "David Dillinger",
    title: "Practical Stoicism",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2020%20David%20Dillinger%20Practical%20Stoicism.jpg`,
    description:
      "A very simple take on Stoicism: direct and actionable. It reads more like a mindset manual than a philosophical text.",
  },
  {
    id: 21,
    author: "Lao Tzu",
    title: "Tao Te Ching",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2021%20Lao%20Tzu%20Tao%20Te%20Ching.jpg`,
    description:
      "An old piece that reminds you how softness and stillness can be stronger than force.",
  },
  {
    id: 22,
    author: "Jordan B. Peterson",
    title: "12 Rules for Life",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2022%20Jordan%20B.%20Peterson%2012%20Rules%20for%20Life.jpg`,
    description:
      "Peterson mixes philosophy, psychology, and everyday life into lessons. This book is about small habits, discipline, and balance in life.",
  },
  {
    id: 23,
    author: "Jordan B. Peterson",
    title: "Beyond Order: 12 More Rules for Life",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2023%20Jordan%20B.%20Peterson%20Beyond%20Order%2012%20More%20Rules%20for%20Life%20.jpg`,
    description:
      'That\'s a follow-up book to "12 Rules for Life" with more focus on the chaos, as something you can’t avoid. You can only learn from it. Feels more emotional and human than the first book.',
  },
  {
    id: 24,
    author: "Gabriel Wyner",
    title: "Fluent Forever: How to Learn Any Language Fast and Never Forget It",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2024%20Gabriel%20Wyner%20Fluent%20Forever-%20How%20to%20Learn%20Any%20Language%20Fast%20and%20Never%20Forget%20It%20.jpg`,
    description:
      "This book is focused on how your brain learns. You'll know about sounds, visuals, and habits, not really about grammar rules.",
  },
  {
    id: 25,
    author: "Rolf Dobelli",
    title: "The Art of Thinking Clearly",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2025%20Rolf%20Dobelli%20The%20Art%20of%20Thinking%20Clearly.jpg`,
    description:
      "Easy-going book with short, clean lessons on self-awareness. Heavy focus on understanding and recognizing your mental traps.",
  },
  {
    id: 26,
    author: "Olivia Fox Cabane",
    title: "The Charisma Myth",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2026%20Olivia%20Fox%20Cabane%20The%20Charisma%20Myth.jpg`,
    description:
      "Explains what charisma really is and breaks it into habits that anyone can learn. A self-study on how to make you feel seen without trying too hard.",
  },
  {
    id: 27,
    author: "Ichiro Kishimi & Fumitake Koga",
    title: "The Courage to Be Disliked",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2027%20Ichiro%20Kishimi%20%26%20Fumitake%20Koga%20The%20Courage%20to%20Be%20Disliked.jpg`,
    description:
      "A conversation-style book about letting go of other people’s expectations. The writing is simple, although slightly repetitive, a therapy-like dialogue.",
  },
  {
    id: 28,
    author: "Brianna Wiest",
    title: "The Mountain Is You",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2028%20Brianna%20Wiest%20The%20Mountain%20Is%20You.jpg`,
    description:
      "This book explains the problem of self-sabotage. Slightly poetic writing with a focus on understanding yourself.",
  },
  {
    id: 29,
    author: "Haemin Sunim",
    title: "The Things You Can See Only When You Slow Down",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2029%20Haemin%20Sunim%20The%20Things%20You%20Can%20See%20Only%20When%20You%20Slow%20Down.jpg`,
    description:
      "This book is about slowing down without losing momentum. The writing is gentle, focusing on thinking within yourself rather than learning something new from the book.",
  },
  {
    id: 30,
    author: "Adam Grant",
    title: "Think Again",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2030%20Adam%20Grant%20Think%20Again.jpg`,
    description:
      'This book shows how changing your mind can be your strength, not a weakness. Great for people who love arguing or learning lol. The phrase "I don\'t know" can be a great start, as per this book.',
  },
  {
    id: 31,
    author: "Robert Sapolsky",
    title: "Behave: The Biology of Humans at Our Best and Worst",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2031%20Robert%20Sapolsky%20Behave-%20The%20Biology%20of%20Humans%20at%20Our%20Best%20and%20Worst.jpeg`,
    description:
      "It's a book about human behavior: why people do what they do, with a heavy focus on biology, society, and timing. The context varies from hormones to childhood. Sapolsky masterfully connects science to empathy.",
  },
  {
    id: 32,
    author: "Peter Attia, MD",
    title: "Outlive: The Science & Art of Longevity",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2032%20Peter%20Attia,%20MD%20Outlive-%20The%20Science%20%26%20Art%20of%20Longevity.jpg`,
    description:
      'This book is a guide on how to live better and age well. Attia shares scientific and daily discipline tips. It\'s more about practical habits rather than "biohack" myths.',
  },
  {
    id: 33,
    author: "Jean-François Marmion",
    title: "The Psychology of Stupidity",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2033%20Jean-Fran%C3%A7ois%20Marmion%20The%20Psychology%20of%20Stupidity.jpg`,
    description:
      "It's a collection of essays from different famous people on how and why people act irrationally. Shows how intelligence and arrogance often get confused.",
  },
  {
    id: 34,
    author: "Richard Dawkins",
    title: "The Selfish Gene (40th Anniversary Edition)",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2034%20Richard%20Dawkins%20The%20Selfish%20Gene%20(40th%20Anniversary%20Edition).jpg`,
    description:
      "An infamous scientist wrote a book on how evolution really works, but this time it’s focused on genes, not species.",
  },
  {
    id: 35,
    author: "Elizabeth Kolbert",
    title: "The Sixth Extinction",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2035%20Elizabeth%20Kolbert%20The%20Sixth%20Extinction.jpg`,
    description:
      "This book felt like a journey through Earth’s history with a heavy science influence. Kolbert wrote a serious work on extinction with lots of data to back up her words, but without making it feel dry.",
  },
  {
    id: 36,
    author: "Matthew Walker",
    title: "Why We Sleep",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2036%20Matthew%20Walker%20Why%20We%20Sleep.jpg`,
    description:
      "This book is a quiet reminder that sleep isn’t optional and how every part of your health, mood, focus, and memory depends on it. Was able to finally fix my schedule after reading this.",
  },
  {
    id: 37,
    author: "Dean Graziosi",
    title: "Millionaire Success Habits",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2037%20Dean%20Graziosi%20Millionaire%20Success%20Habits.jpg`,
    description:
      "This book has nothing to do with getting rich. It's about changing how you think, not just what you do. You'll read more about how important consistency is to your habits and daily routine, and how much impact it has on you and your work.",
  },
  {
    id: 38,
    author: "Richard Koch",
    title: "The 80/20 Principle",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2038%20Richard%20Koch%20The%2080:20%20Principle.jpg`,
    description:
      "Explains how a small part of what you do creates most of the results. This book may actually affect how you spend your time.",
  },
  {
    id: 39,
    author: "Naval Ravikant (compiled by Eric Jorgenson)",
    title: "The Almanack of Naval Ravikant",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2039%20Naval%20Ravikant%20(compiled%20by%20Eric%20Jorgenson)%20The%20Almanack%20of%20Naval%20Ravikant.jpg`,
    description:
      "A mix of thoughts on money, happiness, and leverage. It reads like a collection of ideas of different kinds of freedom. It makes you rethink what “success” actually means.",
  },
  {
    id: 40,
    author: "Nassim Nicholas Taleb",
    title: "The Black Swan",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2040%20Nassim%20Nicholas%20Taleb%20The%20Black%20Swan.jpg`,
    description:
      "This book is half philosophy, half math. Taleb talks about rare events that change everything, and why we never see them coming. It's about learning to live in a world you can’t predict.",
  },
  {
    id: 41,
    author: "Albert-László Barabási",
    title: "The Formula",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2041%20Albert-L%C3%A1szl%C3%B3%20Barab%C3%A1si%20The%20Formula.jpg`,
    description:
      "The author talks about success from a scientific perspective: why some ideas spread, and others vanish. He turns it into a pattern of networks and timing. It's less about luck and more about structure.",
  },
  {
    id: 42,
    author: "Benjamin Graham",
    title: "The Intelligent Investor",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2042%20Benjamin%20Graham%20The%20Intelligent%20Investor.jpg`,
    description:
      "It's a timeless book on thinking rationally about money. Graham focuses more on the importance of human patience and judgment than on the numbers.",
  },
  {
    id: 43,
    author: "George S. Clason",
    title: "The Richest Man in Babylon",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2043%20George%20S.%20Clason%20The%20Richest%20Man%20in%20Babylon.jpg`,
    description:
      "Easy-to-read book with old stories that explain modern money and how to invest, save, and be patient.",
  },
  {
    id: 44,
    author: "Henrik Kniberg",
    title: "Scrum and XP from the Trenches",
    tags: ["Liked"],
    image: `${BASE_URL}${BOOKS_DIR}book%2044%20Henrik%20Kniberg%20Scrum%20and%20XP%20from%20the%20Trenches.jpg`,
    description:
      "Practical notes on how to actually manage a team, not just dry theory. Explains agile work in plain language and what teamwork looks like when it’s done right.",
  },
  {
    id: 45,
    author: "Nassim Nicholas Taleb",
    title: "Skin in the Game: Hidden Asymmetries in Daily Life",
    tags: ["Must-read"],
    image: `${BASE_URL}${BOOKS_DIR}book%2045%20Nassim%20Nicholas%20Taleb%20Skin%20in%20the%20Game%20Hidden%20Asymmetries%20in%20Daily%20Life.jpg`,
    description:
      "Extremely interesting and complex book with lots of insight from different fields. Taleb writes that you shouldn’t trust anyone who risks nothing. He'll make you rethink what safe means in business, in work, and in life.",
  },
  {
    id: 46,
    author: "Dale Carnegie",
    title: "The Art of Public Speaking",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2046%20Dale%20Carnegie%20The%20Art%20of%20Public%20Speaking.jpg`,
    description:
      "This book is an old-school but still remains timeless. Carnegie teaches you that good speaking is really just good listening and practice. It’s less about perfect words, more about learning how to relax and actually mean what you say.",
  },
  {
    id: 47,
    author: "Rick Rubin",
    title: "The Creative Act: A Way of Being",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2047%20Rick%20Rubin%20The%20Creative%20Act-%20A%20Way%20of%20Being.jpg`,
    description:
      "This book is not necessarily a “how to create” one; it's more about how to exist creatively. You'll read about noticing it, rather than forcing. If creativity ever felt pressured to you, then you’ll understand how to bring it up without force.",
  },
  {
    id: 48,
    author: "Steven Bartlett",
    title: "The Diary of a CEO",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2048%20Steven%20Bartlett%20The%20Diary%20of%20a%20CEO.jpg`,
    description:
      "That's a collection of business lessons that comes from experience. Bartlett mixes business insight with vulnerability. The book reads more like a reflection than an instruction.",
  },
  {
    id: 49,
    author: "Henry Kissinger, Eric Schmidt & Daniel Huttenlocher",
    title: "The Age of AI",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2049%20Henry%20Kissinger,%20Eric%20Schmidt%20%26%20Daniel%20Huttenlocher%20The%20Age%20of%20AI.jpg`,
    description:
      "This book explores how AI changes power, politics, and people. The writing is serious, analytical, and not abstract. It reads like a warning on what happens when machines start thinking differently and faster than humans.",
  },
  {
    id: 50,
    author: "Will & Ariel Durant",
    title: "Lessons of History",
    tags: [],
    image: `${BASE_URL}${BOOKS_DIR}book%2050%20Will%20%26%20Ariel%20Durant%20Lessons%20of%20History.jpg`,
    description:
      "This book is a short yet deeply insightful summary of everything the Durants learned after decades of studying civilization. They write about patterns of how human nature repeats itself, no matter how advanced we get.",
  },
];

export default BOOKS;
