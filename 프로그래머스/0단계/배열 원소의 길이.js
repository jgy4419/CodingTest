function solution(strlist) {
    var answer = [];
    strlist.forEach(item => {
        answer.push(item.length);
    })
    return answer;
}

console.log(solution(["We", "are", "the", "world!"]));