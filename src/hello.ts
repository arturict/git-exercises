import { Person } from "./person";

const alice = new Person("Alice", "Bobson");
const bob = new Person("Bob", "Allison");

console.log(`Hello, ${alice.fullName()}!`);
console.log(`Grüezi, ${bob.swissName()}!`);
