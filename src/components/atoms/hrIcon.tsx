import React from 'react';

interface IconProps {
  icon: React.ReactNode;
}

export const HrIcon: React.FC<IconProps> = ({ icon }: IconProps) => {
  const hr = <hr className="h-0.5 w-16 border-none bg-secondary/50" />;

  return (
    <div className="flex items-center gap-4 [&>svg]:text-secondary">
      {hr}
      {icon}
      {hr}
    </div>
  );
};
