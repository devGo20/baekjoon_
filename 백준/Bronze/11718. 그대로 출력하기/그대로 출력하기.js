const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

fs.readFileSync(path, "utf8").trim().split('/n').map((i) => console.log(i))

