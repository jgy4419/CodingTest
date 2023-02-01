// 내 풀이.. (시간초과)
// function solution(n, left, right) {
//     let answer = [];
//     let arr = [];
//     let val = 1;
//     for (let i = 1; i <= n; i++){
//         for (let j = 1; j <= n; j++){
//             if (j < val) {
//                 arr.push(val);
//             } else {
//                 arr.push(j);   
//             }
//         }
//         val++;
//     }
//     return arr.slice(left, right + 1);
// }

// 다른 사람 풀이
function solution(n, left, right) {
    let answer = [];
    for (let i = left; i <= right; i++) {
        /* 
            세로랑 가로 중 큰 값 넣기
            세로 : Number.parseInt(i / n)
            가로 : i % n
        */
        answer.push(Math.max(Number.parseInt(i / n), i % n) + 1);
    }
    return answer;
}

console.log(solution(3, 2, 5));  // [3, 2, 2, 3]
console.log(solution(4, 7, 14)); // [4, 3, 3, 3, 4, 4, 4, 4]