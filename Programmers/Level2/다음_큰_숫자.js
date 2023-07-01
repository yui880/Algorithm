function solution(n) {
    let find = n+1;
    let oneCount = [...n.toString(2)].filter(v => v === '1').length;
    while(true){
        let count = [...find.toString(2)].filter(v => v === '1').length;
        if(count === oneCount) return find;
        else find += 1;
    }
}