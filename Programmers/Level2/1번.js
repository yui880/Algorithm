// function solution(arr) {
//     let answer = [];
//     for(let i=0;i<arr.length-1;i++){
//         let count = 0;
//         if(arr[i] === 0) continue;
        
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[i] === arr[j]) {
//                 count++;
//                 arr[j] = 0;
//             }
//         }
//         if(count > 0) answer.push(count+1);
//     }
//     if(answer.length === 0) return [-1];
//     return answer; 
// }


function solution(arr) {
   let set = [...new Set(arr)];
   let answer = [];

   for(let i=0;i<set.length;i++){
    let count = 0;
    for(let j=0;j<arr.length;j++){
        if(arr[j]=== 0) continue;
        if(set[i] === arr[j]){
            count++;
            arr[j] = 0;
        }
    }
    // console.log(arr);
    if(count > 1) answer.push(count);
   } 

   if(answer.length === 0) return [-1];
   else return answer;

}

console.log(solution([1,2,3,3,3,3,4,4]));
console.log(solution([3,2,4,4,2,5,2,5,5]));
console.log(solution([3,5,7,9,1]));
console.log(solution([23,5,7,9,1,2,3,3,4,2,3,6,8,6,5,4,2,3,4,4,4,4,4,4,2,5,6,7,7,7,23,23,32,32]));