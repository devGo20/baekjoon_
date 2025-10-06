const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n');
const n = Number(input[0]);
const words = input.slice(1);

let count = 0;

for (const word of words) {
  const seen = new Set();
  let prev = "";
  let isGroup = true;

  for (const ch of word) {
    if (ch !== prev) {
      if (seen.has(ch)) {
        isGroup = false;
        break;
      }
      seen.add(ch);
    }
    prev = ch;
  }

  if (isGroup) count++;
}

console.log(count);
