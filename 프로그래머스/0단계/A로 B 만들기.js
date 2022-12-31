// function solution(before, after) {
//     let answer = 0;
//     let chr = '';
//     let chgBefore = '';
//     before = before.split('');
//     chr += before.pop();
//     for (let i = 0; i <= before.length; i++){
//         chr += before.pop();
//         chgBefore = chr + before.join('');
//         if (chgBefore === after.split('').join('')) answer = 1;
//     }
//     return answer;
// }

console.log(solution('olleh', 'hello')); // 1
// console.log(solution('allpe', 'apple')); // 0


// 문자의 구성이 모두 같은지 ?
function solution(before, after) {
    let index = 0;
    after = after.split('');
    for (let i = 0; i < before.length; i++){
        index = after.indexOf(before[i]);
        if (after.includes(before[i])) after.splice(index, 1);
    }
    return after.length === 0 ? 1 : 0;
}