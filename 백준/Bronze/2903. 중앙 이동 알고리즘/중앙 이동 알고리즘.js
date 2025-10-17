const fs = require('fs')

const path = process.platform === 'linux' ? '/dev/stdin' : './i.txt'
const n = fs.readFileSync(path, 'utf8').trim()
console.log((2 ** parseInt(n) + 1) ** 2)
