function solution(beginning, target) {
    const diff = beginning.map((row,i) => row.map((val, j)=> val === target[i][j]));
    const rlen = beginning.length;
    const clen = beginning[0].length;
    let answer = Infinity;
    
    // 행의 경우의 수 (뒤집기 + 그대로 => 2 ** (행의 개수))
    for(let mask=0;mask<(1<<rlen);mask++){
        // 행의 뒤집힘에 따른 열의 뒤집힘 횟수 계산
        let flipCount = 0;
        const board = []
        
        for(let r=0;r<rlen;r++){
            if(mask & (1 << r)){ // r번째 행이 1이면 뒤집기
                flipCount++;
                board.push(beginning[r].map(val=> val === 0 ? 1 : 0))
            }else{
                board.push([...beginning[r]])
            }
        }
        
        let flag = true;
        
        for(let j=0;j<clen;j++){
            // 시작점이 같은지 다른지를 확인
            let temp = board[0][j] === target[0][j];
            for(let i=0;i<rlen;i++){
                if((board[i][j] === target[i][j]) !== temp){
                    flag = false;
                    break;
                }
            }
            
            if(!flag) break;
            if(!temp) flipCount++;
        }
        
        if(flag){
            answer = Math.min(answer, flipCount);
        }
    }

    
    return answer === Infinity ? -1 : answer
}