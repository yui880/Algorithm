
const test = [
    '735624', '522348', '172563', '365297', '483724', '123456', 
    '345678', '588112', '432684', '842301', '736629', '935765', 
    '132612', '536348', '432621', '562148', '725223', '731659'];

// const test = ['123456', '123457', '362345', '213456', '651234'];


function solution(str){
    let newStr = '';
    let answer = [];
    str.split('').forEach((n,i)=>{
        if(i === 0 && n !== '$') newStr += '^';

        if(n === '#') newStr += '.';
        else if(n === '@') newStr += '..';
        else if(n === '$');
        else newStr += n;

        if(i === str.length-1 && n !== '$')newStr +='$'
    });
    let regex = new RegExp(`${newStr}`, 'g');
    console.log(regex);
    test.forEach(n=>{
        if(n.match(regex)) answer.push(n);
    });
    return answer;
}
// console.log(solution('123$'));
// console.log(solution('#@45#'));
// console.log(solution('$234$'));
console.log(solution('$7@6#$'));
console.log(solution('$56#$'));
console.log(solution('@2$'));
console.log(solution('$2@8'));