// Top-Down
const memo = new Array(100).fill(0);

const fiboTopDown = (num) => {
    if(num === 1 || num === 2) return 1;
    if(memo[num] != 0) return memo[num]; // 이미 저장되어 있으면 연산 없이 바로 사용 
    memo[num] = fiboTopDown(num-1) + fiboTopDown(num-2); // 아직 연산되지 않았으면 연산하기 
    return memo[num]; // 연산한 값 리턴하기 (리턴해야지 호출된 곳으로 돌아가서 사용됨)
}

console.log(fiboTopDown(99)); // 218922995834555200000

// Bottom-Up 
const dpTable = new Array(100).fill(0);

const fiboBottomUp = (num) => {
    dpTable[1] = 1;
    dpTable[2] = 1;

    for(let i=3;i<=num;i++){
        dpTable[i] = dpTable[i-1] + dpTable[i-2];
    }
    return dpTable[num];
}

console.log(fiboBottomUp(99));  // 218922995834555200000