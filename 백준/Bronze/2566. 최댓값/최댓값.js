const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const matrix = fs.readFileSync(path, "utf8").trim().split("\n").map(line =>
  line.split(" ").map(Number)
);
let maxNum = -1
let xy = [-1, -1]
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (maxNum < matrix[i][j]) {
      maxNum = matrix[i][j]
      xy = [i+1, j+1]
    }
  }
}
console.log(maxNum)
console.log(xy.join(' '))