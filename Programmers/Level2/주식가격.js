// 기본 테스트 케이스 통과, 효율성 테스트 통과 못함

function solution(prices) {
    return prices.map((price, i) => {
        const lessIndex = prices.findIndex((p, j) => i < j && p < price);
        if (lessIndex === -1) return prices.length - i - 1;
        else return lessIndex - i;
    });
}

// 전체 통과, stack 사용

function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        stack.push(i);
    }

    for (let i = 0; i < answer.length; i++) {
        if (!answer[i]) answer[i] = answer.length - i - 1;
    }

    return answer;
}
