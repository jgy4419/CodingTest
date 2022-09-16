// 단어 기준으로 
function solution(s) {
    let res = s.split(' ');
    let answer = [];
    for (let i = 0; i < res.length; i++){
        let str = '';
        for (let j = 0; j < res[i].length; j++){
            if (j % 2 === 0) {
                str += res[i][j].toUpperCase();
                continue;
            }
            str += res[i][j].toLowerCase();
        }
        answer.push(str);
    }
    return answer.join().replace(/,/g, ' ');
}
console.log(solution("try hello world"));
