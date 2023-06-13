function solution(s) {
    let temp = {};
    let answer = [];
    [...s].reduce((_, cur, i)=>{
        if(temp[cur] === undefined) {
            temp[cur] = i;
            answer.push(-1);
        }
        else answer.push(i - temp[cur]);
        temp[cur] = i;
    },0)
    return answer;
}