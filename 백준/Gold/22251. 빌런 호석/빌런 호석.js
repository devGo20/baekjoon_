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
const currentFloorBit = changeBitArr(currentFloor)
let answer = 0
for (let i = 1; i <= N; i++) {
  if (i === X) continue
  const targetBit = changeBitArr(String(i).padStart(K, '0'))
  let count = 0
  for (let i = 0; i < K; i++) {
    const xor = (targetBit[i] ^ currentFloorBit[i]).toString(2)
    count += xor.split('1').length - 1
  }
  if (count <= P) {
    answer += 1
  }
}

function changeBitArr (str) {
  const bit = []
  for (const ch of str) {
    bit.push(sevenSeg[ch])
  }
  return bit
}
console.log(answer)
