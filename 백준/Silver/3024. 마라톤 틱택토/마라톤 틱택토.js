const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const n = Number(input[0]); 
const board = input.slice(1).map(line => line.split(""));

const directions = [[1, 0], [0, 1], [1, 1], [1, -1]];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const current = board[i][j];
    if (current === ".") continue;
    for (const [dy, dx] of directions) {
      let bingo = true;
      for (let k = 1; k <= 2; k++) {
        const nextX = j + dx * k;
        const nextY = i + dy * k;
        if (
          nextX < 0 ||
          nextX >= n ||
          nextY < 0 ||
          nextY >= n ||
          board[nextY][nextX] !== current
        ) {
          bingo = false;
          break;
        }
      }
      if (bingo) {
        return console.log(current);
      }
    }
  }
}
  console.log("ongoing");