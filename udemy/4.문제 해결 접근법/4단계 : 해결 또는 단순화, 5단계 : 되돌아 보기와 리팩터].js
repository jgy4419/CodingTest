/* 
    < 4단계 : 해결 또는 단순화 >
    문제를 해결할 수 있다면 해결하고, 해결할 수 없다면 더 단순한 문제를 해결하는 것이다. (해결할 대상을 아예 바꿔서 1 더하기 1 같은 문제 고르라는 것은 x)    
    정리하면 시간이 많이 소요되는 부분에 많은 시간이 소요될 것 같은 부분은 일단 넘기라는 소리이다.

    단순화
    - 수행할 작업에서 혼란에 빠트리는 가장 어려운 부분을 찾게 되면 잠깐 어려운 부분을 무시하고 단순한 해결책을 작성한 다음
        다시 어려운 부분을 가능하면 다시 통합시키는 것.
    - 위의 과정을 지나면 보통 어려웠던 부분이 어떻게 작동되는지 이해하게 된다.
        

*/

// ex) 3단계에서 작성한 주석을 바탕으로 문자열을 취하고 문자열의 각 문자의 개수를 반환하는 함수를 작성하는 예시
function charCount(str) {
    let result = {};
    for (let i = 0; i < str.length; i++){
        // char = str(i) 라는 변수를 만들어서 i 문자열을 여기저기 입력하지 않아도 되도록 해주기
        var char = str[i];
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result; 
}

console.log(charCount('Yout PIN number is 1234!'));

/* 
    < 5단계 : 되돌아 보기와 리팩터 (리팩토링) >
    더 향상된 개발자가 되는데 있어 가장 중요한 단계이다. 문제를 풀면서 얻은 해결책이 좋든 나쁘든 되돌아보고 미비한 부분을 다시 정리해야된다.

    각 구성요스를 한 줄씩 살펴보면서 마음에 들지 않는 부분이나, 코드의 형태, 해석 방법, 얼마나 이해하기 쉬운지에 대해 이야기 하라는 의미이다.
    
    대부분의 사람들이 중요하게 여기는 것은 분명 코드를 볼 때의 효율성이다. 그러나 효율성과 가독성이라는 두 기둥 사이에 균형을 맞춰야 할 필요가 있다.
    
    또한 면접 상황에서 이에 대한 질문을 자신에게 하는 것도 중요하다.
    - 결과를 확인 할 수 있는지?
    - 결과를 다른 방식으로 도출할 수 있는지? (다양한 해결책이 있기 때문)
    - 한눈에 보고 이해할 수 있는지?
    - 해결책이 얼마나 직관적인지?, 작성한 코드를 종이나 화이트보드에서 보더라도 이해할 수 있는지?
    - 해결책의 성능을 향상시킬 수 있는지?
    - 어떻게 더 나은 성능으로 이끌어낼 수 있는지? (주로 시간 복잡도, 공간 복잡도로 분석한다.)
    - 다른 사람들이 이 문제를 어떻게 해결하는지?
*/

// ex) 위에 4단계에서 작성한 코드를 리팩토링하기
// 리팩토링 이전 코드
function charCount(str) {
    let result = {};
    for (let i = 0; i < str.length; i++){
        // char = str(i) 라는 변수를 만들어서 i 문자열을 여기저기 입력하지 않아도 되도록 해주기
        var char = str[i];
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result; 
}

console.log(charCount('Yout PIN number is 1234!')); 

// 리팩토링 이후 코드 
function charCount2(str) {
    let result = {};
    for(let char of str){
        // 대문자를 -> 소문자로 변환
        char = char.toLowerCase();
        // 밑줄, 대시, 마침표, 쉼표 등을 제거하고 문자와 숫자에 대해서만 소문자로 바꾼 다음 각 문자를 검사한다. 
        if (/[a-z0-9]/.test(char)) {
            // if (result[char] > 0) {
            //     result[char]++;
            // } else {
            //     result[char] = 1;
            // }   

            // 아래처럼 변경 가능. 
            result[char] = ++result[char] || 1; // 값이 이미 있으면 추가하고 없으면 값을 1로 설정.
        }
    }
    return result; 
}

console.log(charCount('Yout PIN number is 1234!'));
console.log(charCount2('Yout PIN number is 1234!'));

// ex) 정규표현식을 쓰지않고, 함수를 분리해서 리팩토리 하기 (함수 분리 작업은 가독성이 더 좋을 수도 있다.)

function charCount3(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;   
        }
    }
    return obj;
}

// 정규표현식 보다 문자 코드를 사용하는 것이 더 효율적일 수도 있다.
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numberic (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false
    } return true;        
}

/* 
    위의 리팩토링에 딱히 피드백이 없을 수도 있지만 다른 사람들이 어떤 식으로 작업을 수행하는지 내가 어떻게 개선할 수 있는지,
    어디서 스타일에 변화를 줄 수 있는지를 스스로에게 질문을 던지며 진행
*/