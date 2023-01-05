// 가운데 글자 가져오기
function solution(s) {
    var answer = [];
    let num = s.length / 2;
    s.length % 2 === 1 ?  answer.push(s[Math.round(s.length / 2) - 1]) : answer.push(s[Math.round(num) - 1], s[Math.round(num)]);
    return answer.join().replace(',', '');
}