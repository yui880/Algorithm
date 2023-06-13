function solution(strings, n) {
    strings.sort((a,b)=>{
        if(a[n] > b[n]) return 1; // 그대로면 1
        if(a[n] < b[n]) return -1; // 둘이 자리 바꿀거면 - 1
        if(a[n] === b[n]){
            if(a > b) return 1;
            if(a < b) return -1;
        }
    })
    return strings;
}

// 처음에 시도했는데 0.5솔 한 코드 
function solution(strings, n) {
    let sortedArr = strings.sort();
    let newStr = sortedArr.map((str, i) => str[n]+i);
    newStr.sort();
    let ans = [];
    newStr.reduce((_,cur) => {
        ans.push(sortedArr[+cur[1]]);
    },[])
    return ans;
}