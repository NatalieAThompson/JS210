const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurrences(ar) {
  return ar.reduce((obj, ele) => {
    (obj[ele]) ? obj[ele] += 1 : obj[ele] = 1;
    return obj;
  }, {});
}

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2