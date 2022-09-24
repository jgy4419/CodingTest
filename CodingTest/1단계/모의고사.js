// function solution(answers) {
//     let st = [
//         [1, 2, 3, 4, 5],
//         [2, 1, 2, 3, 2, 4, 2, 5],
//         [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//     ];
//     let count = 0;
//     let countArr = [];
//     let resArr = [];
//     while (true) {
//         for (let i = 0; i < st.length; i++){
//             if (st[i].length < answers.length) {
//                 st[i].push(...st[i]);
//             } else {
//                 continue;
//             }
//         }
//         break;
//     }
//     for (let i = 0; i < st.length; i++){
//         for (let j = 0; j < answers.length; j++){
//             if (st[i][j] === answers[j]) {
//                 count += 1;
//             }
//         }
//         countArr.push(count);
//         count = 0;
//     }
//     for (let i = 0; i < countArr.length; i++){
//         if (Math.max(...countArr) === countArr[i]) {
//             resArr.push(i + 1);
//         }
//     }
//     return resArr;
// }
console.log('ress', solution([1, 2, 3, 4, 5]));

function solution(answers) {
    var answer = [];
    let st1 = [1, 2, 3, 4, 5];
    let st2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let s1t = answers.filter((a, i) => a === st1[i % st1.length]).length;
    let s2t = answers.filter((a, i) => a === st2[i % st2.length]).length;
    let s3t = answers.filter((a, i) => a === st3[i % st3.length]).length;
    console.log(s1t, s2t, s3t);

    let max = Math.max(s1t, s2t, s3t);

    if (s1t === max) { answer.push(1) };
    if (s2t === max) { answer.push(2) };
    if (s3t === max) { answer.push(3) };

    return answer;
}