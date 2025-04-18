const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const s = input[0].split('');
const bomb = input[1];
const stack = [];
for (let i = 0; i < s.length; i++) {
  stack.push(s[i]);
  if (stack.length >= bomb.length) {
    let i;
    for (i = 0; i < bomb.length; i++) {
      if (stack.at(-1 - i) !== bomb.at(-1 - i)) {
        break;
      }
    }
    if (i === bomb.length) {
      for (let j = 0; j < bomb.length; j++) {
        stack.pop();
      }
    }
  }
}

console.log(stack.length === 0 ? 'FRULA' : stack.join(''));
