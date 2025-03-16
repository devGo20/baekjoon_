const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const n = parseInt(input[0], 10);
const m = parseInt(input[1], 10);
const edges = input.slice(2).map(line => line.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []); 
const visited = Array(n + 1).fill(false);
edges.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a); 
});

let infectionCnt = 0;

const dfs = (node) => {
  visited[node] = true;
  for (let next of graph[node]) {
    if (!visited[next]) {
      infectionCnt++;
      dfs(next)
    }
  }
}

dfs(1)
console.log(infectionCnt)
