function solution(dartResult) {
    let score = [];
    let temp = 0;
    
    for(let i=0;i<dartResult.length;i++){
        if(+dartResult[i] >=0 && +dartResult[i] <=9){
            if(+dartResult[i] === 1 && +dartResult[i+1] === 0) {
                i++;
                temp = 10;
            } else {
                temp = +dartResult[i];
            }
        } 
        else if(dartResult[i] === 'S') score.push(temp ** 1);
        else if(dartResult[i] === 'D') score.push(temp ** 2);
        else if(dartResult[i] === 'T') score.push(temp ** 3);
        else if(dartResult[i] === "*"){
            score[score.length-1] *= 2;
            score[score.length-2] *= 2;
        }
        else if(dartResult[i] === '#'){
            score[score.length-1] *= -1;
        }
    }
    return score.reduce((acc, cur)=>{
        return acc + cur
    },0)
}

