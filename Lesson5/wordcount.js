function wordCount(str) {
  let count = {};
  let words = new Set([...str.split(' ')]);

  for (let word of words) {
    let matches = str.match(new RegExp(word,"g"));
    count[word] = matches.length;
  }

  console.log(count);
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }