function dms(angle) {
  let degrees = Math.floor(angle);
  let convertToMin = (angle - degrees) * 60
  let minutes = Math.floor(convertToMin);
  let secs = Math.floor((convertToMin - minutes) * 60)

  console.log(`${degrees}˚${minutes.toString().padStart(2, '0')}'${secs.toString().padStart(2, '0')}"`)
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

// 15.43° = 15° + (0.43 x 60')

// = 15° + 25.8'

// =15° + 25' + (0.8 x 60")

// = 15° + 25' + 48''

// = 15° 25' 48''