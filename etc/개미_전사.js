const dpTable = new Array(1000).fill(0);

const antWarrior = (storage) => {
    dpTable[0] = storage[0];
    dpTable[1] = Math.max(storage[0], storage[1]); // 둘 중 어디서 시작하는 게 좋을지 결정 

    for(let i=2;i<storage.length;i++){
        dpTable[i] = Math.max(dpTable[i-1], dpTable[i-2] + storage[i]);
    }

    return dpTable[storage.length-1]; // 해당 위치에서 가장 많이 고를 수 있는 곳만 선택해서 골랐기 때문에 맨 마지막 항목에 최대 식량 수 나옴 
}

console.log(antWarrior([1,3,1,5]));