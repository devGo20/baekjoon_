// https://school.programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  function dfs(idx, sum) {
    if (idx === numbers.length) {
      return sum === target ? 1 : 0
    }
    let add = dfs(idx + 1, sum + numbers[idx]);
    let sub = dfs(idx + 1, sum - numbers[idx]);
    return add + sub
  }
  return dfs(0, 0)
}

console.log(solution([1, 1, 1, 1, 1], 3))