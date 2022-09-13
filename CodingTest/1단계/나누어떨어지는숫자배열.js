// 내 코드
// function solution(arr, divisor) {
//     var answer = [];
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % divisor === 0) {
//             count++;
//             answer.push(arr[i]);
//         }
//     }
//     if (count === 0) { 
//         answer.push(-1);
//         return answer;
//     }
//     return answer.sort((a, b) => a - b);
// }
// 다른 사람 코드
function solution(arr, divisor) {
    let answer = arr.filter(v => v % divisor === 0);
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
console.log(solution([3, 2, 6], 10));