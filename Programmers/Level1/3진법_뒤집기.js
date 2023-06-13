// 내가 푼 솔루션 
// 3으로 나눠서 더해서 3진수로 만들기 -> 뒤집기(재 뒤집기) -> 각 항목에 3의 제곱을 곱해서 다시 10진수로 만들기
// 너무 시간이 오래걸림 

function solution(n) {
    let num = '';
    while(n>0){
        num += n % 3;      
        n = Math.floor(n/3);
    }
    num = [...num].reverse();
    console.log(num);
    let sum = 0;
    for(let i=0;i<num.length;i++){
        sum += (+num[i]) * (3 ** i);
    }
    return sum;
}

// 리팩토링
// parseInt()와 toString()에서 진수를 설정 할 수 있다는 것을 알게됨
function solution(n) {
    let num = [...n.toString(3)].reverse();
    console.log(num.join(''));
    return parseInt(num.join(''), 3);
}