function isPalindrome(str) {
  let chars = str.split('');
  let reverse = chars.slice().reverse();

  for (let index in chars) {
    if (chars[index] !== reverse[index]) return false
  }

  return true;
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true