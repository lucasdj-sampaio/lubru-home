'use client';
import clsx from 'clsx';

interface CardProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function ItemCard({
  icon,
  label,
  isActive = false,
  onClick,
}: CardProps) {
  const isClickable = !!onClick;

  const variantClass = clsx(
    'flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm border bg-primary/5',
    {
      'text-title border-primary cursor-pointer': isActive,
      'text-opaque hover:border-secondary cursor-pointer':
        isClickable && !isActive,
      'text-regular border-regular/20': !isClickable && !isActive,
    },
  );

  return (
    <div className="w-max">
      <div className={variantClass} onClick={onClick}>
        {icon}
        {label}
      </div>
    </div>
  );
}
