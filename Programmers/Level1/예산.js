function solution(d, budget) {
    d = d.sort((a,b) => a-b);
    let i = 0;
    for(i=0;i<d.length;i++){
        if(d[i] > budget) break;
        if(budget < 0) break;
        budget -= d[i];
    }
    console.log(budget);
    return i;
}