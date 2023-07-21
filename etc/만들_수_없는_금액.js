
function impossibleAmount(coins){
    coins.sort((a,b) => a-b);
    let target = 1;

    for(let coin of coins){
        if(target < coin){
            break;
        }
        target += coin;
    }
    return target;
}

console.log(impossibleAmount([1,2,3,8]));
console.log(impossibleAmount([3,5,6]));
console.log(impossibleAmount([1,2,3,5]));