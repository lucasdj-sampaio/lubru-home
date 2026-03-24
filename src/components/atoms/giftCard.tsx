import { GiftItem } from '@/shared/types/wishlist/giftItem';
import clsx from 'clsx';

interface CardProps {
  gift: GiftItem;
  unlocked: boolean;
}

export default function GiftCard({ gift, unlocked }: CardProps) {
  const isFound = gift.active;
  const currentClueCondition = !isFound && unlocked;

  const containerClass = clsx(
    'flex items-center gap-2 hover:cursor-default transition-all',
    unlocked
      ? `${
          isFound ? 'bg-primary/1' : 'bg-background'
        } p-2 md:p-5 border border-primary/30 rounded-lg`
      : 'bg-transparent px-2 md:px-5 py-1',
  );

  const iconClass = clsx(
    'p-1 md:p-2 w-min h-min rounded-full [&>svg]:w-5 [&>svg]:h-5',
    isFound ? 'bg-primary/10' : unlocked ? 'bg-secondary/10' : 'bg-transparent',
  );

  const titleClass = clsx(
    'text-sm font-semibold',
    unlocked ? 'text-secondary' : 'text-opaque',
  );

  const descriptionClass = clsx(
    'text-xs',
    unlocked ? 'text-[rgba(115,115,115,1)]' : 'text-opaque',
  );

  return (
    <div id={gift.id.toString()} className={containerClass}>
      <div className={iconClass}></div>

      <div>
        <h5 className={titleClass}>{gift.name}</h5>

        <p className={descriptionClass}>
          <strong className="font-medium">
            {isFound ? gift.name : unlocked ? 'Dica: ' : 'Bloqueado'}
          </strong>

          {currentClueCondition && gift.description}
        </p>
      </div>
    </div>
  );
}
