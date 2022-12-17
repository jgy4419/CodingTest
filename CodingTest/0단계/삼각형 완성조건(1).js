// 모든 변의 길이를 더한 값 중 가장 큰 변의 길이를 뺀 값보다 가장 큰 변의 길이가 작은가?
function solution(sides) {
    let sum = sides.reduce((cur, pre, index) => {
        return cur + pre;
    });
    return sum - Math.max(...sides) > Math.max(...sides) ? 1 : 2;
}

console.log(solution([1, 2, 3])); // result => 2
console.log(solution([3, 6, 2])); // result => 2
console.log(solution([199, 72, 222])); // result => 1