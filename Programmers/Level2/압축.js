// 참고한 풀이

function solution(msg) {
    let answer = [];
    let next = "";
    let lastIndex = 27;
    const list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const dict = list.reduce((acc, cur,i) => (acc[cur] = i+1, acc), {});
    
    // s는 마지막 acc니까?
    
    let s = msg.split('').reduce((acc, cur)=>{
        next = acc + cur;
        if(dict[next] === undefined){
            dict[next] = lastIndex++;
        } else {
            return acc + cur; //이미 있으면 다음 글자 더한거 있나 보러가기
        }
        // 한글자 더 더한건 사전에 없었다는 의미니까 글자 더하기 전인 acc 답에 추가함 
        if(dict[acc] !== undefined) answer.push(dict[acc]);
        return cur; //현재 글자부터 다시 봐야하니까 
    },'');
    
    answer.push(dict[s]);
    return answer;
}

// 다른 풀이

function solution(msg) {
    let answer = [];
    let next = "";
    let lastIndex = 27;
    const list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const dict = list.reduce((acc, cur,i) => (acc[cur] = i+1, acc), {});
    
    for(let i=0;i<msg.length;i++){
        let w = msg[i]; 
        let c = msg[i+1]; 
        while(dict[w+c] && i < msg.length -1){
            i++; // 이미 확인했으니까 인덱스 뛰어넘기 
            w = w+c; // 일치하는 문자열 
            c = msg[i+1]; //처리되지 않은 다음 글자
        }
        answer.push(dict[w]); 
        list.push(dict[w+c]);
        dict[w+c] = list.length;
    }
    return answer;
}