function solution(s) {
    var answer = [];
    let copyStr = [];
    let index = 0;
    s = s.split('');
    for (let i = 0; i < s.length; i++){
        if (!copyStr.includes(s[i])) {
            copyStr.push(s[i]);
            answer.push(-1);
        } else {
            index = i + 1;
            let copyStrIndex = 0;
            copyStr.filter((str, idx, dx) => {
                if (str === s[i]) {
                    copyStrIndex = idx;
                }
            })
            copyStr.push(s[i]);
            answer.push(index - (copyStrIndex + 1));
        }

    }
    return answer;
}

console.log(solution("foobar"));

// 다른 사람 풀이
function solution(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++){
        let check = -1;
        for (let j = i - 1; j >= 0; j--){
            if (s[j] === s[i]) {
                console.log(s[j], s[i]);
                check = i - j;
                break;
            }
        }
        answer.push(check);
    }
    return answer;
}