function oddLengths(array) {
  arr = arr.map( str => str.length );
  return arr.filter( num => num % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]



