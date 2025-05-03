function solution(tickets) {
  const answer = [];
  const visited = Array(tickets.length).fill(false);
  tickets.sort((a, b) => a[1].localeCompare(b[1]));
  function dfs(start, path) {
    for (let i = 0; i < tickets.length; i++) {
      if (path.length === tickets.length + 1) {
        answer.push(path);
        return;
      }
      if (visited[i]) continue;
      if (tickets[i][0] === start) {
        visited[i] = true;
        dfs(tickets[i][1], [...path, tickets[i][1]]);
        visited[i] = false;
      }
    }
  }
  dfs('ICN', ['ICN']);
  return answer.sort()[0];
}