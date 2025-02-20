import { Person } from "./person";

const a: Person = new Person("Alice", "Bobson", 1967, 2, 13);
const b: Person = new Person("Bob", "Allison", 1962, 11, 29);
const c: Person = new Person("Clara", "Huber", 1988, 3, 15);

export const people: Person[] = [a, b, c];
