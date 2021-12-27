// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const rlSync = require('readline-sync');

const age = parseInt(rlSync.question("What is your age? "));
const retirement = parseInt(rlSync.question("At what age would you like to retire? "));

const current_date = new Date();
const yearsTill = retirement - age;

console.log(`It's ${current_date.getFullYear()}. You will retire in ${current_date.getFullYear() + yearsTill}`);
console.log(`You have only ${yearsTill} years of work to go!`);