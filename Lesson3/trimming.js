// Write a function that takes a string as an argument, and returns 
// the string stripped of spaces from both ends. Do not remove or 
// alter internal spaces.


function trim(str) {
  let result = '';

  for(let i = findFirstIndex(str); i < findLastIndex(str); i++) {
    result += str[i];
  }

  return result;
}

function findFirstIndex(str) {
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return i;
    }
  }

  return 0;
}

function findLastIndex(str) {
  for(let i = str.length - 1; i > 0; i--) {
    if (str[i] !== ' ') {
      return i + 1;
    }
  }

  return 0;
}

console.log(trim('  abc  ') === 'abc');  // "abc"
console.log(trim('abc   ') === 'abc');   // "abc"
console.log(trim(' ab c') === 'ab c');    // "ab c"
console.log(trim(' a b  c') === 'a b  c');  // "a b  c"
console.log(trim('      ') === '');   // ""
console.log(trim('') === '');         // ""

/*
input: string
output: string
- remove whitespace before the first character
- remove whitespace after the last character

Examples
trim('  abc  ');  // "abc"
result = 'a'
current_letter = 2


Algorithm
- Create a method `trim` that takes `str`
  - `result` equals empty string

  - loop from the return value of `findFirstIndex` to `findLastIndex`
    - add the elements to the results string

  - return `result`


- Create a helper method `findFirstIndex` that takes a `str`
  - current_index = 0
  - loop through str
    - if the character is a ' ' skip it if it is a letter add it to result.
    - update current_index to be the index of the letter
  - return current_index

- Create a helper method `findlastIndex` that takes a `str`
  - current_index declare
  - loop backwards through str
    - if the character is a ' ' skip it if it is a letter add it to result.
    - update current_index to be the index of the letter
  - return current_index

*/