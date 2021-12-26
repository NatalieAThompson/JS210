// Write a function that takes a number argument, and returns true 
// if the number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.

//greater than 1 and can only be divided by itself.

function isPrime(num) {
  if (num < 2) {
    console.log(false);
    return
  }

  let isPrime = true;

  for(let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }

  console.log(isPrime);
}

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false