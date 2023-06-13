// 상하좌우 -1이거나 +1 이거나 -3이거나 +3인 곳으로 이동가능 
// 양 끝단에서는 +3, -3하면서 움직이기 
// 가운데에서는 가려는 위치에서 현재 위치 빼보기 -> 절대값이 +1, -1, +3, -3인지 확인, 아니면 빼서 거리 확인? 
// 똑같으면 왼손잡이인지 오른손 잡이인지 확인하기 
// 0은 11로 취급 

let point = [
    [0,0],[1,0],[2,0],
    [0,1],[1,1],[2,1],
    [0,2],[1,2],[2,2],
    [0,3],[1,3],[2,3]
]
function distance(a,b){
let x = Math.abs(point[a-1][0] - point[b-1][0]);
let y = Math.abs(point[a-1][1] - point[b-1][1]);

return x + y;
}
function solution(numbers, hand) {

let left = 10;
let right = 12;
let str = '';

numbers.forEach(n =>{
    let count = [0,0];
    if(n === 1 || n === 4 || n === 7){
        str += 'L';
        left = n;
    } 
    else if(n === 3 || n === 6 || n === 9){
        str += 'R';
        right = n;
    } 
    else {
        if(n === 0) n = 11;
         
        if(left-n === 1 || left-n === -1 || left-n === 3 || left-n === -3){
             count[0] = 1;
         }
        if(right-n === 1 || right-n === -1 || right-n === 3 || right-n === -3){
             count[1] = 1;
         }
        // console.log(n, count, left, right);
        if(count[0] === 1 & count[1] === 1){
            if(hand === 'left'){
                str += 'L'; 
                left = n;
            } else {
                str += 'R'; 
                right = n;
            }
            
        } else if(count[0] === 0 & count[1] === 0) {
            if(distance(left, n) < distance(right, n)){
                str += 'L';
                left = n;
            } else if(distance(left, n) === distance(right, n)){
                if(hand === 'left'){
                str += 'L'; 
                left = n;
                } else {
                str += 'R'; 
                right = n;
            }
            } else {
                str += 'R'; 
                right = n;
            }
            
        } else {
            if(count[0] === 1){
                str += 'L';
                left = n;
            } else {
                str += 'R'; 
                right = n;
            }
        }
    }
       
})

return str;
}



// 상하좌우 -1이거나 +1 이거나 -3이거나 +3인 곳으로 이동가능 
// 양 끝단에서는 +3, -3하면서 움직이기 
// 가운데에서는 가려는 위치에서 현재 위치 빼보기 -> 절대값이 +1, -1, +3, -3인지 확인, 아니면 빼서 거리 확인? 
// 똑같으면 왼손잡이인지 오른손 잡이인지 확인하기 
// 0은 11로 취급 

let point = [
    [0,0],[1,0],[2,0],
    [0,1],[1,1],[2,1],
    [0,2],[1,2],[2,2],
    [0,3],[1,3],[2,3]
]
function distance(a,b){
let x = Math.abs(point[a-1][0] - point[b-1][0]);
let y = Math.abs(point[a-1][1] - point[b-1][1]);

return x + y;
}
function solution(numbers, hand) {

let left = 10;
let right = 12;
let str = '';

numbers.forEach(n =>{
    let count = [0,0];
    if(n === 1 || n === 4 || n === 7){
        str += 'L';
        left = n;
    } 
    else if(n === 3 || n === 6 || n === 9){
        str += 'R';
        right = n;
    } 
    else {
        if(n === 0) n = 11;
        if(distance(left,n) < distance(right,n)){
            str += 'L';
            left = n;
        } 
        else if(distance(left,n) > distance(right,n)){
            str += 'R';
            right = n;
        } 
        else {
            if(hand === 'left'){
                 str += 'L';
                 left = n;
            } else {
                str += 'R';
            right = n;
            }
        }
        
    }
       
})

return str;
}
