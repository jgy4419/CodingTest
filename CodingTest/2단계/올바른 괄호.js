function solution2(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++){
        count += s[i] === '(' ? 1 : -1;
        if (count < 0) return false;
    }
    return count === 0 ? true : false
}

console.log(solution('())('));


function solution(s) {
    if (s[0] === ')') return false;
    if (s[s.length - 1] === '(') return false;

    let count = 0;

    for (let i = 0; i < s.length; i++){
        if (s[i] === '(') count++;
        if (!count && s[i] === ')') {
            
            return false;
        }
        if (s[i] === ')') count--;
    }
    return !count;
}