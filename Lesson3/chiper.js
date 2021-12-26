// Rot13 ("rotate by 13 places") is a letter-substitution cipher that 
// translates a String into a new String:

// For each character in the original String:

//     If the character is a letter in the modern English alphabet, 
//     change it to the character 13 positions later in the alphabet.
//      Thus, a becomes n. If you reach the end of the alphabet, 
//      return to the beginning. Thus, o becomes b.
//     Letter transformations preserve case. A becomes N while a becomes n.
//     Don't modify characters that are not letters.

/*
input: string
output: string
- move 13 poistions over in the alphebet a -> n
  - o -> b
- preserve case
  - a -> n
  - A -> N
- don't motify characters that are not letters

a 97
z 122

Algorithm
- Create a function `rot13` that takes `str`
  - result = ''
  - loop through the string
    - if the character is a letter
      - add the new character to result
    - else
      - add the original character to result
  - return result

- Create a function `transformLetter` that takes `char`
  - check if uppercase
    - upper = true
  - else upper = false
  - downcase the letter

  if char > n
    - convert to ASCII
    - add 13
    - convert back to character
  else
    - convert to ASCII
    - subtract 13
    - convert back to character

*/

const IsLetter = char => char.match(/[a-zA-Z]/);
const IsUpperCase = char => char.match(/[A-Z]/);
const MIDDLE = 110;

function transformLetter(char) {
  if (IsUpperCase(char)) var upper = true;

  char = char.toLowerCase();

  charCode = char.charCodeAt(0);

  (charCode < MIDDLE) ? charCode += 13 : charCode -= 13;

  char = String.fromCharCode(charCode)

  return upper ? char.toUpperCase() : char;
}

function rot13(str) {
  let result = '';

  for(let i = 0; i < str.length; i++) {
    if (IsLetter(str[i])) {
      result += transformLetter(str[i]);
    } else {
      result += str[i];
    }
  }

  return result;
}

// Write a Function, rot13, that takes a String and returns that 
// String transformed by the rot13 cipher.

console.log(rot13('T'));
console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.

// This happens since there are 26 characters in the modern English alphabet: 2 sets of 13.