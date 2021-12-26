// Write a function that returns a string converted to lowercase.

// To convert a single uppercase character to a lowercase character, 
// get its ASCII numeric representation from the ASCII table, add 32 
// to that number, then convert the number back to a character using 
// the same ASCII table. You can use the String.fromCharCode and the 
// String.charCodeAt methods for these operations. For example:

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

const UpperCaseASCIIRange = num => (num >= 65) && (num <= 90);

function toLowerCase(string) {
  let result = '';

  for (let char of string) {
    let charCode = char.charCodeAt(0);
    if (UpperCaseASCIIRange(charCode)) {
      result += String.fromCharCode(charCode + 32);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"

/*
input: string
output: string
- lowercase each letter in the string
- do it converting them to ascii and back.
*/