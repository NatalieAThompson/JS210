let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age?\n'));
// let years = 10;
// let counter = 4;

// while (counter > 0) {
//   console.log(`In ${years} years, you will be ${age + 10} years old.`);
//   age = age + 10;
//   years = years + 10;
//   counter = counter - 1;
// }

for (let counter = 4, years = 10; counter > 0; counter--, years += 10) {
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}