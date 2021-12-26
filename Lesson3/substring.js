// function indexOf(firstString, secondString) {
//   // statements

// }

// function lastIndexOf(firstString, secondString) {
//   // statements
// }

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

function findPossibilites(string, letter) {
  let possibilites = [];

  for (let index in string) {
    if (string[index] === letter) {
      possibilites.push(Number(index));
    }
  }

  return possibilites;
}

function findIndex(possibilites, string, substring) {
  for (let index of possibilites) {
    let subs = ''
    for(let i = index; i < index + substring.length; i++) {
      subs += string[i];
    }

    if (subs === substring) return index;
  }

  return -1;
}

function indexOf(string, substring) {
  let possibilites = findPossibilites(string, substring[0]);

  return findIndex(possibilites, string, substring);
}

function lastIndexOf(string, substring) {
  let possibilites = findPossibilites(string, substring[0]).reverse();

  return findIndex(possibilites, string, substring);
}




/*
input: 2 strings
output: Number
// -case is important
// -Look for a whole word start location
// -If it doesn't exsit then return -1

indexOf('Some strings', 's'); 

'Some strings'
loop through the string.
if a letter matches 's' return the index of the letter
return 5

indexOf('Blue Whale', 'Whale'); 
loop through the string
if a letter matches 'W' return the index of that letter.


Algorithm
  
-Create a method `indexOf` that takes `string` and `substring`
  - possibilites = `findPossibilities`
  
  - loop through the possibilites array `index`
    - start at the `index`
    - let subs = ''
    - loop through `string` from that index to `index` + `substring.length`
      - concat each letter to `subs`
    - if `subs` === `substring`
       - return `index`

  - return -1

*/