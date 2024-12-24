function solution(beginning, target) {
    const rlen = beginning.length;
    const clen = beginning[0].length;
    
    const len = rlen + clen;

    const check = (arr) => {
        const row = arr.filter(val=> val < rlen)
        const col = arr.filter(val=> val >= rlen).map(v=> v - rlen)
        
        const board = [...beginning.map(str=> [...str])];
        
        for(let r of row){
            for(let j=0;j<clen;j++){
                board[r][j] = board[r][j] === 1 ? 0 : 1
            }
        }
        
        for(let c of col){
            for(let i=0;i<rlen;i++){
                board[i][c] = board[i][c] === 1 ? 0 : 1
                
                if(board[i][c] !== target[i][c]) return false
            }
        }
        
        const original = target.flat(2).join(',');
        const changed = board.flat(2).join(',')
        
        if(original === changed){
            return true;
        }
        
        return false;
    }
    
    const combi = [];
    let flag = false;

    const combination = (at, count, end) => {
        if(flag) return;
        
        if(count === end){
            flag = check(combi);
            return;
        }
        
        for(let i=at;i<len;i++){
            combi.push(i);
            combination(i+1, count+1, end);
            combi.pop()
        }
    }
    
    // 뒤집지 않아도 같은 경우 0 리턴
    if(target.flat(2).join(',') === beginning.flat(2).join(',')){
        return 0;
    }
    
    let answer = Infinity;
    
    for(let i=1;i<len;i++){
        combination(0,0,i);
        
        if(flag) {
            answer = i
            break;
        }
    }

    return answer === Infinity ? -1 : answer
    
}