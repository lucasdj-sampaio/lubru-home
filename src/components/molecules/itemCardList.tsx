'use client';
import { ItemCard } from '../atoms/itemCard';
import { SvgIcon } from '../atoms/svgIcon';

type Props = {
  items: any;
  onItemClick?: (item: any) => void;
};

export function ItemCardList({ items, onItemClick }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.activites.map((item: any, i: number) => (
        <ItemCard
          key={`itemCard_${item.name}_${i}`}
          icon={<SvgIcon icon={item.icon} size={20} />}
          label={item.name}
          onClick={onItemClick ? () => onItemClick(item) : undefined}
        />
      ))}
    </div>
  );
}
