let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(obj, str) {
  console.log(Object.keys(obj).includes(str));
}

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true

let wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(obj, str) {
  return obj[str] ? ++obj[str] : obj[str] = 1;
}

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

let hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(obj, obj2) {
  let count = 0;

  for (let key in obj) {
    console.log(key);
    if (!obj2[key]) {
      count++;
      obj2[key] = obj[key];
    }
  }

  return count;
}

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }


