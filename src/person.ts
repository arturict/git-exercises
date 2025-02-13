export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  swissName() {
    return `${this.lastName}, ${this.firstName}`;
  }
}
