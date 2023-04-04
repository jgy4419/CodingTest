/* 
    LZW
    - 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
    - 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 갖는다.
    - w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
    - 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w + c에 해당하는 단어를 사전에 등록한다.
    - 두 번째 단계로 돌아감.
    
    색인번호 A = 1 -> Z = 26
*/

function solution(msg) {
    let alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    let stack = [];
    const answer = [];
    for(let i = 0; i < msg.length; i++) {
        stack.push(msg[i]);
        if(alphabet.includes(stack.join(''))) continue;
        alphabet.push(stack.join(''));
        stack.pop();
        const index = alphabet.indexOf(stack.join('')) + 1;
        answer.push(index);
        stack = [];
        i--;
    }
    const index = alphabet.indexOf(stack.join('')) + 1;
    answer.push(index);
    return answer;
}

console.log(solution('KAKAO')); 
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
console.log(solution('ABABABABABABABAB'));