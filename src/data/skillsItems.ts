import { IconType } from 'react-icons';
import {
  FaReact,
  FaNodeJs,
  FaCloud,
  FaDocker,
  FaDatabase,
  FaWrench,
} from 'react-icons/fa6';

// Define interface for skills categories
export interface SkillCategory {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  skills: string[];
}

// Create data array with all skill categories
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: FaReact,
    description:
      'Building responsive and interactive user interfaces with modern frameworks and libraries.',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
      'Redux',
      'TailwindCSS',
      'Material UI',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: FaNodeJs,
    description:
      'Developing robust server-side applications with focus on performance and scalability.',
    skills: [
      'Node.js',
      'Express',
      'Spring Boot',
      'Java',
      'RESTful APIs',
      'GraphQL',
      'Microservices',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Technologies',
    icon: FaCloud,
    description:
      'Leveraging cloud platforms to deploy scalable and resilient applications.',
    skills: [
      'AWS',
      'Azure',
      'GCP',
      'Serverless',
      'Terraform',
      'CloudFormation',
      'IAM',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    icon: FaDocker,
    description:
      'Implementing continuous integration and deployment pipelines for efficient software delivery.',
    skills: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'GitLab CI',
      'Ansible',
      'Monitoring & Logging',
    ],
  },
  {
    id: 'database',
    title: 'Database & Storage',
    icon: FaDatabase,
    description:
      'Working with various database technologies for efficient data management.',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'ElasticSearch',
      'DynamoDB',
      'Data Modeling',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Methodologies',
    icon: FaWrench,
    description:
      'Utilizing various tools and following best practices for software development.',
    skills: [
      'Git',
      'Agile/Scrum',
      'JIRA',
      'Confluence',
      'Unit Testing',
      'Integration Testing',
      'Performance Optimization',
    ],
  },
];
