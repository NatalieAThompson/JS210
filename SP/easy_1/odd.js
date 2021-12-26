// Log all odd numbers from 1 to 99, inclusive, to the console, 
// with each number on a separate line.

for(let i = 1; i < 100; i += 2) {
  console.log(i);
}

function logOddNumbers(end) {
  let i = 1;

   while (i <= end) {
     console.log(i);
     i += 2;
   }
}

logOddNumbers(201);