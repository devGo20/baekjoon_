const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const n = input[0]
const strings = input.slice(1)
let answer = 0
for (const str of strings) {
  const stack = [str[0]]
  let correct = true
  for (let i = 1; i < str.length; i++) {
    if (stack.at(-1) !== str[i]) {
      if (!stack.includes(str[i])) {
        stack.push(str[i])
      } else {
        correct = false
        break
      }
    }
  }
  if (correct) {
    answer++

  }
}
console.log(answer)