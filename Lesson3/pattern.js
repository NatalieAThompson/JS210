// Write a function that takes a number of rows as the argument nStars 
// and logs a square of numbers and asterisks. For example, if nStars 
// is 7, log the following pattern:

function generatePattern(num) {
  for(let i = 0, string = ''; i < num; i++) {
    string += String(i + 1);
    console.log(string + '*'.repeat(num - (i + 1)));
  }
}

generatePattern(7);
