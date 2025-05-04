function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }
  let answer = Infinity;
  const visited = Array(words.length).fill(false);
  function dfs(start, count) {
    if (start === target) {
      answer = Math.min(answer, count);
      return;
    }
    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;
      if (checkChange(words[i], start)) {
        // console.log('hi?', start, words[i]);
        visited[i] = true;
        dfs(words[i], count + 1);
        visited[i] = false;
      }
    }
  }
  dfs(begin, 0);
  return answer;
}

function checkChange(word1, word2) {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}