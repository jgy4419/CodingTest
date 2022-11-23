/* 
    정규표현식의 생성
    '//' 는 시작과 종료를 의미하고, '//' 사이의 text는 패턴을 뜻한다. 
*/

/* 
    exec 메서드는 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정해도 첫 번째 매칭 결과만 반환한다.
    i : 대소문자를 구별하지 않고 패턴을 검색한다.
    g : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
    m : 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.
*/

// const target = 'Is this all there is?';
// const regExp = /is/g;

// console.log(target.match(regExp));
// https://velog.io/@jgy4419/%EC%97%AC%EA%B8%B0%EB%B6%80%ED%84%B0-%ED%95%98%EA%B8%B04%EC%9B%94-4%EC%9D%BC-%EB%AA%A8%EB%8D%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B3%B5%EB%B6%80-%EC%9D%BC%EA%B8%B0
// 위 url 이어서 공부하기

const target = 'Is this all there Is?';
const regExp = /is/;

console.log(regExp.test(target)); // target과 정규표현식이 매치하는지 테스트
console.log(target.match(regExp)); // target과 정규표현식의 매칭 결과를 구한다.

const target2 = 'A AA B BB Aa Bb AAA';
const regExp2 = /A{1,2}/g; // A가 1개나 2개인 것
const regExp3 = /A{2,}/g; // A가 2개 이상인 것 모두 다.

console.log(target2.match(regExp2));
console.log(target2.match(regExp3));

const target3 = 'color colour';
const regExp4 = /colou?r/g; // ['color', 'colour]

console.log(target3.match(regExp4));

// 범위 지정
const target4 = 'A AA B BB Aa Bb ZZ';

const regExp5 = /[A-Z]+/g;

console.log(target4.match(regExp5));

const target5 = 'https://poiemaweb.com';
const regExp6 = /^http/; // 'http'로 시작하는지 검사

console.log(regExp6.test(target5));

const target6 = 'https://poiemaweb.com';
const regExp7 = /com$/; // 'com'으로 끝나는지 검사

console.log(regExp7.test(target6));