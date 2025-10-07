const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n").map(line =>
  line.split(" ").map(Number)
);

const n = input[0][0];
const coords = input.slice(1);
const paper = Array(100).fill().map(() => Array(100).fill(false))
coords.forEach((coord) => {
  const [x, y] = coord
  for (let i = y; i <= y + 9; i++) {
    for (let j = x; j <= x + 9; j++) {
      paper[i][j] = true
    }
  }
})

let answer = 0
paper.map((row, i) =>
  row.map((r) => {
    if (r) {
      answer++
    }
  })
)
console.log(answer)