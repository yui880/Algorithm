function udrl(n, plans){
    let point = [1,1];

    for(let i=0;i<plans.length;i++){
        point = move(plans[i],point,n);
    }
    return point;
}

function move(direction, point, n){
    if(direction === 'R'){
        if(point[1] + 1 > n) return point;
        point[1]++;
        return point;
    } 
    if(direction === 'L'){
        if(point[1] - 1 <= 0) return point;
        point[1]--;
        return point;
    } 
    if(direction === 'U'){
        if(point[0] - 1 <= 0) return point;
        point[0]--;
        return point;
    } 
    if(direction === 'D'){
        if(point[0] + 1 > n) return point;
        point[0]++;
        return point;
    } 
}


function solution(n, plans){
    let [x, y] = [1,1];

    const dx = [0,0,-1,1];
    const dy = [1,-1,0,0];
    const types = ['R', 'L', 'U', 'D'];

    for(let i=0;i<plans.length;i++){
        const index = types.indexOf(plans[i]);
        const nx = x + dx[index];
        const ny = y + dy[index];

        if(nx <= 0 || nx > n || ny <= 0 || ny > n){
            continue;
        }
        x = nx;
        y = ny;

    }
    return [x, y];
}


console.log(udrl(5, ['R', 'R', 'R', 'U', 'D', 'D']));
console.log(solution(5, ['R', 'R', 'R', 'U', 'D', 'D']));