'use client';
import { JokesDTO } from '@/shared/types/dtos/jokes';
import { ItemCard } from '../atoms/itemCard';
import { SvgIcon } from '../atoms/svgIcon';

interface ItemCardListProps {
  items: JokesDTO;
}

export function ItemCardList({ items }: ItemCardListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.activites.map((item: any, i: number) => (
        <ItemCard
          key={`itemCard_${item.name}_${i}`}
          icon={<SvgIcon icon={item.icon} size={20} />}
          label={item.name}
        />
      ))}
    </div>
  );
}
