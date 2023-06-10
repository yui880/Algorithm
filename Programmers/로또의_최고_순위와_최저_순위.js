function solution(lottos, win_nums) {
    let zero = 0;
    let count = 0;
    let arr = [6,6,5,4,3,2,1]
    for(let i=0;i<lottos.length;i++){
        if(lottos[i] === 0) {
            zero++;
            continue;
        }
        for(let j=0;j<win_nums.length;j++){
            if(lottos[i] === win_nums[j]) count++;
        }
    }
    let min = count; 
    let max = count + zero;
    return [arr[max], arr[min]];
}