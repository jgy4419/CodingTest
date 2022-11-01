// function solution(balls, share) {
//     const [n, m] = [balls, share];
//     const fact = [BigInt(1), BigInt(1)];
//     console.log('!', fact);
//     for (let i = 2; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i);

//     console.log('?', fact);
//     return Number(fact[n] / (fact[n - m] * fact[m]));
// }

function solution(balls, share) {
    let answer = 1;
    const [n, m] = [balls, share];
    if (balls === share) return 1;
    const fact = [];
    let maxNum = balls > share ? balls : share;
    for (let i = 1; i <= maxNum; i++){
        fact.push(answer *= i);
    }
    return fact[n - 1] / (fact[(n - m) - 1] * fact[m - 1]);
}

console.log(solution(4, 4));