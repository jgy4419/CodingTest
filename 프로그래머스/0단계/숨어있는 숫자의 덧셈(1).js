function solution(my_string) {
    var answer = 0;
    for (let i = 0; i < my_string.length; i++){
        !isNaN(Number(my_string[i]))
            ? answer += Number(my_string[i])
            : answer += 0;
    }
    return answer;
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123"));