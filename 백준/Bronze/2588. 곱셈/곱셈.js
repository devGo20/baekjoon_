// 곱셈
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const [a, b] = fs.readFileSync(path, "utf8").split('\n').map(Number);
let answer = 0;
for (let i = 2; i >= 0; i--) {
  const result = Number(String(b)[i]) * a;
  answer += Number(result * Math.pow(10, 2 - i))
  console.log(result)
}
console.log(answer) // 181720