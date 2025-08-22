import { IconType } from 'react-icons';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPlaystation,
  FaSteam,
  FaXbox,
  FaXTwitter,
  FaFilePdf,
} from 'react-icons/fa6';

// Define interface for contact social links
export interface SocialLink {
  name: string;
  icon: IconType;
  href: string;
  label: string;
  description: string;
}

// Create data array with all social links
export const socialLinks: SocialLink[] = [
  {
    name: 'CV',
    icon: FaFilePdf,
    href: '/Snehasish_Chakraborty_CV.pdf',
    label: 'Download CV',
    description:
      'Grab my CV - where I make debugging sound heroic and coffee breaks look strategic!',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:114snehasish@gmail.com',
    label: '114snehasish@gmail.com',
    description:
      'Drop me a line and I promise to reply faster than my coffee gets cold!',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/snehasish-chakraborty114',
    label: 'linkedin.com/in/snehasish-chakraborty',
    description:
      'Connect with me professionally, or just to see what I look like in a suit!',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/114snehasish',
    label: 'github.com/114snehasish',
    description:
      'Check out my code – where bugs are just undocumented features!',
  },
  {
    name: 'X',
    icon: FaXTwitter,
    href: 'https://x.com/thisissnehasish',
    label: '@thisissnehasish',
    description:
      'Follow me for tech thoughts in 280 characters or less. No cat pictures, I promise!',
  },
  {
    name: 'steam',
    icon: FaSteam,
    href: 'https://steamcommunity.com/id/PoisonAura448',
    label: 'PoisonAura448',
    description:
      'Find me on Steam where my wallet cries during sales and my PC fans scream during AAA titles!',
  },
  {
    name: 'playstation',
    icon: FaPlaystation,
    href: 'https://profile.playstation.com/PoisonAura448',
    label: 'PoisonAura448',
    description:
      "Find me on PlayStation where I'm busy playing those exclusive titles everyone else wishes they could!",
  },
  {
    name: 'xbox',
    icon: FaXbox,
    href: 'https://account.xbox.com/profile?gamertag=PoisonAura448',
    label: 'PoisonAura448',
    description:
      "Catch me on Xbox where my Game Pass subscription gives me more games than I'll ever have time to play!",
  },
];
