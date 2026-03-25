import { Iconhub } from '@/shared/interfaces/icon';

export class Activity {
  icon: Iconhub;
  name: string;

  constructor(icon: Iconhub, name: string) {
    this.icon = icon;
    this.name = name;
  }

  static fromJson(json: any): Activity {
    return new Activity(
      {
        width: json.Icon.width,
        height: json.Icon.height,
        iconData: json.Icon.iconData,
      },
      json.Name,
    );
  }

  toJson() {
    return {
      name: this.name,
      icon: this.icon,
    };
  }
}
