function solution(s) {
    if((s.length === 4 || s.length === 6)){
        // 숫자를 지수표현법으로 "10e1"처험 표현한 경우도 숫자이기 때문에 그냥 +s 하면 안됨 
        // +s 하면 지수 계산이 된 값이 나오고, parseInt()하면 그냥 e 이후를 무시하고 나와서 e 있는지 확인
        if(parseInt(s) === +s) return true; 
        else if(+s === 0) return true;  // "0000"인 경우에 +s 하면 0이 되어버림 
    }
    return false;
}