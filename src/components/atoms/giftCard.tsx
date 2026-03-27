import { GiftItemDTO } from '@/shared/types/dtos/giftItem';
import { formatBRL, truncateText } from '@/util';
import clsx from 'clsx';
import { SvgIcon } from './svgIcon';

interface GiftCardProps {
  gift: GiftItemDTO;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function GiftCard({ gift, onClick }: GiftCardProps) {
  const { id, icon, name, description, value } = gift;

  return (
    <button
      id={id.toString()}
      onClick={onClick}
      className={clsx(
        'group max-w-80 rounded-lg border border-opaque/50 bg-item-background/60 p-8 text-center',
        'cursor-pointer transition-all duration-300',
        'hover:border-secondary/50 hover:shadow-lg',
      )}
    >
      <div
        className={clsx(
          'mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full',
          'bg-primary/10 transition-colors duration-300',
          'group-hover:bg-secondary/20',
        )}
      >
        <SvgIcon icon={icon} className="text-secondary" />
      </div>

      <h3 className="mb-2 font-secondary text-lg text-primary">{name}</h3>

      <p className="mb-3 text-sm text-regular text-muted-foreground">
        {truncateText(description)}
      </p>

      <span
        className={clsx(
          'inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wide',
          'border-secondary/20 bg-secondary/10 text-secondary',
        )}
      >
        {formatBRL(value)}
      </span>
    </button>
  );
}
