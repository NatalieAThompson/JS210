let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

function push(ar, value) {
  ar[ar.length] = value;
  return ar.length;
}