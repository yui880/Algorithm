// 1
const isNumber = (num) => {
    return !isNaN(num);
};

function solution(maps) {
    const visited = maps.map((v) => [...v]);
    const answer = [];
    let sum = 0;

    const dfs = (x, y) => {
        if (x < 0 || x >= maps.length || y < 0 || y >= maps[0].length) return;

        if (isNumber(visited[x][y])) {
            visited[x][y] = "O";
            sum += parseInt(maps[x][y], 10);
            dfs(x - 1, y);
            dfs(x + 1, y);
            dfs(x, y - 1);
            dfs(x, y + 1);
        }
        return sum;
    };

    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (isNumber(maps[i][j]) && isNumber(visited[i][j])) {
                answer.push(dfs(i, j));
                sum = 0;
            }
        }
    }

    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

// 2
function solution(maps) {
    const visited = maps.map((v) => [...v]);
    const answer = [];

    const dfs = (x, y) => {
        if (x < 0 || x >= maps.length || y < 0 || y >= maps[0].length || visited[x][y] === "X") return 0;

        visited[x][y] = "X";
        const sum = +maps[x][y] + dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1);

        return sum;
    };

    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] !== "X" && visited[i][j] !== "X") {
                answer.push(dfs(i, j));
            }
        }
    }

    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

function solution(maps) {
    const answer = [];
    maps = maps.map((m) => m.split(""));
    const dfs = (x, y) => {
        if (x < 0 || x >= maps.length || y < 0 || y >= maps[0].length) return 0;

        if (maps[x][y] !== "X") {
            let sum = +maps[x][y];
            maps[x][y] = "X";
            sum += dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1);
            return +sum;
        }
        return 0;
    };

    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] !== "X") {
                answer.push(dfs(i, j));
            }
        }
    }

    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

solution(["X591X", "X1X5X", "X231X", "1XXX1"]);
