function partsMatch(str) {
  let start = str.slice(0, str.length / 2);
  let end = str.slice(str.length / 2);

  return start === end;
}

function twice(num) {
  if (String(num).length % 2 === 0 && partsMatch(String(num))) {
    return num;
  }

  return num * 2;
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676