import { Iconhub } from '@/shared/interfaces/icon';

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
      className={className + 'overflow-visible'}
      dangerouslySetInnerHTML={{ __html: icon.iconData }}
    />
  );
}
