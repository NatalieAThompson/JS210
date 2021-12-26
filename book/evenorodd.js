function evenorodd(arg) {
  if (Number.isInteger(arg))
    return !!(arg % 2 === 0) ? 'even' : 'odd';
  else
    return "Please enter a number";
}

console.log(evenorodd(5));
console.log(evenorodd(60));
console.log(evenorodd('al;d'));

/*
if (foo()) {
  return 'bar';
} else {
  return qux();
}

*/