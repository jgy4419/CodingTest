// 성공한 코드
function solution(s) {
    let answer = s.split(' ');
    answer = answer.map(arr => {
        return arr.charAt(0).toUpperCase() + arr.substring(1).toLowerCase();
    });
    return answer.join(' ');
}
console.log(solution("3people unfollowed me "));