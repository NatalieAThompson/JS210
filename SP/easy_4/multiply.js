function multiplyList(ar1, ar2) {
  return ar1.map( (ele, index) => ele * ar2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]