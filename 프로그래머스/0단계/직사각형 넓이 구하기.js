function solution(arr) {
    // x 중에서 가장 큰 값 - x 중에서 가장 작은 값
    // 곱하기
    // y 중에서 가장 큰 값 - y 중에서 가장 작은 값
    let x = [];
    let y = [];
    for (let i = 0; i < arr.length; i++){
        x.push(arr[i][0]);
        y.push(arr[i][1]);
    }
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]])); // result => 1
console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]])); // result => 4