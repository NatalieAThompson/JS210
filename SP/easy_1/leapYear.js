const threeConditions = num => ((num % 400 === 0) && divideByHundred(num) && divideByFour(num));
const divideByHundred = num => (num % 100 === 0);
const divideByFour = num => (num % 4 === 0);

function isLeapYear(num) {
  if (threeConditions(num)) {
    console.log(true);
  } else if (divideByHundred(num)) {
    console.log(false);
  } else if (divideByFour(num)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

/*
input: number
output: boolean
- leap year is
  - year year divisible by 4
    - unless it is also divisible by 100
      - unless divisible by 400
- valid for any number greater than 0

num / 4 true
  num / 100 false
    num / 400 true

num / 4 but not num / 100
num / 100 and num / 400

num / 400 and num / 100 and num / 4 
  true

num / 100 
  false

num / 4 
  true
*/

