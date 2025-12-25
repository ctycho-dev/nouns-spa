// --- MOCK DATA ---

export const PROJECTS = [
  {
    id: 1,
    name: 'NounsDAO',
    role: 'Governance Participant',
    roleType: 'Contributor', // blue
    description: 'CC0 generative avatar community funding public goods. One Noun, every day, forever.',
    highlight: 'Passed Prop 450, contributing to treasury diversification.',
    status: 'Active',
    category: 'ACTIVE',
    accent: '#D63C5E', // Nouns Red
    link: '#'
  },
  {
    id: 2,
    name: 'AthenaX',
    role: 'Founder',
    roleType: 'Founder', // red
    description: 'AI-powered governance and collective decision-making infrastructure.',
    status: 'Active',
    category: 'ACTIVE',
    accent: '#5B93DB', // Nouns Blue
    link: '#'
  },
  {
    id: 3,
    name: 'Governonu',
    role: 'Lead Builder',
    roleType: 'Contributor', // blue
    description: 'Specialized governance tooling and analytics for the Polkadot ecosystem.',
    status: 'Building',
    category: 'ACTIVE',
    accent: '#E58C4B', // Nouns Orange
    link: '#'
  },
  {
    id: 4,
    name: 'Nounify JS',
    role: 'Advisor',
    roleType: 'Advisor', // yellow
    description: 'A lightweight library for generating Noun-style avatars in-browser.',
    status: 'Completed',
    category: 'SHIPPED',
    accent: '#51B86A', // Nouns Green
    link: '#'
  }
];

export const BOOKS = [
  { id: 1, title: 'The Sovereign Individual', author: 'James Dale Davidson', year: 2025, rating: 'LIFE-CHANGING', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200' },
  { id: 2, title: 'Finite and Infinite Games', author: 'James P. Carse', year: 2025, rating: 'LIFE-CHANGING', cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=200' },
  { id: 3, title: 'Technopoly', author: 'Neil Postman', year: 2024, rating: 'LIKED', cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=200' },
  { id: 4, title: 'Understanding Media', author: 'Marshall McLuhan', year: 2023, rating: 'LIKED', cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=200' },
];

export const WRITING = [
  { title: 'The On-Chain Renaissance', platform: 'Mirror', year: '2024', desc: 'Exploring how CC0 and DAOs are reshaping artistic ownership.' },
  { title: 'Governance as a Product', platform: 'Substack', year: '2023', desc: 'Why the next billion users need invisible governance layers.' },
  { title: 'Nouns: A Case Study in Proliferation', platform: 'Forefront', year: '2023', desc: 'Analyzing the velocity of Nounish branding.' },
];

export const EXTERNAL_ESSAYS = [
  { title: 'The Garden and the Stream', author: 'Mike Caulfield', source: 'Web', year: '2015', rec: 'Fundamental text on digital gardening vs digital noise.', star: true },
  { title: 'How to Build a Small Web', author: 'Parimal Satyal', source: 'Personal Site', year: '2020', rec: 'The manifesto for why internoun.wtf exists.', star: false },
];
