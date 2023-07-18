function solution(numbers) {
    const answer = [];
    for(let i=0;i<numbers.length-1;i++){
        let isFind = false;
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i] < numbers[j]) {
                answer.push(numbers[j]);
                isFind = true;
                break;
            }
        }
        if(isFind === false) {
            answer.push(-1);
        }
    }
    answer.push(-1);
    return answer;
}