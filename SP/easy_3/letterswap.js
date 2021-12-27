function swap(str) {
  let words = str.split(' ');

  return words.map( word => word.split('').reverse().join('')).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"