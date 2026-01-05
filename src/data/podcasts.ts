export type Podcast = {
  id: number;
  name: string;
  link: string;
  description?: string;
};

const PODCASTS: Podcast[] = [
  {
    id: 1,
    name: "Predictive History with Professor Jiang",
    link: "https://www.youtube.com/@PredictiveHistory",
  },
  {
    id: 2,
    name: "Andrew Huberman",
    link: "https://www.youtube.com/@hubermanlab/videos",
  },
  {
    id: 3,
    name: "Lex Fridman Podcast",
    link: "https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584",
  },
  {
    id: 4,
    name: "The a16z Show",
    link: "https://a16z.com/podcasts/a16z-show/",
  },
  {
    id: 5,
    name: "The MAD Podcast with Matt Turck",
    link: "https://www.youtube.com/@DataDrivenNYC/videos",
  },
];

export default PODCASTS;
