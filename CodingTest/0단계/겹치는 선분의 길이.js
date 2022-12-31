// 0부터 count
function solution(lines) {
    var answer = 0;
    let line = [];
    let arr_line = [];
    let obj = {};
    for (let i = 0; i < lines.length; i++){
        for (let j = lines[i][0]; j <= lines[i][1]; j++){
            line.push(j);
        }
        arr_line.push(line);
        line = [];
    }
    for (let i = 0; i < arr_line.length; i++){
        arr_line[i].forEach((t) => obj[t] = (obj[t] || 0) + 1);
    }
    console.log(obj);
    for (let i = 0; i < Object.values(obj).length; i++) {
        if (obj[i] >= 2) answer++;
    }
    return answer-1;
} 
console.log(solution([[0, 1], [2, 5], [3, 9]])); // result => 2
console.log(solution([[-1, 1], [1, 3], [3, 9]])); // result => 0
console.log(solution([[0, 5], [3, 9], [1, 10]])); // result => 8