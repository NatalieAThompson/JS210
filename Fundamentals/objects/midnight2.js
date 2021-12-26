const dateObject = str => {
  let today = new Date();
  today.setHours(Number(str.slice(0, 2)));
  today.setMinutes(Number(str.slice(3)));

  return today;
}


function afterMidnight(str) {
  let today = dateObject(str);

  let totalMin = today.getMinutes();

  totalMin += today.getHours() * 60;

  return totalMin;
}

function beforeMidnight(str) {
  let today = dateObject(str);

  let totalMin = 60 - today.getMinutes();
  // console.log(totalMin, 23 - today.getHours());

  totalMin += (23 - today.getHours()) * 60;

  return totalMin === 1440 ? 0 : totalMin;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686

function counter(count) {
  // ...
}

let counter = 5;
let rate = 3;



console.log('The total value is ' + String(counter * rate));