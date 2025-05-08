import { IconType } from 'react-icons';
import { FaWrench } from 'react-icons/fa6';
import { MdOutlineBusinessCenter, MdOutlineComputer } from 'react-icons/md';
import { BsClockHistory } from 'react-icons/bs';
import { FaRegMoon } from 'react-icons/fa';
import { RiRobot2Line } from 'react-icons/ri';

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
    id: 'the-nine-to-five',
    title: 'The Nine to Fives',
    icon: MdOutlineComputer,
    description:
      'Wrangling code during business hours, I turn caffeine into enterprise-ready apps—delivering ' +
      'solutions before the clock strikes five.',
    skills: ['Angular', 'Spring Boot', 'Azure', 'Terraform', 'GitHub Actions'],
  },
  {
    id: 'night-owl',
    title: 'Night Owl',
    icon: FaRegMoon,
    description:
      'Fueled by curiosity and the quiet buzz of midnight, I chase ambitious side-projects and tinker ' +
      'with new tech—because true innovation can’t wait for sunrise.',
    skills: [
      'Docker',
      'Cloudflare',
      'HomeLab',
      'Proxmox',
      'Oracle VM VirtualBox',
      'Keycloak',
      'Okta',
      'Azure',
    ],
  },
  {
    id: 'relics-from-the-past',
    title: 'Relics from the Past',
    icon: BsClockHistory,
    description:
      'A showcase of tools and platforms I’ve wrangled in the past—each a chapter in my tech ' +
      'journey, proving that every skill leaves its mark on how I build today.',
    skills: [
      'DFC',
      'D2 Config',
      'D2FS',
      'AWS',
      'CloudFormation',
      'VBA',
      'Android',
      'Unity',
    ],
  },
  {
    id: 'entrepreneurial-mindset',
    title: 'The Entrepreneur in Me',
    icon: MdOutlineBusinessCenter,
    description:
      'I don’t just build products—I build brands. From idea to launch, I blend creativity, ' +
      'technology, and a dash of hustle to craft digital experiences that stand out in the crowd.',
    skills: [
      'Wordpress',
      'Keycloak',
      'Cloudflare',
      'DigitalOcean',
      'React',
      'Gatsby',
      'Hostinger',
    ],
  },
  {
    id: 'ai',
    title: 'And some AI at the end',
    icon: RiRobot2Line,
    description:
      'Crafting clever solutions with a touch of (artificial) intelligence—don’t worry, this ' +
      'line was written with just the right amount of AI assistance.',
    skills: [
      'Ollama',
      'LMStudio',
      'GitHub Copilot',
      'Jetbrains AI',
      'Cursor',
      'Warp',
    ],
  },
  {
    id: 'tools',
    title: 'Weapon of Choice',
    icon: FaWrench,
    description:
      'Armed with a toolbox full of JetBrains gear, I pitch IntelliJ to friends with such enthusiasm,' +
      ' you’d think I moonlight as their top salesperson (commission sadly not included) —all while' +
      ' quietly letting Spotify’s lofi beats keep my productivity on repeat.',
    skills: [
      'IntelliJ IDEA Ultimate',
      'Webstorm',
      'Rider',
      'Basically All Jetbrains Tools',
      'Postman',
      'MacOS',
      'Windows',
      'Linux',
      'Warp',
    ],
  },
];
