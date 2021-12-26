function indexOf(ar, value) {
  for (let i = 0; i < ar.length; i++) {
    if (value === ar[i]) return i
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1