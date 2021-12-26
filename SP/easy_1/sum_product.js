const rlSync = require('readline-sync');

function sumOrProduct() {
  let total;
  command === "s" ? total = 0 : total = 1;
  let word;

  for (let i = 1; i <= num; i++){
    if (command === 's') {
      total += i;
      word = "sum";
    } else if (command === 'p') {
      total *= i;
      word = "product";
    }
  }

  console.log(`The ${word} of the integers between 1 and ${num} is ${total}`);
}

let num = parseInt(rlSync.question('Please enter an integer greater than 0: '));
let command = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

sumOrProduct();




