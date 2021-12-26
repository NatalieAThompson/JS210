// Create a variable named total with an initial value of 0 at the start 
// of the average function. Use a for loop to iterate over all the elements 
// in the array. With each iteration, add the element's value to the total.
// When the loop finishes, return the total divided by the array's length. 
// Call average with an array of five numbers and log the result.

function average(...ar) {
  return sum(...ar) / ar.length;
}

function sum(...ar) {
  let total = 0;

  ar.forEach( num => total += num);

  return total;
}

let temps = [5, 5, 5, 5, 5];

console.log(average(0, 10, 5, 5, 5));
console.log(...temps)