function join(ar, str) {
  let result = '';

  for (let i = 0; i < ar.length - 1; i++) {
    result += ar[i] + str;
  }

  return result + ar[ar.length - 1];
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'