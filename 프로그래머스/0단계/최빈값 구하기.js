function solution(arr) {
    let answer = 0;
    let count = 0;
    let obj = {};
    for (let i = 0; i < arr.length; i++){
        obj[arr[i]] = ++obj[arr[i]] || 1; 
    }
    answer = Object.values(obj).indexOf(Math.max(...Object.values(obj)));
    for (let i = 0; i < Object.values(obj).length; i++){
        if (Object.values(obj)[i] === Object.values(obj)[answer]) count++;
        if (count === 2) return -1
    }
    return Number(Object.keys(obj)[answer]);
}

console.log(solution([1, 2, 3, 3, 3, 4, 99, 99])); // 3
console.log(solution([1, 1, 2, 2])); // -1 
console.log(solution([1])); // 1    