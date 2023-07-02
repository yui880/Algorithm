function solution(brown, yellow) {
    const sum = brown + yellow;
    let row = 3;
    let col = 3;
    
    while(1){
        if(row * col < sum){
            col++;
        } else if( row * col > sum){
            row++;
            col = 3;
        } else {
            if(sum - col * 2 - (row-2) * 2 === yellow) break;
            else { row++; col = 3; }
        }
    }
    if(row > col) return [row, col]
    else return [col, row];
}


function solution(brown, yellow) {
    var answer = [];
    for (var i = 3; i <= (brown+yellow)/i; i++) {
        var x = Math.floor((brown+yellow)/i);
        if( (x-2)*(i-2)=== yellow) {
            break;
        }
    }

    return [x,i];
}