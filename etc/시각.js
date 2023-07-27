function time(hour){
    let count = 0;
    for(let i=0;i<=hour;i++){
        if(i === 3 || i === 13 || i === 23){
            count += (60 * 60);
        } else {
            count += (15 * 60 + 45 * 15);
        }
    }
    return count;
}

function solution(hour){
    let count =0;
    for(let i=0;i<=hour;i++){
        for(let j=0;j<60;j++){
            for(let k=0;k<60;k++){
                if((i.toString() + j.toString() + k.toString()).indexOf('3') >= 0){
                    count++;
                }
            }
        }
    }
    return count;
}


//console.log(time(5));

// console.log(solution(5));
// console.log(solution(0), solution(1), solution(2), solution(3), solution(4), solution(5));
// console.log(solution(0), solution(1), solution(2), solution(3), solution(4), solution(5));
// console.log(solution(0), solution(1), solution(2), solution(3), solution(4), solution(5));