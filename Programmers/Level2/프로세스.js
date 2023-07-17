function solution(priorities, location) {
    const queue = priorities.map((p, i) => [p, i]);
    let count = 0;
    
    while(true){
        let [prior, index] = queue.shift();
    
        if(queue.find((value) => value[0] > prior) !== undefined) {
            queue.push([prior, index]);
        } else {
            count = count + 1;
            if(index === location) break;
        }
    }
    return count;
}

