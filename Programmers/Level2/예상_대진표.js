function solution(n,a,b)
{
    const player1 = Math.min(a,b);
    const player2 = Math.max(a,b);
    
    let count = Math.log2(n);
    let start = 0;
    let end = n;
    while(1){
        let middle = (start + end) / 2;
        if(player1 <= middle && player2 > middle) break;
        else if(player1 > middle && player2 > middle){
            start = middle;
            count--;
        } else if(player1 <= middle && player2 <= middle){
            end = middle;
            count--;
        } 
    }
    return count;
}