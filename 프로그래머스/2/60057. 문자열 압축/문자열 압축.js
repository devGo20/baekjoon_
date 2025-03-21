function solution(s) {
  var answer = s.length;
  for (let i = 1; i < s.length; i++) {
    let prev = s.slice(0, i);
    let count = 1;
    let compressed = '';
    for (let j = i; j < s.length; j += i) {
      let current = s.slice(j, j + i);
      if (prev === current) {
        count += 1
      } else {
        compressed += (count > 1 ? count : '') + prev;
        prev = current;
        count = 1;
      }
    }
    compressed += (count > 1 ? count : '') + prev;
    answer = Math.min(compressed.length, answer)
  }
  return answer;
}