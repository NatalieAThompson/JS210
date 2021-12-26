function penultimate(string) {
  array = string.split(' ');
  return array[array.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"