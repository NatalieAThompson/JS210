function concat(...args) {
  let result = [];

  for (let ele of args) {
    if (Array.isArray(ele)) {
      ele.forEach(num => result.push(num));
    } else {
      result.push(ele);
    }
  }

  return result;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]