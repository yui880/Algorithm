function solution(today, terms, privacies) {
    let [year, month, day] = today.split(".");
    today = +year * 28 * 12 + +month * 28 + +day;
    let termsObj = {};
    let answer = [];
    
    terms.forEach(n => {
        let [type, term] = n.split(" ");
        termsObj[type] = +term * 28;
    })
   
    for(let i=0;i<privacies.length;i++){
        let [p, type] = privacies[i].split(" ");
        let [y, m, d] = p.split(".");
        let term = termsObj[type];
        
        p = +y * 28 * 12 + +m * 28 + +d;
        
        let limit = p + term;

        if(today >= limit) {
            answer.push(i+1);
        }
    }
   return answer;
}