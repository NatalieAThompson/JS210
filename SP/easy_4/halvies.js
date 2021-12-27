function halvsies(ar) {
  let result = [[], []];

  for (let i = 0; i < ar.length; i++) {
    (i < ar.length / 2) ? result[0].push(ar[i]) : result[1].push(ar[i]);
  }

  console.log(result);
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]