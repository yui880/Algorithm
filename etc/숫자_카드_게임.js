function numberCardGame(arr){
    const minNums = arr.map((rows) => Math.min(...rows));
    return Math.max(...minNums);
}

console.log(numberCardGame([
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2]
]));

console.log(numberCardGame([
    [7, 3, 1, 8],
    [3, 3, 3, 4],
]));
