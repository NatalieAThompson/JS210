let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

let three = num => num === 3
arrays = [numbers1, numbers2, numbers3]

arrays.forEach( sub_array => {
  console.log(sub_array.filter(three).length !== 0 ? true : false);
});

