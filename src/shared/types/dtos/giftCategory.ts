import { Iconhub } from '@/shared/interfaces/icon';
import { GiftItemDTO } from './giftItem';

export type GiftCategoryDTO = {
  category: string;
  icon: Iconhub;
  gifts: GiftItemDTO[];
  isOpen?: boolean;
};
