function chooseBalls(n, m, balls){
    let answer = 0;
    for(let i=0;i<n-1;i++){
        const count = balls.filter((v,j) => j > i && balls[i] !== v).length;
        answer += count;
    }
    return answer;
}

console.log(chooseBalls(5,3,[1,3,2,3,2]));
console.log(chooseBalls(8,5,[1,5,4,3,2,4,5,2]));