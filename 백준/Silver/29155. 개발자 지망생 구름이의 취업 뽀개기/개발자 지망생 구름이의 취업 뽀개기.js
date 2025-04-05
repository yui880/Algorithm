const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const countList = input.shift().split(" ").map(Number);
const problems = input.map((v) => v.split(" ").map(Number));

const problemsByDifficulty = Array.from({ length: 6 }, () => []);
for (const [difficulty, time] of problems) {
  problemsByDifficulty[difficulty].push(time);
}

for (let i = 1; i <= 5; i++) {
  problemsByDifficulty[i].sort((a, b) => a - b);
}

const selectedProblems = [];
for (let i = 1; i <= 5; i++) {
  const needed = countList[i - 1];
  for (let j = 0; j < needed; j++) {
    selectedProblems.push([i, problemsByDifficulty[i][j]]);
  }
}

let answer = selectedProblems[0][1];
let prevDifficulty = selectedProblems[0][0];
let prevTime = selectedProblems[0][1];

for (let i = 1; i < selectedProblems.length; i++) {
  const [currentDifficulty, currentTime] = selectedProblems[i];

  if (currentDifficulty > prevDifficulty) {
    answer += 60;
  } else {
    answer += Math.abs(currentTime - prevTime);
  }

  answer += currentTime;

  prevDifficulty = currentDifficulty;
  prevTime = currentTime;
}

console.log(answer);
