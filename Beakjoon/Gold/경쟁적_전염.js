const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'Beakjoon/Gold/test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);
const [s, x, y] = input.pop().split(' ').map(Number);
const board = input.map((i) => i.split(' ').map(Number));


const bfs = () => {
    const queue = [];
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(board[i][j] != 0){
                queue.push([board[i][j],0,i,j]);
            }
        }
    }

    queue.sort((a,b)=> a[0]-b[0]);

    while(queue.length > 0){
        
        const [virus, time, x, y] = queue.shift();

        if(time === s) break;
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        
        for(let i=0;i<4;i++){
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx >= 0 && nx < n && ny >=0 && ny <n) {
                if(board[nx][ny] === 0){
                    board[nx][ny] = virus;
                    queue.push([virus, time+1, nx, ny]);
                }
            }
        }
    }

    console.log(board[x-1][y-1]);

}

bfs();