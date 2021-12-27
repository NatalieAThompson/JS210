function union(ar1, ar2) {
  let result = [];
  let length;

  length = (ar1.length > ar2.length) ? ar1.length : ar2.length;

  for (let i= 0; i < length; i++) {
    if (!result.includes(ar1[i]) && ar1[i] !== undefined) result.push(ar1[i]);
    if (!result.includes(ar2[i]) && ar2[i] !== undefined) result.push(ar2[i]);
  }

  console.log(result)
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]