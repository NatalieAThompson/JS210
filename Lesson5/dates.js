let today = new Date();

function dateSuffix(month) {
  if (month === 1 || month === 21 || month === 31) {
    return String(month) + 'st';
  } else if (month === 2 || month === 22) {
    return String(month) + 'nd';
  } else if (month === 3 || month === 23) {
    return String(month) + 'rd';
  } else {
    return String(month) + 'th';
  }
}

function formattedMonth() {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[today.getMonth()];
}

function formattedDay() {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[today.getDay()];
}

function formattedDate() {
  console.log(`Today's date is ${formattedDay()}, ${formattedMonth()} ${dateSuffix(today.getDate())}.`)
}

formattedDate();

// console.log(today.getFullYear());
// console.log(today.getYear());

// console.log(today.getTime());

// let tomorrow = today;
// tomorrow.setDate(22);

// console.log(tomorrow);

let nextWeek = new Date(today);
console.log(nextWeek == today);

console.log(nextWeek.toDateString() === today.toDateString());

console.log((nextWeek.getDate() + 7));

function formateTime(date) {
  return `${date.getHours()}:${date.getMinutes()}`
}

console.log(formateTime(nextWeek));