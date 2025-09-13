const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const [hh, mm] = fs.readFileSync(path, "utf8").trim().split(" ").map(Number);

let sec = hh * 3600 + mm * 60 - 45 * 60;
if (sec < 0) sec += 24 * 3600; // 음수 보정

const h = Math.floor(sec / 3600);
const m = Math.floor((sec % 3600) / 60);

console.log(h, m);
