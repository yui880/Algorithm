function solution(k, m, score) {
    score = score.sort((a,b)=>b-a);
    let i = 0;
    let sum = 0;
    while(i+m-1 < score.length){
        let temp = score.slice(i,i+m);
        sum += temp[temp.length-1] * m * 1;
        i += m;
    }
    return sum;
}