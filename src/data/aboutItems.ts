import { IconType } from 'react-icons';
import {
  FaLaptopCode,
  FaUserTie,
  FaCloud,
  FaHandshake,
  FaGamepad,
} from 'react-icons/fa6';

// Define interface for about items
export interface AboutItem {
  id: string;
  icon: IconType;
  text: string[];
  highlights: string[];
}

// Create data array with all paragraphs
export const aboutItems: AboutItem[] = [
  {
    id: 'career-start',
    icon: FaLaptopCode,
    text: [
      'I began my career as a ',
      ', rapidly establishing myself as a pivotal team member by contributing significantly to diverse projects and initiatives.',
    ],
    highlights: ['Junior Documentum Developer'],
  },
  {
    id: 'team-lead',
    icon: FaUserTie,
    text: [
      'Within next ',
      ', I advanced to the role of ',
      ', where I successfully orchestrated the ',
      ' of multiple products across various ',
      '.',
    ],
    highlights: [
      'three years',
      'Team Lead',
      'End-to-End Delivery',
      'Tech Stacks',
    ],
  },
  {
    id: 'cloud-expertise',
    icon: FaCloud,
    text: [
      'In subsequent years, I expanded my expertise in ',
      ' and ',
      ', architecting and leading the development of numerous products across multiple projects and business domains.',
    ],
    highlights: ['Cloud', 'DevOps'],
  },
  {
    id: 'trust',
    icon: FaHandshake,
    text: [
      'A highlight of my career has been the ',
      ' entrusted to me upon joining new teams, where colleagues quickly recognize my ability to effectively manage and ',
      '.',
    ],
    highlights: ['trust and responsibility', 'resolve complex situations'],
  },
  {
    id: 'hobbies',
    icon: FaGamepad,
    text: [
      'In my free time, I love diving into ',
      " that let me tinker and explore new ideas. I'm a bit of a tech enthusiast, always curious about ",
      ' and finding ways to automate my home with ',
      " setups. And when it's time to unwind, you'll find me immersed in ",
      ', enjoying the thrill and creativity they offer.',
    ],
    highlights: [
      'Side Projects',
      'Computer Hardware',
      'HomeLab',
      'Video Games',
    ],
  },
];
