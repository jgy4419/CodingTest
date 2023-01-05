function selectSort(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++){
        index = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[index]) {
                index = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    console.log(arr);

}

console.log(selectSort([5, 3, 4, 1, 2]));