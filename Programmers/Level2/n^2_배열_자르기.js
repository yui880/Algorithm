// 시간초과 
// 1 2 3 4 1 (0.0) (0,1)
// 2 2 3 4 2 (1.0) (1.1)
// 3 3 3 4 3 (2.0) (2.1) (2.2)
// 4 4 4 4 4

function solution(n, left, right) {
    let arr = [];
    let answer = [];
    
    for(let i=0;i<n;i++){
       let temp = [];
       for(let j=0;j<n;j++){
           if(i>=j) temp.push(i+1);
           else temp.push(j+1);
       }
       arr.push(...temp);
   }
    
    for(let i=left;i<=right;i++){
        answer.push(arr[i]);
    }
    return answer;
}


// 새로운 시도 
let arr = [];
    for(let i=0;i<n;i++){
        arr.push(new Array(n));
    }
    let answer = [];

    for(let i=0;i<n;i++){
       for(let j=i;j<n;j++){
           if(i === j) arr[i][j] = i+1;
           else{
               arr[i][j] = j+1;
               arr[j][i] = j+1;
           }
       }
     }


function solution(n, left, right) {
    let arr = [];
    let answer = [];
    let count = 0;
    for(let i=0;i<n*n;i++){
        if(i < count*(n+1)) arr[i] = count+1;
        else{
            arr[i] = i%n + 1;
        }
        if((i+1)%n === 0) count++;
    }
    //console.log(arr);

   for(let i=left;i<=right;i++){
        answer.push(arr[i]);
    }
    return answer;

}


function solution(n, left, right) {
    let arr = [];
    let count = 0;
    for(let i=left;i<=right;i++){
        count = Math.floor(i/n);
        if(i < count*(n+1)) arr.push(count+1);
        else{
            arr.push(i%n + 1);
        }
    }
    return arr;
}