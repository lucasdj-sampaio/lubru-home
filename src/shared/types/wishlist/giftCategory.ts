import { GiftCategoryDTO } from '../dtos/giftCategory';
import { GiftItem } from './giftItem';

export class GiftCategory {
  icon: string;
  category: string;
  gifts: GiftItem[];
  isOpen?: boolean;

  constructor(
    icon: string,
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
    const icon = json.icon;
    const category = json.category;
    const gifts = (json.gifts || []).map((g: any) => GiftItem.fromJson(g));

    return new GiftCategory(icon, category, gifts);
  }

  toJson(): GiftCategoryDTO {
    return {
      icon: this.icon,
      category: this.category,
      gifts: this.gifts.map(a => a.toJson()),
      isOpen: this.isOpen,
    };
  }
}
