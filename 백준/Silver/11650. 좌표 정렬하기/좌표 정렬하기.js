const fs = require('fs');
const data = fs.readFileSync('/dev/stdin', 'utf8');
const lines = data.trim().split('\n');
const n = parseInt(lines[0]);
let points = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = lines[i].split(" ").map(Number);
  points.push([ x, y ]);
}
points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]; 
  }
  return a[0] - b[0];
});
points.forEach(point => {
  console.log(point.join(' '));  
});