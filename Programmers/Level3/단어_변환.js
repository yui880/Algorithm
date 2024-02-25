function solution(begin, target, words) {
    const visited = new Array(words.length).fill(false);
    const queue = [];
    queue.push([begin, 0]);

    let answer = 0;
    let idx = 0;
    while (queue.length > idx) {
        const [d, c] = queue[idx++];

        if (d === target) {
            answer = c;
            break;
        }

        for (let j = 0; j < words.length; j++) {
            if (visited[j]) continue;
            const temp = words[j];
            let count = 0;

            for (let k = 0; k < begin.length; k++) {
                if (d[k] !== temp[k]) count++;
            }

            if (count === 1) {
                visited[j] = true;
                queue.push([temp, c + 1]);
            }
        }
    }

    return answer;
}
