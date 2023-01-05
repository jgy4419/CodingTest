function solution(t, p) {
    var answer = 0;
    t = t.split('');
    p = p.split('');
    let a = '';
    for (let i = 0; i < t.length; i++){
        for (let j = 0; j < p.length; j++){
            a = a + t[i + j]
        }
        if (Number(a) <= Number(p.join(''))) answer++;
        a = '';
    }
    return answer;
}

console.log(solution2('3141592', "271")); // result => 2
// console.log(solution2('500220839878', "7")); // result => 8
// console.log(solution2('10203', "15")); // result => 3

// 다른 사람 풀이
function solution2(t, p) {
    var answer = 0;
    let strlen = p.length;
    for(let i = 0; i <= t.length - strlen; i++){
        let checker = t.substr(i, strlen); // 문자열 자르기 ㄷㄷ
        if(p >= checker) answer++;
    }
    return answer;
}