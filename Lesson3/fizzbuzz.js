// Write a function that iterates over the integers from 1 to 100, 
// inclusive. For multiples of three, log "Fizz" to the console. For 
// multiples of five, log "Buzz". For numbers which are multiples of 
// both three and five, log "FizzBuzz". For all other numbers, log the 
// number.

// Your output should look like this:

function fizzbuzz() {
  for(let i = 1; i < 101; i++) {
    if ((i % 3 === 0) && (i % 5 ===0)) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 ===0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();