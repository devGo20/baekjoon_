const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const S = input[0];
let T = input[1];

function canTransform() {
  while (T.length > S.length) {
    if (T[T.length - 1] === 'A') {
      T = T.slice(0, -1);
    } else if (T[T.length - 1] === 'B') {
      T = T.slice(0, -1);
      T = T.split('').reverse().join('');
    }
  }
  return S === T;
}

console.log(canTransform() ? 1 : 0);