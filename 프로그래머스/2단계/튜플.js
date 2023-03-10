/* 
    튜플 : 셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음이다.
    - 중복된 원소가 있을 수 있다. ex) 2, 3, 1, 2
    - 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플이다. ex) (1, 2, 3) !== (1, 3, 2)
    - 튜플의 원소 개수는 유한하다.
*/

function solution(s) {
    s = JSON.parse(s.replace(/{/gi, '[').replace(/}/gi, ']'));
    s.sort((a, b) => a.length - b.length);
    let answer = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i].length === answer.length + 1){
            for(let j = 0; j < s[i].length; j++) {
                if(!answer.includes(s[i][j])) answer.push(s[i][j]);
            }
        }
    }
    return answer;
}

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // result => [2, 1, 3, 4]