import { GiftItemDTO } from '../dtos/giftItem';

export class GiftItem {
  id: number;
  icon: string;
  name: string;
  description: string;
  active: boolean;
  buyUrl: string;
  value: number;

  constructor(
    id: number,
    icon: string,
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
      json.icon,
      json.name,
      json.description,
      json.active,
      json.buyUrl,
      json.value,
    );
  }

  toJson(): GiftItemDTO {
    return {
      id: this.id,
      name: this.name,
      icon: this.icon,
      description: this.description,
      active: this.active,
      buyUrl: this.buyUrl,
      value: this.value,
    };
  }
}
