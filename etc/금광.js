

const goldMine = (n,m,arr) => {
    const dp = Array.from(new Array(n), ()=> new Array(m-1).fill(0));
    
    let max = 0;
    for(let a=0;a<n;a++){
        let sum = arr[a][0];
        let i = a;
       for(let j=0;j<m-1;j++){
        if(dp[i][j]){
            sum += dp[i][j];
        } else {
            let temp = 0;
            newI = i;
            if(j+1 < m) {
                if(i-1 >= 0 && temp <= arr[i-1][j+1]) {
                    temp = (arr[i-1][j+1]);
                    newI = i-1;
                }
                if(temp <= arr[i][j+1]){
                    temp = (arr[i][j+1]);
                } 
                if(i+1 < n && temp <= arr[i+1][j+1]) {
                    temp=(arr[i+1][j+1]);
                    newI = i+1;
                }
                dp[i][j] = temp;
                sum += dp[i][j];
                i = newI;
            }
        }
       }
       max = Math.max(max, sum);
    }
    return max;
}






console.log(goldMine(3,4,
    [[1,3,3,2],[2,1,4,1],[0,6,4,7]]
))
console.log(goldMine(4,4,
    [[1, 3, 1, 5],[2, 2, 4, 1],[5, 0, 2, 3],[0, 6, 1, 2]]
))
