// should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

function doubleConsonants(str) {
  return str.split('').reduce( (result, char) => {
    if (char.match(/[^bcdfghjklmnp-tvwxyz]/i)) {
      return result + char;
    } else {
      return result + char + char;
    }
  }, '');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""