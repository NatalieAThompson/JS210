/*
input: string
output: new string
- if the character is weird change it into a space.
*/
const LOWERA = 'a'.charCodeAt(0);
const LOWERZ = 'z'.charCodeAt(0);

function cleanUp(str) {
  let result = '';
  let garbage = '';

  for(let char of str) {
    let code = char.toLowerCase().charCodeAt(0)
    if (code < LOWERA || code > LOWERZ) {
      if (garbage.length === 0) garbage += ' ';
    } else {
      if (garbage.length === 1) {
        result += garbage;
        garbage = '';
      }
      result += char;
    }
  }

  return (garbage.length === 1) ? result + garbage : result;
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");