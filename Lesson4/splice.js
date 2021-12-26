function splice(ar, start, amount) {
  let removedValues = [];
  let remainingValues = [];
  let counterRemove = 0;
  let counterRemain =0;

  for (let i = 0; i < ar.length; i++) {
    if (i >= start && i < start + amount) {
      removedValues[counterRemove] = ar[i];
      counterRemove++;
    } else {
      remainingValues[counterRemain] = ar[i];
      counterRemain++;
    }
  }

  ar.length = remainingValues.length

  for (let i = 0; i < ar.length; i++) {
    ar[i] = remainingValues[i];
  }

  return removedValues;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]