import './header.css';
import { FaUser } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa6';
import { FaNewspaper } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
import { FaFile } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { Link } from 'react-scroll';
import { navItems, NavItem } from '../../data/navItems';

interface HeaderProps {
  // No need for scrollToAbout function or sectionRefs with react-scroll
}

export default function Header({}: HeaderProps) {
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
