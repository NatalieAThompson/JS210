const topBottom = (len, borderSym, repeatSym) => {
  console.log(borderSym + repeatSym.repeat(len) + borderSym)
}

const message = str => console.log('| ' + str + ' |');

const partsOfString = (str, maxLength) => ((str.length / maxLength) * maxLength);

function logInBox(str, maxLength = 0) {
  let len = maxLength + 2;

  topBottom(len, '+', '-');
  topBottom(len, '|', ' ');
  for (let i = 0; i <= partsOfString(str, maxLength); i += maxLength){
    let slice = str.slice(i, i + maxLength);
    let sliceLength = slice.length;
    if (sliceLength === maxLength) message(str.slice(i, i + maxLength));
    else console.log('| ' + slice + ' '.repeat(maxLength - sliceLength) + ' |');
  }
  topBottom(len, '|', ' ');
  topBottom(len, '+', '-');
}

logInBox('To boldly go where no one has gone before.', 20);
logInBox('');

// const topBottom = (len, borderSym, repeatSym) => {
//   console.log(borderSym + repeatSym.repeat(len) + borderSym)
// }

// const message = str => console.log('| ' + str + ' |');

// function logInBox(str, maxLength = 0) {
//   len = maxLength + 2;
//   topBottom(len, '+', '-');
//   topBottom(len, '|', ' ');
//   message(str.slice(0, maxLength));
//   topBottom(len, '|', ' ');
//   topBottom(len, '+', '-');
// }

// logInBox('To boldly go where no one has gone before.', 20);
// logInBox('');