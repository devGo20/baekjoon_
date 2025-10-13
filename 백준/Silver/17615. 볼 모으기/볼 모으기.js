const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");
const n = parseInt(input[0])
const balls = input[1].split('')
let manuBalls = balls.slice(0)
if (n === 1 || n === 2) {
  console.log(0)
  process.exit()
}
let answer = Infinity

// 빨간 볼 옮기기 + 왼쪽으로 모으기 
const firstRedballIndex = manuBalls.indexOf('R')
let moveCount = firstRedballIndex !== 0 ? 1 : 0
manuBalls[firstRedballIndex] = ' '
let basket = [0]

for (let i = 1; i < n; i++) {
  const prevBallIndex = basket.at(-1)
  if (manuBalls[i] === 'R') {
    if (i - prevBallIndex > 1) {
      moveCount++
    }
    basket.push(prevBallIndex + 1)
  }
}
answer = Math.min(moveCount, answer)
// 빨간 볼 옮기기 + 오른쪽으로 모으기 
manuBalls = balls.slice(0)
const lastRedballIndex = manuBalls.lastIndexOf('R')
moveCount = lastRedballIndex !== n - 1 ? 1 : 0
manuBalls[lastRedballIndex] = ' '
basket = [n - 1]
for (let i = n - 2; i >= 0; i--) {
  const prevBallIndex = basket.at(-1)
  if (manuBalls[i] === 'R') {
    if (prevBallIndex - i > 1) {
      moveCount++
    }
    basket.push(prevBallIndex - 1)
  }
}
answer = Math.min(moveCount, answer)

// 파란 볼 옮기기 + 왼쪽으로 모으기 
manuBalls = balls.slice(0)
const firstBlueballIndex = manuBalls.indexOf('B')
moveCount = firstBlueballIndex !== 0 ? 1 : 0
manuBalls[firstBlueballIndex] = ' '
basket = [0]

for (let i = 1; i < n; i++) {
  const prevBallIndex = basket.at(-1)
  if (manuBalls[i] === 'B') {
    if (i - prevBallIndex > 1) {
      moveCount++
    }
    basket.push(prevBallIndex + 1)
  }
}
answer = Math.min(moveCount, answer)
//파란 볼 옮기기 + 오른쪽으로 모으기 
manuBalls = balls.slice(0)
const lastBlueballIndex = manuBalls.lastIndexOf('B')
moveCount = lastBlueballIndex !== n - 1 ? 1 : 0
manuBalls[lastBlueballIndex] = ' '
basket = [n - 1]
for (let i = n - 2; i >= 0; i--) {
  const prevBallIndex = basket.at(-1)
  if (manuBalls[i] === 'B') {
    if (prevBallIndex - i > 1) {
      moveCount++
    }
    basket.push(prevBallIndex - 1)
  }
}
answer = Math.min(moveCount, answer)
console.log(answer)