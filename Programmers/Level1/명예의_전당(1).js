// 내가 작성한 코드 - 너무 오래 걸림
function solution(k, score) {
    let arr = [];
    for(let i=0;i<score.length;i++){
        if(i<k){
            arr.push(score.slice(0,i+1).sort((a,b)=> a-b)[0]);
        } else {
            arr.push(score.slice(0,i+1).sort((a,b)=> a-b).slice(-k)[0]);
        }
    }
    return arr;
}

// 해당 인덱스까지 arr에 넣어서 
function solution(k, score) {
    let arr = []; // arr는 명예의 전당 
    return score.reduce((acc, cur)=>{
        arr.push(cur);
        arr = arr.sort((a,b)=> b-a).slice(0,k); // 명예의 전당은 k번재까지만 나타내니까 
        return [...acc, Math.min(...arr)]; // 발표 점수 acc에 추가하기 
    },[]);
}