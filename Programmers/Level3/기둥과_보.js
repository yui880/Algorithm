let answer = [];

function solution(n, build_frame) {
    
    for(let cmd of build_frame){
        let [x, y, type, build] = cmd;
        
        if(build === 1 ){
            if(type === 0){
                if(y === 0 || find([x-1,y,0]) || find([x,y-1,1]) || find([x,y,1])){
                    answer.push([x,y,type, 1]);
                } 
            }else {
                    if(find([x-1,y,1]) || find([x, y-1,0]) && find([x,y+1,0])){
                    answer.push([x,y,type, 2]);
                    }
                }
            }
         else {
            if(type === 0){
                if(!find([x,y,1]) && !find([x,y-1,1]) && !find([x+1,y,1])){
                      answer = answer.filter(n => {
                          !(n[0] === x && n[1] === y && n[2] === type) })
                } else {
                    if(!find([x,y,0]) && !find([x,y+1,0]) 
                          && !find([x,y+1,1]) && !find([x,y-1,1])){
                      answer = answer.filter(n => {
                          !(n[0] === x && n[1] === y && n[2] === type) })
                    } 
                }
            }
        }
            
    }
    
    console.log(answer);
    
    
    
}



function find(arr){
    for(let i of answer){
        if(JSON.stringify.i === JSON.stringify.arr){
            return true;
        }
    }
    return false;
}

    