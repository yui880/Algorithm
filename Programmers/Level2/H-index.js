function solution(citations) {
    citations.sort((a,b) => a-b);
    let index = Math.floor(citations.length/2);
    let value = citations[index];
    
    while(1){
        let count = citations.filter((v,i) => value <= v).length;
        if(value <= count) break;
        value--;
    }
    return value;
    
}