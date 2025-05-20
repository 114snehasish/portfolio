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
  rolesAndResponsibilities: string;
  keyOutcomes: string;
  skills: string[];
  type: 'Personal' | 'Professional'; // Type of experience
  githubUrl?: string; // Optional GitHub URL for personal projects
  liveUrl?: string; // Optional live URL for personal projects
}

// Create data array with all experience items
export const experienceItems: ExperienceItem[] = [
  {
    id: 'senior-developer',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    icon: FaLaptopCode,
    rolesAndResponsibilities:
      'Leading development of enterprise applications using modern technologies. Architecting cloud-native solutions and mentoring junior developers. Responsible for technical design decisions and code reviews.',
    keyOutcomes:
      'Successfully implemented CI/CD pipelines reducing deployment time by 40%. Improved code quality metrics through automated testing and reduced production bugs by 30%.',
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
    company: 'Personal Project',
    period: '2023',
    icon: FaLaptop,
    rolesAndResponsibilities:
      'Designed and developed a personal portfolio website to showcase my skills and experience. Managed all aspects of the project from design to deployment. Implemented responsive design and modern UI/UX principles.',
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
