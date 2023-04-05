/* 
    1. 알파벳이 2개 붙어 있는 짝을 찾는다.
    2. 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙인다.
     - 이 과정을 반보개 문자열을 모두 제가한다면 짝지어 제거하기가 종료된다. 
     - 문자얄 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성.
     - 성공적으로 수행할 수 있으면 1, 아니면 0 반환.
*/


/* 
    어떠한 배열에 push를 하는데 그 배열의 마지막과 현재 for문의 [i] 값이 같으면 배열에서 pop 아니면 push 하기
*/
function solution(s){
    const stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === stack[stack.length - 1]){
            stack.pop();
        }else stack.push(s[i]);
    }
    if(stack.length === 0) return 1
    return 0;
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0