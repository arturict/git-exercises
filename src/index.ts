import { Person } from "./person";

const a: Person = new Person("Alice", "Bobson", 1967, 2, 13);
const b: Person = new Person("Bob", "Allison", 1962, 11, 29);

console.log(`Hello, ${a.fullName()}! You are ${a.yearsOld()} years old.`);
console.log(`Grüezi, ${b.swissName()}! You are ${b.yearsOld()} years old.`);
