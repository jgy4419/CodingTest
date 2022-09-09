function solution(arr) {
    var answer = 0;
    arr.forEach(arr => answer += arr);
    return answer / arr.length;
}

console.log(solution([1, 2, 3, 4]));