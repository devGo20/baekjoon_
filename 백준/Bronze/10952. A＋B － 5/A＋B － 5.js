const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const cases = fs.readFileSync(path, "utf8").trim().split('\n')
let answer = ''
cases.slice(0, -1).forEach((item, idx) => {
  const [a, b] = item.split(' ').map(Number)
  answer += `${a+b}\n`
})
process.stdout.write(answer)