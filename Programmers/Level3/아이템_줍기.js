function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 1. 좌표 2배로 만들기
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    rectangle = rectangle.map((v) => v.map((item) => item * 2));

    // 2. 경계 표시하기
    const board = Array.from({ length: 103 }, () => Array(103).fill(0));
    rectangle.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                if (i === x1 || i === x2 || j === y1 || j === y2) {
                    if (board[i][j] === 0) board[i][j] = 1;
                } else board[i][j] = 2;
            }
        }
    });

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    // 3. bfs
    const queue = [];
    queue.push([characterX, characterY, 0]);
    board[characterX][characterY] = 0;

    let idx = 0;

    while (queue.length > idx) {
        const [x, y, count] = queue[idx++];

        if (x === itemX && y === itemY) {
            return count / 2;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= 103 || ny < 0 || ny >= 103) continue;
            if (board[nx][ny] === 1) {
                queue.push([nx, ny, count + 1]);
                board[nx][ny] = 0;
            }
        }
    }

    return 0;
}
