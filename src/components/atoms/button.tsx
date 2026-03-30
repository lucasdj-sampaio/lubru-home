import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  href?: { url: string; externalLink?: boolean };
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  type = 'button',
  href,
  children,
  className,
  disabled,
  onClick,
}: ButtonProps) => {
  const styles = clsx(
    'flex items-center justify-center gap-2 no-select px-8 py-2',
    'border-2 font-light',
    'hover:bg-secondary hover:text-primary hover:[&>svg]:text-primary hover:border-secondary',
    'transition-all duration-300 [&>svg]:transition-all [&>svg]:duration-300',
    variant == 'primary' ? 'text-secondary' : 'text-primary',
    className,
  );

  if (href) {
    return (
      <Link
        href={href.url}
        className={styles}
        target={href.externalLink ? '_blank' : ''}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
