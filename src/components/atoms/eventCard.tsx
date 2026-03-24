import clsx from 'clsx';
import React from 'react';

interface EventProps {
  icon: React.ReactNode;
  label: string;
  data: string;
}

export const EventCard: React.FC<EventProps> = ({
  icon,
  label,
  data,
}: EventProps) => {
  return (
    <div className="text-center">
      <div
        className={clsx(
          'w-14 h-14 rounded-full',
          'bg-regular/10 flex items-center justify-center mx-auto mb-4',
          'text-secondary',
        )}
      >
        {icon}
      </div>

      <h3 className="font-secondary text-lg text-primary font-medium">
        {label}
      </h3>
      <p className="text-regular">{data}</p>
    </div>
  );
};
