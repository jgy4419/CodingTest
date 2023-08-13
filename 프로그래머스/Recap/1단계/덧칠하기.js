function solution(n, m, section) {
    let answer = 0;
    let painting = [];
    for(let i = 0; i <= n; i++) {
        if(section.includes(i)) painting.push(false);
        else painting.push(true);
    }

    console.log(painting);

    for(let i = 0; i <= n; i++) {
        if(painting[i] === false) {
            for(let j = 0; j < i + m; j++) {
                if(painting[j] === false) painting[j] = true;
            }
            answer++;
        }
    }
    return answer;
}

console.log(solution(8, 4, [2, 3, 6])); // result 2
console.log(solution(5, 4, [1, 3])); // result 1
console.log(solution(4, 1, [1, 2, 3, 4])); // result 1