const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const [current, time] = fs.readFileSync(path, "utf8").split('\n');
const [hh, mm] = current.split(' ').map(Number)
const sec = hh * 3600 + mm * 60 + time * 60;
const hour = parseInt(sec / 3600)
console.log(hour >= 24 ? hour - 24 : hour, sec % 3600 / 60)
