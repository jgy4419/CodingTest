// 실패했었던 코드
// function solution(s) {
//     let FB = s.replace(/^\s+|\s+$/g,'') 
//     let mdfsearchCdInsNm = FB.replace(/ +/g, " ");
//     let answer = mdfsearchCdInsNm.split(' ');
//     for (let i = 0; i < answer.length; i++){
//         if (!/^-?\d+$/.test(answer[i][0]) || s === undefined) {
//             answer[i] = answer[i][0].toUpperCase() + answer[i].toLowerCase().slice(1);
//         }
//     }
//     return answer.join().replace(/,/g, ' ');
// }

// 성공한 코드
function solution(s) {
    let answer = s.split(' ');
    answer = answer.map(arr => {
        return arr.charAt(0).toUpperCase() + arr.substring(1).toLowerCase();
    });
    return answer.join(' ');
}
console.log(solution("3people unfollowed me "));