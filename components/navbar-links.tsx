'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './locale-switcher';
import { ThemeToggle } from './theme-toggle';

function NavLinks() {
  const t = useTranslations('Navigation');

  return (
    <>
    <nav className="flex justify-center items-center mb-12 w-full">
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex gap-4 text-sm border rounded-md px-2 py-1">
          <Link href="/" className="hover:text-gray-600 text-sm px-2 py-1">{t('work')}</Link>
          <Link href="/writing" className="hover:text-gray-600 text-sm px-2 py-1">{t('writing')}</Link>
          <Link href="/about" className="hover:text-gray-600 text-sm px-2 py-1">{t('about')}</Link>
        </div>
      </div>
        <LocaleSwitcher />
    </nav>
    </>
  )
}

export default NavLinks
