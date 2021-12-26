function repeatedCharacters(str) {
  str = str.toLowerCase();
  let letters = [];
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i])) {
      (result[str[i]]) ? result[str[i]] += 1 : result[str[i]] = 2;
    } else {
      letters.push(str[i]);
    }
  }

  console.log(result);
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }