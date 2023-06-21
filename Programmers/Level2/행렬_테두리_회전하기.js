function solution(rows, columns, queries) {
    let arr = [].fill(0);
    for(let i=0;i<columns;i++){
        let temp = [];
        for(let j=0; j<rows; j++){
            temp.push(i * rows + j + 1);
        }
        arr.push(temp);
    }
    console.log(arr);
    
    let tempArr = [];
    let tempNums = [];
    // console.log(arr.length);
    queries.forEach(n =>{
        let [y1, x1, y2, x2] = n;
        y1--; x1--, y2--; x2--;
        // console.log(y1, x1, y2, x2);
        for(let i=x1; i<=x2;i++){
            tempArr.push([y1, i]);
            // tempNums.push(arr[y1][i]);
        }
        for(let i=y1+1; i<y2;i++){
            tempArr.push([i, x2]);
           // tempNums.push(arr[i][x2]);
        }
        for(let i=x2; i>=x1;i--){
            tempArr.push([y2, i]);
           // tempNums.push(arr[y2][i]);
        }
        for(let i=y2-1; i>y1;i--){
            tempArr.push([i, x1]);
           // tempNums.push(arr[i][x1]);
        }
        
        //console.log(tempArr);
        //tempNums.unshift(tempNums.pop());
        //console.log(tempNums);
        
    }          
  )
    
}