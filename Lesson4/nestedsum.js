function matrixSums(arr) {
  return arr.map( sub_ar => sub_ar.reduce( (total, ele) => total + ele ), 0);
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]