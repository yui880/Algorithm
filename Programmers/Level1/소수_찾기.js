//에라토스테네스의 체 공부하기 

function solution(n) {
    let count = 0;
    let arr = isPrime(n);
    for(let i = 2;i<=n;i++){
        if(arr[i] === true) count++;
    }
    return count;
}

let isPrime = (n) => {
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);
 
    for (let i = 2; i < Number(n ** 0.5) + 1; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
 
    return arr;
}

