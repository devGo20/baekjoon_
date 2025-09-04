const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(input[0] + input[1]);
console.log(input[0] - input[1]);
console.log(input[0] * input[1]);
console.log(parseInt(input[0] / input[1]));
console.log(parseInt(input[0] % input[1]));

