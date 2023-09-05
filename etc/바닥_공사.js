const dpTable = new Array(1001).fill(0);

const construction = (num) => {
    dpTable[0] = 1;
    dpTable[1] = 3;

    for(let i=2;i<=num;i++){
        dpTable[i] = (dpTable[i-1] + dpTable[i-2] * 2) % 796796;
    }
    return dpTable[num];
}

console.log(construction(3));