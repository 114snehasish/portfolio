import './header.css';

interface NavItem {
  href: string;
  label: string;
  type: 'link' | 'button';
}
export default function Header() {
  const navItems: NavItem[] = [
    { href: '#about', label: '_about', type: 'link' },
    { href: '#skills', label: '_skills', type: 'link' },
    { href: '#experiences', label: '_experiences', type: 'link' },
    { href: '#article', label: '_articles', type: 'link' },
    { href: '#contact', label: '_contact', type: 'link' },
    { href: '/resume.pdf', label: '/resume', type: 'button' },
  ];
  const renderLink = (item: NavItem, index: number) => {
    return (
      <a className="header-text" key={item.href} href={item.href}>
        <span>{index + 1}. </span>
        <span>{item.label}</span>
      </a>
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
      <nav className="flex justify-end items-center space-x-8">
        {navItems.map((item, index) =>
          item.type === 'link' ? renderLink(item, index) : renderButton(item)
        )}
      </nav>
    </header>
  );
}
