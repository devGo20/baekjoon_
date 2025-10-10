const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");
const [g, s] = input[0].split(' ').map(Number) // g: 그림 문자 길이, s: 마야문자열 길이
const [pictograph, mayan] = input.slice(1)

const pictographCount = {};
const have = {};
let diff = 0;
let answer = 0;

// 패턴 문자 개수 세기
for (const ch of pictograph) {
  pictographCount[ch] = (pictographCount[ch] || 0) + 1;
}

// 초기 diff 설정 (패턴 내 문자 종류 수)
diff = Object.keys(pictographCount).length;

for (let i = 0; i < s; i++) {
  const inn = mayan[i]; // 새로 들어오는 문자
  const out = i >= g ? mayan[i - g] : null; // 윈도우에서 빠질 문자

  if (pictographCount[inn] !== undefined) {
    if (have[inn] === pictographCount[inn]) diff++; // 일치 깨짐
    have[inn] = (have[inn] || 0) + 1;
    if (have[inn] === pictographCount[inn]) diff--; // 일치 복구
  } else {
    have[inn] = (have[inn] || 0) + 1;
  }

  if (out) {
    if (pictographCount[out] !== undefined) {
      if (have[out] === pictographCount[out]) diff++; // 일치 깨짐
      have[out]--;
      if (have[out] === pictographCount[out]) diff--; // 일치 복구
    } else {
      have[out]--;
    }
  }

  if (diff === 0) answer++;
}

console.log(answer);
