function solution(my_string, k) {
    var answer = '';
    for(let i = 0; i < k; i++) {
        answer += my_string;
    }
    return answer;
}

console.log(solution("string", 3));
console.log(solution("love", 10));