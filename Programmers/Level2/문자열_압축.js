// 처음에 푼 버전
function solution(s) {
    let answer = [];
    if(s.length === 1) return 1;
    for(let i = 1; i<= s.length/2;i++){ // 검사할 문자열의 길이
        let sliced = [];
        // i개씩 자를거니까 자르고 i만큼 인덱스 증가시켜서 또 자름 
        for(let j =0; j<s.length;j+= i){
            sliced.push(s.substr(j,i));
        }
        
        let str = '';
        for(let k=0;k<sliced.length; k++){
            let count = 1;
            while(sliced[k] === sliced[k+1]){ // 다른 문자열 나올때까지 개수 세기
                count++;
                k++;
            }
            if(count > 1) str += `${count}` + sliced[k];
            else str += sliced[k];
          
        }
        answer.push(str.length);
    }
    
    return Math.min(...answer);
}

// 한 달 반 만에 다시 풀었을 때 
function solution(s) {
    const len = Math.floor(s.length / 2);
    let answer = s;
    
    for(let i=1;i<=len;i++){
        let str = s.substr(0, i);
        let start = i;
        let temp = '';
        let count = 1;
        while(1){
            let val = s.substr(start, i);
            if(val === str) count++;
            else {
                temp += (count === 1 ? str : count + str);
                str = val;
                count = 1;
            }
            start += i;
            if(start >= s.length){
                temp += (count === 1 ? val : count + val);
                break;
            }
        }
        if(answer.length > temp.length) answer = temp;
    }
    return answer.length;
}