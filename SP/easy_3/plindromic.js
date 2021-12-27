function isPalindrome(str) {
  let chars = str.split('');
  let reverse = chars.slice().reverse();

  for (let index in chars) {
    if (chars[index] !== reverse[index]) return false
  }

  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true