function solution(n, t, m, p) {
    let nums = '';
    for(let i=0; i < t*m; i++){
        let temp = i.toString(n).toUpperCase();
        nums += temp;
   }

    let answer = '';
    let count = 0;
    for(let i=p; count < t;i += m, count++){
        answer += nums[i-1];
    }
    return answer;
        
}