function stringy(num) {
  console.log(Array(num).fill(1).reduce( (result, _, index) => {
    return ((index + 1) % 2) ? result + '1' : result + '0';
  }), '');
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"