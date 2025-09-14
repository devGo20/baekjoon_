const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const [n, targetNum] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
const answer = []
arr.forEach((num) => {
  if (num < targetNum) answer.push(num)
})

console.log(answer.join(' '))