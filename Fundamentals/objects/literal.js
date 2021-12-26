const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1]; // 'd'
myObject[a]; // a needs to be in quotes to indicate that it is a key.
myObject.a; // 'name'