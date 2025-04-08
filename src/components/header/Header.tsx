import './header.css';
import { FaUser } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa6';
import { FaNewspaper } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
import { FaFile } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { Link } from 'react-scroll';

interface NavItem {
  to: string;
  label: string;
  type: 'link' | 'button';
  icon: IconType;
}

interface HeaderProps {
  // No need for scrollToAbout function or sectionRefs with react-scroll
}

export default function Header({}: HeaderProps) {
  const navItems: NavItem[] = [
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
      to: '/resume.pdf', // This needs special handling as it's not a scroll target
      label: '/resume',
      type: 'button',
      icon: FaFile,
    },
  ];

  const renderLink = (item: NavItem, index: number) => {
    if (item.type === 'link') {
      return (
        <div className="nav-item" key={item.to}>
          {/* Desktop view */}
          <Link
            to={item.to}
            spy={true}
            smooth={true}
            offset={-100} // Adjust if your header height changes
            duration={500}
            activeClass="active"
            className="header-text header-text-desktop"
          >
            <span>{index + 1}. </span>
            <span>{item.label}</span>
          </Link>

          {/* Mobile view */}
          <Link
            to={item.to}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
            className="header-text header-text-mobile"
          >
            <span>
              <item.icon />
            </span>
          </Link>
          <span className="nav-tooltip">{item.label}</span>
        </div>
      );
    }
    return null;
  };

  const renderButton = (item: NavItem) => {
    return (
      <div className="nav-item" key={item.to}>
        <button
          className="cta-button"
          onClick={() => (window.location.href = item.to)}
        >
          <span>{item.label}</span>
          <item.icon />
        </button>
        <span className="nav-tooltip">{item.label}</span>
      </div>
    );
  };

  return (
    <header>
      <nav className="nav p-6">
        {navItems.map((item, index) =>
          item.type === 'link' ? renderLink(item, index) : renderButton(item)
        )}
      </nav>
    </header>
  );
}
