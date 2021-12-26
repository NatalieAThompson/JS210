// Write a function that logs the integers from 1 to 100 (inclusive) 
// that are multiples of either 3 or 5. If the number is divisible by 
// both 3 and 5, append an "!" to the number.

function multiplesOfThreeAndFive() {
  for(let i = 1; i < 101; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(i + '!');
    } else if ((i % 3 === 0) || (i % 5 === 0)) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive();