const fs = require('fs')
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const [row, col] = input[0].split(' ').map(Number)
const paintings = input.slice(1).map(line => line.split(' ').map(Number))
const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
function bfs (y, x) {
  const queue = [[y, x]]
  paintings[y][x] = 0
  let head = 0
  let size = 1
  while (queue.length > head) {
    const [y, x] = queue[head++] // shift() 쓰니 시간 초과 뜸. head 방식으로 변경
    for (const [dy, dx] of directions) {
      const newY = y + dy
      const newX = x + dx
      if (
        newX >= 0 &&
        newX < col &&
        newY >= 0 &&
        newY < row &&
        paintings[newY][newX] === 1
      ) {
        paintings[newY][newX] = 0
        size++
        queue.push([newY, newX])
      }
    }
  }
  return size
}

let count = 0
let maxSizePainting = 0
for (let y = 0; y < row; y++) {
  for (let x = 0; x < col; x++) {
    if (paintings[y][x] === 1) {
      maxSizePainting = Math.max(bfs(y, x), maxSizePainting)
      count++
    }
  }
}
console.log(count)
console.log(maxSizePainting)


