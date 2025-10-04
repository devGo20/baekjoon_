const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = parseInt(fs.readFileSync(path, "utf8").trim());

// 위쪽 피라미드
for (let i = 1; i <= input; i++) {
  const pad = ' '.repeat(input - i);
  const stars = '*'.repeat(2 * i - 1);
  console.log(pad + stars);
}

// 아래쪽 역피라미드
for (let i = input - 1; i >= 1; i--) {
  const pad = ' '.repeat(input - i);
  const stars = '*'.repeat(2 * i - 1);
  console.log(pad + stars);
}
