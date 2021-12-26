function oddLengths(arr) {
  return arr.reduce( (total, element) => {
    let len = element.length;

    if (len % 2 !== 0)
      total.push(len);

    return total;
  }, new Array());
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]