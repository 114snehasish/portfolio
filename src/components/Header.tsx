export default function Header() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#article', label: 'Articles' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="text-gray-300 p-4">
      <nav className="flex justify-end space-x-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-gray-400 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
