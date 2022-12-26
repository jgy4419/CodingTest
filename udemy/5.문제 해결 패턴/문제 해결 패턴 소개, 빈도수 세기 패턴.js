/* 
    < 문제 해결 패턴 소개 >  
    어려운 문제에 어떻게 접근할지?, 면접이든 부수적인 프로젝트를 진행하든 어떻게 더 잘 해결할 수 있는지? 
    - 이 두 가지 단계에 대해 살펴보면서 우선 문제를 해결하기 위한 계획을 수립하기. (코드를 작성하기 전에 새로운 문제에 어떻게 접근할지 고민하는 것은 골치 아픈 문제이다.)
    - 일반적인 문제 해결 패턴을 습득하기. (때때로 유용하게 쓰일 수 있는 몇 가지 일반적인 패턴 살펴보기)
*/

/* 
    < 빈도수 세기 패턴 >
    이 패턴은 공식적인 이름은 아니지만 JS의 객체를 사용해서 다양한 값과 빈도를 수집하는 것이기 때문이다.
    여러 데이터와 입력값이 서로 비슷한 값으로 구성되어 있는지, 서로 간의 아나그램(?)인지, 값이 다른 값에 포함되는지 여부를 비교하거나,
    데이터를 입력값이나 두 개 이상의 빈도 혹은 특정하게 발생하는 빈도와 비교할 때 유용하다. 

    다양한 예시
    - 중첩루프와 관련 있거나 n의 제곱 시간을 사용하는 더 쉬운 해결책과 비교했을 때 n 제곱이라 할 수 있다.
    ex1) 2개의 배열을 허용하는 same이라는 함수를 작성하기. (배열의 모든값이 두 번째 배열에 해당하는 값을 가지면 참을 반환.)
    [1, 2, 3], [4, 1, 9] =>  true
    [1, 2, 3], [1, 9] => false (4가 없음)
    [1, 2, 1], [4, 4, 1] => false (배열 안에 하나는 4가 아니라 1로 들어가야된다.)
*/

// ex1 내가 풀어본 방법 (빈도 카운터 패턴 사용하기 전)
function myFunc(a, b) {
    if (a.length !== b.length) return false;
    b = String(b.join(''));
    // 일단 a배열, b배열 길이가 같지 않으면 false 반환
    // map 함수를 사용해서 a의 제곱인 값이 b에 포함되어 있으면 b배열 제거
    let res = a.map((item, index) => {
        if (b.includes(String(Math.pow(item, 2)))) {
            b = b.replace(String(Math.pow(item, 2)), '');
        }
        return b.length;
    })
    // b 배열의 마지막 인덱스 값이 0이면 true 아니면 false
    return res[res.length - 1] === 0 ? true : false;
}

// console.log(myFunc([1, 2, 3], [4, 1, 9])); // result => true
// console.log(myFunc([1, 2, 3], [1, 9])); // result => false
// console.log(myFunc([1, 2, 3], [4, 4, 1])); // result => false

// ex1 중첩루프를 이용한 문제풀이
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++){
        // 제곱한 값이 arr2에 있는지 확인 없으면 -1를 반환
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) { // -1 반환하면 false를 return 한다.
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

/* 
    바로 위 문제풀이는 O(n^2), 즉, 제곱 시간이 사용되기 때문에 순진한 접근법이라 불린다.
    indexOf의 기능은 전체 배열을 반복하거나 중첩된 루프인 전체 배열을 잠재적으로 반복하는 것이다.
    따라서 n이 배열의 길이를 늘리면 이 값이 이와 같이 증가하여 2차 관계로 중첩된다. (가능하면 중첩된 루프는 시도하지 않는 게 좋다..)
*/


/* 
    첫 번째 배열에 루프를 적용해 두 번째 배열의 하위 루프에서 각 값을 확인하는 대신 각 배열에 한 번씩 개별적으로 루프를 적용할 수 있다. (아래코드 참고)
    - 두 개의 루프가 두 개의 중첩된 루프보다 훨씬 낫다는 점을 염두하기. (시간복잡도 2n이 되기 때문)
*/
// ex1 refactored 아래 코드는 시간 복잡도가 O(n)이 된다. (배열이 3개 있으므로 O(3n))
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    // 두 객체를 사용해서 각 배열의 개별 값의 빈도를 개수하도록 하기
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        // arr1의 각 val 마다 frequencyCounter에 1을 더하거나 이미 포함되어져 있으면 1로 초기화 시켜준다.
        // 인자로 받은 배열이 몇 개씩 있는지 카운트 해준다.
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        // frequenctCounter각 값을 ** 2 한 값이 frequencyCounter2에 포함이 되어져 있는지 확인
        if (!(key ** 2 in frequencyCounter2)) {
            // 포함되어져 있지 않으면 false 반환
            return false;
        }
        if (frequencyCounter2 [key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

// console.log(same([1, 2, 3], [4, 1, 9])); // result => true
// console.log(same([1, 2, 3], [1, 9])); // result => false
// console.log(same([1, 2, 3], [4, 4, 1])); // result => false

/* 
    빈도 카운트 정리
    - 보통 객체를 사용한다. 객체를 사용하여 프로파일을 구성하는 것은 배열이나 문자열의 내용을 분석하는 방법으로 보통 배열이나 문자열과 같은 선형 구조를 구성하는 것이다.
        그러면 해당 분석을 문자열이나 배열에서 생성된 다른 객체의 형태와 신속하게 비교할 수 있다.
    - 따라서 두 개의 배열을 객체로 세분화하여 각 배열의 요소들을 분류한 다음 각 배열을 비교할 수 있다. 이런 식으로 코드를 크게 향상시킬 수 있다.
*/

/* 
    < 도전 과제 Frequency Counter - validAnagram >
    두 개의 문자열을 취하면 두 문자열이 서로의 anagram(철자 바꾸기)이면 참이 반환된다.
    즉, 두 개의 문자열과 두 개의 항목이 있는 알맞는 사용 사례
    - 빈도 카운트를 사용해서 풀어보기
    - 각각의 객체를 생성해 작업을 수행하면 문자열들 중 한 문자열의 각 문자가 나타나는 횟수를 확인할 수 있다.
    - 모든 입력값이 한 단어라고 가정하기 (공백, 마침표, 구두점, 숫자를 고려하지 x) + 모두 소문자로 간주
*/

function validAnagram(str1, str2) {
    if (str1 === '' && str2 === '') return true;
    if (str1.length !== str2.length) return false;
    let chg_str1 = {};
    let chg_str2 = {};  
    for (let val of str1) {
        chg_str1[val] = (chg_str1[val] || 0) + 1;
    }
    for (let val of str2) {
        chg_str2[val] = (chg_str2[val] || 0) + 1;
    }
    chg_str1 = Object.entries(chg_str1).sort();
    chg_str2 = Object.entries(chg_str2).sort();
    for (let i = 0; i < chg_str1.length; i++) {
        if (chg_str1[i][1] !== chg_str2[i][1] || chg_str1[i][0] !== chg_str2[i][0]) return false;
    }
    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true