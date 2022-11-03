/*
    - spell : 알파벳이 담겨 있는 배열
    - dic : 단어들이 들어있는 배열 
    spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1
    존재하지 않으면 2를 return.
*/

// 코드 이해해보기
// function solution(spell, dic) {
//     const sort = str => [...str].sort((a, b) => (a < b ? -1 : a !== b ? 1 : 0)).join('');

//     return dic.find(dic => sort(dic) === sort(spell.join(''))) ? 1 : 2;
// }

// console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));