function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

// let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// Due to lexical scoping rules. `totalPayable` has access to declared in the outerscope.