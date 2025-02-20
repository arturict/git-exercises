import { people } from "./people";

for (const p of people) {
  console.log(`Hello, ${p.fullName()}! You seem to be ${p.yearsOld()} years old.`);
}
