function solution(numbers, target) {
    let count = 0;
    numbers = numbers.reverse();

    const dfs = (sum) => {
        if (numbers.length === 0) {
            if (target === sum) count++;
            return;
        }

        const num = numbers.pop();
        dfs(sum + num);
        dfs(sum - num);
        numbers.push(num);
    };

    const root = numbers.pop();
    dfs(root);
    dfs(-root);

    return count;
}
