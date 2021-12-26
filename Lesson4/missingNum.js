function missing(ar) {
  let result = [];

  for (let i = 1; i < ar.length; i++) {
    if ((Math.abs(ar[i] - ar[i - 1]) !== 1)) {
      for (let number = ar[i - 1] + 1; number < ar[i]; number++) {
        result.push(number);
      }
    }
  }

  console.log(result);
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []