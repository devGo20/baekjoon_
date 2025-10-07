const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n").map(line =>
  line.split(" ").map(Number)
);

const n = input[0][0];
const coords = input.slice(1);
let area = 0;
const paper = Array.from({ length: 100 }, () => Array(100).fill(false));

for (const [x, y] of coords) {
  for (let i = y; i < y + 10; i++) {
    for (let j = x; j < x + 10; j++) {
      if (!paper[i][j]) {
        paper[i][j] = true;
        area++;
      }
    }
  }
}

console.log(area);

