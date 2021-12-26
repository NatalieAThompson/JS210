let rlSync = require('readline-sync');

function getname(name) {
  return rlSync.question(`What is your ${name} name?\n`)
}

let answer = getname("first");
let lastname = getname("last");

console.log(`Hello, ${answer + ' ' + lastname}!`)