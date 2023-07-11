function solution(arr) {
    arr.sort((a,b) => b-a);
    while(arr.length !== 1){
        let num1 = arr.pop();
        let num2 = arr.pop();
        arr.push(LCM(num1, num2));
    }
    return arr[0];
}

function LCM(a,b){
    return a*b / GCD(a,b);
}

function GCD(a,b){
    if(b === 0) return a;
    else return GCD(b, a%b);
}