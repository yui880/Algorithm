function solution(n) {
    let start = 1;
    let end = 2;
    
    let answer = 0;
    let sum = start + end;
    
    if(n === 1 || n === 2) return 1;
    
    while(end <= n){
        if(sum < n){
            sum += ++end;
        } else if(sum > n){
            sum -= start++;
        } else {
            answer++;
            sum += ++end;
        }
    }
    return answer;
}

