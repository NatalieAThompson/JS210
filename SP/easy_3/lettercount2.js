function wordSizes(str) {
  if(str.length === 0) return {};

  let result = {};
  str = str.replace(/[^a-zA-Z0-9 ]/g, '');

  str.split(' ').forEach( word => {
    if (result[word.length]) {
      result[word.length] += 1;
    } else {
      result[word.length] = 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}