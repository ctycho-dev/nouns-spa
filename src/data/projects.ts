type Project = {
  id: number;
  name: string;
  role: "Founder" | "Core Contributor" | "Contributor" | "Advisor";
  description: string;
  highlight?: string;
  status: "Active" | "Building" | "Completed";
  color: string; // Hex color code
  link: string;
  logo?: string; // Logo URL
};

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "NounsDAO",
    role: "Core Contributor",
    description:
      "NounsDAO is a decentralized autonomous organization funding public goods and experimental projects through daily NFT auctions, governed entirely on-chain by Noun holders.",
    // highlight: 'Passed Prop 450, contributing to treasury diversification.',
    status: "Active",
    color: "#D63C5E",
    link: "https://nouns.wtf",
    logo: "https://internoun.mypinx.store/nouns%20logo.jpg",
  },
  {
    id: 2,
    name: "AthenaX",
    role: "Core Contributor",
    description:
      "AthenaX is a decentralized incubator powered by Nouns, focused on accelerating early-stage projects.",
    status: "Active",
    color: "#5B93DB",
    link: "https://athenax.co",
    logo: "https://internoun.mypinx.store/athena.jpg",
  },
  {
    id: 3,
    name: "Governoun",
    role: "Core Contributor",
    description:
      "Governoun is an autonomous governance agent built on Polkadot, designed to assist DAOs with proposal analysis, voting intelligence, and on-chain governance execution.",
    status: "Active",
    color: "#E58C4B",
    link: "https://forum.polkadot.network/t/decentralized-voices-cohort-5-application-light-track-governoun-ai-governance-agent/14335/5?u=internoun",
    logo: "https://internoun.mypinx.store/governoun%20logo.jpg",
  },
  {
    id: 4,
    name: "Nudge.xyz",
    role: "Core Contributor",
    description:
      "Nudge.xyz is a reallocation network where users earn rewards by shifting their assets, liquidity, and activity to high-value opportunities, and protocols can incentivize desired on-chain behavior.",
    status: "Active",
    color: "#51B86A",
    link: "https://nudge.xyz",
    logo: "https://internoun.mypinx.store/Nudge.xyz%20logo.jpeg",
  }
  // {
  //   id: 5,
  //   name: "Glitter Protocol",
  //   role: "Core Contributor",
  //   description:
  //     "Glitter Protocol is a blockchain-based data platform designed to store, manage, and enhance global data using decentralized infra, enabling secure access, programmable interactions, and privacy-preserving coordination.",
  //   status: "Active",
  //   color: "#F2C94C",
  //   link: "https://glitterprotocol.io",
  //   logo: "https://internoun.mypinx.store/Glitter.png",
  // }
];

export default PROJECTS;