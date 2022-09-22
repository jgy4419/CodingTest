function solution(s) {
    let numTypeChange = [];
    s = s.split(' ');
    for (let i = 0; i < s.length; i++){
        numTypeChange.push(parseInt(s[i]));
    }
    let max = Math.max.apply(null, numTypeChange);
    let min = Math.min.apply(null, numTypeChange);
    
    return String(min) + ' ' +  String(max);
}

// 다름 사람 풀이
function solution2(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}

console.log(solution("1, 2, 3, 4"));