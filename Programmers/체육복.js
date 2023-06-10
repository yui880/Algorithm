// 체육복 가져온 학생 확인
// 체육복 안가져온 학생이랑 여벌 옷 학생 확인해서 배열만들기 (이때 여벌옷 학생이 도난당했을때 고려)
// 앞 뒤 친구 중 가져온 학생 있으면 빌리기 
function solution(n, lost, reserve) {
    let bring = 0;
    let tempArr = new Array(n).fill(0);
    let count = 0;
    
    lost = lost.sort((a,b)=> a-b);
    reserve = reserve.sort((a,b)=> a-b);
    
    for(n of lost){
        tempArr[n-1] -= 1;
    }
    for(n of reserve){
        tempArr[n-1] += 1;
    }

    bring = tempArr.filter(n => n>=0).length;
    for(let i=0;i<n;i++){
        if(tempArr[i] + tempArr[i+1] === 0 && tempArr[i] !== 0) {
            count++; i++;
        }
    }
    return bring + count;
    
    
    
    
}