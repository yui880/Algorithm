const solution = (N, M, maze) => {
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
   
    const bfs = (a, b) => {
        const queue = [];
        queue.push([a,b]);

        while(queue.length > 0){
            const point = queue.shift();
            const x = point[0];
            const y = point[1];

            for(let i=0;i<4;i++){
                const nx = x + dx[i]; // 상하좌우 중 하나로 한칸 이동
                const ny = y + dy[i];

                if(nx <= -1 || nx >= N || ny <= -1 || ny >= M) continue
                if(maze[nx][ny] === 0) continue;
                if(maze[nx][ny] === 1) {
                    maze[nx][ny] = maze[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }

        return maze[N-1][M-1];
    }

    return bfs(0,0);
}

const maze1 = [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
  ]
  

console.log(solution(5,6, maze1));


