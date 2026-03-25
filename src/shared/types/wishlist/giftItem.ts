import { Iconhub } from '@/shared/interfaces/icon';

export class GiftItem {
  id: number;
  icon: Iconhub;
  name: string;
  description: string;
  active: boolean;
  buyUrl: string;
  value: number;

  constructor(
    id: number,
    icon: Iconhub,
    name: string,
    description: string,
    active: boolean,
    buyUrl: string,
    value: number,
  ) {
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.description = description;
    this.active = active;
    this.buyUrl = buyUrl;
    this.value = value;
  }

  static fromJson(json: any): GiftItem {
    return new GiftItem(
      json.id,
      {
        width: json.Icon.width,
        height: json.Icon.height,
        iconData: json.Icon.iconData,
      },
      json.Name,
      json.Description,
      json.Active,
      json.BuyUrl,
      json.Value,
    );
  }
}
