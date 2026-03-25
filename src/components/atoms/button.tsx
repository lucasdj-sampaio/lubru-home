import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  href,
  children,
  onClick,
}: ButtonProps) => {
  const styles = clsx(
    'flex items-center justify-center gap-2 no-select px-8 py-2',
    'border-2 text-secondary font-light',
    'hover:bg-secondary hover:text-primary hover:[&>svg]:text-primary hover:border-secondary',
    'transition-all duration-300 [&>svg]:transition-all [&>svg]:duration-300',
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
};
