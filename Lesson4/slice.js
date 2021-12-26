function slice(ar, start, end) {
  let result = [];

  for (let i = start, counter = 0; i < end; i++, counter++) {
    result[counter] = ar[i];
  }

  return result;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]