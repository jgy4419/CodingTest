// 가위는 2 바위는 0 보는 5
// 가위 바위 보 순서대로 냄 2 -> 0 -> 5
function solution(req) {
    res = req.split('');
    var answer = '';
    for (let i = 0; i < req.length; i++){
        if (req[i] === '0') answer += '5';
        else if (req[i] === '2') answer += '0';
        else answer += '2';
    }
    return String(answer);
}

console.log(solution('2'));
console.log(solution('205'));