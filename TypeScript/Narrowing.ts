// Narrowing
/* 
    1. && 연산자로 null & undefined 타입 치크하기
    - 타입이 두 개면 만약 a가 undefined 이면 ~ 해주세요. 라고 작성하고 싶을 때
*/
function func1(a: string | undefined) {
    if (a && typeof a === 'string') {
        // a가 undefined가 되면 if 부분이 자동으로 undefined가 된다.
    }
}

/* 
    2. in 키워드와 Object Narrowing 가능.
    - 속성명 in 오브젝트 자료
    - 왼쪽에 있는 속성이 오른쪽에 있는 오브젝트에 들어가 있는지 확인하고 맞으면 true 아니면 false
*/
type Fish = { swim: string };
type Bird = { fly: string };
function func2(animal: Fish | Bird) {
    if ('swim' in animal) {
        animal.swim;
    }
}

/* 
    3. instanceof 연산자로 object narrowing 가능.
    - object 두 개가 비슷하면 부모 class가 누군지 물어봐서 narrowing 가능.
    - 오브젝트 instanceof 부모class
    - instanceof는 해당 오브젝트가 부모가 누군지 검사해주는 코드.
*/
let date = new Date();

type funcType = (x: string) => string;

const cutZero: funcType = (str) => {
    if( q)
}