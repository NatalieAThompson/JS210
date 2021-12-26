function unshift(ar, value) {
  ar.length = ar.length + 1;
  let temp = ar.slice();

  for(let i = 0; i < ar.length; i++) {
    ar[i] = temp[i - 1];
  }

  ar[0] = value;

  return ar.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]