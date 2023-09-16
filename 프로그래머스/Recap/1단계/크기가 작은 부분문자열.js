function solution(t, p) {
    let answer = 0;
    for(let i = 0; i <= t.length - p.length; i++) {
        let value = t.slice(i, i + p.length);
        // + 넣어주면 number 타입으로 변경시켜줌. 
        if(+p >= +value) answer++;
    }
    return answer;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));