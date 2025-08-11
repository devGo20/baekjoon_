const fs = require('fs')

const path = process.platform === 'linux' ? '/dev/stdin' : './i.txt'
const data = fs.readFileSync(path, 'utf8').trim().split(/\s+/)

let idx = 0
const nextInt = () => Number(data[idx++])
const n = nextInt()
const queue = Array.from({ length: n }, (_, idx) => [nextInt(), idx])
const result = []
let time = 0
while (queue.length > 0) {
  time++
  let [pizzaSlices, idx] = queue.shift()
  pizzaSlices--
  if (pizzaSlices > 0) {
    queue.push([pizzaSlices, idx])
  } else {
    result.push([idx, time])
  }
}
console.log(result.sort((a, b) => a[0] - b[0]).map(el => el[1]).join(' '))
