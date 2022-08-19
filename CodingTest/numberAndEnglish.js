/* 
    숫자 문자열과 영단어 문제

    숫자    영단어
    0	=> zero
    1	=> one
    2	=> two
    3	=> three
    4	=> four
    5	=> five
    6	=> six
    7	=> seven
    8	=> eight
    9	=> nine

    조건
    - 1 <= s 의 길어 <= 50
    - s가 'zero' 또는 "0"으로 시작하는 경우는 주어지지 않는다.
    - return 값이 1 이상 2,000,000,000 (20억) 이하의 정수가 되는 올바른 입력만 s로 주어진다.
*/
function solution(s) {
    let answer = [];
    if (s.length <= 50 && s.length >= 1) {
        if (s[0] === 'z' || s[0] === '0') {
            answer = s;
            return answer;
        }
        let numberChanger = [/zero/gi, /one/gi, /two/gi, /three/gi, /four/gi, /five/gi, /six/gi, /seven/gi, /eight/gi, /nine/gi];
        for (let i = 0; i < numberChanger.length; i++){
            s = s.replace(numberChanger[i], i);
        }
        answer = s;
        if (Number(answer) <= 2000000000) {
            return Number(answer);   
        }
    }
}

// 이렇게 해도 정답..
function solution(s) {
    let answer = [];
    let numberChanger = [/zero/gi, /one/gi, /two/gi, /three/gi, /four/gi, /five/gi, /six/gi, /seven/gi, /eight/gi, /nine/gi];
    for (let i = 0; i < numberChanger.length; i++){
        s = s.replace(numberChanger[i], i);
    }
    answer = s;
    return Number(answer);
}
console.log(solution("one3zero4one"));