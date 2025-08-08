const fs = require('fs')

const path = process.platform === 'linux' ? '/dev/stdin' : '../i.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)

const numbers = input[1].split(' ').map(Number)
let totalSum = 0;
for (let i = 0; i < k; i++) {
  totalSum += numbers[i];
}
let result = totalSum;

for (let i = k; i < n; i++) {
  totalSum = totalSum - numbers[i - k] + numbers[i];
  result = Math.max(result, totalSum);
}
console.log(result);
