import { roundTo } from "./utils";

export class Person {
  private birthdate: Date;

  constructor(
    public firstName: string,
    public lastName: string,
    year: number,
    month: number,
    day: number,
  ) {
    let d = new Date(0);
    d.setFullYear(year);
    d.setMonth(month - 1);
    d.setDate(day);
    this.birthdate = d;
  }

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  birthDate(): Date {
    return this.birthdate;
  }

  yearsOld(): number {
    const millis = Math.abs(this.birthdate.getTime() - new Date().getTime());
    const years = millis / (1000 * 3600 * 24 * 365.25);
    return roundTo(years, 0.1);
  }
}
