/* 
    n : 페인트가 필해진 길이
    m : 벽에 페인트를 칠하는 롤러의 길이
*/

function solution(n, m, section) {
    var answer = 0;
    let painting = [];
    for(let i = 1; i <= n; i++){
        if(section.includes(i)) painting.push(false);
        else painting.push(true);
    }

    for(let i = 0; i <= n; i++) {
        if(painting[i] === false){
            console.log(painting[i]);
            for(let j = i; j < i + m; j++){
                if(painting[j] === false) {
                    painting[j] = true;
                }
            }
            answer++;
        }
    }
    return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));