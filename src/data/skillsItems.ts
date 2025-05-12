import { IconType } from 'react-icons';
import { FaWrench } from 'react-icons/fa6';
import { MdOutlineComputer, MdTranslate } from 'react-icons/md';
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
      'solutions before the clock strikes five. Occasionally, the clock and I disagree on when five actually is.',
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
      'WordPress',
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
    id: 'polyglot',
    title: 'The Polyglot of SiliconLand',
    icon: MdTranslate,
    description:
      'Comfortable with many programming languages—and ready for the day when English itself becomes ' +
      'the ultimate coding language (heaven help my spellcheck).',
    skills: ['Java', 'JavaScript', 'TypeScript', 'HCL', 'C#'],
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
      'Postman',
      'MacOS',
      'Windows',
      'Linux',
      'Warp',
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
];
