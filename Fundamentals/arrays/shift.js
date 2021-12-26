function shift(ar) {
  if (ar.length === 0) return undefined;

  let remove = ar[0];

  for (let i = 0; i < ar.length - 1; i++) {
    ar[i] = ar[i + 1];
  }

  ar.length = ar.length - 1;

  return remove;
}

function unshift(ar, ...args) {
  let org_length = ar.length;
  ar.length = ar.length + args.length;

  for (let i = 1; i <= org_length; i++) {
    ar[ar.length - i] = ar[org_length - i];
  }

  for (let i = 0; i < args.length; i++) {
    ar[i] = args[i];
  }

  return ar.length;
}


console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]