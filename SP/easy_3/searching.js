const rlSync = require('readline-sync');

function stringNum(num) {
  if (num === 1) return '1st';
  if (num === 2) return '2nd';
  if (num === 3) return '3rd';
  return `${num}th`;
}

const numbers = [];

for (let i = 1; i < 6; i++) {
  numbers.push(rlSync.question(`Enter the ${stringNum(i)} number: `));
}

let search = rlSync.question(`Enter the last number: `);

if (numbers.includes(search)) {
  console.log(`The number ${search} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${search} does not appear in [${numbers.join(', ')}].`);
}