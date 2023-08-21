function generateRandomArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * 1000) + 1);
    }
    return randomArray;
}
  
const randomArray = generateRandomArray(100);

const swap = (arr, a, b) => {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 1. 선택 정렬(selection sort) 

const selectionSort = () => {
    for(let i=0;i<randomArray.length;i++){
        let min = i;
        for(let j=i+1;j<randomArray.length;j++){
            if(randomArray[min] > randomArray[j]){
                min = j;
            }
        }
        if(min != i) swap(randomArray,i, min);
    }
    console.log(randomArray);
}

selectionSort();

// 2. 삽입 정렬(insertion sort)

const insertionSort = () => {
    // 0번 인덱스는 이미 정렬되었다고 생각
    for(let i=1;i<randomArray.length;i++){
        const current = randomArray[i];
        let j;
        for(j=i-1;j>=0 && randomArray[j]>current;j--){ // 작은 수 나올때 까지 뒤로 한칸씩 밀기
            randomArray[j+1] = randomArray[j];
        }
        // 작은 수 나오면 루프 멈춤, j가 current보다 작은 수니까 그것보다 한칸 뒤에 삽입 
        randomArray[j+1] = current;
    }
    console.log(randomArray);
}

insertionSort();

// 3. 퀵 정렬(quick sort)

const quickSort = (arr) => {
    if(arr.length <= 1) return arr;

    const pivot = arr[0];
    let left = [];
    let right = [];

    for(let i=1;i<arr.length;i++){
        if(pivot > arr[i]) left.push(arr[i]);
        if(pivot <= arr[i]) right.push(arr[i]);
    }

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    return [...sortedLeft, pivot, ...sortedRight];
}

console.log(quickSort(randomArray));


// 4. 계수 정렬(count sort)

const countSort = (arr) => {
    const maxNum = Math.max(...arr);
    const countArr = new Array(maxNum+1).fill(0);
    const sortedArr = [];

    for(let i=0;i<arr.length;i++){
        countArr[arr[i]]++;
    }
  
    for(let i=0;i<countArr.length;i++){
        if(countArr[i]) {
            for(let j=0;j<countArr[i];j++){
                sortedArr.push(i);
            }
        } 
        
    }

    return sortedArr;
}

console.log(countSort(randomArray));