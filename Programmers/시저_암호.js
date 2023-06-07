function solution(s, n) {
    s = [...s];
    let temp = [];
    for(let i=0;i<s.length;i++){
        if(s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90){
            if(s[i].charCodeAt() + n > 90) {
                temp.push(String.fromCharCode(s[i].charCodeAt() + n - 26));
            } else{
                temp.push(String.fromCharCode(s[i].charCodeAt() + n));
            }  
        } 
        else if(s[i].charCodeAt() === 32) temp.push(" "); 
        else {
            if(s[i].charCodeAt() + n > 122){
                temp.push(String.fromCharCode(s[i].charCodeAt() + n - 26));
            } else {
                temp.push(String.fromCharCode(s[i].charCodeAt() + n));
            }
        }
    }
    return temp.join('');
}