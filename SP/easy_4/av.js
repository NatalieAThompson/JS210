function average(ar) {
  console.log(Math.floor(ar.reduce( (total, num) => total + num, 0) / ar.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40