
function solution(n, words) {
    let checked = [];
    let lastChar = '';
    
    for(let i=0;i<words.length;i++){
        if(words[i].length === 1) return [i%n+1, Math.ceil((i+1)/n)];
        if(i === 0 || checked.indexOf(words[i]) === -1 &&
                lastChar === words[i][0]){
            checked.push(words[i]);
            lastChar = words[i][words[i].length-1];
        } else {
            return [i%n+1, Math.ceil((i+1)/n)];
        }
    }
    
    return [0,0];
    
}