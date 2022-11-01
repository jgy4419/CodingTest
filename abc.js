// function solution(balls, share) {
//     var answer = 1;
//     let maxNum = balls > share ? balls : share;
//     let [ballsNum, shareNum, minusNum] = [0, 0, 0];
//     console.log((balls - share), balls, share);
//     for (let i = 1; i <= maxNum; i++){
//         answer *= i;
//         if (i === (balls - share)) {
//             minusNum = answer;
//         } else if (i === share) {
//             shareNum = answer;
//         } else if (i === balls) {
//             ballsNum = answer;
//         }
//     }
//     return ballsNum / (minusNum * shareNum);
// }

// console.log(solution(5, 3));

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