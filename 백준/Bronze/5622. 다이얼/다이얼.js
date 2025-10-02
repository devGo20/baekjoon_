const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('')
const mapping = [
  ["ABC", 2],
  ["DEF", 3],
  ["GHI", 4],
  ["JKL", 5],
  ["MNO", 6],
  ["PQRS", 7],
  ["TUV", 8],
  ["WXYZ", 9],
];

let answer = 0
input.forEach((i) => {
  mapping.forEach(([letters, num]) => {
    if (letters.includes(i)) answer += num + 1
  })
})

console.log(answer)