const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n").map(line =>
  line.split(" ").map(Number)
);

const n = input[0][0];
const coords = input.slice(1);
const paper = Array(100).fill().map(() => Array(100).fill(false));

coords.forEach(([x, y]) => {
  for (let i = y; i < y + 10; i++) {
    for (let j = x; j < x + 10; j++) {
      paper[i][j] = true;
    }
  }
});

let answer = 0;
paper.forEach(row => {
  row.forEach(cell => {
    if (cell) answer++;
  });
});

console.log(answer);
