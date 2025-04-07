import './header.css';
import { FaUser } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa6';
import { FaNewspaper } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
import { FaFile } from 'react-icons/fa6';
import { IconType } from 'react-icons';

interface NavItem {
  href: string;
  label: string;
  type: 'link' | 'button';
  icon: IconType;
}

export default function Header() {
  const navItems: NavItem[] = [
    { href: '#about', label: '_about', type: 'link', icon: FaUser },
    { href: '#skills', label: '_skills', type: 'link', icon: FaCode },
    {
      href: '#experiences',
      label: '_experiences',
      type: 'link',
      icon: FaBriefcase,
    },
    { href: '#article', label: '_articles', type: 'link', icon: FaNewspaper },
    { href: '#contact', label: '_contact', type: 'link', icon: FaEnvelope },
    {
      href: '/resume.pdf',
      label: '/resume',
      type: 'button',
      icon: FaFile,
    },
  ];

  const renderLink = (item: NavItem, index: number) => {
    return (
      <div className="nav-item" key={item.href}>
        <a href={item.href} className="header-text header-text-desktop">
          <span>{index + 1}. </span>
          <span>{item.label}</span>
        </a>
        <a href={item.href} className="header-text header-text-mobile">
          <span>
            <item.icon />
          </span>
        </a>
        <span className="nav-tooltip">{item.label}</span>
      </div>
    );
  };

  const renderButton = (item: NavItem) => {
    return (
      <div className="nav-item" key={item.href}>
        <button className="cta-button" onClick={() => window.location.href = item.href}>
          <span>{item.label}</span>
          <item.icon />
        </button>
        <span className="nav-tooltip">{item.label}</span>
      </div>
    );
  };

  return (
    <header className="p-8">
      <nav className="nav">
        {navItems.map((item, index) =>
          item.type === 'link' ? renderLink(item, index) : renderButton(item)
        )}
      </nav>
    </header>
  );
}
