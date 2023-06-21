function solution(n) {
    let arr = Array.from(new Array(n), () => new Array(n).fill(0));
    fill(n, arr);
    let answer= [];
    arr.forEach(n => n.forEach(v => {if(v !== 0) answer.push(v)}));
    return answer;
}

function fill(n, arr){
    let x = 0;
    let y = -1;
    let count = 0;
    while(n > 0){
        for(let i=0;i<n;i++){
            arr[++y][x] = ++count;
        }
        for(let i=0;i<n-1;i++){
            arr[y][++x] = ++count;
        }
        for(let i=0;i<n-2;i++){
            arr[--y][--x] = ++count;
        }
        n -= 3;
    }
    return arr;
}