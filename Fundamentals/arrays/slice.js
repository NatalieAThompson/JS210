function slice(array, begin, end) {
  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;
  let result = [];

  for (let i = begin; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, element1, elementN) {
  let end = start + deleteCount;
  if (end > array.length) end = array.length;
  let deleted = [];
  let keep = [];

  for (let i = 0, loopDuration = end + array.length; i <= loopDuration; i++) {
    if ((i >= start) && (i < end) && (deleteCount !== 0)) {
      deleted.push(array[i]);
    } else if ((i === end)) {
      if (element1) keep.push(element1);
      if (elementN) keep.push(elementN);
      if (array[i]) keep.push(array[i]);
    } else if (array[i]) {
      keep.push(array[i]);
    }
  }

  array.length = keep.length;

  for (let i = 0; i < array.length; i++) {
    array[i] = keep[i];
  }

  return deleted;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]