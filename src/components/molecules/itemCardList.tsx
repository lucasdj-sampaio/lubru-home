'use client';
import { JokesDTO } from '@/shared/types/dtos/jokes';
import { Icon } from '@iconify/react';
import { ItemCard } from '../atoms/itemCard';

interface ItemCardListProps {
  items: JokesDTO;
}

export function ItemCardList({ items }: ItemCardListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.activites.map((item: any, i: number) => (
        <ItemCard
          key={`itemCard_${item.name}_${i}`}
          icon={<Icon icon={item.icon} width={24} height={24} />}
          label={item.name}
        />
      ))}
    </div>
  );
}
