function solution(str1, str2) {
    let answer = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str2.includes(str1[i])) answer++;
    }
    return answer;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));