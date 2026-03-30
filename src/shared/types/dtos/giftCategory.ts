import { GiftItemDTO } from './giftItem';

export type GiftCategoryDTO = {
  category: string;
  icon: string;
  gifts: GiftItemDTO[];
  isOpen?: boolean;
};
