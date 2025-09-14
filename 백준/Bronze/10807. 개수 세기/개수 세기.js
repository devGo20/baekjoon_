const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
const targetNum = Number(input[2])
let answer = 0
arr.forEach((num) => {
  if (num === targetNum) answer++
})
console.log(answer)