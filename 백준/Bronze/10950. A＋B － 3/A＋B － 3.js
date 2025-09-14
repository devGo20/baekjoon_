const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const n = input[0];
const cases = input.slice(1);
cases.forEach((item) => {
  const [a, b] = item.split(' ').map(Number)
  console.log(a + b)
})