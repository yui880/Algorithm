// 실패함

function changeNum(newArr,i,j){
    newArr[i][j] = 1
    newArr[i][j+1] = 1
    newArr[i+1][j] = 1
    newArr[i+1][j+1] = 1
}


function solution(m, n, board) {
    let newArr = Array.from(Array(n), () => new Array(m));
    let answer = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            newArr[j][i] = board[i][j];
        }
    }
    let copyArr = JSON.parse(JSON.stringify(newArr));
    
    for(let i=0;i<n-1;i++){
        for(let j=0;j<m-1;j++){
            if(newArr[i][j] === newArr[i][j+1] &&
              newArr[i][j] === newArr[i+1][j] &&
              newArr[i][j] === newArr[i+1][j+1]){
                changeNum(copyArr,i,j);
                answer += 4;
            }
        }
    }

    console.log(copyArr);
    console.log(newArr);
}

    

function solution(m, n, board){
    board = board.map(v => v.split(''));

    while(true){
        let founded = [];

        // 찾기
        for(let i=1;i<m;i++){
            for(let j=1;j<n;j++){
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]){
                    founded.push([i, j]);
                }
            }
        }

        if(!founded.length) return [].concat(...board).filter(v => !v).length;

        // 부수기
        founded.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1] - 1] = 0;
            board[a[0] - 1][a[1] - 1] = 0;
            board[a[0] - 1][a[1]] = 0;
        })

        for(let i=m-1;i>0;i--){
            if(! board[i].some(v=>!v)) continue;

            for(let j=0;j<n;j++){
                for(let k=i-1; k>=0 && !board[i][j]; k--){
                    if(board[k][j]){
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}

