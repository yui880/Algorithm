function solution(arr1, arr2) {
    const m = arr1.length;
    const n = arr2[0].length;
    const x = arr1[0].length;
    let answer = [];
    
    for(let i=0;i<m;i++){
        let arr = [];
        for(let j=0;j<n;j++){
            let sum = 0;
            for(let k=0;k<x;k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            arr.push(sum);
        }
        answer.push(arr);
    }
    return answer;
}

