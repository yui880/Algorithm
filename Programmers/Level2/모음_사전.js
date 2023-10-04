const AEIOU = ["A", "E", "I", "O", "U"];

// 1번

const bfs = (start) => {
    const dictionary = [start];
    const queue = [start];

    while (queue.length) {
        const node = queue.shift();
        if (node.length === 5) break;

        for (let i = 0; i < 5; i++) {
            const temp = node + AEIOU[i];
            dictionary.push(temp);
            queue.push(temp);
        }
    }
    return dictionary;
};

function solution(word) {
    const dict = [];
    for (let i = 0; i < 5; i++) {
        dict.push(...bfs(AEIOU[i]));
    }
    dict.sort();
    return dict.indexOf(word) + 1;
}

// 2번

function solution(word) {
    const dict = {};
    let index = 1;

    const dfs = (start, count) => {
        if (count === 5) return;

        for (let i = 0; i < 5; i++) {
            const node = start + AEIOU[i];
            dict[node] = index++;
            dfs(node, count + 1);
        }
    };

    dfs("", 0);
    return dict[word];
}

// 3번

function solution(word) {
    const dict = [];

    const bfs = (start) => {
        const queue = [];
        queue.push([start, 0]);

        while (queue.length) {
            const [node, count] = queue.shift();
            if (count >= 5) continue;

            for (let i = 0; i < 5; i++) {
                const next = node + AEIOU[i];
                dict.push(next);
                queue.push([next, count + 1]);
            }
        }
    };

    bfs("", 0);
    dict.sort();

    return dict.indexOf(word) + 1;
}
