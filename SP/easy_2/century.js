/*
input: number
output: string
- string begins with century number
- string ends with 'st', 'nd', 'rd', or 'th'
- new centuries begin in years that end with 01
  - So, 1901 - 2000 is the 20th century

2000 / 100 = 20
2001 / 100 = 20 if there is a remainder add 1 = 21
1965 / 100 = 19 + 1 = 20th
256 / 100 = 2 + 1 = 3
5 / 100 = 0 + 1 = 1
10103 / 100 = 101 + 1 
1052 / 100 = 10 + 1
1127 / 100 = 11 + 1
11201 / 100 = 112 + 1

-th - 0, 11, 12, 13
-st - 1
-rd - 3
-nd - 2
Ends in a 1, 2, 3 but not a 11, 12, 13

Algorithm
-Create a function `century` that takes a `year`
  - attachEnding(findCenturyNumber(year))

- Creeate a function `findCenturyNumber` that takes a `year`
  - divide the year by 100. (get the int)
  - If the division has a remainder add 1
  - if not return the number as a string.

- Create a function `attachEnding` that takes a `str`
  - if the last letter is 1 but not 11 
    - concate 'st' to the str
  - if the last letter is 2 but not 12
    - concate 'nd' to the str
  - if the last letter is 3 but not 13
    - concate 'rd' to the str
  - anything else
    - concate 'th' to str
*/

function attachEnding(str) {
  const checkLastTwoValues = lastValue =>
    (str[str.length - 1] === lastValue &&
       (str[str.length - 2] !== '1' ||
        str[str.length - 2] === undefined))


  if (checkLastTwoValues('1')) {
    return str + 'st';
  } else if (checkLastTwoValues('2')) {
    return str + 'nd';
  } else if (checkLastTwoValues('3')) {
    return str + 'rd';
  } else {
    return str + 'th';
  }
}

function findCenturyNumber(year) {
  let century = parseInt(year / 100);
  let remainder = !!(year % 100);

  return String(remainder ? century + 1 : century);
}

const century = (year) => console.log(attachEnding(findCenturyNumber(year)));

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"