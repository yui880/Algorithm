// 성적이 낮은 순서로 학생 출력 
const lowerOrder = () => {
    const quick = (arr) => {
        if(arr.length <= 1) return arr;
        
        const pivot = arr[0];
        const left = [];
        const right = [];

        for(let i =1;i<arr.length;i++){
            if(arr[i][1] < pivot[1]) left.push(arr[i]);
            if(arr[i][1] >= pivot[1]) right.push(arr[i]);
        }

        const sortedLeft = quick(left);
        const sortedRight = quick(right);
       
        return [...sortedLeft, pivot, ...sortedRight];
    }
    const sorted = quick([['철수', 10], ['영희', 5], ['민지', 70], ['유나', 100], ['지은', 0]]);
    const sortedName = sorted.map((item)=> item[0]);
    return sortedName;
}

console.log(lowerOrder());


// ...

function generateRandomArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * 1000) + 1);
    }
    return randomArray;
}
  
const randomArray1 = generateRandomArray(10);
const randomArray2 = generateRandomArray(10);

// ...

// 두 배열의 원소 교체 
const changeItem = (arr1, arr2, k) => {
    console.log(arr1);
    console.log(arr2);

    arr1.sort((a,b) => a-b);
    arr2.sort((a,b) => b-a);

    console.log(arr1);
    console.log(arr2);

    let sum = 0;
    for(let i=0;i<k;i++){
        sum += arr2[i];
    }
    for(let i=k;i<arr1.length;i++){
        sum += arr1[i];
    }

    return sum;
}


console.log(changeItem(randomArray1, randomArray2, 3));