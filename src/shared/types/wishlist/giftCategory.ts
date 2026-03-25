import { Iconhub } from '@/shared/interfaces/icon';
import { GiftItem } from './giftItem';

export class GiftCategory {
  icon: Iconhub;
  category: string;
  gifts: GiftItem[];
  isOpen?: boolean;

  constructor(
    icon: Iconhub,
    category: string,
    gifts: GiftItem[],
    isOpen = false,
  ) {
    this.icon = icon;
    this.category = category;
    this.gifts = gifts;
    this.isOpen = isOpen;
  }

  static fromJson(json: any): GiftCategory {
    const icon = {
      width: json.Icon.width,
      height: json.Icon.height,
      iconData: json.Icon.iconData,
    };
    const category = json.Category;
    const gifts = (json.Gift || []).map((g: any) => GiftItem.fromJson(g));

    return new GiftCategory(icon, category, gifts);
  }
}
