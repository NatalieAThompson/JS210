const leapYear = num => (divideByFourHundred(num) || (!divideByHundred(num) && divideByFour(num)));
const divideByFourHundred = num => ((num % 400 === 0));
const divideByHundred = num => (num % 100 === 0);
const divideByFour = num => (num % 4 === 0);

function isGregorianLeapYear(num) {
  if (leapYear(num)) {
    return true;
  } else {
    return false;
  }
}

function isLeapYear(num) {
  if (num > 1752) return isGregorianLeapYear(num);
  return divideByFour(num);
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true