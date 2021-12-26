let rsSync = require('readline-sync');

function multiply(num, num2) {
  return num * num2;
}

let num = rsSync.question("Enter the first number: ");
let num2 = rsSync.question("Enter the second number: ");
console.log(`${num} * ${num2} = ${multiply(num, num2)}`)