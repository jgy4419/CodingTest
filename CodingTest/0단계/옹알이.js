function solution(babbling) {
    var answer = 0;
    babbling.forEach(element => {
        if (element.split(/aya|ye|woo|ma/g).join('') === '') {
            answer++;
        }
    })
    return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));