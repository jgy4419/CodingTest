// 내 풀이
// function solution(array) {
//     var answer = 0;
//     array = array.join('');
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === '7') answer++;
//     }
//     return answer;
// }

// 다른사람 풀이
function solution(array) {
    console.log(array.join('').split('7'));
    return array.join('').split('7').length-1;
}
console.log(solution([7, 77, 17]));