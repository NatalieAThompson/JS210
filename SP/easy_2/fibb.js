/*
input: bigInt
output: bigInt
- squence 1, 1, 2, 3, 5, 8, 13, 21, ...
- return the index of the first number that has the number of digits passed in



*/

function findFibonacciIndexByLength(digitLength) {
  let index = 2;
  let ar = [1n, 1n]

  while(String(ar[1]).length !== Number(digitLength)) {
    ar = [ar[1], ar.reduce((total, num) => total + num)];
    index++;
  }

  console.log(BigInt(index));
}


findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;