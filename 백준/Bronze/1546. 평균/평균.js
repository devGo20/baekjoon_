const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");
const n = parseInt(input[0])

const scores = input[1].split(' ').map(Number)
const maxScore = Math.max(...scores)
let sum = 0
for (const score of scores) {
  sum += score / maxScore * 100
}

console.log(sum / n)
