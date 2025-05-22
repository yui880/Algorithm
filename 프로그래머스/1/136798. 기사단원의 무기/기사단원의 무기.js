function countDivisors(n) {
    let count = 0;
    const sqrt = Math.sqrt(n);
    
    for (let i = 1; i <= sqrt; i++) {
        if (n % i === 0) {
            if (i * i === n) {
                count += 1;
            } else {
                count += 2;
            }
        }
    }
    return count;
}


function solution(number, limit, power) {
    let answer = 0;
    
    for(let i=1;i<=number;i++){
        const d = countDivisors(i);
        if(d > limit) answer += power;
        else answer += d;
    }
    
    return answer
}