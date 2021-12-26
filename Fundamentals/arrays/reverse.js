function reverse(inputForReversal) {
  let result = [];

  for (let i = inputForReversal.length - 1; i >= 0; i--) {
    result.push(inputForReversal[i]);
  }

  console.log((Array.isArray(inputForReversal)) ? result : result.join(''));
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]