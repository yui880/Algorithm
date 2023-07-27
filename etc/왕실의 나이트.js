function kingdom(position){
    const rows = ['a','b','c','d','e','f','g','h'];
    const cols = ['1','2','3','4','5','6','7','8'];
    const dx = [2,2,-2,-2,1,-1,1,-1];
    const dy = [1,-1,1,-1,2,2,-2,-2];


    const [r,c] = position.split('');
    let x = cols.indexOf(c) + 1;
    let y = rows.indexOf(r) + 1;

    let count = 0;

    for(let i=0;i<8;i++){
        const nx = x + dx[i];
        const ny = y + dy[i];
        
        if(nx <= 0 || nx > 8 || ny <= 0 || ny > 8) continue;
        else count++;
    }
    return count;
}

console.log(kingdom('a1'));