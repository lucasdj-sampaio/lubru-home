import { Iconhub } from '@/shared/interfaces/icon';
import clsx from 'clsx';

type SvgIconProps = {
  icon: Iconhub;
  size?: number;
  className?: string;
};

export function SvgIcon({ icon, size = 24, className }: SvgIconProps) {
  return (
    <svg
      viewBox={`0 0 ${icon.width} ${icon.height}`}
      width={size}
      height={size}
      className={clsx(className, 'overflow-visible')}
      dangerouslySetInnerHTML={{ __html: icon.iconData }}
    />
  );
}
