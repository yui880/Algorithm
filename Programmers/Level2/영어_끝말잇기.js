

// // 나온 문자 따로 배열에 저장해서 있는지 확인할 때 사용하기
// // 현재 인덱스 나누기 인원수한 나머지로 몇번째 사람이 말한건지 확인가능 
// // 몇번째 차례인지는 현재 인덱스 나누기 인원수 하면됨. 내림 해야함

// function solution(n, words) {
//     let arr = [];
//     for(let i=0;i<words.length;i++){
//         console.log(words[i-1].slice(-1));
//         if(arr.indexOf(words[i]) >= 0){
//             return [i % n + 1, Math.floor(i / n) + 1 ];
//         } else if(words[i-1].slice(-1) !== words[i][0]){
//             return [i % n + 1, Math.floor(i / n) + 1 ];
//         }
//         else {
//             arr.push(words[i]);
//             temp = words[i];
//         }
//     }
    

//     return [0, 0];
// }



// function solution(n, words) {
//     let arr = [words[0]];
//     for(let i=1;i<words.length;i++){
//         if(words[i-1].slice(-1) !== words[i][0]){
//             return [i % n + 1, Math.ceil(i / n) + 1 ];
//         } else if(arr.indexOf(words[i]) >= 0){
//             return [i % n + 1, Math.floor(i / n) + 1 ];
//         }
//         else {
//             arr.push(words[i]);
//         }
//     }
    
//     return [0, 0];

// }




function solution(n, words) {
    let answer = [0,0];
    
    for(let i=0;i<words.length;i++){
        let index = (i % n) + 1;
        let turn = Math.ceil((i+1)/n);
        let last = words[i - 1].split("").pop();
        if(words[i][0] !== last || words.indexOf(words[i]) > 0){
            answer = [index, turn];
            break;
        }
    }
    return answer;
}