import { Iconhub } from '@/shared/interfaces/icon';

export type GiftItemDTO = {
  id: number;
  icon: Iconhub;
  name: string;
  description: string;
  active: boolean;
  buyUrl: string;
  value: number;
};
