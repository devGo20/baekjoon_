const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");
const n = Math.max(...input.map(line => line.length));
const matrix = input.map(i => i.padEnd(n, ' ').split(''))
let answer = ''
for (let x = 0; x < matrix[0].length; x++) {
  for (let y = 0; y < matrix.length; y++) {
    if (matrix[y][x]) answer += matrix[y][x].trim()
  }
}
console.log(answer)



