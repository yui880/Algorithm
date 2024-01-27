function solution(numbers) {
    const maxNum = parseInt([...numbers].sort((a, b) => b - a).join(""), 10);
    const prime = isPrime(maxNum);
    const answer = [];

    const getPermutation = (arr, fixed) => {
        if (arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                const newNum = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                if (!answer.includes(+newNum)) {
                    answer.push(+newNum);
                }
                getPermutation(copyArr, newNum);
            }
        }
    };

    getPermutation([...numbers], "", answer);

    return answer.reduce((count, cur) => {
        if (prime[cur] === true) {
            return count + 1;
        }
        return count;
    }, 0);
}

const isPrime = (n) => {
    const arr = Array(n + 1)
        .fill(true)
        .fill(false, 0, 2);

    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }

    return arr;
};
