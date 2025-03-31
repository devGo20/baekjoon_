const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const S = input[0];
const T = input[1].split('');

while (T.length > S.length) {
  if (T.at(-1) === 'A') {
    T.pop();
  } else if(T.at(-1) ==='B'){
    T.pop();
    T.reverse();
  }
}
console.log(S === T.join('') ? 1 : 0);
