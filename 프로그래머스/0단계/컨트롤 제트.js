function solution(s) {
    var answer = 0;
    const str = s.split(' ');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'Z') {
            answer -= Number(str[i - 1]);
            continue;
        }
        answer += Number(str[i]);
    }
    return answer;
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));