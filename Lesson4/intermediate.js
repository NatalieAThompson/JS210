function oddElementsOf(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// Write a function that takes an array argument and returns a new array
// that contains all the argument's elements in their original order
// followed by all the argument's elements in reverse order.

function forwardReverse(ar) {
  let result = ar.slice();

  for (let i = ar.length - 1; i >= 0; i--) {
    result.push(ar[i]);
  }

  return result;
}

console.log(forwardReverse([1, 2, 3]));