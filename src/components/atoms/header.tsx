import clsx from 'clsx';
import { Plane } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <div
      className={clsx(
        'fixed w-full z-100 bg-primary',
        'flex justify-center shadow-[0px_4px_20px_-4px_rgba(83,45,54,0.1)]',
      )}
    >
      <header
        className={clsx(
          'max-w-[95vw] md:min-w-[80vw]',
          'bg-sub-background',
          'flex justify-between items-center',
          'py-2 px-4 md:py-4 md:px-6',
        )}
      >
        <Link href="/#home" className="flex items-center gap-2">
          <Plane size={16} className="text-secondary rotate-45" />

          <span className="font-secondary font-medium text-xl text-primary tracking-widest">
            B & L
          </span>
        </Link>

        <nav>
          <ul className="flex text-sm gap-4 text-secondary">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#roadmap">ROTEIRO</a>
            </li>
            <li>
              <a href="#checkin">CHECK-IN</a>
            </li>
            <li>
              <a href="#baggage">BAGAGEM</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
