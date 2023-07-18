function solution(progresses, speeds) {
    const stack = progresses.reverse();
    const reversedSpeeds = speeds.reverse();
    const answer = [];
    
    while(stack.length > 0){
        for(let i=0;i<stack.length;i++){
            stack[i] += reversedSpeeds[i];
        }
        
        let count = 0;
        while(stack[stack.length-1] >= 100){
            stack.pop();
            count++;
        }
        if(count !== 0) answer.push(count); 
    }
    return answer;
}