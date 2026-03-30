'use client';
import { INavLink } from '@/shared/interfaces/navLink';
import clsx from 'clsx';
import { Plane } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems: INavLink[] = [
    { href: '#home', label: 'HOME' },
    { href: '#roadmap', label: 'ROTEIRO' },
    { href: '#checkin', label: 'CHECK-IN' },
    { href: '#baggage', label: 'BAGAGEM' },
  ];

  function handleToggle() {
    setOpen(prev => !prev);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div
      className={clsx(
        'fixed w-full z-50 bg-primary',
        'flex flex-col items-center shadow-[0px_4px_20px_-4px_rgba(83,45,54,0.1)]',
      )}
    >
      <header
        className={clsx(
          'w-full md:max-w-[95vw]',
          'bg-sub-background flex items-center justify-between',
          'px-4 py-3 md:px-6 md:py-4',
        )}
      >
        <Link
          href="/#home"
          className="flex items-center gap-2"
          onClick={handleClose}
        >
          <Plane size={16} className="text-secondary rotate-45" />
          <span className="font-secondary text-xl font-medium tracking-widest text-primary">
            B & L
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-4 text-sm text-secondary">
            {navItems.map(link => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="text-secondary md:hidden"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </header>

      <div
        className={clsx(
          'w-full md:hidden text-start border-secondary/20 transition-all duration-300',
          open
            ? 'max-h-96 opacity-100 px-6 pb-6 border-t shadow-[0px_4px_20px_-4px_rgba(83,45,54,0.1)]'
            : 'max-h-0 opacity-0 overflow-hidden',
        )}
      >
        <ul className="flex flex-col gap-4 pt-4 text-title">
          {navItems.map(link => (
            <li key={link.href}>
              <Link
                className="block w-full"
                href={link.href}
                onClick={handleClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
