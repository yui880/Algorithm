// 남은 부분과 현재 타입에 대한 뭔가가 있어야 할거같은데 
// 못들어가면 채워줘야하고 
// 들어갈 수 있으면 그 다음값을 고려해서 또 들어갈 수 있는지 확인해서 
// 또 들어갈 수 있으면 그대로 넣고 안되면 채우고 끝에 나를 넣어어함 

const BYTE = {
    "BOOL" : 1,
    "SHORT" : 2,
    "FLOAT" : 4,
    'INT' : 8,
    "LONG" : 16,
}

function solution(param0){
    let arr = '';
    for(let i=0;i<param0.length;i++){
        let size = BYTE[[param0[i]]];
        if(size === 16) {
            arr += '#'.repeat(size);
            continue;
        }
        while(arr.length % size !== 0){
                arr += '.';
            }
        arr += '#'.repeat(size);
    }
    // console.log(arr);
    
    while(arr.length % 8 !== 0){
        arr += '.';
    }

    if(arr.length > 128) return 'HALT';
    let answer = '';
    for(let i=0;i<arr.length;i++){
        answer += arr[i];
        if(i != 0 && (i+1) % 8 === 0 && i != arr.length-1) answer += ',';
    }

    return answer;
}

function assignData(){

}






console.log(solution(['INT', 'INT']));
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

