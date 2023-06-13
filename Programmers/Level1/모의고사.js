// 내가 푼 풀이

function solution(answers) {
    let first = [...'12345'.repeat(2002).split('')];
    let second = [...'21232425'.repeat(2002).split('')];
    let third = [...'3311224455'.repeat(1002).split('')];

  
    let score = [0,0,0];
    answers.reduce((_,cur,i)=>{
        if(+first[i] === cur) score[0]++;
        if(+second[i] === cur) score[1]++;
        if(+third[i] === cur) score[2]++;
    },0)
    
    let max = Math.max(...score);
    let answer = [];
    
    score.reduce((acc, cur, i)=>{
        if(cur === max) answer.push(i+1);
    },[])
    
    return answer;
}

// 리팩토링한 버전 

function solution(answers) {
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let score = [0,0,0];
    answers.reduce((_,cur,i)=>{
        if(first[i % first.length] === cur) score[0]++;
        if(second[i % second.length] === cur) score[1]++;
        if(third[i % third.length] === cur) score[2]++;
    },0)
    
    let max = Math.max(...score);
    let answer = [];
    
    score.reduce((acc, cur, i)=>{
        if(cur === max) answer.push(i+1);
    },[])
    
    return answer;
}