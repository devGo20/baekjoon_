function solution(n, w, num) {
  var answer = 0;
  let level = 1;
  let wall = []
  let index = undefined;
  for (let i = 1; i <= n; i += w) {
    let tmp = [];
    for (let j = i; j < i + w; j++) {
      tmp.push(j > n ? NaN : j);
    }
    if (level % 2 === 0) {
      tmp.reverse()
    }
    if (tmp.includes(num)) {
      index = tmp.indexOf(num);
    }
    if (!isNaN(tmp[index]) && index !== undefined) {
      answer++;
    }
    wall.unshift(tmp);
    level++;
  }

  return answer;
}