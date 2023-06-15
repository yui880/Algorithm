// 슬라이딩 윈도우

function solution(queue1, queue2) {
    let count = 0;
    
    queue1 = queue1.reverse();
    queue2 = queue2.reverse(); 
    
    let sum1 = queue1.reduce((acc,cur)=> acc + cur);
    let sum2 = queue2.reduce((acc,cur)=> acc + cur);
    
    if((sum1 + sum2) %2 !== 0) return -1;
    
    while(queue1.length > 0 && queue2.length > 0){
        let temp = 0;
        if(sum1 > sum2){
            temp = queue1.pop();
            queue2 = [ temp, ...queue2];
            sum1 = sum1 - temp;
            sum2 = sum2 + temp;
            count++;
        } else if(sum1 < sum2) {
            temp = queue2.pop()
            queue1 = [ temp, ...queue1];
            sum1 = sum1 + temp;
            sum2 = sum2 - temp;
            count++;
        } else {
            return count;
        }
    }
    return -1;
}

// 투포인터 

function solution(queue1, queue2) {
    let nums = [...queue1, ...queue2]; 
    let totalSum = nums.reduce((acc,cur)=> acc+cur);
    if(totalSum % 2 !== 0) return -1;
    
    let target = totalSum / 2;
    let sum = queue1.reduce((acc,cur)=> acc+cur);
    let count = 0;
    let max = nums.length * 4;
    
    let start = 0;
    let end = queue1.length;
    
    
    while(count <= max){
        if(sum < target){
            sum += nums[end];
            end ++;
        } else if(sum > target){
            sum -= nums[start];
            start++;
        } else if(sum === target) {
            return count;
        }
        count++;
    }
    return -1;
    
}