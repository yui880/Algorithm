function gameDevelop(size, position, direction, gamemap){
    const go = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const back = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    const [n, m] = size;
    let [a, b] = position;

    gamemap[a][b] = 2;
    let turn = 0;
    let move = [[a,b]];

    while(true){
        direction = (direction + 1) % 4;
        let tempA = a + go[direction][0];
        let tempB = b + go[direction][1];

        if(gamemap[tempA][tempB] === 0){
            a = tempA;
            b = tempB;
            gamemap[a][b] = 2;
            
            turn = 0;
        } else {
            turn++;
        }

        if(turn === 4){
            tempA = a + back[direction][0];
            tempB = b + back[direction][1];

            if(gamemap[tempA][tempB] === 2 || gamemap[tempA][tempB] === 0){
                a = tempA;
                b = tempB;
            } else {
                break;
            }
            turn = 0;
        }

        console.log(gamemap, a, b, direction);

    }

    return gamemap.reduce((acc,cur) => acc + cur.filter(val => val === 2).length, 0);
}

console.log(gameDevelop([4,4],[1,1], 0, [[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,1,1,1]]));
console.log(gameDevelop([6,6],[3,2], 2, [[1,1,1,1,1,1],[1,1,0,0,0,1],[1,0,0,0,0,1],[1,1,1,0,0,1], [1,1,1,0,0,1], [1,1,1,1,1,1]]));

