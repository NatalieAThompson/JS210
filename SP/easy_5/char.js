function repeater(str) {
  console.log(str.split('').reduce( (result, char) => result + char + char, ''));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""