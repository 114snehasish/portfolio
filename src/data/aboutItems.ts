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
  text: string;
}

// Create data array with all paragraphs
export const aboutItems: AboutItem[] = [
  {
    id: 'career-start',
    icon: FaLaptopCode,
    text: 'I began my career as a $Junior Documentum Developer$, rapidly establishing myself as a pivotal team member by contributing significantly to diverse projects and initiatives.',
  },
  {
    id: 'team-lead',
    icon: FaUserTie,
    text: 'Within next $three years$, I advanced to the role of $Team Lead$, where I successfully orchestrated the $End-to-End Delivery$ of multiple products across various $Tech Stacks$.',
  },
  {
    id: 'cloud-expertise',
    icon: FaCloud,
    text: 'In subsequent years, I expanded my expertise in $Cloud$ and $DevOps$, architecting and leading the development of numerous products across multiple projects and business domains.',
  },
  {
    id: 'trust',
    icon: FaHandshake,
    text: 'A highlight of my career has been the $trust and responsibility$ entrusted to me upon joining new teams, where colleagues quickly recognize my ability to effectively manage and $resolve complex situations$.',
  },
  {
    id: 'hobbies',
    icon: FaGamepad,
    text: "In my free time, I love diving into $Side Projects$ that let me tinker and explore new ideas. I'm a bit of a tech enthusiast, always curious about $Computer Hardware$ and finding ways to automate my home with $HomeLab$ setups. And when it's time to unwind, you'll find me immersed in $Video Games$, enjoying the thrill and creativity they offer.",
  },
];
