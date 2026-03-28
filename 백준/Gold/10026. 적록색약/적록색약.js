const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const grid = input.slice(1).map(v => v.split(""));

let count = 0;
let count1 = 0;

function dfs(x, y, target, visited) {
  if (
    x < 0 ||
    x >= N ||
    y < 0 ||
    y >= N ||
    visited[x][y] ||
    !target.includes(grid[x][y])
  ) {
    return;
  }

  visited[x][y] = true;

  dfs(x - 1, y, target, visited);
  dfs(x + 1, y, target, visited);
  dfs(x, y + 1, target, visited);
  dfs(x, y - 1, target, visited);
}

// 정상 시야
const visited = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      dfs(i, j, [grid[i][j]], visited);
      count++;
    }
  }
}

// 적록색약
const visited1 = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited1[i][j]) {
      if (grid[i][j] === 'R' || grid[i][j] === 'G') {
        dfs(i, j, ['R', 'G'], visited1);
      } else {
        dfs(i, j, [grid[i][j]], visited1);
      }
      count1++;
    }
  }
}

console.log(count, count1);
