const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const a = input.slice(1, N + 1).map(line => line.split(" ").map(Number));
const b = input.slice(N + 1).map(line => line.split(" ").map(Number));

const result = a.map((row, i) => {
  return row.map((val, j) => val + b[i][j]).join(' ')
})
console.log(result.join('\n'))
