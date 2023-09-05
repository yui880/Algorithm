const dp = new Array(10001).fill(Infinity);

const minMoney = (m, moneys) => {
    dp[0] = 0;

   for(const money of moneys){ // 화폐의 금액 배열
    for(let i=money;i<=m;i++){ // 화폐 이전 금액은 어차피 못만드니까 화폐 금액부터 원하는 금액까지
        dp[i] = Math.min(dp[i], dp[i-money]+1); // 이전에 저장된 값이 
    }
   }
   if(dp[m] === Infinity) return -1;
   return dp[m];
}

console.log(minMoney(15, [2,3]));