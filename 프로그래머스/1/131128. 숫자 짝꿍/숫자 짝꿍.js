function solution(X, Y) {
  let duplicate = [];
  let xMap = {};
  for (let target of X) {
    xMap[target] = (xMap[target] || 0) + 1;
  }
  for (let target of Y) {
    if (xMap[target] > 0) {
      xMap[target] -= 1
      duplicate.push(Number(target))
    }

  }
  if (duplicate.length === 0) return "-1"
  if (duplicate.every(num => num === 0)) return "0";
  duplicate.sort((a, b) => b - a)
  return duplicate.join("");
}