/*
    // 다시 풀어보기
    - 문자열 s의 각 알파벳을 index 만큼 뒤의 알파벳으로 바꿈.
    = index 민큼의 뒤의 알파벳을 z를 넘어갈 경우 다시 a로 돌아감.
    = skip에 있는 알파벳은 제외하고 건너뜀.
*/

function solution(s, skip, index) {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    skip.split("").map((e) => alphabet.delete(e));
    const alphabetExceptSkipThird = Array.from(alphabet).join("").repeat(3);
    return s.split('').map(e =>
        alphabetExceptSkipThird[alphabetExceptSkipThird.indexOf(e) + index]
    ).join('');
}