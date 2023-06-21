
// 실패한 코드
const operator = [
    ['*','+','-'],
    ['*','-','+'],
    ['+','*','-'],
    ['+','-','*'],
    ['-','*','+'],
    ['-','+','*']
] 

function solution(expression) {
    let answer = -Infinity;
    let op = expression.replace(/[0-9]/g,'');
    expression = expression.split(/[*+-]/g).reduce((acc, cur, i)=>{
        acc.push(cur);
        acc.push(op[i]);
        return acc;
    },[])
    expression.pop();
    // console.log(expression);
    
    operator.forEach(v=>{
        let sum = 0;
        let tempExp = JSON.parse(JSON.stringify(expression));
        
        for(let j=0;j<v.length;j++){
            //console.log(tempExp);
            let index = null; 
            while(1){
                index = tempExp.indexOf(v[j]);
                if(index === -1) break;
                if(v[j] === '*'){
                     tempExp[index] 
                         = tempExp[index-1] * tempExp[index+1];
                } else if(v[j]==='-'){
                     tempExp[index] 
                         = tempExp[index-1] - tempExp[index+1];
                } else{
                     expression[index] 
                         = expression[index-1] + expression[index+1]; 
                }
                tempExp[index-1] = '';
                tempExp[index+1] = '';
                //console.log(tempExp, '---', j);
               tempExp = tempExp.filter(n=> n !== '');
                //console.log(tempExp, '---');
            }
            if(tempExp[0] > answer) answer = tempExp[0];
        }
       //console.log(tempExp);
    })
    
    //console.log(expression);
}


// 성공

function calculator(a,b, op){
    if(op === "*") return a*b;
    if(op === '+') return a+b;
    if(op === "-") return a-b;
}

function solution(expression) {
    const combinations = [
    ['*','+','-'],
    ['*','-','+'],
    ['+','*','-'],
    ['+','-','*'],
    ['-','*','+'],
    ['-','+','*']
] 
    let answer = -Infinity;
    combinations.forEach(op=>{
        const operands = expression.match(/[0-9]+/g).map(Number);
        const operators = expression.match(/[\*\-\+]/g);
        op.forEach(c => {
            let index = operators.indexOf(c);
            while(index !== -1){
                operands[index] = calculator(operands[index], operands[index+1], c);
                operands.splice(index+1, 1);
                operators.splice(index,1);
                index = operators.indexOf(c); 
            }
        })
        if(answer < Math.abs(operands[0])) answer = Math.abs(operands[0]);
    })
    return answer;
    
}