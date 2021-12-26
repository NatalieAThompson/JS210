function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

/*
The user wants to sum two arrays elements and then multiply them together.
Inside the total function the programmer never initialized the `sum` variable.
The programmer also did not declare an explict return for sum on line 13.
*/