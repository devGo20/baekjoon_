const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n").map(Number);
const n = input[0];
const titles = input.slice(1).map(Number);

const stack = [];
const answer = Array(n).fill(0);


if (titles.at(0) !== 1) {
  return console.log(-1)
}
for (let i = 1; i < n; i++) {
  if (titles[i] - titles[i - 1] > 1) {
    return console.log(-1)
  }
}
for (let i = n; i >= 0; i--) {
  while (stack.length !== 0 && stack.at(-1) - 1 === titles[i]) {
    answer[i]++
    stack.pop()
  }
  stack.push(titles[i])
}
console.log(answer.join('\n'))

// 2 3 2 2 1 인 경우 안됨
if (false) {
  for (const title of titles) {

    if (stack.length !== 0 && stack.at(-1) - title >= 2) {
      console.log(-1);
      process.exit(0);
    } else {
      if (stack.at(-1) > title || stack.length === 0) {
        answer.push(stack.length);
      } else if (stack.at(-1) === title) {
        answer.push(0)
      }

      while (stack.length && stack.at(-1) > title) {
        stack.pop();
      }
      if (title !== 1) {
        stack.push(title);
      }
    }
  }

  console.log(answer.reverse().join("\n"));
}