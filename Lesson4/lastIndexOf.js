function lastIndexOf(ar, value) {
  for (let i = ar.length - 1; i >= 0; i--) {
    if (value === ar[i]) return i
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1
console.log(lastIndexOf([1, 2, 3], 1));        // 0