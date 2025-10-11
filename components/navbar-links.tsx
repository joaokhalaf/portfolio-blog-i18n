'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './locale-switcher';
import { ThemeToggle } from './theme-toggle';
import { useState } from 'react';

const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);


function NavLinks() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const navLinks = [
    { pathname: '/', label: t('work') },
    { pathname: '/writing', label: t('writing') },
    { pathname: '/about', label: t('about') },
  ] as const;

  return (
    <nav className="relative flex justify-center items-center mb-12 w-full px-4 py-2">



      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />

        <div className="flex gap-1 text-sm border rounded-md px-2 py-1">

          {navLinks.map((link) => (
            <Link key={link.pathname} href={link.pathname} className="hover:text-gray-600 dark:hover:text-gray-400 text-sm px-2 py-1">
              {link.label}
            </Link>
          ))}
        </div>
        <LocaleSwitcher />
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {isOpen && (
        <div
          className="
            absolute top-full left-0 w-full bg-white dark:bg-black 
            md:hidden flex flex-col items-center gap-6 py-8 
            border-t border-gray-200 dark:border-gray-800 z-20
          "
        >
          {navLinks.map((link) => (
            <Link
              key={link.pathname}
              href={link.pathname}
              className="text-lg hover:text-gray-600 dark:hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4">
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavLinks;