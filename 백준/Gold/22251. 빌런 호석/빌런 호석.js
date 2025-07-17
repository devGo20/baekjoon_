const fs = require('fs')
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

const [N, K, P, X] = input
const sevenSeg = [
  0b1111110, // 0
  0b0110000, // 1
  0b1101101, // 2
  0b1111001, // 3
  0b0110011, // 4
  0b1011011, // 5
  0b1011111, // 6
  0b1110000, // 7
  0b1111111, // 8
  0b1111011 // 9
]
const currentFloor = String(X).padStart(K, '0')

let answer = 0
for (let i = 1; i <= N; i++) {
  if (i === X) continue
  const target = String(i).padStart(K, '0')
  let count = 0
  for (let i = 0; i < K; i++) {
    const xor = (sevenSeg[Number(target[i])] ^
      sevenSeg[Number(currentFloor[i])])
    count += countBits(xor)
    if (count > P) break // 조기 탈출
  }
  if (count <= P) {
    answer += 1
  }
}

function countBits (x) {
  let count = 0
  while (x > 0) {
    count += x & 1
    x >>= 1
  }
  return count
}

console.log(answer)
