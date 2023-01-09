function helper(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++){
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            console.log(arr);
        }
    }
    /* 
        [4, 8, 2, 1, 5, 7, 6, 3]
        [4, 2, 8, 1, 5, 7, 6, 3]
        [4, 2, 8, 1, 5, 7, 6, 3]
        [4, 2, 1, 8, 5, 7, 6, 3]
        [4, 2, 1, 3, 5, 7, 6, 8]
    */
    // 마지막으로 스왑 인덱스를 가져와서 첫 번째와 바꾸는 것.
    swap(arr, start, swapIdx); // [3, 2, 1, 4, 5, 7, 6, 8]
    return arr;
}

// 최신문법 사용
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++){
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}