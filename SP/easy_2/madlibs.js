const rlSync = require('readline-sync');

let noun;
let verb;
let adjective;
let adverb;

let getInput = () => {
  noun = rlSync.question("Enter a noun: ");
  verb = rlSync.question("Enter a verb: ");
  adjective = rlSync.question("Enter a adjective: ");
  adverb = rlSync.question("Enter a adverb: ");
};

let combineInput = () => {
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
};

getInput();
combineInput();


// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!