function sumOrProduct(ar, command) {
  if (command === 's')
    return ar.reduce( (num, total) => total + num );
  else
    return ar.reduce( (num, total) => total * num );
}

console.log(sumOrProduct([1, 2, 3, 4, 5], 's'));
console.log(sumOrProduct([1, 2, 3, 4, 5, 6], 'p'));