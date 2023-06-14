// 1이 될때까지 반복, 이진 변환 횟수와 제거된 0의 개수

function solution(s) {
    let zero = 0;
    let count = 0;

    while(1){
        if(s.length === 1) break;
        let temp = '';
        s.split("").forEach(n =>{
            if(n === '1') temp += '1'; 
            else zero++;
        })
        count++;
        s = (+temp.length).toString(2);
        
    }
    return [count, zero];
}