const classify = (arr) => {
    const obj = {};
    arr.forEach(([name, category]) => {
        obj[category] ? obj[category].push(name) : (obj[category] = [name]);
    });

    return obj;
};

const getCombination = (arr, num) => {
    const result = [];

    if (num === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combination = getCombination(rest, num - 1);
        const attached = combination.map((v) => [fixed, ...v]);

        result.push(...attached);
    });

    return result;
};

function solution(clothes) {
    const clothesObj = classify(clothes);
    const category = Object.keys(clothesObj);
    let answer = 0;

    for (let i = 1; i <= category.length; i++) {
        const comb = getCombination(category, i);

        comb.forEach((list) => {
            answer += list.reduce((count, c) => count * clothesObj[c].length, 1);
        });
    }

    return answer;
}

const classify = (arr) => {
    const obj = {};
    arr.forEach(([name, category]) => {
        obj[category] ? obj[category].push(name) : (obj[category] = [name]);
    });

    return obj;
};

function solution(clothes) {
    const clothesObj = classify(clothes);
    const categories = Object.keys(clothesObj);
    const dp = {};

    const countCombinations = (index, remainCount) => {
        // index는 현재 고려하는 카테고리 인덱스, remainCount는 의상을 입을 수 있는 남은 횟수
        if (remainCount === 0) return 1; // 더 이상 의상을 입을 수 없기 때문에 1을 반환함
        if (index === categories.length) return 0; // 더 이상 확인할 카테고리가 없기 때문에 0을 반환함 -> 추가적인 고려가 필요없기 때문에 계산 종료

        const key = index + "," + remainCount; // dp 테이블에 저장할 키값, 현재 몇 단계인지와 남은 개수를 통해 구분해준다(다른 단계일 때도 남은 개수가 같을 수 있기 때문에 둘다 같이 저장)
        if (dp[key] !== undefined) return dp[key]; // 이미 존재하면 다시 계산하지 않고 바로 사용하기

        const include = countCombinations(index + 1, remainCount - 1) * clothesObj[categories[index]].length; // 현재 카테고리 선택하고 의상의 수 곱해주기
        const exclude = countCombinations(index + 1, remainCount); // 현재 카테고리를 제외해서 아무것도 진행하지 않고 인덱스만 증가시킴

        dp[key] = include + exclude; // 포함 + 불포함 경우의 수를 모두 고려
        return dp[key]; //dp 테이블의 마지막(최종 경우의 수) 반환
    };

    let answer = 0;

    for (let i = 1; i <= categories.length; i++) {
        answer += countCombinations(0, i); // 카테고리 1~N개 선택하는 경우의 수 구하기
    }

    return answer;
}
