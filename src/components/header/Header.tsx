import './header.css';
import { Link } from 'react-scroll';
import { NavItem, navItems } from '@data/navItems';

export default function Header() {
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
        <a
          href={item.to}
          download="Snehasish_Chakraborty_CV.pdf"
          className="cta-button"
          title="Download CV"
          role="button"
          aria-label={`Download ${item.label}`}
        >
          <span>{item.label}</span>
          <item.icon />
        </a>
        <span className="nav-tooltip">{item.label}</span>
      </div>
    );
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src="/icon.svg" alt="SC" className="logo-icon" />
        </div>
        <nav className="nav">
          {navItems.map((item, index) =>
            item.type === 'link' ? renderLink(item, index) : renderButton(item)
          )}
        </nav>
      </div>
    </header>
  );
}
