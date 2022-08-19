// https://velog.io/@jgy4419/%EB%B6%80%EB%B6%84-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EC%BB%A4%EB%A7%81Curring-Compose-Pipe 
// 위에 공부하기

// const pow = (num1, num2) => {
//     return Math.pow(num1, num2);
// }
// // 숫자를 음수로 변환
// const negate = (num) => {
//     return num * -1;
// }
// // 숫자에 1을 더함.
// const inc = (num) => {
//     return num + 1;
// }

// // reduceRight() : 누적기에 대해 함수를 적용하고 배열의 각 값(오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야된다.
// const compose = (...fns) => {
//     return (...args) => {
//         return fns.reduceRight(
//             // 입력 받은 fns를 오른쪽 부터 실행.
//             (res, fn) => [fn.call(null, ...res)],
//             args // 초기값으로 받은 파라미터.
//         )[0];
//     }
// };

// // inc(negate(pow(2, 3))) 변경
// const mySpecialFunc = compose(
//     (num) => inc(num),
//     (num) => negate(num),
//     (num1, num2) => pow(num1, num2)
// );
// console.log('func1', mySpecialFunc(2, 4));

// // 조금 더 보기 좋은 코드
// const mySpecialFunc2 = compose(inc, negate, pow);
// console.log('func2', mySpecialFunc2(2, 4)); // 결과는 -15


getPersonName = (person) => person.name;

uppercase = (strValue) => strValue.toUpperCase();

// const pipe = (...functions) => dataToconvert => functions.reduce((acc, fn) => fn(acc), dataToconvert);
const pipe = (...functions) => (value) => {
    return functions.reduce((currentValue, currentFunc) => {
        console.log('currentValue', currentValue);
        console.log('currentFunc', currentFunc);
        return currentFunc(currentValue);
    }, value)
}

console.log(pipe(getPersonName, uppercase)({ name: 'Hong Gil Dong' }));

const compose = (...functions) => dataToConvert => functions.reduceRight((acc, fn) => fn(acc), dataToConvert);