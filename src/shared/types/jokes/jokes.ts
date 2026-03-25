import { Activity } from './activitie';

export class Jokes {
  activites: Activity[];

  constructor(activites: Activity[]) {
    this.activites = activites;
  }

  static fromJson(json: any): Jokes {
    const activites = (json.data.Activitie || []).map((g: any) =>
      Activity.fromJson(g),
    );

    return new Jokes(activites);
  }

  toJson() {
    return {
      activites: this.activites.map(a => a.toJson()),
    };
  }
}
