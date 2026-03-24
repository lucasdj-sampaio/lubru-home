import { GiftCategory } from './giftCategory';

export class WishList {
  categories: GiftCategory[];

  constructor(categorys: GiftCategory[]) {
    this.categories = categorys;
  }

  openCategoryItems(category: string): void {
    this.categories.forEach(c => {
      c.isOpen = c.category === category;
    });
  }

  static fromJson(json: any): WishList {
    const gifts = (json.data || []).map((g: any) => GiftCategory.fromJson(g));

    return new WishList(gifts);
  }
}
