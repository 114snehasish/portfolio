import { IconType } from 'react-icons';
import {
  FaBriefcase,
  FaCloud,
  FaCode,
  FaLaptop,
  FaLaptopCode,
  FaServer,
} from 'react-icons/fa6';

// Define interface for experience items
export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  icon: IconType;
  description: string;
  skills: string[];
  type: 'Personal' | 'Professional'; // Type of experience
}

// Create data array with all experience items
export const experienceItems: ExperienceItem[] = [
  {
    id: 'senior-developer',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    icon: FaLaptopCode,
    description:
      'Leading development of enterprise applications using modern technologies. Architecting cloud-native solutions and mentoring junior developers. Implementing CI/CD pipelines and ensuring code quality through automated testing.',
    skills: [
      'Angular',
      'Spring Boot',
      'Azure',
      'Terraform',
      'GitHub Actions',
      'Microservices',
      'DevOps',
    ],
    type: 'Professional',
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Solutions Engineer',
    company: 'CloudSys Solutions',
    period: '2019 - 2021',
    icon: FaCloud,
    description:
      'Designed and implemented cloud infrastructure for enterprise clients. Migrated on-premise applications to cloud platforms. Optimized cloud resources for cost efficiency while maintaining high availability and performance.',
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
    description:
      'Developed and maintained RESTful APIs and microservices. Implemented database solutions and optimized query performance. Collaborated with frontend developers to integrate backend services with user interfaces.',
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
    description:
      'Started as a junior developer working on web applications. Gained experience in full-stack development and agile methodologies. Participated in code reviews and contributed to team projects.',
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
    description:
      'Completed a year-long internship program while finishing university studies. Assisted senior developers with coding tasks and learned industry best practices. Developed small features for web applications.',
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
    company: 'Personal Project',
    period: '2023',
    icon: FaLaptop,
    description:
      'Designed and developed a personal portfolio website to showcase my skills and experience. Implemented responsive design, animations, and modern UI/UX principles. Used React and TypeScript to create a maintainable and scalable codebase.',
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
  },
];
