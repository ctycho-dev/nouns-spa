export type Podcast = {
  id: number;
  name: string;
  link: string;
  description?: string;
  imageUrl?: string;
};

const BASE_URL = "https://internoun.mypinx.store/";
const BOOKS_DIR = "project_icons/";

const PODCASTS: Podcast[] = [
  {
    id: 1,
    name: "The Tim Ferriss Show",
    link: "https://www.youtube.com/playlist?list=PLuu6fDad2eJyWPm9dQfuorm2uuYHBZDCB",
    imageUrl: `${BASE_URL}${BOOKS_DIR}tim%20ferris%20show.png`,
  },
  {
    id: 2,
    name: "Making Sense with Sam Harris",
    link: "https://www.youtube.com/channel/UCNAxrHudMfdzNi6NxruKPLw",
    imageUrl: `${BASE_URL}${BOOKS_DIR}making%20sense%20with%20sam%20harris.jpg`,
  },
  {
    id: 3,
    name: "Conversations with Tyler",
    link: "https://open.spotify.com/show/0Z1234tGXD2hVhjFrrhJ7g",
    imageUrl: `${BASE_URL}${BOOKS_DIR}conversations%20with%20tyler%20poscast.webp`,
  },
  {
    id: 4,
    name: "This Week in Startups",
    link: "https://open.spotify.com/show/6ULQ0ewYf5zmsDgBchlkr9",
    imageUrl: `${BASE_URL}${BOOKS_DIR}this%20week%20in%20startups.jpg`,
  },
  {
    id: 5,
    name: "Acquired",
    link: "https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp",
    imageUrl: `${BASE_URL}${BOOKS_DIR}acquired%20podcast.jpeg`,
  },
  {
    id: 6,
    name: "Hard Fork",
    link: "https://open.spotify.com/show/44fllCS2FTFr2x2kjP9xeT",
    imageUrl: `${BASE_URL}${BOOKS_DIR}hard%20fork%20podcast.jpeg`,
  },
  {
    id: 7,
    name: "80,000 Hours Podcast",
    link: "https://80000hours.org/podcast/",
    imageUrl: `${BASE_URL}${BOOKS_DIR}80,000%20hours%20podcast.jpeg`,
  },
  {
    id: 8,
    name: "The Ezra Klein Show",
    link: "https://www.youtube.com/c/EzraKleinShow",
    imageUrl: `${BASE_URL}${BOOKS_DIR}ezra%20klein.jpeg`,
  },
  {
    id: 9,
    name: "Philosophize This!",
    link: "https://open.spotify.com/show/2Shpxw7dPoxRJCdfFXTWLE",
    imageUrl: `${BASE_URL}${BOOKS_DIR}Philosophize%20This!%20.jpeg`,
  },
  {
    id: 10,
    name: "Economist Podcast",
    link: "https://open.spotify.com/show/2ZFDmgDS2Z6xccP51s1zFQ",
    imageUrl: `${BASE_URL}${BOOKS_DIR}economist%20podcast.png`,
  },
  {
    id: 11,
    name: "Wordly",
    link: "https://open.spotify.com/show/2ChhfoVUC3abZJn9geRvQn",
    imageUrl: `${BASE_URL}${BOOKS_DIR}wordly.jpeg`,
  },
];

export default PODCASTS;
