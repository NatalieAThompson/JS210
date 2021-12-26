let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let array = Object.keys(obj);

array = array.map( char => char.toUpperCase());

console.log(array);