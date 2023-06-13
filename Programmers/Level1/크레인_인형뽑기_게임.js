// 배열을 세로로 다시 정리하기
// 집은 인형을 배열에 넣기 
// 배열을 검사해서 겹치는 애들이 두개 있으면 터트리기 -> 숫자 세기 

// 푸는데 너무 재밌었는데 또 헛짓거리함 
// 원래 배열에서 0을 없애려는 헛짓거리... 그냥 이건 왜그랬는지 이해가 안간다 
// 0에서 가져왔을 경우 예외처리를 안해서 오류 발생했었음

function solution(board, moves) {
    let newBoard = [];
    let box = [];
    
    for(let i=0;i<board.length;i++){
        let temp = [];
        for(let j=0; j<board.length;j++){
            temp.push(board[j][i]);
        }
        newBoard.push(temp);
    }
    
    for(let i=0;i<newBoard.length;i++){
        let temp = newBoard[i].filter(n => n !== 0);
        while(temp.length < board.length){
            temp = [...temp, 0];
        }
        newBoard[i] = temp;
    }
    
    let count = 0;
    for(let i=0;i<moves.length;i++){
        let tempIdx = moves[i] - 1;
        let index = newBoard[tempIdx].findIndex(n => n !==0);
        let find = newBoard[tempIdx][index];
        if(find !== undefined && find === box[box.length-1]) {
            box.pop();
            count += 2;
        }
        else{
            box.push(find);
        }
        newBoard[tempIdx][index] = 0;
       
    }
    return count;
    
}


