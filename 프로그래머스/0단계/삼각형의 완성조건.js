function solution(sides) {
    var answer = 0;
    // 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 된다.
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    for(let i = 0; i <= max; i++) {
        if(min + i > max) answer++;
    }
    return answer + (answer - 1);
}

// 다른 사람 풀이
function solution(slides) {
    return Math.min(...slides) * 2 - 1;
}

console.log(solution([1, 2])); // 1
console.log(solution([3, 6])); // 5
console.log(solution([11, 7])); // 13