const rlSync = require('readline-sync');

let length = rlSync.question("Enter the length of the room in meters:\n");
let width = rlSync.question("Enter the width of the room in meters:\n");

let square_meters = length * width;
const SquareFeetInSquareMeter = 10.7639;

console.log(`The area of the room is ${square_meters.toFixed(2)}\
 square meters (${(square_meters * SquareFeetInSquareMeter).toFixed(2)}\
 square feet).`);