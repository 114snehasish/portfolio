import { IconType } from 'react-icons';
import {
  FaBriefcase,
  FaCloud,
  FaCode,
  FaLaptop,
  FaLaptopCode,
  FaServer,
} from 'react-icons/fa6';

// Base interface with common properties
interface BaseExperienceItem {
  id: string;
  title: string;
  period: string;
  icon: IconType;
  keyOutcomes: string;
  skills: string[];
}

// Personal experience type
interface PersonalExperienceItem extends BaseExperienceItem {
  type: 'Personal';
  githubUrl?: string; // GitHub URL for personal projects
  liveUrl?: string; // Live URL for personal projects
}

// Professional experience type
interface ProfessionalExperienceItem extends BaseExperienceItem {
  type: 'Professional';
  company: string; // Required for Professional experience
  rolesAndResponsibilities: string;
}

// Union type combining both experience types
export type ExperienceItem =
  | PersonalExperienceItem
  | ProfessionalExperienceItem;

// Create data array with all experience items
export const experienceItems: ExperienceItem[] = [
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website v2',
    period: 'APR 2024 - June 2025',
    icon: FaLaptopCode,
    keyOutcomes: '',
    skills: [
      'React',
      'Vite',
      'TailwindCSS',
      'Azure Static App Service',
      'Terraform',
      'GitHub Actions',
      'Cursor',
      'WebStorm',
      'Jetbrains Junie',
    ],
    type: 'Personal',
    githubUrl: 'https://github.com/username/portfolio-v2',
    liveUrl: 'https://portfolio-v2-demo.example.com',
  },

  {
    id: 'personal-blog',
    title: 'Personal Tech Blog',
    period: '2022 - Present',
    icon: FaLaptopCode,
    keyOutcomes:
      'Published over 20 technical articles that have helped developers solve common problems. Built a growing audience of tech enthusiasts and received positive feedback from the developer community.',
    skills: [
      'Technical Writing',
      'JavaScript',
      'React',
      'Web Performance',
      'SEO',
      'Content Strategy',
      'Gatsby',
    ],
    type: 'Personal',
    githubUrl: 'https://github.com/username/tech-blog',
    liveUrl: 'https://tech-blog-demo.example.com',
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Solutions Engineer',
    company: 'CloudSys Solutions',
    period: '2019 - 2021',
    icon: FaCloud,
    rolesAndResponsibilities:
      'Designed and implemented cloud infrastructure for enterprise clients. Migrated on-premise applications to cloud platforms. Led technical discussions with clients to understand requirements and propose solutions.',
    keyOutcomes:
      'Optimized cloud resources for cost efficiency resulting in 25% reduction in monthly cloud expenses. Achieved 99.9% uptime for critical applications through robust architecture design.',
    skills: [
      'AWS',
      'Azure',
      'Terraform',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Infrastructure as Code',
    ],
    type: 'Professional',
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    company: 'DataFlow Systems',
    period: '2017 - 2019',
    icon: FaServer,
    rolesAndResponsibilities:
      'Developed and maintained RESTful APIs and microservices. Implemented database solutions and optimized query performance. Collaborated with frontend developers to integrate backend services with user interfaces.',
    keyOutcomes:
      'Improved API response times by 60% through query optimization and caching strategies. Successfully delivered 5 major feature releases with zero critical bugs reported in production.',
    skills: [
      'Java',
      'Spring Framework',
      'SQL',
      'MongoDB',
      'RabbitMQ',
      'API Design',
      'Microservices',
    ],
    type: 'Professional',
  },
  {
    id: 'junior-developer',
    title: 'Junior Software Developer',
    company: 'CodeCraft Solutions',
    period: '2015 - 2017',
    icon: FaCode,
    rolesAndResponsibilities:
      'Started as a junior developer working on web applications. Participated in daily stand-ups and sprint planning. Collaborated with senior developers on feature implementation and bug fixes.',
    keyOutcomes:
      'Gained experience in full-stack development and agile methodologies. Successfully contributed to 3 major client projects with positive feedback. Improved code quality through active participation in code reviews.',
    skills: [
      'JavaScript',
      'HTML/CSS',
      'React',
      'Node.js',
      'SQL',
      'Git',
      'Agile',
    ],
    type: 'Professional',
  },
  {
    id: 'intern',
    title: 'Software Development Intern',
    company: 'TechStart Innovations',
    period: '2014 - 2015',
    icon: FaBriefcase,
    rolesAndResponsibilities:
      'Completed a year-long internship program while finishing university studies. Assisted senior developers with coding tasks and bug fixes. Participated in team meetings and learning sessions.',
    keyOutcomes:
      'Learned industry best practices and development workflows. Developed small features for web applications that were successfully deployed to production. Received mentorship that established a strong foundation for future roles.',
    skills: [
      'Java',
      'JavaScript',
      'HTML/CSS',
      'SQL',
      'Version Control',
      'Teamwork',
    ],
    type: 'Professional',
  },
  {
    id: 'personal-portfolio',
    title: 'Portfolio Website',
    period: '2023',
    icon: FaLaptop,
    keyOutcomes:
      'Created a maintainable and scalable codebase using React and TypeScript. Achieved perfect Lighthouse scores for performance and accessibility. Received positive feedback from industry professionals on design and user experience.',
    skills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Design',
      'UI/UX',
      'Git',
      'Vite',
    ],
    type: 'Personal',
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.example.com',
  },
];
