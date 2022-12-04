// 다른사람 풀이
// function solution(X, Y) {
//     let answer = '';
//     X = X.split('');
//     Y = Y.split('');

//     for (let i = 0; i < 10; i++){
//         const curX = X.filter(a => Number(a) === i).length;
//         const curY = Y.filter(a => Number(a) === i).length;

//         console.log(curX, curY);
//         answer += String(i).repeat(Math.min(curX, curY));
//     }
//     if (answer === '') return "-1";
//     if (Number(answer) === 0) return '0';

//     return answer.split('').sort((a, b) => Number(b) - Number(a)).join("");
// }

// 나의 풀이 (시간초과)
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

console.log(solution("100", "203045"));