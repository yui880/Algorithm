function solution(n) {
    if(n <= 2) return n;
    let arr = [1,2];
    let i=2;
    while(arr.length !== n){
        arr[i] = (arr[i-2] + arr[i-1]) % 1234567;
        i++;
    }
    return arr[n-1];
;}