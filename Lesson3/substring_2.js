// This practice problem is similar to the previous one. This time though, 
// both arguments are indices of the provided string. The following rules 
// apply:

//     If both start and end are positive integers, start is less than end, 
//     and both are within the boundary of the string, return the substring 
//     from the start index (inclusive), to the end index (NOT inclusive).
//     If the value of start is greater than end, swap the values of the two, 
//     hen return the substring as described above.
//     If start is equal to end, return an empty string.
//     If end is omitted, the end variable inside the function isundefined. 
//     Return the substring starting at position start up through (and 
//       including) the end of the string.
//     If either start or end is less than 0 or NaN, treat it as 0.
//     If either start or end is greater than the length of the string,
//      treat it as equal to the string length.

/*
input: string, Number, Number
output: string
- return a substring if
  - both numbers are positive
  - start is less than end
  - both are within the string boundary
  - return substring from start index (inclusive)
  - to end index (not inclusive)
- If start > end swap values of start and end
- If start === end return ''
- If end is omitted, end is undefined
  - return substring from start to end of string
- If start or end is < 0 or NaN treat it as 0
- If start or end is greater than the length of the string treat it as the length of the string

- "a" counts as NaN
Number("a") 

Algoritm
- Create a function `substring` that takes a `string`, `start`, `end`\
  - if start > end 
    - swap the values of start and end

  - if start || end < 0 or !Number(start||end)
    -  assign start || end to 0

  - if end === undefined || end > string.length
    - end = `string.length`

  - `result` is an empty string

  - loop from the start index untill = to the end index
    - add index value to result
    - add 1 to start

  - return result.
*/

const ShouldBeZero = num => (!Number(num) || (num < 0));
const ToEndOfString = (num, length) => (num === undefined || num > length)

function substring(string, start, end) {
  if (ToEndOfString(end, string.length)) end = string.length;
  if (ShouldBeZero(start)) start = 0;
  if (ShouldBeZero(end)) end = 0;
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let result = '';

  for(; start < end; start++) {
    result += string[start];
  }

  return result;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
