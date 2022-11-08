// function solution(X, Y) {
//     let resArr = [];
//     for (let i = 0; i < X.length; i++){
//         resArr.push(Y.split('').filter((num, index) => {
//             return num === X[i];
//         }));
//     }
//     var answer = new Set(resArr.join('').replace(/,/gi, ''));
//     console.log(answer);
//     return answer === {} ? "-1" : [...answer].sort((a, b) => b - a).join('');
// }

// console.log(solution("100", "2345"));


// 시간 초과
function solution(X, Y) {
    var answer = [];
    let arr = Y.split('');
    let arrLength = X.length;
    for (let i = 0; i < arrLength; i++){
        if (arr.includes(X[i])) {
            arr.splice(arr.indexOf(X[i]), 1)
            answer.push(X[i]);
            continue;
        }
    }
    if (parseInt(answer.join('')) === 0) return '0';
    return answer.length === 0 ? '-1' : answer.sort((a, b) => b - a).join('');
}

// function solution(X, Y) {
//     var answer = [];
//     // for()
//     return anwer;
// }

console.log(solution("100", "203045"));