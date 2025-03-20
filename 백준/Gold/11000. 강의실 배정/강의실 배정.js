const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const classes = input.slice(1).map(line => line.split(" ").map(Number));

const startTimes = classes.map(c => c[0]).sort((a, b) => a - b);
const endTimes = classes.map(c => c[1]).sort((a, b) => a - b);

let roomCount = 0;
let endIdx = 0; // 종료 시간을 가리키는 포인터

for (let i = 0; i < N; i++) {
  if (startTimes[i] < endTimes[endIdx]) {
    // 현재 강의 시작 시간이 끝나는 시간보다 빠르면 강의실 추가
    roomCount++;
  } else {
    // 기존 강의실 사용 가능하면 포인터 이동
    endIdx++;
  }
}

console.log(roomCount);
