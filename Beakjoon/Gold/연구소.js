// 14502
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'Beakjoon/Gold/test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const board = input.map((i) => i.split(' ').map(Number));
let answer = 0;

const solution = () => {
    const buildWalls = (count) => {
        if(count === 3){
            const tempArr = board.map(v => [...v]);
            const safeAreaCount = countSafeArea(tempArr);
            answer = Math.max(answer, safeAreaCount);
            return;
        }
    
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(board[i][j] === 0){
                    board[i][j] = 1;
                    buildWalls(count+1);
                    board[i][j] = 0;
                }
            }
        }
    
    }
    
    const countSafeArea = (arr) => {
        const spreadVirus  = (x, y) => {
            const dx = [-1, 1, 0, 0];
            const dy = [0, 0, -1, 1];
            
            for(let i=0;i<4;i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
    
                if(nx >= 0 && nx < n && ny >=0 && ny <m) {
                    if(arr[nx][ny] === 0){
                        arr[nx][ny] = 2;
                        spreadVirus(nx, ny);
                    }
                }
            }
    
        }
    
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(arr[i][j] === 2){
                    spreadVirus(i,j);
                }
            }
        }
    
        let safeAreaCount = 0;
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(arr[i][j] === 0) {
                    safeAreaCount++;
                }
            }
        }
       
        return safeAreaCount;
    }
    
    buildWalls(0);
    console.log(answer);
}

solution();
