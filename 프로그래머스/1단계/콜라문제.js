function solution(a, b, n) {
    let acc = 0; // 콜라 누적
    while (n >= a) {
        acc += Math.floor(n / a) * b; // 소숫점 제거//
        n = Math.floor(n / a) * b + n % a;
    }
    return acc;
}

console.log(solution(3, 1, 20));
