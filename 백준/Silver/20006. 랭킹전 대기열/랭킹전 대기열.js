// boj_20006_input.js
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");

const [p, m] = input[0].split(" ").map(Number); // 플레이어 수, 방 정원
const players = input.slice(1).map(line => {
  const [level, name] = line.split(" ");
  return { level: Number(level), name };
});
const rooms = []

for (const {level, name} of players) {
  let inRoom = false;
  
  if (rooms.length > 0) {
    for (const room of rooms) {
      if (room.players.length < m && room.max >= level && room.min <= level) {
        room.players.push([level, name]);
        inRoom = true;
        break;
      }
    }
  }
  
  if (!inRoom) {
    rooms.push({max: level + 10, min: level - 10, players: [[level, name]]});
  }
}

for (const {players} of rooms){
  if (players.length === m){
    console.log('Started!')
  } else {
    console.log('Waiting!')
  }

  players.sort((a,b) => a[1].localeCompare(b[1]))
  for (const player of players){
    console.log(player.join(' '))
  }
}