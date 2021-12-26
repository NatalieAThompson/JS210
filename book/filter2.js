let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let evens = []

myArray.forEach( function(sub_array) {
  sub_array.forEach( function(num)  {
    if (num % 2 === 0 ) 
      evens.push(num)
  });
});

evens.forEach(num => console.log(num));