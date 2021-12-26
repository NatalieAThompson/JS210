function nthElementOf(arr, index) {
  console.log(arr[index]);
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // undefined
nthElementOf(digits, -1);  // undefined

function firstNOf(arr, count) {
  console.log(digits.slice(0, count));
}

let d = [4, 8, 15, 16, 23, 42];
firstNOf(d, 3);    // returns [4, 8, 15]

function lastNOf(arr, count) {
  if (count >= arr.length) return arr;
  console.log(arr.slice(arr.length - count));
}

let di = [4, 8, 15, 16, 23, 42];
lastNOf(di, 3);    // returns [16, 23, 42]
lastNOf(di, 9);    // returns [16, 23, 42]

function endsOf(beginningArr, endingArr) {
  console.log([beginningArr[0], endingArr[endingArr.length - 1]]);
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]
