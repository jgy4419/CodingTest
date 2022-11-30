function solution(s) {
    s = s.split('');
    let str = '';
    var answer = [];
    let count = 0;
    for (let i = 0; i < s.length; i++){
        count = s.filter(str => s[i] === str).length;
        if (count === 1) answer.push(s[i]);
    }
    return answer.sort().join('');
}

console.log(solution("hello")); 