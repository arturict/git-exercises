import { Person } from "./person";

const alice = new Person("Alice", "Bobson", 1967, 2, 13);
const bob = new Person("Bob", "Allison", 1962, 11, 29);

console.log(
  `Hello, ${alice.fullName()}! You are ${alice.yearsOld()} years old.`,
);
console.log(`Grüezi, ${bob.swissName()}! You are ${bob.yearsOld()} years old.`);
