export class EventContent {
  date: string;
  address: string;
  included: string;
  nonIncluded: string;

  constructor(
    date: string,
    address: string,
    included: string,
    nonIncluded: string,
  ) {
    this.date = date;
    this.address = address;
    this.included = included;
    this.nonIncluded = nonIncluded;
  }

  static fromJson(json: any): EventContent {
    const raw = json?.data;
    if (!raw) throw new Error('Invalid content JSON');

    const date = raw.Date;
    const address = raw.Address;
    const included = raw.Included;
    const nonIncluded = raw.NonIncluded;

    return new EventContent(date, address, included, nonIncluded);
  }
}
