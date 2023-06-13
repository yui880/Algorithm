function solution(food) {
    let arr = [];
    for(let i=1;i<food.length;i++){
        if(food[i]%2 !== 0) food[i] -= 1;
    }
    for(let i=1;i<food.length;i++){
        arr.push(i.toString().repeat(food[i]/2));
    }
    arr.push("0");
    for(let i=food.length-1;i>0;i--){
        arr.push(i.toString().repeat(food[i]/2));
    }
    return arr.join('');
}

function solution(food) {
    let arr = [];
  
    for(let i=1;i<food.length;i++){
        arr.push(i.toString().repeat(Math.floor(food[i])/2));
    }
    arr.push("0");
    for(let i=food.length-1;i>0;i--){
        arr.push(i.toString().repeat(Math.floor(food[i])/2));
    }
    return arr.join('');
}