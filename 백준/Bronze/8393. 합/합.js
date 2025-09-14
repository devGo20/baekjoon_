const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = Number(fs.readFileSync(path, "utf8"))
let answer = 0
for (let i = 1; i <= input; i++) {
  answer += i
}
console.log(answer)