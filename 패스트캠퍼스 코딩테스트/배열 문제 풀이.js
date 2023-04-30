// 최소, 최대
function solution(length, arr){
    return [Math.max(...arr), Math.min(...arr)];
}

console.log(solution(5, [20, 10, 35, 30, 7]));

// 최댓값 
function solution(arr) {
    return Math.max(...arr) + ' ' + Number(arr.indexOf(Math.max(...arr))+ 1);
}

console.log(solution([3, 29, 38, 12]));

// 나머지
function solution(arr) {
    let array = new Set();
    for(let i = 0; i < arr.length; i++) {
        array.add(arr[i] % 42);
    }
    return array.size;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 평균은 넘겠지

function solution(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) { 
        sum += arr[i];
    }
    let avg = sum / arr.length;
    let students = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > avg) students.push(parseInt(arr[i]));
    }
    console.log(arr.length + ' ', + students.length);
    return ((students.length / arr.length * 100)).toFixed(3);
}

console.log(solution([71, 59, 82, 40, 33, 12, 68]));

function solution(size, arr) {
    let newScore = [];
    let maxValue = arr.reduce((a, b) => Math.max(a, b));
    for(let i = 0; i < size; i++) {
        newScore.push(arr[i] / maxValue * 100);
    }
    return newScore.reduce((a, b) => a + b / size);
}

console.log(solution(7, [71, 59, 82, 40, 33, 12, 68]));