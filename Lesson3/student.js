// Write a program to determine a student’s grade based on the average of 
// three scores you get from the user. Use these rules to compute the grade:

//     If the average score is greater than or equal to 90 then the 
//     grade is 'A'
//     If the average score is greater than or equal to 70 and less 
//     than 90 then the grade is 'B'
//     If the average score is greater than or equal to 50 and less 
//     than 70 then the grade is 'C'
//     If the average score is less than 50 then the grade is 'F'

// You may assume that all input values are valid positive integers.

const rlSync = require('readline-sync');
const NUMBER_OF_SCORES = 3;

let grades = [];

for(let i = 0; i < NUMBER_OF_SCORES; i++) {
  grades.push(Number(rlSync.question(`Enter score ${i + 1}: `)));
}

let ave = average(grades);
let letterGrade = grade();

console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}".`)

function grade() {
  if (ave >= 90) {
    return "A";
  } else if (ave >= 70) {
    return "B";
  } else if (ave >= 50) {
    return "C";
  } else {
    return "F";
  }
}

function average(ar) {
  return sum() / ar.length;

  function sum() {
    return ar.reduce( (num, total) => total += num, 0 );
  }
}