function solution(s) {
    let answer = 0;
    let firstChar = '';
    let cnt1 = 0;
    let cnt2 = 0;
    for (let c of s) {
        if (!firstChar) firstChar = c;
        if (firstChar === c) cnt1++;
        else cnt2++;

        if (cnt1 === cnt2) {
            answer++;
            cnt1 = 0;
            cnt2 = 0;
            firstChar = ''
        }
    }
    if (firstChar) answer++;
    return answer;
}

console.log(solution("aaabbaccccabba"));