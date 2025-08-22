import { IconType } from 'react-icons';
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaNewspaper,
  FaEnvelope,
  FaFile,
} from 'react-icons/fa6';

// Define interface for navigation items
export interface NavItem {
  to: string;
  label: string;
  type: 'link' | 'button';
  icon: IconType;
}

// Create navigation items array
export const navItems: NavItem[] = [
  { to: 'about', label: '_about', type: 'link', icon: FaUser },
  { to: 'skills', label: '_skills', type: 'link', icon: FaCode },
  {
    to: 'experiences',
    label: '_experiences',
    type: 'link',
    icon: FaBriefcase,
  },
  { to: 'article', label: '_articles', type: 'link', icon: FaNewspaper },
  { to: 'contact', label: '_contact', type: 'link', icon: FaEnvelope },
  {
    to: 'Snehasish_Chakraborty_CV.pdf', // Updated to correct CV file path
    label: '/resume',
    type: 'button',
    icon: FaFile,
  },
];
