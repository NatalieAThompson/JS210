function concat(ar, ar2) {
  let result = [];

  for (let i = 0; i < ar.length; i++) {
    result[i] = ar[i];
  }

  for (let i = result.length, counter = 0; i < ar2.length + ar.length; i++, counter++) {
    result[i] = ar2[counter];
  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]