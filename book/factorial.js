// function factorial(num) {
  // total = 1;
  // while (num > 0) {
  //   total *= num;
  //   num--;
  // }

  // return total;

//   for(let total = 1; num > -1; num--) {
//     if (num === 0)
//       return total;

//       total *= num
//   }
// }

function factorial(num) {
  if (num === 1)
    return num;

  return (factorial(num - 1) * num);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320