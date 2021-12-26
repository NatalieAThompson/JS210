// Implement a function that takes a string and a number times as arguments. 
// The function should return the string repeated times number of times. 
// If times is not a number, return undefined. If it is a negative number, 
// return undefined also. If times is 0, return an empty string. You may 
// ignore the possibility that times is a number that isn't an integer.

function repeat(string, times) {
  if (times === 0) return '';
  if (!(times) || !(String(times).match(/[0-9]+/)) || (times < 0) ) return undefined;

  let result = '';

  for(let i = 0; i < times; i++) {
    result += string;
  }

  return result;
}

console.log(repeat('abc', 1) === 'abc');       // "abc"
console.log(repeat('abc', 2) === 'abcabc');       // "abcabc"
console.log(repeat('abc', -1) === undefined);      // undefined
console.log(repeat('abc', 0) === '');       // ""
console.log(repeat('abc', 'a') === undefined);     // undefined
console.log(repeat('abc', false) === undefined);   // undefined
console.log(repeat('abc', null) === undefined);    // undefined
console.log(repeat('abc', '  ') === undefined);    // undefined

/*
input: string, number
output: string or undefined
- return a string repeated the number of times the number passed in is.
- if no number is passed in or a neg number return undefined.
- if the number passed in is 0 return an empty string

Algorithm
- Create a function `repeat` that takes `string` and `times`
  - If times is undefined or less than 0 return undefined
  - If times equals 0 return ''
  - Initialize an empty string `result`
  - loop `times` amount
    - each iteration concat `result` with `string`
  - return `result`
*/