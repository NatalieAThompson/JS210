// function crunch(str) {
//   console.log(str.split('').reduce( (total, char, index) => {
//     return str[index - 1] === char ? total : total + char;
//   }, ''));
// }
// let regex = /([0-9A-Za-z])\1+?/g;
let regex = /([a-zA-Z0-9 ]{1})(\1+||\1)?/g;

function crunch(str) {
  const array = [...str.matchAll(regex)];

  let total = '';

  for (let i = 0; i < array.length; i++) {
    total += array[i][1];
  }

  console.log(total);
}


crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""