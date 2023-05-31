function solution(n) {
    let arr = [];
    let answer = '';
    while(n>0){
        arr.push(n%10);
        n = Math.floor(n / 10);
    }
    arr.sort();
    for(num of arr){
        answer = num.toString() + answer;
    }
    return +answer;
}