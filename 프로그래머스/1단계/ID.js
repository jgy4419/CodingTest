/* 
    규칙
    - 아이디 길이 (3자 이상 15자 이하)
    - 아이디는 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표 문자만 사용 가능.
    - 단, 마침표는 처음과 끝에 사용할 수 없고, 연속으로 사용 x.

    규칙 검사 단계
        1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.

        2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.

        3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.

        4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.

        5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.

        6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
            만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.

        7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
*/

// 내 풀이
function solution(new_id) {
    // 1단계
    new_id = new_id.toLowerCase();

    // 2단계 
    var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
    let len = new_id.length;
    let answer = new_id.replace(reg, '');

    let currentJum, previousJum;
    for (let i = 0; i < answer.length; i++){
        // 3단계
        for (let j = 0; j < answer.length; j++){
            answer = answer.replace('..', '.');
        }
    }
    len = answer.length;
    // 4단계
    if (answer[0] === '.') {
        answer = answer.substr(1);
    } else if (answer[len - 1] === '.') {
        answer = answer.slice(0, -1);
    }
    // 5단계
    if (answer === '') {
        answer = 'a'
    }
    // 6단계
    if (answer.length >= 16) {
        console.log('!!');
        answer = answer.substr(0, 15);
        len = answer.length;
    }
    // 없애기..
    if (answer[len - 1] === '.') {
        answer = answer.slice(0, -1);
    }
    // 7단계
    if (answer.length <= 2) {
        let i = answer.length;
        let arr = [...answer];
        while (i < 3) {
            arr.push(answer[answer.length - 1]);
            i++;
        }
        answer = String(arr).replace(',', '');
        answer = answer.replace(',', '');
    }


    return answer;
}

console.log(solution('=.='));

// test.replace('..', '.');





// 고인물 풀이..
// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1
//         .replace(/[^\w-_.]/g, '') // 2
//         .replace(/\.+/g, '.') // 3
//         .replace(/^\.|\.$/g, '') // 4
//         .replace(/^$/, 'a') // 5
//         .slice(0, 15).replace(/\.$/, ''); // 6
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }


