// 그러니까 8바이트씩 붙여야해서 8바이트 맞추는 패딩 넣으라는 소리같은데 
// 불 타입끼리는 붙여거 작성가능 
// 128보다 큰 메모리는 할당 불가능 
// 하나라도 더 이상 할당 할 수 없는 경우에는 HALT를 리턴 

// BOOL 다음에 뭐가 오는지가 중요함, 8바이트를 채우지 못한 경우를 확인해야함 
// 길이를 계속 확인해야할듯하다 

let byte = {
    "BOOL" : 1,
    "SHORT" : 2,
    "FLOAT" : 4,
    "INT" : 8,
    "LONG" : 16
}

// function solution(param0){
//     let answer = [];
//     let temp = '';
//     for(let i=0;i<param0.length;i++){
        
//         if(param0[i] === 'BOOL') {
//             temp += '#';
//             if(param0[i+1] === 'BOOL'){
//                 temp += '#';
//                 i++;
//             }
//             else if(param0[i+1] === 'SHORT'){
//                 temp += '.##';
//                 i++;
//             } else if(param0[i+1] === 'FLOAT'){
//                 temp += '...####'
//                 i++;
//                 answer.push(temp);
//                 temp = '';
//                 continue;
//             } else if(param0[i+1] === 'SHORT' || param0[i+2] === 'FLOAT'){
//                 temp += '.######';
//                 i += 2;
//                 answer.push(temp);
//                 temp = '';
//                 continue;
//             } else {
//                 temp += '......';
//                 answer.push(temp);
//                 temp = '';
//                 continue;
//             }
//         }    
//         else if(param0[i] === 'SHORT') {
//             temp += '##';
//             if(param0[i+1] === 'FLOAT' && 8 - temp.length >= 4){
//                 temp += '..####';
//                 answer.push(temp);
//                 i++;
//                 temp = '';
//             }
//         }
//         else if(param0[i] === 'FLOAT') temp += '####';
        
//         if(byte[param0[i+1]] > 8 - temp.length){
//             temp += '.'.repeat(8 - temp.length);
//             answer.push(temp);
//             temp = '';
//             continue;
//         }
        
//         if(param0[i] === 'INT') {
//             answer.push('########'); continue;
//         }
//         else if(param0[i] === 'LONG') {
//             answer.push('########'); 
//             answer.push('########');
//             continue;
//         }

        
        
//         // answer.push(temp);
//     }
//     let str = '';
//     answer.forEach((cur,i) => {
//         if(i === answer.length-1) str += cur;
//         else str += cur + ',';
//     })
    

//     return str;
    
    
// }





function solution(param0){
    let answer = [];
    let temp = '';

    for(let i=0;i<param0.length;i++){
        if(param0[i] === 'BOOL') {
            temp += '#';
            if(param0[i+1] === 'BOOL'){
                temp += '#';
                i++;
            }
            else if(param0[i+1] === 'SHORT'){
                temp += '.##';
                i++;
            } else if(param0[i+1] === 'FLOAT'){
                temp += '...####'
                i++;
            } else if(param0[i+1] === 'SHORT' || param0[i+2] === 'FLOAT'){
                temp += '.######';
                i += 2;
                
            } else {
                temp += '.......';
            }
        }    
        else if(param0[i] === 'SHORT') {
            temp += '##';
            if(param0[i+1] === 'FLOAT' && 8 - temp.length >= 4){
                temp += '..####';
                i++;
            }
        }
        else if(param0[i] === 'FLOAT') temp += '####';

        if(param0[i+1] < 0) {
            temp += '.'.repeat(8 - temp.length);
        }

        if(byte[param0[i+1]] > 8 - temp.length){
            temp += '.'.repeat(8 - temp.length);
        }
        
        if(param0[i] === 'INT') {
            answer.push('########');
        }
        else if(param0[i] === 'LONG') {
            answer.push('########'); 
            answer.push('########');
        }

        if(temp.length === 8){
            answer.push(temp);
            temp = '';
        }
 
    }
    let str = '';
    answer.forEach((cur,i) => {
        if(i === answer.length-1) str += cur;
        else str += cur + ',';
    })
    if(str.length > 128) return 'HALT';
    
    return str;
    
    
}



// function solution(param0){
//     let answer = '';
    
//     let arr = param0.map(n => byte(n));
//     let temp = [];
//     let sum = 0;

//     arr.forEach(n => {
//         if(n > 8) {
//             str+= '#'.repeat(n); 
//         }
//         else {
//             temp.push(n);
//             sum += n;
  
//                 str += (lessThanEight(temp));
//                 sum = n;
            
            
//         }
//     })
    
// }


// function lessThanEight(arr){
//     let str = ''
//     for(let i=0;i<arr.length; i++){
//         if(arr[i] === 1){
//             str += '#'
//             if(arr[i+1] === 1) {
//                 str += '#';
//                 i++;
//             }
//             else if(arr[i+1] === 2) {
//                 str += '.##';
//                 i++
//             }
//             else if(arr[i+1] === 4) {
//                 str += '...####'
//                 i++;
//             }
//         } else if (arr[i] == 2) str += '##';
//         else if(arr[i] == 4) str += '####';
//     }
//     if(str.length < 8){
//         str += '#'.repeat(8-str.length);
//     } 

//     return str;
// }

console.log(solution(['INT', 'INT', 'BOOL', "SHORT", "LONG"]));
console.log(solution(['INT','SHORT','FLOAT','INT','BOOL']));
console.log(solution(['FLOAT', 'SHORT', 'BOOL', 'BOOL', 'BOOL', 'INT']));
console.log(solution(['BOOL','LONG','SHORT','LONG','BOOL',"LONG","BOOL","LONG","SHORT","LONG","LONG"]));





const solve = [
    [["BOOL"], "#......."],
    [["BOOL", "BOOL"], "##......"],
    [["BOOL", "BOOL", "BOOL", "BOOL"], "####...."],
    [["BOOL", "BOOL"], "##......"],
    [["BOOL", "SHORT"], "#.##...."],
    [["BOOL", "FLOAT"], "#...####"],
    [["SHORT", "FLOAT"], "##..####"],
    [["BOOL", "SHORT", "FLOAT"], "#.######"],
    [["BOOL", "SHORT", "FLOAT", "FLOAT"], "#.######,####...."],
    [["BOOL", "INT"], "#.......,########"],
    [["SHORT", "BOOL"], "###....."],
    [["SHORT", "LONG"], "##......,########,########"],
    [["FLOAT", "SHORT"], "######.."],
    [
      ["INT", "INT", "BOOL", "SHORT", "LONG"],
      "########,########,#.##....,########,########"
    ],
    [
      ["INT", "SHORT", "FLOAT", "INT", "BOOL"],
      "########,##..####,########,#......."
    ],
    [
      ["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"],
      "########,#.......,########"
    ],
    [
      [
        "BOOL",
        "LONG",
        "SHORT",
        "LONG",
        "BOOL",
        "LONG",
        "BOOL",
        "LONG",
        "SHORT",
        "LONG",
        "LONG"
      ],
      "HALT"
    ],
    [["SHORT", "BOOL"], "###....."],
    [["INT", "SHORT", "FLOAT"], "########,##..####"],
    [
      ["INT", "INT", "BOOL", "SHORT", "LONG"],
      "########,########,#.##....,########,########"
    ],
    [
      ["INT", "SHORT", "FLOAT", "INT", "BOOL"],
      "########,##..####,########,#......."
    ],
    [
      ["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"],
      "########,#.......,########"
    ],
    [
      [
        "BOOL",
        "LONG",
        "SHORT",
        "LONG",
        "BOOL",
        "LONG",
        "BOOL",
        "LONG",
        "SHORT",
        "LONG",
        "LONG"
      ],
      "HALT"
    ]
  ];

  for(let i=0;i<solve.length;i++){
    console.log(solution(solve[i][0]) === solve[i][1]);
    console.log(solution(solve[i][0]));
}

