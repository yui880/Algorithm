const dpTable = new Array(30010).fill(0);

const makeItOne = (num) => {
    dpTable[1] = 0;

    for(let i=2;i<=num;i++){
        dpTable[i] = dpTable[i-1] + 1;

        if(i % 2 === 0){
            dpTable[i] = Math.min(dpTable[i], dpTable[i/2]+1);
        }
        if(i % 3 === 0){
            dpTable[i] = Math.min(dpTable[i], dpTable[i/3]+1);
        }
        if(i % 5 === 0){
            dpTable[i] = Math.min(dpTable[i], dpTable[i/5]+1);
        }
    }
    return dpTable[num];
}

console.log(makeItOne(26)); // 3