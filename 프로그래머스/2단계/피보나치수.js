function solution(n) {
    let arr = [1, 1];
    for (let i = 0; i <= n; i++) {
        arr.push((arr[arr.length - 1] + arr[arr.length - 2]) % 1234567);
    }
    return arr[n - 1];
}

console.log(solution(5)); // 결과는 5