function countUniqueValues(arr) {
    let changeNum = 0;
    let res = 0;
    for (let i = 0; i < arr.length; i++){
        if (changeNum !== arr[i]) {
            changeNum = arr[i];
            res++;
        }
    }
    return res;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4