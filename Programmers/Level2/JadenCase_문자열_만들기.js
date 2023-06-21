function solution(s) {
    s = s.split(" ");
    
    for(let i=0;i<s.length;i++){
        if(s[i][0] >= 'a' && s[i][0] <= 'z' || s[i][0] >= 'A' && s[i][0] <= 'Z'){
            let first = s[i][0].toUpperCase();
            let remain = [...s[i].toLowerCase()];
            remain.shift();
            s[i] = [first, ...remain].join('').toString();
        }else {
            s[i] = s[i].toLowerCase();
        }
    }
    return s.join(" ");
}