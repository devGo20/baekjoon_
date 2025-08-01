const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../i.txt'

const input = fs.readFileSync(path, 'utf-8')
const coins = [500, 100, 50, 10, 5, 1]

let change = 1000 - input
let result = 0
for (const coin of coins) {
  result += parseInt(change / coin)
  change = change % coin
  if (change <= 0) {
    break
  }
}

console.log(result)
