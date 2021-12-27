function interleave(ar1, ar2) {
  return ar1.reduce( (result, ele, index) => {
    result.push(ele);
    result.push(ar2[index]);
    return result
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]