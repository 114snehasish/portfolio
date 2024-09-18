interface NavItem {
  href: string;
  label: string;
}
export default function Header() {
  const navItems: NavItem[] = [
    { href: '#about', label: 'about' },
    { href: '#skills', label: 'skills' },
    { href: '#experiences', label: 'experiences' },
    { href: '#article', label: 'articles' },
    { href: '#contact', label: 'contact' },
  ];
  return (
    <header className="text-gray-300 p-8">
      <nav className="flex justify-end space-x-8">
        {navItems.map((item, index) => (
          <a key={item.href} href={item.href}>
            <span className="accent-text">{index + 1}. </span>
            <span className="accent-on-hover">{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
