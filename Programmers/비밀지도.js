function solution(n, arr1, arr2) {
    arr1 = arr1.map(num => num.toString(2));
    arr2 = arr2.map(num => num.toString(2));
    let newArr = [];
    for(let i =0 ;i<n;i++){
        let newStr = '';
        while(arr1[i].length !== n){
            arr1[i] = "0" + arr1[i];
        }
        while(arr2[i].length !== n){
            arr2[i] = "0" + arr2[i];
        }
        
        for(let j=0;j<n;j++){
            if(arr1[i][j] === '1' || arr2[i][j] === '1'){
                newStr += "#";
            } else {
                newStr += " ";
            }
        }
        newArr.push(newStr);    
    }
    
    
    return newArr;
}