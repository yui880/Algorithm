function solution(a, b, n) {
    let remainder = 0;
    let sum = 0;
    while(Math.floor(n/a) > 0){
        sum += Math.floor(n/a) * b;
        remainder = n % a;
        n = Math.floor(n/a) * b + remainder;
    }
    return sum;
}