function solution(n, computers) {
    const visited = new Array(n).fill(false);

    const dfs = (start) => {
        const stack = [start];
        visited[start] = true;

        while (stack.length) {
            const node = stack.pop();
            for (let i = 0; i < n; i++) {
                if (i === node) continue;
                if (computers[node][i] === 1 && !visited[i]) {
                    visited[i] = true;
                    stack.push(i);
                }
            }
        }
    };

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }

    return count;
}
