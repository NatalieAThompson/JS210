// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10


function makeDoubler(caller) {
  return (num) => {
    console.log(`This function was called by ${caller}.`);
    return num + num;
  }
}


const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10