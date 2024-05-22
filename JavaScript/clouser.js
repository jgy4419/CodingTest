/* 
    외부함수보다 내부함수가 더 오래 유지되는 경우,
    외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는데
    이러한 함수를 클로저라 한다.
*/

function outerFunc() {
    let x = 10;
    let innerFunc = function() {
        console.log(x);
    }
    innerFunc();
}

outerFunc(); // 10

/* 
    - 외부 함수가 이미 반환되었어도 외부함수 내의 변수는 이를 필요로 하는 함수가 
      하나 이상 존재하는 경우 계속 유지된다.
    - 내부함수가 외부함수에 있는 변수의 복사본이 아니라 실제 변수에 접근한다는 것에 주의.
*/

// 어휘적 환경
function makeAdder(x) { // 3
    return function(y) { // 2
        console.log("x,y", x, y);
        return x + y;
    }
}

const add3 = makeAdder(3); // 3은 makeAdder 함수의 x 인자에 들어감.
console.log(add3(2)); // 2는 익명함수의 y의 인자에 들어감

// add3 함수가 생성된 이후에도 상위 함수인 makeAdder 함수의 x에 접근이 가능하다.

const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add3(1)); // 4

// add10이랑 add3은 서로 다른 환경을 가지고 있기 때문에 서로 영향을 끼치지 않는다.

// Count 기능 예시
function makeCounter(){
    let num = 0;

    return function() {
        return num++;
    }
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

/* 
    - 위 makeCounter 함수의 num 변수의 값을 갑자기 90 or 100 으로 변경 가능한지?
      (절대 불가능하다!)
    - 값을 변경시키기 위해서는 오로지 makeCounter() 함수를 실행시켜서 +1씩 증가시켜주는 방법 밖에 없다.
      (은닉화 성공)
*/

const order = (food) => {
    console.log(food + "을(를) 주문.");
    return function (drink) {
        return drink + "을(를) 추가 주문.";
    }
}

const orderBurger = order("햄버거");
const orderPizza = order("피자");

console.log(orderBurger("콜라"));
console.log(orderPizza("사이다."));