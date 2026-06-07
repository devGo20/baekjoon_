// https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=javascript
function solution(prices) {
  var answer = [];
  for (let i = 0; i < prices.length; i++) {
    let dayCnt = 0
    for (let j = i + 1; j < prices.length; j++) {
      dayCnt++
      if (prices[i] > prices[j]) {
        break
      }
    }
    answer.push(dayCnt)
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]))