const MOVE = {
    "L" : [0,-1],
    "R" : [0, 1],
    "U" : [1, 0],
    "D" : [-1,0]
}

function solution(dirs) {
    let street = [];
    let first = [0,0];
    
    for(let i=0;i<dirs.length;i++){
        let command = MOVE[dirs[i]];
        let second = [first[0]+ command[0], first[1] + command[1]];
        
        if(second[0] < -5 || second[0] > 5 
           || second[1] < -5 || second[1] > 5) continue;
        else {
            if(street.indexOf(""+first + second) !== -1 || 
               street.indexOf(""+second + first) !== -1
              ) { first = second; }
            else {
                street.push(""+first + second);
                first = second;
            }
            
        }
    }
    return street.length;
}