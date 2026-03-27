import { Iconhub } from '@/shared/interfaces/icon';
import { ActivitieDTO } from '../dtos/activitie';

export class Activitie {
  icon: Iconhub;
  name: string;

  constructor(icon: Iconhub, name: string) {
    this.icon = icon;
    this.name = name;
  }

  static fromJson(json: any): Activitie {
    return new Activitie(
      {
        width: json.Icon.width,
        height: json.Icon.height,
        iconData: json.Icon.iconData,
      },
      json.Name,
    );
  }

  toJson(): ActivitieDTO {
    return {
      name: this.name,
      icon: this.icon,
    };
  }
}
