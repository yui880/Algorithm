function solution(p) {
    var answer = '';
    
    return change(p);
}

function change(str){
    // 1
    if(str.length === 0) return '';
    //2
    let u = '';
    let count = 0;
    let i = 0
    for(i=0;i<str.length;i++){
        u += str[i];
        count += (str[i] === '(' ? 1 : -1);
        if(count === 0) break;
    }
    let v = str.slice(i, str.length-1);
    //3 
    let tempV = ''.concat(v);
    while(tempV.indexOf('()') !== -1){
        tempV.replace(/^()/g,'');
    }
    if(tempV.length === 0) {
        return u + change(v); // 3-1
    } else {
        let temp = '(' + change(v) + ')'; // 4
        let tempU = u.slice(1,u.length-1);
        //console.log(u);
        console.log(tempU);
        tempU = [...tempU].map(n=>{
            if(n === '(') return ')';
            else return '(';
        }).join("");
        console.log(temp + tempU);
        return temp + tempU;
    }
    
    return u + v;

    

    
}

