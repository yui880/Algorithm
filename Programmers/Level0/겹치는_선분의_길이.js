function solution(lines) {
    let answer = 0;
    const count = {};

    lines.forEach((item) => {
        for (let i = item[0]; i < item[1]; i++) {
            count[i] ? count[i]++ : (count[i] = 1);
        }
    });

    for (const key in count) {
        if (count[key] >= 2) answer++;
    }
    return answer;
}
