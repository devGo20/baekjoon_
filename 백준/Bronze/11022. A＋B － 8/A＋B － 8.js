const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const n = input[0];
const cases = input.slice(1);
let answer = ''
cases.forEach((item, idx) => {
  const [a, b] = item.split(' ').map(Number)
  answer += `Case #${idx+1}: ${a} + ${b} = ${a+b}\n`
})
process.stdout.write(answer)