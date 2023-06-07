// 처음에 푼 방식 
// 포문 안에서 splice()를 사용해서 시간 초과 발생 
function solution(arr){
    let i = 0;
    while(1){
        if(i >= arr.length) break;
        if(arr[i] === arr[i+1]){
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return arr;
}

// 다시 푼 방식
// 이전 항목이랑 비교해서 똑같으면 지나치기 (그 앞에 겹치는 항목이 이미 newArr에 있으니까)
// 없으면 항목 추가
function solution(arr)
{
    let newArr = [arr[0]];
    for(let i=1;i<arr.length;i++){
        if(arr[i-1] === arr[i]){
            continue;
        } else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// filter 메소드 사용한 방식 
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}