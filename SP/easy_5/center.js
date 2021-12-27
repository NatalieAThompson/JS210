function centerOf(str) {
  let center = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    return str[center];
  } else {
    return str.slice(center - 1, center + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"