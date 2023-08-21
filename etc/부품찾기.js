const binarySearch = (arr, start, target, end) => {
    if(start > end) return -1;
    const mid = Math.floor((start + end)/2);

    if(arr[mid] > target) return binarySearch(arr, start, target, mid-1);
    else if(arr[mid] < target) return binarySearch(arr, mid+1, target, end);
    else return mid;
}

const findParts = (arr1, arr2) => {
    arr1.sort((a,b)=> a-b);
    console.log(arr1);
    const answer = arr2.map((num)=> {
        if(binarySearch(arr1, 0, num, arr1.length-1) >= 0) return 'yes';
        else return 'no'; 
    })

    return answer;
}

console.log(findParts([8,3,7,9,2], [5,7,9]));