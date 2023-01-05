function solution(array) {
    var answer = 0;
    array = array.sort((a, b) => a - b);
    return array[Math.round((array.length / 2) - 1)];
}

console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));