// function solution(n) {
//     var answer = [n];
//     while (true) {
//         if (n % 2 === 0) {
//             answer.push(2);
//             answer.push(n / 2);
//             n = n / 2;
//             if (n === 1) break;
//         } else if (n % 3 === 0) {
//             answer.push(n / 3);
//             n = n / 3;
//             if (n === 1) break;
//         } else { 
//             answer.push(1);
//             break;
//         }
//     }
//     return answer.sort((a, b) => a - b);
// }
// [ 1, 3, 6, 12, 24 ]
console.log(solution(24));

// function solution(n) {
//     let answer = [];
//     for (let i = 1; i < Math.sqrt(n); i++) {
//       if (n % i === 0) answer = [...answer, i, n / i];
//     }
//     if (Number.isInteger(Math.sqrt(n))) answer = [...answer, Math.sqrt(n)];
//     return answer.sort((a, b) => a - b);
//   }