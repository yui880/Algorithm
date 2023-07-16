function solution(want, number, discount) {
    const obj = {};
    want.forEach((value) =>{
        obj[value] = 0;
    });
    
    let stuff = discount.slice(0,10);
    stuff.forEach((value) =>{
        if(obj[value] >= 0) obj[value]++;
    });
    console.log(obj);
    
    let start = 0;
    let end = 9;
    let answer = 0;
    while(end < discount.length){
        if(number.toString() === Object.values(obj).toString()){
            answer++;
        }
        if(obj[discount[start]] >= 0) obj[discount[start]]--;
        if(obj[discount[end+1]] >= 0) obj[discount[end+1]]++;
        start++; end++;
    }
    return answer;
}

