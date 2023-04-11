function solution(n) {
    let answer = 0;
    let [a, b] = [2, 1]
    for(let i = 2; i < n; i++) {
        answer = (a + b) % 1000000007;
        b = a;
        a = answer;
    }
    return answer;
}


// 런타임 에러
function solution(n) {
    return fibonacci(n);
}

function fibonacci(n) {
    const dp = new Array(n+1).fill(0);
    dp[0] = 1; dp[1] = 1;

    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
    }

    return dp[n];
}

console.log(solution(5));