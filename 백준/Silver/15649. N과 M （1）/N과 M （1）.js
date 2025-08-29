// N과 M (1) 중복 없이 고른 수열
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const visited = Array(N + 1).fill(false)
const sequence = []
const answer = []
function dfs(depth) {
  if (depth === M) {
    answer.push(sequence.join(' '))
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      sequence.push(i)
      visited[i] = true
      dfs(depth + 1)
      sequence.pop()
      visited[i] = false
    }
  }
}
dfs(0)
console.log(answer.join('\n'))