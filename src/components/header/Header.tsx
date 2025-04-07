import './header.css';
import { FaUser } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa6';
import { FaNewspaper } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
import { FaFile } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { useState, useEffect } from 'react';

interface NavItem {
  href: string;
  label: string;
  type: 'link' | 'button';
  icon: IconType;
}

interface HeaderProps {
  scrollToAbout: () => void;
}

export default function Header({ scrollToAbout }: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = ['about', 'skills', 'experiences', 'article', 'contact'].map(
      id => document.getElementById(id)
    ).filter(Boolean);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust this to control when sections are considered "active"
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
    const isActive = activeSection === item.href.substring(1);
    
    if (item.href === '#about') {
      return (
        <div className={`nav-item ${isActive ? 'active' : ''}`} key={item.href}>
          <a 
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToAbout(); 
            }} 
            className="header-text header-text-desktop"
          >
            <span>{index + 1}. </span>
            <span>{item.label}</span>
          </a>
          <a 
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToAbout(); 
            }} 
            className="header-text header-text-mobile"
          >
            <span>
              <item.icon />
            </span>
          </a>
          <span className="nav-tooltip">{item.label}</span>
        </div>
      );
    }
    
    return (
      <div className={`nav-item ${isActive ? 'active' : ''}`} key={item.href}>
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
    <header>
      <nav className="nav p-6">
        {navItems.map((item, index) =>
          item.type === 'link' ? renderLink(item, index) : renderButton(item)
        )}
      </nav>
    </header>
  );
}
