import { JokesDTO } from '../dtos/jokes';
import { Activitie } from './activitie';

export class Jokes {
  activites: Activitie[];

  constructor(activites: Activitie[]) {
    this.activites = activites;
  }

  static fromJson(json: any): Jokes {
    const activites = (json.data.Activitie || []).map((g: any) =>
      Activitie.fromJson(g),
    );

    return new Jokes(activites);
  }

  toJson(): JokesDTO {
    return {
      activites: this.activites.map(a => a.toJson()),
    };
  }
}
