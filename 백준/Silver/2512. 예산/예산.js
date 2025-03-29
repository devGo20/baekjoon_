const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
const budget = parseInt(input[2]);
let minWant = 0;
let maxWant = Math.max(...arr); 

while (minWant <= maxWant) {
  let mid = Math.floor((minWant + maxWant) / 2);
  
  const tmpAllBudget = arr.reduce((acc, curr) => acc + Math.min(curr, mid), 0);

  if (tmpAllBudget <= budget) {
    minWant = mid + 1; 
  } else {
    maxWant = mid - 1;
  }
}

console.log(maxWant);
