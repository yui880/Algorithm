
function solution(n)
{
    let answer = 0;
    while(n>0){
        answer += n % 2;
        n = Math.floor(n/2);
    }
    return answer;
}

// 문제 이해를 못해서 한참 고민 
// 효율성의 문제인가