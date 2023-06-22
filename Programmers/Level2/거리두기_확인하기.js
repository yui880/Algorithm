

function solution(places) {
    let answer = [];
    for (const x of places) {
        answer.push(check(x));
    }
    return answer;
}

function check(arr){
    arr = arr.map(e => e.split(''));
    let x = [1,0,-1,0];
    let y = [0,-1,0,1];
    
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(arr[i][j] === 'P'){
                for(let k=0;k<4;k++){
                    if(i + y[k] >= 0 && i + y[k] < 5 &&
                      j + x[k] >= 0 && j + x[k] < 5 && 
                      arr[i+ y[k]][j + x[k]] === 'P')
                    return 0; 
                }
            } 
            
            if(arr[i][j] === 'O'){
                 let count = 0;
                 for(let k=0;k<4;k++){
                    if(i + y[k] >= 0 && i + y[k] < 5 &&
                      j + x[k] >= 0 && j + x[k] < 5 && 
                      arr[i+ y[k]][j + x[k]] === 'P'){
                        count++;
                    }
                 if(count > 1) return 0;
            }
                
        }
    }
   
    }
     return 1;
}
    
