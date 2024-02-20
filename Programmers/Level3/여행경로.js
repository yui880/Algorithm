function solution(tickets) {
    const route = {};
    tickets.forEach(([d, a], i) => {
        if (!route[d]) route[d] = [[a, i]];
        else route[d].push([a, i]);

        if (!route[a]) route[a] = [];
    });

    for (const start in route) {
        route[start].sort().reverse();
    }

    let list = [];
    let answer = ["ICN"];
    const visited = new Array(tickets.length);

    const tracking = (cur, count) => {
        if (count === tickets.length + 1) {
            list.push([...answer]);
            return;
        }

        for (let i = 0; i < route[cur].length; i++) {
            const [v, idx] = route[cur][i];
            if (!visited[idx]) {
                visited[idx] = true;
                answer.push(v);
                tracking(v, count + 1);
                answer.pop();
                visited[idx] = false;
            }
        }
    };

    tracking("ICN", 1);
    return list.sort()[0];
}
