import './header.css';
import { FaAddressCard } from 'react-icons/fa6';
import { IconType } from 'react-icons';

interface NavItem {
  href: string;
  label: string;
  type: 'link' | 'button';
  icon: IconType;
}
export default function Header() {
  const navItems: NavItem[] = [
    { href: '#about', label: '_about', type: 'link', icon: FaAddressCard },
    { href: '#skills', label: '_skills', type: 'link', icon: FaAddressCard },
    {
      href: '#experiences',
      label: '_experiences',
      type: 'link',
      icon: FaAddressCard,
    },
    { href: '#article', label: '_articles', type: 'link', icon: FaAddressCard },
    { href: '#contact', label: '_contact', type: 'link', icon: FaAddressCard },
    {
      href: '/resume.pdf',
      label: '/resume',
      type: 'button',
      icon: FaAddressCard,
    },
  ];
  const renderLink = (item: NavItem, index: number) => {
    return (
      <>
        <a className="header-text header-text-desktop">
          <span>{index + 1}. </span>
          <span>{item.label}</span>
        </a>
        <a
          className="header-text header-text-mobile"
          key={item.href}
          href={item.href}
        >
          <span>
            <item.icon />
          </span>
        </a>
      </>
    );
  };
  const renderButton = (item: NavItem) => {
    return (
      <button
        key={item.href}
        className="cta-button"
        onClick={() => (window.location.href = item.href)}
      >
        {item.label}
      </button>
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
