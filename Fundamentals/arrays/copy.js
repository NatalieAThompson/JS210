let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray;

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// Version 1
const copyArray = myArray.slice();

console.log(copyArray);

// Version 2
const copyArray2 = [];

for (let i = 0; i < myArray.length; i++) {
  copyArray2[i] = myArray[i];
}

console.log(copyArray);