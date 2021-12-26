/*
input: string
output: clean string
- return the string with all non-alphabetic characters replaced by " "
- If a bunch of non-alphabetic character in a row, replace all of them with one space

*/

function cleanUp(str) {
  console.log(str.replace(/[^a-zA-Z]+/g, " "));
}

cleanUp("---what's my +*& line?");    // " what s my line "