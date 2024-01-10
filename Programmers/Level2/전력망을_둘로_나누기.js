const makeGraph = (list, n) => {
    let graph = {};

    for (const item of list) {
        const [first, second] = item;

        graph[first] ? graph[first].push(second) : (graph[first] = [second]);
        graph[second] ? graph[second].push(first) : (graph[second] = [first]);
    }

    for (const item in graph) {
        graph[item].sort((a, b) => a - b);
    }

    for (let i = 1; i <= n; i++) {
        if (!graph[i]) graph[i] = [];
    }

    return graph;
};

const getDiffer = (wireList, n) => {
    const visited = Array.from({ length: n + 1 }, () => false);
    const graph = makeGraph(wireList, n);
    const differCount = [];

    const dfs = (start) => {
        const stack = [];
        let count = 1;
        stack.push(start);

        while (stack.length) {
            const node = stack.pop();

            if (!visited[node]) {
                visited[node] = true;
                count++;

                for (const newNode of graph[node]) {
                    if (!visited[newNode]) {
                        stack.push(newNode);
                    }
                }
            }
        }

        return count;
    };

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            differCount.push(dfs(i));
        }
    }

    if (differCount.length === 2) {
        return Math.abs(differCount[0] - differCount[1]);
    }
};

function solution(n, wires) {
    let answer = Infinity;

    for (let i = 0; i < wires.length; i++) {
        const wireList = wires.filter((wire, index) => i !== index);
        const temp = getDiffer(wireList, n);

        if (temp < answer) answer = temp;
    }

    return answer;
}
