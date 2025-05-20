import { IconType } from 'react-icons';
import { FaBriefcase, FaCode, FaLaptop } from 'react-icons/fa6';
import { BsCashStack, BsHouse, BsPerson } from 'react-icons/bs';
import { BiSolidPlaneTakeOff } from 'react-icons/bi';

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
    icon: BsPerson,
    keyOutcomes:
      'Developed a modern, responsive portfolio website utilizing React and TailwindCSS for efficient styling. Implemented infrastructure as code principles with Terraform for Azure deployment. Significantly enhanced development efficiency through Vibe Coding techniques, which facilitated rapid code generation while maintaining high quality standards. Established a robust CI/CD pipeline using GitHub Actions for automated testing and deployment.',
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
      'Vibe Coding',
      'Content Strategy',
      'SEO',
    ],
    type: 'Personal',
    githubUrl: 'https://github.com/username/portfolio-v2',
    liveUrl: 'https://portfolio-v2-demo.example.com',
  },

  {
    id: 'homelab',
    title: 'Homelab',
    period: 'JAN 2025 - Present',
    icon: BsHouse,
    keyOutcomes:
      'Designing and implementing a comprehensive homelab environment for experimenting with enterprise-grade technologies. Establishing infrastructure as code practices using Terraform, containerization with Docker and Portainer, identity management via Keycloak, and DNS services with Bind9. This ongoing project is significantly enhancing my technical proficiency while providing hands-on experience. Future expansion plans include Kubernetes for orchestration, network segmentation for security, enhanced storage solutions, GitOps workflows for deployment automation, observability tools for monitoring, and increased utilization of on-premises hardware with gradual migration away from cloud services. The project bridges theoretical knowledge with practical implementation skills in a structured learning environment.',
    skills: [
      'Virtual Machine (Type 2 Hypervisor)',
      'Linux',
      'Azure',
      'Terraform',
      'GitHub Actions',
      'Docker',
      'Keycloak',
      'Portainer',
      'Bind9',
    ],
    type: 'Personal',
    githubUrl: 'https://github.com/username/tech-blog',
  },
  {
    id: 'technical-squad-lead',
    title: 'Technical Squad Lead',
    company: 'American Airlines @ Cognizant',
    period: 'FEB 2023 - Present',
    icon: BiSolidPlaneTakeOff,
    rolesAndResponsibilities:
      'Spearheading the architectural design and development lifecycle of a mission-critical application utilized by pilots for schedule management. Responsibilities encompass comprehensive requirement analysis, backlog refinement, technical design implementation, and mentoring team members to expedite business objective achievement while ensuring adherence to code quality standards. Additionally, orchestrating release planning and deployment strategies for the team. Further accountabilities include managing external audit compliance, facilitating professional development through structured knowledge transfer sessions, and implementing systematic work item organization methodologies to optimize delivery efficiency.',
    keyOutcomes:
      "Successfully implemented Active-Active architecture to enhance reliability and availability of mission-critical system components. Orchestrated the strategic transformation of the product's network infrastructure to a Hub/Spoke topology, significantly improving scalability and performance. Formulated and executed comprehensive strategies for optimizing production support processes, resulting in enhanced system stability and reduced incident resolution time.",
    skills: [
      'Spring Boot',
      'Angular',
      'Azure App Services',
      'Azure Logic Apps',
      'Azure Functions',
      'Azure Key Vault',
      'Azure SQL Database',
      'Azure Storage',
      'Azure Container Instances',
      'Azure Traffic Manager',
      'Terraform',
      'GitHub Actions',
      'Mentorship',
      'Innovation',
      'Problem Solving',
      'Process Improvement',
    ],
    type: 'Professional',
  },
  {
    id: 'lead-developer',
    title: 'Lead Developer',
    company: 'Western Union @ Cognizant',
    period: 'JAN 2022 - FEB 2023',
    icon: BsCashStack,
    rolesAndResponsibilities:
      'Developed and maintained RESTful APIs and microservices. Implemented database solutions and optimized query performance. Collaborated with frontend developers to integrate backend services with user interfaces.',
    keyOutcomes:
      'Improved API response times by 60% through query optimization and caching strategies. Successfully delivered 5 major feature releases with zero critical bugs reported in production.',
    skills: [
      'Spring Boot',
      'AWS ECS',
      'AWS Fargate',
      'AWS Lambda',
      'CloudFormation',
      'API Gateway',
      'Microservices',
      'CloudWatch',
      'Jenkins',
      'Spinnaker',
      'Apache Airflow',
      'Mentorship',
      'Process Improvement',
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
