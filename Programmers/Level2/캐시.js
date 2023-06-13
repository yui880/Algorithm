// 캐시 배열을 만든다 
// 루프 돌면서 캐시에 저장하기 
// 캐시에 있으면 1, 없으면 5
// 가장 오랫동안 사용되지 않은 캐시 버리고 업데이트 -> 캐시 사용하면 뽑아내서 맨 앞에 삽입 
// 맨 뒤에 있는 캐시 삭제?


function solution(cacheSize, cities) {
    let cache = new Array(cacheSize).fill('');
    let time = 0;
    cities= cities.map(cur => cur.toLowerCase());
    for(let i=0;i<cities.length;i++){
        if(cacheSize === 0){
            time = 5 * cities.length;
            break;
        }
        if(cache.indexOf(cities[i]) === -1){
            time += 5;
            cache.pop();
            cache.unshift(cities[i]);
        } else{
            time += 1;
            let index = cache.indexOf(cities[i]);
            let value = cache[index];
            cache = cache.filter((cur,i)=> i !== index);
            cache.unshift(value);
        }
    }
    return time;
}