// 정수에 대하여 오름차순 정렬하는 코드의 예시 
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

function compare(a, b) {
    if(a < b) return -1;
    else if(a > b) return 1;
    else return 0;
}

arr.sort(compare);

console.log(arr);

// a가 b보다 작을 때, 반환 값이 음수가 되어 a가 앞에 위치.
let arr2 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare2(a, b){
    return a - b;
}

arr2.sort(compare2);

console.log(arr2);

// 비교 함수를 한 줄에 정의하여 곧 바로 적용 가능.
let arr3 = [1, 8, 5, 9, 21, 3, 7, 2, 15];

arr3.sort(function(a, b) {
    return a - b;
});

console.log(arr3);

// 정수에 대한 내림차순 정렬 예시
// a가 b보다 클 때, 반환 값이 음수가 되어 a가 앞에 위치한다.
let arr4 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare4(a, b) {
    return b - a;
}

arr4.sort(compare4);

console.log(arr4);

// 문자열에 대한 오름차순 예시
/* 
    - 별도로 비교 함수를 사용하지 않으면, 유니코드 순으로 정렬된다.
    - 따라서 수를 적용하지 않음으로써, 간단히 문자열 정렬을 수행할 수 있다.
*/
let str = [
    'fineapple',
    'banana',
    'durian',
    'apple',
    'carrot'
];

str.sort();
console.log(str);

// 문자열에 대하여 내림차순 정렬
function compare5(a, b){
    if(a > b)  return -1;
    else if(a < b) return 1;
    else return 0;
}

str.sort(compare5);
console.log(str);

// 대소문자를 구분하지 않도록 toUpperCase() 메서드를 사용할 수 있다.
let str2 = [
    'fineapple',
    'Banana',
    'durian',
    'Apple',
    'carrot'
];

function compare6 (a, b){
    let upperCaseA = a.toUpperCase();
    let upperCaseB = b.toUpperCase();
    if(upperCaseA < upperCaseB) return -1;
    else if(upperCaseA > upperCaseB) return 1;
    else return 0;
}

str2.sort(compare6);
console.log(str2);

// 객체에 대해 원하는 기준으로 오름차순 정렬 예시
let obj = [
    {name: '홍길동', score: 90},
    {name: '김철수', score: 85},
    {name: '박영희', score: 97}
];

function compare7(a, b) {
    return b.score - a.score;
}

obj.sort(compare7);
console.log(obj);