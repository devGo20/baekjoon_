const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n").map(Number);
const n = input[0];
const titles = input.slice(1);

const answer = new Array(n).fill(0);
const stack = [];

// 첫 번째 제목(1레벨) 처리
if (titles[0] !== 1) {
  console.log(-1);
  process.exit(0);
}
stack.push({ level: 1, index: 0 });

for (let i = 1; i < n; i++) {
  const currentLevel = titles[i];

  // 현재 레벨보다 높은 레벨의 제목들 스택에서 제거
  while (stack.length > 0 && stack.at(-1).level >= currentLevel) {
    stack.pop();
  }

  // 상위 제목이 없는데 현재 제목 레벨이 1이 아닐 경우 (오류)
  if (stack.length === 0 && currentLevel !== 1) {
    console.log(-1);
    process.exit(0);
  }

  // 유효성 검사: 상위 제목 레벨 + 1 == 현재 제목 레벨이 아닐 경우 (오류)
  if (stack.length > 0 && stack.at(-1).level + 1 !== currentLevel) {
    console.log(-1);
    process.exit(0);
  }

  // 상위 제목의 하위 제목 수 증가
  if (stack.length > 0) {
    const parentIndex = stack.at(-1).index;
    answer[parentIndex]++;
  }

  // 현재 제목을 스택에 추가
  stack.push({ level: currentLevel, index: i });
}

console.log(answer.join("\n"));