function swapName(name) {
  let [first, last] = name.split(' ');

  console.log(`${last}, ${first}`);
}

swapName('Joe Roberts');    // "Roberts, Joe"