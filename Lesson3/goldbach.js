// Write a function named checkGoldbach that uses Goldbach's Conjecture 
// to log every pair of primes that sum to the number supplied as an 
// argument. The conjecture states that "you can express every even 
// integer greater than 2 as the sum of two primes". The function takes 
// as its only parameter, an integer expectedSum, and logs all combinations 
// of two prime numbers whose sum is expectedSum. Log the prime pairs with 
// the smaller number first. If expectedSum is odd or less than 4, your 
// function should log null.

// Your checkGoldbach function may call the isPrime function you wrote 
// for a previous practice problem
function isPrime(num) {
  if (num < 2) return false;

  let isPrime = true;

  for(let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }

  return isPrime;
}

function checkGoldbach(total) {
  let listOfPrimes = () => {
    let primes = [];

    for(let i = 2; i <= total; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    return primes;
  };

  let pairs = []

  for (let num of listOfPrimes()) {
    for (let num2 of listOfPrimes()) {
      if (num + num2 === total) pairs.push([num, num2]);
    }
  }

  if (pairs.length === 0) {
    console.log('null');
    return;
  }

  pairs = pairs.slice(0, (pairs.length + 1) / 2);

  for (let pair of pairs) {
    console.log(`${pair[0]} ${pair[1]}`);
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53