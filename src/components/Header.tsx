interface NavItem {
  href: string;
  label: string;
  type: 'link' | 'button';
}
export default function Header() {
  const navItems: NavItem[] = [
    { href: '#about', label: 'about', type: 'link' },
    { href: '#skills', label: 'skills', type: 'link' },
    { href: '#experiences', label: 'experiences', type: 'link' },
    { href: '#article', label: 'articles', type: 'link' },
    { href: '#contact', label: 'contact', type: 'link' },
    { href: '/resume.pdf', label: 'resume', type: 'button' },
  ];
  const renderLink = (item: NavItem, index: number) => {
    return (
      <a key={item.href} href={item.href}>
        <span className="accent-text">{index + 1}. </span>
        <span className="accent-on-hover">{item.label}</span>
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
    <header className="text-gray-300 p-8">
      <nav className="flex justify-end items-center space-x-8">
        {navItems.map((item, index) =>
          item.type === 'link' ? renderLink(item, index) : renderButton(item)
        )}
      </nav>
    </header>
  );
}
