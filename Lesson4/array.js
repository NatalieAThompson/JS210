const lastInArray = (ar) => ar[ar.length - 1];

const rollCall = (ar) => ar.forEach((name) => console.log(name));

rollCall(['Natalie', 'Anne', 'Rona']);

function reverse(ar) {
  let result = [];

  for (let i = ar.length - 1; i >= 0; i--) {
    result.push(ar[i]);
  }

  return result;
}

console.log(reverse(['Natalie', 'Anne', 'Rona']));

function join(ar) {
  let result = ''

  for (let i = 0; i < ar.length; i++) {
    result += String(ar[i]);
  }

  return result;
}

console.log(join([1, 'a', 4]));
