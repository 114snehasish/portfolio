import { IconType } from 'react-icons';
import { BsCapsule, BsCashStack, BsPerson } from 'react-icons/bs';
import { BiSolidPlaneTakeOff } from 'react-icons/bi';
import { ImLab } from 'react-icons/im';
import { TfiWrite } from 'react-icons/tfi';
import { SiApachemaven } from 'react-icons/si';

// Base interface with common properties
interface BaseExperienceItem {
  id: number;
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

// Create a data array with all experience items
export const experienceItems: ExperienceItem[] = [
  {
    id: 1,
    title: 'Portfolio Website v2',
    period: 'APR 2024 - June 2025',
    icon: BsPerson,
    keyOutcomes:
      'Developed a modern, responsive portfolio website utilizing $React$ and $TailwindCSS$ for efficient styling. Implemented $infrastructure as code$ principles with $Terraform$ for $Azure deployment$. Significantly enhanced development efficiency through $Vibe Coding$ techniques, which facilitated rapid code generation while maintaining high quality standards. Established a robust $CI/CD pipeline$ using $GitHub Actions$ for automated testing and deployment.',
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
    githubUrl: 'https://github.com/114snehasish/portfolio',
    liveUrl: 'https://www.snehasish-chakraborty.com',
  },

  {
    id: 2,
    title: 'Homelab',
    period: 'JAN 2025 - Present',
    icon: ImLab,
    keyOutcomes:
      'Designing and implementing a comprehensive $homelab environment$ for experimenting with $enterprise-grade technologies$. Establishing $infrastructure as code$ practices using $Terraform$, containerization with $Docker$ and $Portainer$, identity management via $Keycloak$, and DNS services with $Bind9$. This ongoing project is significantly enhancing my technical proficiency while providing hands-on experience. Future expansion plans include $Kubernetes$ for orchestration, $network segmentation$ for security, enhanced storage solutions, $GitOps workflows$ for deployment automation, $observability tools$ for monitoring, and increased utilization of $on-premises hardware$ with gradual migration away from cloud services. The project bridges theoretical knowledge with practical implementation skills in a structured learning environment.',
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
    githubUrl: 'https://github.com/114snehasish/portfolio.git',
  },
  {
    id: 3,
    title: 'Author of Spring Client Resolver Library',
    period: 'FEB 2023 - APR 2023',
    icon: SiApachemaven,
    keyOutcomes:
      'Created a $Spring Boot library$ that can detect $Client Information$ calling an endpoint, providing valuable insights for API monitoring and security. Through this project, I learned what it takes to become eligible to contribute to $Maven Central Repository$, including prerequisites such as comprehensive documentation and expandability. The library was intentionally designed with an $architecture$ that allows for easy extension, making it accessible for anyone willing to contribute and enhance its capabilities. This experience deepened my understanding of $open-source development$ principles and the importance of creating maintainable, well-documented code that can benefit the wider developer community.',
    skills: [
      'Spring Boot',
      'Java',
      'Maven Central',
      'API Development',
      'Open Source',
      'GitHub',
      'Git',
      'Documentation',
      'Extensible Architecture',
      'Library Design',
      'Community Engagement',
    ],
    type: 'Personal',
    githubUrl: 'https://github.com/114snehasish/spring-client-resolver',
  },
  {
    id: 4,
    title: 'Technical Squad Lead',
    company: 'American Airlines @ Cognizant',
    period: 'FEB 2023 - Present',
    icon: BiSolidPlaneTakeOff,
    rolesAndResponsibilities:
      'Leading the design and development of a key application used by $pilots$ for managing their schedules. Main tasks include gathering requirements, planning work, creating $technical solutions$, and guiding team members to meet business goals while keeping $code quality$ high. Also responsible for planning releases, handling $audit checks$, helping team members learn, and organizing tasks to improve how the team works.',
    keyOutcomes:
      "Successfully implemented $Active-Active architecture$ to enhance reliability and availability of $mission-critical system$ components. Orchestrated the strategic transformation of the product's network infrastructure to a $Hub/Spoke topology$, significantly improving scalability and performance. Formulated and executed comprehensive strategies for optimizing $production support processes$, resulting in enhanced system stability and reduced $incident resolution time$.",
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
    id: 5,
    title: 'Lead Developer',
    company: 'Western Union @ Cognizant',
    period: 'JAN 2022 - FEB 2023',
    icon: BsCashStack,
    rolesAndResponsibilities:
      'Responsibilities included analyzing $Low Level Design$ documents representing the $legacy Mainframe system$, designing $APIs$ to serve as interfaces and middleware for multiple downstream systems, and implementing these APIs using $Spring Boot$ and $AWS$. Existing $CI/CD pipelines$ were utilized for deployment to $AWS ECS/Fargate$. Additionally, junior developers were mentored and the overall development process was improved.',
    keyOutcomes:
      'Acquired hands-on experience with a variety of $DevOps tools$, deepening my understanding of $AWS services$ and applying this expertise to a separate $Hackathon project$. Successfully $mentored junior developers$, resulting in improved team performance and enhanced knowledge sharing. Contributed to the $early completion$ of a major project, which received positive feedback from stakeholders. Led the $knowledge transfer sessions$ during the project handover, ensuring a smooth transition and continuity of operations.',
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
    id: 6,
    title: 'Portfolio Website V1',
    period: 'APR 2021',
    icon: BsPerson,
    keyOutcomes:
      'Created a robust, fully $PWA capable$ portfolio website leveraging $React$, $TypeScript$, and $Gatsby$, with seamless deployment via $Cloudflare$. Achieved $perfect Lighthouse scores$ for performance and accessibility, demonstrating a commitment to technical excellence and user experience. Established a strong personal brand through strategic content development and effective $SEO$.',
    skills: [
      'React',
      'TypeScript',
      'Gatsby',
      'Cloudflare',
      'Web Hosting',
      'Content Strategy',
      'SEO',
      'Personal Branding',
    ],
    type: 'Personal',
    liveUrl: 'https://v1.snehasish-chakraborty.com',
  },
  {
    id: 7,
    title: 'Technical Content Writer',
    period: 'APR 2021 - Present',
    icon: TfiWrite,
    keyOutcomes:
      'This side endeavour has significantly deepened my expertise in $Wordpress$, $web hosting$, and $DNS management$, providing hands-on experience with industry-standard tools and best practices. Through $technical content creation$, I have honed my ability to distill complex concepts into accessible knowledge, benefiting a broad audience while reinforcing my own understanding. The process of technical writing has also served as a $creative outlet$, enabling me to explore innovative ideas and communicate them effectively, ultimately fostering both personal growth and community enrichment.',
    skills: [
      'Wordpress',
      'Cloudflare',
      'Web Hosting',
      'Content Strategy',
      'SEO',
      'Personal Branding',
    ],
    type: 'Personal',
    liveUrl: 'https://blogs.snehasish-chakraborty.com',
  },
  {
    id: 8,
    title: 'Architect & Lead Developer',
    company: 'Johnson & Johnson @ Tata Consultancy Services',
    period: 'FEB 2021 - DEC 2021',
    icon: BsCapsule,
    rolesAndResponsibilities:
      'Led the design and Development of a new application managing $training data$ for medical scientists. Responsibilities included gathering requirements, creating the architecture, and implementing the solution using $Spring Boot$ and $Angular$. Was part of architecting and developing the $E22 Authentication flow$ for another application from same business group, that manages related research data. This involved creating a new authentication flow using $Spring Security SAML$ and $Keycloak$, and implementing $RBAC$ for the application. Was also the $SPOC$ for all the audit needs which were carried out by external vendors.',
    keyOutcomes:
      'Engineered a robust $end-to-end authentication flow$ accommodating both $internal users$ via $Single Sign-On (SSO)$ and $external users$ through secure credential-based access. As these applications were exposed to the internet, all comprehensive $security audits$ were successfully passed with $A+ ratings$, earning full approval from external audit teams and demonstrating an exceptional standard of security with $zero vulnerabilities$ identified.',
    skills: [
      'Angular',
      'Spring Boot',
      'Spring Data Rest',
      'JIRA xray',
      'Keycloak',
      'Spring Security SAML',
      'RBAC',
      'AWS EC2',
      'Oracle 12c',
      'Agile',
    ],
    type: 'Professional',
  },
  {
    id: 9,
    title: 'Lead D2 Developer',
    company: 'Johnson & Johnson @ Tata Consultancy Services',
    period: 'MAR 2020 - FEB 2021',
    icon: BsCapsule,
    rolesAndResponsibilities:
      'Involved in the design and development of essential components for the $D2 application$, including the $Properties Page$, $D2 context$, $Auto Naming$ and $Auto Linking$, as well as $Lifecycle$ and $Workflow policies$. Spearheaded the creation of $D2 Plugins$ to deliver advanced, non-standard functionalities. Led the development of several custom $Spring Boot applications$ leveraging $D2FS$ and $DFC$, which served as an embedded web solution within the D2 Client to address complex business requirements.',
    keyOutcomes:
      'This project stands out as one of the most $challenging and formative experiences$ of my career, providing my first comprehensive exposure to $D2 as a product$. Navigating complex requirements and technical hurdles, I significantly honed my $critical thinking$ and $problem-solving abilities$. The demanding nature of the work shaped my approach to tackling intricate business needs, deepened my technical expertise, and set a strong foundation for future $leadership roles$.',
    skills: [
      'D2',
      'D2FS',
      'OpenText LSR&D',
      'D2 Plugin',
      'D2 Config',
      'DFC',
      'Spring Boot',
    ],
    type: 'Professional',
  },
  {
    id: 10,
    title: 'Architect & Lead Developer',
    company: 'Johnson & Johnson @ Tata Consultancy Services',
    period: 'FEB 2019 - FEB 2020',
    icon: BsCapsule,
    rolesAndResponsibilities:
      'Spearheaded my first comprehensive development project, independently mastering the intricacies of $Spring Boot$ and leveraging its extensive capabilities to architect and deliver robust, $full-featured applications$. Provided $mentorship$ and hands-on training to freshers, guiding them through best practices and advanced concepts in $enterprise application development$. Successfully managed the creation of multiple applications, each tailored to distinct technical requirements, demonstrating adaptability and a deep understanding of diverse business needs. Ensured high standards of $code quality$, $scalability$, and $maintainability$ throughout the project lifecycle.',
    keyOutcomes:
      'Achieved the successful and timely delivery of multiple $enterprise-grade products$ within a remarkably short timeframe, despite working with a lean team of only two associates who were recent graduates. My demonstrated performance and deep involvement in the organization led to my $early appointment$ to this pivotal role, entrusting me with $end-to-end responsibilities$ for architecting, developing, and delivering robust, full-featured enterprise applications. Notably, I introduced $SAML SSO$ for the first time within the entire account, which subsequently established my expertise in SAML implementations. This experience underscored my ability to lead, mentor, and execute complex projects with excellence, adaptability, and a commitment to the highest standards of quality and scalability.',
    skills: [
      'Spring Boot',
      'Spring Data JPA',
      'Spring Data LDAP',
      'Spring Security SAML',
      'RBAC',
      'Thymeleaf',
      'jQuery',
      'Java Swing',
      'D2FS',
      'VBA',
      'Mentorship',
    ],
    type: 'Professional',
  },
  {
    id: 11,
    title: 'Java Developer and Support Associate',
    company: 'Johnson & Johnson @ Tata Consultancy Services',
    period: 'APR 2016 - FEB 2019',
    icon: BsCapsule,
    rolesAndResponsibilities:
      'Served as the primary $production support$ and $on-call associate$, responsible for promptly addressing and resolving end user issues in a high-stakes $enterprise environment$. Consistently went above and beyond the core support role by proactively identifying operational bottlenecks and implementing innovative $process improvements$. Designed and developed robust $support automations$ that significantly streamlined incident management, reduced manual intervention, and delivered measurable efficiency gains. Demonstrated a strong commitment to $operational excellence$ by driving continuous improvement initiatives, optimizing workflows, and fostering a culture of knowledge sharing within the team.',
    keyOutcomes:
      'Support automations delivered measurable efficiency gains, saving more than $100% of Full-Time Equivalent (FTE)$ effort across the portfolio. My early and proactive engagement with a multitude of process and product improvements—through $automation$ and $interface development$—led to a much broader role within a few years, where I became the $subject matter expert$ responsible for leading a major development effort.',
    skills: [
      'Java',
      'DFC',
      'VBA',
      'Documentum',
      'IBM SCORE',
      'IBM WebSphere',
      'DqMan',
      'End User Engagement',
      'Email Communication',
      'Live Problem Solving',
      'Automation',
      'Production Monitoring',
    ],
    type: 'Professional',
  },
];
