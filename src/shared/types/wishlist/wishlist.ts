import { WishlistDTO } from '../dtos/wishlist';
import { GiftCategory } from './giftCategory';

export class Wishlist {
  categories: GiftCategory[];

  constructor(categorys: GiftCategory[]) {
    this.categories = categorys;
  }

  openCategoryItems(category: string): void {
    this.categories.forEach(c => {
      c.isOpen = c.category === category;
    });
  }

  static fromJson(json: any): Wishlist {
    const gifts = (json.data || []).map((g: any) => GiftCategory.fromJson(g));

    return new Wishlist(gifts);
  }

  toJson(): WishlistDTO {
    return {
      categories: this.categories.map(a => a.toJson()),
    };
  }
}
