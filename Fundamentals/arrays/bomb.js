// Find the Bomb
// Create a function that finds the word "bomb" in the given string 
// (not case sensitive). If found, return "Duck!!!", otherwise return 
// "There is no bomb, relax.".

// Examples

function bomb(str) {
  if (str.match('bomb')) return 'Duck!'

  return 'There is no bomb, relax.'
}

console.log(bomb("There is a bomb."))// ➞ "Duck!!!"

console.log(bomb("Hey, did you think there is a bomb?"))// ➞ "Duck!!!"

console.log(bomb("This goes boom!!!"))// ➞ "There is no bomb, relax."