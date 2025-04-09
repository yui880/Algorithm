const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = parseInt(input[0]);
let idx = 1;

for (let t = 0; t < T; t++) {
  const n = parseInt(input[idx++]);
  const votes = [];

  for (let i = 0; i < n; i++) {
    votes.push(parseInt(input[idx++]));
  }

  const totalVotes = votes.reduce((a, b) => a + b, 0);
  const maxVote = Math.max(...votes);
  const winners = [];

  votes.forEach((vote, i) => {
    if (vote === maxVote) winners.push(i + 1); // 후보 번호는 1부터 시작
  });

  if (winners.length > 1) {
    console.log("no winner");
  } else {
    const winner = winners[0];
    if (maxVote > totalVotes / 2) {
      console.log(`majority winner ${winner}`);
    } else {
      console.log(`minority winner ${winner}`);
    }
  }
}
