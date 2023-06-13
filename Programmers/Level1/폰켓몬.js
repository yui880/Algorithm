// 나의 풀이

function solution(nums) {
    let temp = {};
    let arr = [];
    nums.reduce((_, cur)=>{
        if(temp[cur] === undefined) temp[cur] = 1;
        else temp[cur] += 1;
    }, 0)
    let keys = Object.keys(temp);
    for(let i=0;i < nums.length/2;i++){
        if(arr.indexOf(keys[i]) && temp[keys[i]] > 0) {
            arr.push(keys[i]);
            temp[keys[i]]--;
        }
    }
    return arr.length;
    
}

// 수정본 

function solution(nums) {
    let temp = {};
    nums.reduce((_, cur)=>{
        if(temp[cur] === undefined) temp[cur] = 1;
        else temp[cur] += 1;
    }, 0)
    let keys = Object.keys(temp);
    if(keys.length > nums.length/2) return Math.floor(nums.length/2);
    else return keys.length;
    
}

// 추가 리팩토링 

function solution(nums) {
    let max = nums.length / 2;
    let arr = [...new Set(nums)];
    
    return arr.length > max ? max : arr.length;
    
}

