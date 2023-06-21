// 남은 공간이 현재 들어갈 바이트보다 작을때 .으로 채움 
// bool 다음 문자가 bool이 아니면 . 출력
// short가 왔을 때 남은 공간을 확인, 남은 공간이 2칸 이상이면 그대로 출력 
// float가 왔을 때 남은 공간을 확인, 남은 공간이 8이 아니면 4칸 남을떄까지 .찍기 
// 남은 공간이 6칸이 아니면 

const BYTE = {
    "BOOL" : 1,
    "SHORT" : 2,
    "FLOAT" : 4,
    'INT' : 8,
    "LONG" : 16,
}

function solution(param0){
    let answer = [];
    let temp = '';
    
    for(let i = 0; i<param0.length; i++){
        
        // 현재 들어가야 하는 바이트가 남은 길이보다 커서 남은 부분 .으로 채워주기
        if(8 - temp.length < BYTE[param0[i]]){
            temp += '.'.repeat(8 - temp.length);
            answer.push(temp);
            temp = '';
        }

        // INT와 LONG은 8바이트를 혼자 다 쓰기 때문에 바로 답에 출력 
        // 다른 자료형이랑 8바이트 나눠쓸일 없어서 고려 안해도 됨
        if(param0[i] === "INT"){
            answer.push("########");
            continue;
        } else if(param0[i] === "LONG"){
            answer.push("########");
            answer.push("########");
            continue;
        }

        
        if(param0[i] === "BOOL"){
            temp += '#';
            if(param0[i+1] !== "BOOL") temp += '.'; // 다음 자료형이 bool일때만 . 찍음
        } else if(param0[i] === "SHORT"){
            temp += '##';
            // 다음에 오는 자료형이 float이고 다음 자료형을 현재 다루는 8바이트에 넣을 수 있을 때 
            // 다음에 올 자리 빼고 나머지 .으로 채워버리기 
            if(param0[i+1] === "FLOAT" && 8 - temp.length - BYTE[param0[i+1] < 0]){
                temp += '.'.repeat(8 - temp.length - BYTE[param0[i+1]]);
            } 
        } else if(param0[i] === "FLOAT"){
            // 다음에 오는 자료형을 넣을 수 없고, 현재가 마지막 항목일때
            // float이 마지막에 올때는 앞에를 다 채우고 맨 뒤에다가 float을 둬야하기 때문
            if(8 - temp.length - BYTE[param0[i+1]] < 0 || i === param0.length-1){
                temp += '.'.repeat(8 - temp.length-4); 
            }
            temp += '####';
        } 
        // 마지막 인덱스면 나머지 .으로 채우고 끝내기
        if(i === param0.length-1){
            temp += '.'.repeat(8 - temp.length);
            answer.push(temp);
            temp = '';
        }
        
    }

    if(answer.length * 8 > 128) return "HALT";
    let str = '';
    answer.forEach((cur,i) => {
        if(i === answer.length-1) str += cur;
        else str += cur + ',';
    })
    return str;
}

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

