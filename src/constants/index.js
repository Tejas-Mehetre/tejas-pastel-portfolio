import {
  frontend,
  backend,
  aiml,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  go,
  python,
  cpp,
  aws3,
  mongodb,
  avcoe,
  awsbadge,
  kubernetes,
  nextjs,
  java,
  express,
  meetai,
  resumeparser,
  stayfinder,
  kyc,
  dotnet,
  sql,
  fullstack,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'resume',
    title: 'Resume',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Cloud Enthusiast',
    icon: aws3,
  },
  {
    title: 'AI/ML Explorer',
    icon: aiml,
  },
];

const technologies = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Dotnet',
    icon: dotnet,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'C#',
    icon: python,
  },
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'aws',
    icon: aws3,
  },
  {
    name: 'Git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company_name: 'Sumago Infotech Pvt Ltd',
    icon: fullstack,
    iconBg: '#f0f0f0',
    date: 'Jan 2025 - Mar 2025',
    points: [
      'Built and deployed a Property Listing and Booking Website',
      'Implemented authentication, CRUD operations, and booking workflows',
      'Designed scalable NoSQL database schema using MongoDB',
      'Led a team of 6 developers as project coordinator',
    ],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Meet.AI',
    description:
      'A SaaS AI agent video call platform with real-time interaction, transcript generation, and AI summaries using OpenAI, Stream, and Drizzle ORM.',
    tags: [
      { name: 'next.js', color: 'blue-text-gradient' },
      { name: 'tRPC', color: 'green-text-gradient' },
      { name: 'postgresql', color: 'pink-text-gradient' },
    ],
    image: meetai,
    repo: 'https://github.com/ChetanThorat18/Meet-AI',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Resume Sorting using NLP',
    description:
      'A resume parser that uses NLP to classify and rank resumes based on job descriptions using spaCy, NLTK, and machine learning.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'nlp', color: 'green-text-gradient' },
      { name: 'machine-learning', color: 'pink-text-gradient' },
    ],
    image: resumeparser,
    repo: 'https://github.com/ChetanThorat18/Resume-Parser-Using-AI',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'StayFinder',
    description:
      'Property listing and booking web app built with MERN stack including full CRUD functionality and user authentication.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'node.js', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: stayfinder,
    repo: 'https://github.com/ChetanThorat18/StayFinder',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'KYC-Verification',
    description:
      'A blockchain-based KYC documents verification platform ensuring secure, tamper-proof identity verification using smart contracts and IPFS.',
    tags: [
      { name: 'blockchain', color: 'green-text-gradient' },
      { name: 'solidity', color: 'blue-text-gradient' },
      { name: 'ipfs', color: 'pink-text-gradient' },
    ],
    image: kyc,
    repo: 'https://github.com/ChetanThorat18/KYC-Verification-Using-Blockchain',
    demo: '',
  }
];

export { services, technologies, experiences, projects };