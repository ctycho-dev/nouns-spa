export type Book = {
  id: number;
  author: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
};

export const BOOKS: Book[] = [
  {
    id: 1,
    author: "Ryan Holiday",
    title: "Discipline Is Destiny",
    tags: [],
    image: "",
    description:
      "The biggest victories come from self-control, not impulse. It’s less about grinding endlessly and more about showing up, quietly, every day, with consistency and intent.",
  },
  {
    id: 2,
    author: "Ryan Holiday",
    title: "Ego Is the Enemy",
    tags: [],
    image: "",
    description:
      "Keep your ego in check when you start doing well. Pride, validation, and “being right” can destroy progress faster than failure ever could.",
  },
  {
    id: 3,
    author: "Ryan Holiday & Stephen Hanselman",
    title: "Lives of the Stoics",
    tags: [],
    image: "",
    description:
      "It’s a walk through the lives of ancient Stoics. They are shown not as distant philosophers, but as real people making hard choices. This book is more about character than theory.",
  },
  {
    id: 4,
    author: "Ryan Holiday",
    title: "Stillness Is the Key",
    tags: [],
    image: "",
    description:
      "A quiet book about slowing down in a loud world. It’s about doing things with clarity, not chaos.",
  },
  {
    id: 5,
    author: "Ryan Holiday & Stephen Hanselman",
    title: "The Daily Stoic",
    tags: [],
    image: "",
    description:
      "A daily read about Stoicism that feels direct and simple. Short, thoughtful notes that slowly work their way into how you handle small moments.",
  },
  {
    id: 6,
    author: "Ryan Holiday",
    title: "The Obstacle Is the Way",
    tags: [],
    image: "",
    description:
      "How turning problems can lead you into momentum. It’s about learning that resistance, not ease, is where growth actually happens.",
  },
  {
    id: 7,
    author: "Robert Greene",
    title: "Mastery",
    tags: ["Must-Read"],
    image: "",
    description:
      "A grounded look at how mastery is not about innate talent but about daily persistence. Doing the same thing for years until it turns into something only you can do.",
  },
  {
    id: 8,
    author: "Robert Greene",
    title: "The 33 Strategies of War",
    tags: ["Must-Read"],
    image: "",
    description:
      "Understand conflict: internal and external. You get a perspective on pressure, competition, and decision-making.",
  },
  {
    id: 9,
    author: "Robert Greene",
    title: "The 48 Laws of Power",
    tags: ["Must-Read"],
    image: "",
    description:
      "A raw guide to how people move, lead, and manipulate. This book tells the truth about how influence really works. It’s far from comfort reading; it’s for understanding how the world actually operates beneath the polite surface.",
  },
  {
    id: 10,
    author: "Robert Greene",
    title: "The Art of Seduction",
    tags: ["Must-Read"],
    image: "",
    description:
      "This book is not about romance, but more about persuasion and presence. It’s a mix of history, manipulation, and self-awareness.",
  },
  {
    id: 11,
    author: "Robert Greene",
    title: "The Daily Laws",
    tags: ["Must-Read"],
    image: "",
    description:
      "Short daily notes from all of Greene’s work. Reads like a morning discipline: one page, one lesson, one uncomfortable truth in a day.",
  },
  {
    id: 12,
    author: "Robert Greene",
    title: "The Laws of Human Nature",
    tags: ["Must-Read"],
    image: "",
    description:
      "A deep dive into why people act the way they do. This book teaches you to read motives in both others and yourself. No judgment, just awareness.",
  },
  {
    id: 13,
    author: "Stephen Fry",
    title: "Heroes",
    tags: [],
    image: "",
    description:
      "Classic Greek heroes retold with Stephen Fry’s humor and wit. The story is more than just mythology; it’s about bravery, ego, and the messy, human side of greatness.",
  },
  {
    id: 14,
    author: "Stephen Fry",
    title: "Mythos",
    tags: [],
    image: "",
    description:
      "The modern retelling of the original stories of the gods and the world. It’s the kind of mythology that reminds you how storytelling never ages.",
  },
  {
    id: 15,
    author: "Stephen Fry",
    title: "Odyssey",
    tags: [],
    image: "",
    description:
      "Stephen Fry retells Odysseus’s story with a mix of drama and wit. It’s a journey of finding your way home, even when every force tries to stop you.",
  },
  {
    id: 16,
    author: "Stephen Fry",
    title: "Troy",
    tags: [],
    image: "",
    description:
      "Stephen Fry brings the Trojan War back to life. This book shows how pride and destiny collide, and how every myth is really about human emotion and desire.",
  },
  {
    id: 17,
    author: "Massimo Pigliucci",
    title: "How to Be a Stoic",
    tags: [],
    image: "",
    description:
      "This book connects old Stoic lessons to real modern problems. It makes Stoicism feel human: more messy, real-life choices.",
  },
  {
    id: 18,
    author: "John Sellars",
    title: "Lessons in Stoicism",
    tags: [],
    image: "",
    description:
      "A pocket-sized summary of Stoic thinking. Short, easy-to-read pages about Stoicism without the heavy language.",
  },
  {
    id: 19,
    author: "Seneca",
    title: "Letters from a Stoic",
    tags: [],
    image: "",
    description:
      "Feels like reading long messages from a wise old friend. Seneca reminds you to stop rushing, think deeper, and live more intentionally. It’s about realizing you don’t need as much as you think.",
  },
  {
    id: 20,
    author: "David Dillinger",
    title: "Practical Stoicism",
    tags: [],
    image: "",
    description:
      "A very simple take on Stoicism: direct and actionable. It reads more like a mindset manual than a philosophical text.",
  },
  {
    id: 21,
    author: "Lao Tzu",
    title: "Tao Te Ching",
    tags: [],
    image: "",
    description:
      "An old piece that reminds you how softness and stillness can be stronger than force.",
  },
  {
    id: 22,
    author: "Jordan B. Peterson",
    title: "12 Rules for Life",
    tags: [],
    image: "",
    description:
      "Peterson mixes philosophy, psychology, and everyday life into lessons. This book is about small habits, discipline, and balance in life.",
  },
  {
    id: 23,
    author: "Jordan B. Peterson",
    title: "Beyond Order: 12 More Rules for Life",
    tags: [],
    image: "",
    description:
      'A follow-up to "12 Rules for Life" with more focus on chaos as something you can’t avoid. You can only learn from it. Feels more emotional and human than the first book.',
  },
  {
    id: 24,
    author: "Gabriel Wyner",
    title: "Fluent Forever: How to Learn Any Language Fast and Never Forget It",
    tags: [],
    image: "",
    description:
      "This book is focused on how your brain learns. You’ll know about sounds, visuals, and habits, not really about grammar rules.",
  },
  {
    id: 25,
    author: "Rolf Dobelli",
    title: "The Art of Thinking Clearly",
    tags: [],
    image: "",
    description:
      "Easy-going book with short, clean lessons on self-awareness. Heavy focus on understanding and recognizing your mental traps.",
  },
  {
    id: 26,
    author: "Olivia Fox Cabane",
    title: "The Charisma Myth",
    tags: [],
    image: "",
    description:
      "Explains what charisma really is and breaks it into habits that anyone can learn. A self-study on how to make people feel seen without trying too hard.",
  },
  {
    id: 27,
    author: "Ichiro Kishimi & Fumitake Koga",
    title: "The Courage to Be Disliked",
    tags: [],
    image: "",
    description:
      "A conversation-style book about letting go of other people’s expectations. The writing is simple, although slightly repetitive, a therapy-like dialogue.",
  },
  {
    id: 28,
    author: "Brianna Wiest",
    title: "The Mountain Is You",
    tags: [],
    image: "",
    description:
      "This book explains the problem of self-sabotage. Slightly poetic writing with a focus on understanding yourself.",
  },
  {
    id: 29,
    author: "Haemin Sunim",
    title: "The Things You Can See Only When You Slow Down",
    tags: [],
    image: "",
    description:
      "This book is about slowing down without losing momentum. The writing is gentle, focusing on thinking within yourself rather than learning something new from the book.",
  },
  {
    id: 30,
    author: "Adam Grant",
    title: "Think Again",
    tags: [],
    image: "",
    description:
      'This book shows how changing your mind can be your strength, not a weakness. Great for people who love arguing or learning. The phrase "I don\'t know" can be a great start, as per this book.',
  },
  {
    id: 31,
    author: "Robert Sapolsky",
    title: "Behave: The Biology of Humans at Our Best and Worst",
    tags: [],
    image: "",
    description:
      "A book about human behavior: why people do what they do, with a heavy focus on biology, society, and timing. The context varies from hormones to childhood. Sapolsky connects science to empathy.",
  },
  {
    id: 32,
    author: "Peter Attia, MD",
    title: "Outlive: The Science & Art of Longevity",
    tags: [],
    image: "",
    description:
      "A guide on how to live better and age well. Attia shares scientific and daily discipline tips. It’s more about practical habits rather than “biohack” myths.",
  },
  {
    id: 33,
    author: "Jean-François Marmion",
    title: "The Psychology of Stupidity",
    tags: [],
    image: "",
    description:
      "A collection of essays from different famous people on how and why people act irrationally. Shows how intelligence and arrogance often get confused.",
  },
  {
    id: 34,
    author: "Richard Dawkins",
    title: "The Selfish Gene (40th Anniversary Edition)",
    tags: [],
    image: "",
    description:
      "A scientist’s book on how evolution works, focused on genes rather than species.",
  },
  {
    id: 35,
    author: "Elizabeth Kolbert",
    title: "The Sixth Extinction",
    tags: [],
    image: "",
    description:
      "A journey through Earth’s history with a heavy science influence. Kolbert writes about extinction with lots of data, without making it feel dry.",
  },
  {
    id: 36,
    author: "Matthew Walker",
    title: "Why We Sleep",
    tags: [],
    image: "",
    description:
      "A reminder that sleep isn’t optional and how every part of your health, mood, focus, and memory depends on it.",
  },
  {
    id: 37,
    author: "Dean Graziosi",
    title: "Millionaire Success Habits",
    tags: [],
    image: "",
    description:
      "Not really about getting rich. It’s about changing how you think, not just what you do, with a focus on consistency in habits and daily routine.",
  },
  {
    id: 38,
    author: "Richard Koch",
    title: "The 80/20 Principle",
    tags: [],
    image: "",
    description:
      "Explains how a small part of what you do creates most of the results. This book can change how you spend your time.",
  },
  {
    id: 39,
    author: "Naval Ravikant (compiled by Eric Jorgenson)",
    title: "The Almanack of Naval Ravikant",
    tags: [],
    image: "",
    description:
      "A mix of thoughts on money, happiness, and leverage. A collection of ideas about different kinds of freedom and what success means.",
  },
  {
    id: 40,
    author: "Nassim Nicholas Taleb",
    title: "The Black Swan",
    tags: [],
    image: "",
    description:
      "Half philosophy, half math. Taleb talks about rare events that change everything and why we never see them coming. It’s about learning to live in a world you can’t predict.",
  },
  {
    id: 41,
    author: "Albert-László Barabási",
    title: "The Formula",
    tags: [],
    image: "",
    description:
      "Looks at success from a scientific perspective: why some ideas spread and others vanish. Frames it as patterns of networks and timing.",
  },
  {
    id: 42,
    author: "Benjamin Graham",
    title: "The Intelligent Investor",
    tags: [],
    image: "",
    description:
      "A classic on thinking rationally about money. Graham focuses more on patience and judgment than on numbers.",
  },
  {
    id: 43,
    author: "George S. Clason",
    title: "The Richest Man in Babylon",
    tags: [],
    image: "",
    description: "",
  },
  {
    id: 44,
    author: "Henrik Kniberg",
    title: "Scrum and XP from the Trenches",
    tags: [],
    image: "",
    description: "",
  },
  {
    id: 45,
    author: "Nassim Nicholas Taleb",
    title: "Skin in the Game: Hidden Asymmetries in Daily Life",
    tags: [],
    image: "",
    description: "",
  },
  {
    id: 46,
    author: "Dale Carnegie",
    title: "The Art of Public Speaking",
    tags: [],
    image: "",
    description: "",
  },
  {
    id: 47,
    author: "Rick Rubin",
    title: "The Creative Act: A Way of Being",
    tags: [],
    image: "",
    description: "",
  },
  {
    id: 48,
    author: "Steven Bartlett",
    title: "The Diary of a CEO",
    tags: [],
    image: "",
    description: "",
  },
  {
    id: 49,
    author: "Jack Kerouac",
    title: "Wake Up",
    tags: [],
    image: "",
    description: "",
  },
  {
    id: 50,
    author: "Henry Kissinger, Eric Schmidt & Daniel Huttenlocher",
    title: "The Age of AI",
    tags: [],
    image: "",
    description: "",
  },
  {
    id: 51,
    author: "Will & Ariel Durant",
    title: "Lessons of History",
    tags: [],
    image: "",
    description: "",
  },
];

export default BOOKS;
