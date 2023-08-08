// // 완전 탐색 사용 
// const permutation = (permu, rests, output) => {
//     if (rests.length == 0) {
//         return output.push(permu);
//     }
//     rests.forEach((v,idx) => {
//         const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
//         permutation([...permu,v], rest, output);
//     })
// }

// function solution(k, dungeons) {
//     const rests = new Array(dungeons.length).fill(0).map((v, i)=> {return i});
//     const orders = [];
//     permutation([],rests,orders);
//     let max = 0;

//     for(let i=0;i<orders.length;i++){
//         let tempK = k;
//         let count = 0;
//         for(let j=0;j<orders[i].length;j++){
//             const index = orders[i][j];
//             if(tempK >= dungeons[index][0] && tempK >= dungeons[index][1]){
//                 tempK -= dungeons[index][1];
//                 count++;
//             }
//         }
//         if(count > max) max = count;
//     }
//     return max;
    
// }


// 이코테 DFS/BFS 실전문제 



const solution = (N, M, ice_tray) => {
    let answer = 0;
    
    const dfs = (x, y) => {
        if(x <= -1 || x >= N || y <= -1|| y >= M) return false;
        
        if(ice_tray[x][y] === 0){
            ice_tray[x][y] = 1;
            dfs(x-1,y);
            dfs(x+1,y);
            dfs(x,y-1);
            dfs(x,y+1);
            return true;
        }
        return false;
    }

    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(dfs(i,j) === true){
                answer++;
            }
        }
    }

    return answer;
}

const ice1 = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
  ]
const ice2 = [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
   


console.log(solution(4,5, ice1)); // 3
console.log(solution(15,14, ice2)); // 8
