function shift(ar) {
  let firstValue = ar[0];

  ar.splice(0, 1);

  return firstValue;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]