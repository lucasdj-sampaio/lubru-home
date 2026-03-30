import { ActivitieDTO } from '../dtos/activitie';

export class Activitie {
  icon: string;
  name: string;

  constructor(icon: string, name: string) {
    this.icon = icon;
    this.name = name;
  }

  static fromJson(json: any): Activitie {
    return new Activitie(json.Icon.iconName, json.Name);
  }

  toJson(): ActivitieDTO {
    return {
      name: this.name,
      icon: this.icon,
    };
  }
}
