function solution(n) {
    const visitedCol = Array(n).fill(false);
    const visitedFirstD = Array(2*n).fill(false); // x+y가 동일한 대각선
    const visitedSecondD = Array(2*n).fill(false); // x-y+n-1이 동일한 대각선
    
    let answer = 0;
    
    const backTracking = (x) => {
        if(x === n){
            answer++;
            return;
        }
        
        for(let y=0;y<n;y++){ // y위치의 col 계산
            if(visitedCol[y] || visitedFirstD[x+y] || visitedSecondD[x-y+n-1]) continue;
            // 해당하는 열과 대각선 방문 처리
            visitedCol[y] = true;
            visitedFirstD[x+y] = true;
            visitedSecondD[x-y+n-1] = true;
            
            backTracking(x+1); // 다음행으로 이동
            
            // 방문 처리 취소
            visitedCol[y] = false;
            visitedFirstD[x+y] = false;
            visitedSecondD[x-y+n-1] = false;
        }
    }
    
    backTracking(0)
    
    return answer
}