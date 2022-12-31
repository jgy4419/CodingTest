function search(arr, find) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === find) {
            return i;
        }
    }
    return -1;
}

console.log(search([1, 5, 2, 10, 21, 9, 54, 8, 7], 100));