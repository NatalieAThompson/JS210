function timeOfDay(minutes) {
  let today = new Date();
  today.setMinutes(0 + minutes);
  let hours = minutes / 60; // Negitive ones dont work.
  // console.log(hours);
  if (minutes > 0) {
    today.setHours(0 + hours)
  } else {
    today.setDate(today.getDay() - 1)
    hours = Math.abs(Math.floor(hours))
    // console.log(hours)
    today.setHours(24 - hours);
  }

  console.log(`${today.getHours().toString().padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")}`);
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57" --
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03" --
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29" --