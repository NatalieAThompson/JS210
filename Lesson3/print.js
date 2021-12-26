// Write a function logMultiples that takes one argument number. 
// It should log all multiples of the argument between 0 and 100 
// (inclusive) that are also odd numbers. Log the values in 
// descending order.

// You may assume that number is an integer between 0 and 100.

function logMultiples(num) {
  for(let i = 100; i > 0; i--){
    if ((i % num === 0) && (i % 2 !== 0)) {
      console.log(String(i));
    }
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

// logMultiples(21);
