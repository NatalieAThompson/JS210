// Create a function that computes the Greatest Common Divisor of two 
// positive integers.

function gcd(num, num2) {
  let nums = divisors(num).reverse();
  let nums2 = divisors(num2).reverse();

  for (let num of nums) {
    if (nums2.includes(num)) return num;
  }
}

function divisors(num) {
  let divisors = []

  for(let i = 0; i <= num; i++) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1