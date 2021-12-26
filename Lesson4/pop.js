function pop(ar) {
  let lastElement = ar[ar.length - 1];

  ar.length = ar.length - 1;

  return lastElement;
}


let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]