function solution(k, tangerine) {
    let obj = {};
    tangerine.forEach(t => {
        obj[t] === undefined ? obj[t] = 1 : obj[t]++;
    })
    
    const values = Object.values(obj).sort((a,b) => a-b);
    
    let count = 0;
    let sum = 0;
    while(sum < k){
        sum += values.pop();
        count++;
    }
    return count;
}