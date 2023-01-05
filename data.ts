/* 
    Unknown : 알 수  없는 타입 
    - Any와 같이 최상위 타입인 Unknown은 알 수 없는 타입을 의미한다.
    - Any와 같이 Unknown에는 어떤 타입의 값도 할당할 수 있지만, Unknown을 다른 타입에는 할당할 수 없다.
    - 일반적으로 Unknown은 타입 선언(as)이나 타입 가드를 필요로 한다.

    null과 undefined 
    - 기본적으로 Null과 Undefined는 모든 타입의 하위 타입으로 할당할 수 있다.
    - 컴파일 옵션 "stricNullChecks": true를 통해 막을 수 있는데 그럴 땐 void 타입에서 undefined를 할당할 수 있다.

    Never : 절대 발생하지 않을 값을 나타낸다. 어떠한 타입도 적용할 수 없다.

    Union(유니언) : 2개 이상의 타입을 허용하는 경우, 이를 유니언이라고 한다. '|' 를 통해 구분하며, '()' 는 선택사항이다.
*/

let a: any = 123;
let u: unknown = 123;

let v1: any = a;
let v2: number = u as number;


interface IUser { 
    name: string,
    age: number
}

interface IMore {
    isValid: boolean,
    test: number
}

let userA: IUser = {
    name: 'JGY',
    age: 25
};

let userB: IUser & IMore = {
    name: 'jgy_98',
    age: 30,
    isValid: true,
    test: 100
}

function someFunc(val: string | number, isNumber: boolean) {
    if (isNumber) {
        (val as number).toFixed(2);
    }
}

/* 
    Non-null 단언 연산자 : !를 사용하는 Non-null 단언 연산자를 통해 피연산자가 Nullish(null이나 undefined) 값이 아님을 단언할 수 있다.
    - 변수나 속성에서 간단하게 사용할 수 있기 때문에 유용하다.
    - 아래 예제에서 fnA 함수를 보면, 매개 변수 x는 함수 내에서 toFixed를 사용하는 숫자 타입으로 처리되지만 null이나 undefined 일 수 있기 때문에 에러가 발생.
    - 타입 선언이나 if 조건문으로 해결할 수도 있지만 마지막 함수와 같이 !를 사용하는 Non-null 단언 연산자를 이용해 간단하게 정리할 수 있다.
    - 특히 컴파일 환경에서 체크하기 어려운 DOM 사용에서 유용하다.
*/

function fnA(x: number | null | undefined) {
    // return x.toFixed(2);
}

function fnD(x: number | null | undefined) {
    if (x) {
        return x.toFixed(2)
    }
}

function fnB(x: number | null | undefined) {
    return (x as number).toFixed(2);
}

function fnC(x: number | null | undefined) {
    return x!.toFixed(2);
}


/* 
    클래스 타입 
    - 인터페이스로 클래스를 정의하는 경우, implement 키워드를 사용한다.
    - 정의한 클래스를 인수로 사용하는 경우 다음과 같은 문제가 발생할 수 있다. 아래 예제에서 인터페이스 ICat은 호출 가능한 구조가 아니다.
    - ICatConstructor 라는 구성 시그니처를 가지는 호출 가능한 인터페이스를 정의하면, 문제없이 동작한다.
*/

interface ICat {
    name: string
}
// 클래스를 인자로 사용할 수도 있기 때문에 아래 인터페이스 추가하지
interface ICatConstructor {
    new (name: string): ICat
}

class Cat implements ICat {
    constructor(public name: string) {}    
}

function makeKitten(c: ICatConstructor, n: string) {
    return new c(n);
}

const kitten = makeKitten(Cat, 'Lucy');
console.log(kitten);

/* 
    인덱싱 가능 타입 : 우리는 인터페이스를 통해 특정 속성(메소드 등)의 타입을 정의할 순 있지만, 수많은 속성을 가지거나 단언할 수 없는 임의의
        속성이 포함되는 구조에서는 기존의 방식만으론 한계가 있다. 이런 상황엣어 유용한 인덱스 시그니처를 살펴보자.
    - arr[2] 와 같이 '숫자'로 인덱싱하거나 obj['name']과 같이 '문자'로 인덱싱하는, 인덱싱 가능 타입들이 있다.
    - 인덱스 시그니처는 인덱싱에 사용할 인덱서의 이름과 타입 그리고 인덱싱 결과의 반환 값을 지정한다.
    - 인덱서 타입은 string과, number만 지정할 수 있다.
    - 아래의 예제들처럼 인터페잉스에 정의 되지 않은 속성들을 사용할 때 유용하다.
*/

// ex) 숫자로 인덱싱
interface IItem {
    [itemIndex: number]: string | boolean | number[]; // Index signature
}

let item: IItem = ['a', [2, 5, 1], true, 'b', 'c', false, [100, 30]];
console.log(item[0]); // a
console.log(item[1]); // [2, 5, 1]

// ex) 문자로 인덱싱
interface IUser2 {
    [userProp: string]: string | number | boolean;
}
let user: IUser2 = {
    name: 'Neo',
    email: 'jgy_98@naver.com',
    isValid: true,
    age: 25
}
// 해당 속성이 인덱스 시그니처에 정의된 반환 값을 가져야 함에 주의해야된다.

/* 
    keyof : keyof를 사용하면 속성 이름을 타입으로 사용할 수 있다. (42%)
*/




/* 
    TypeScript 도약하기
    1. TS 역할
    2. TS 타입시스템 Deep Dive
    3. 더 나은 타이핑을 위한 액션 아이템

    < TS 역할 >
    - 런타임에서 발생할 오류를 컴파일 단계에서 표시.
    - 의도와 다르게 작성된 코드에 에러를 표시한다.(런타임 오류를 발생하기 전에 발생)
    - 자주 보이는 에러 Type A is not assignable to Type B => 타입 A는 타입 B에 할당될 수 없다는 뜻.

    구조적 서브 타이핑에 의한 타입 에러 -> Type A가 Type B의 Sub type이 아니다.
    잉여 속성 체크에 의한 타입 에러 -> Type A에 잉여 속성이 있다.

    < TS의 타입시스템 딥다이브 >
    * 구조적 서브 타이핑 (structural sub typing) : 타입 호환성이라는 것은 구조적 서브 타이핑에 기반하고 있다는 내용이 있다.
        - Structural Subtyping === property-based Typing (속성 기반 타이핑)
            1) 타입 이름이 달라도 같은 타입으로 인식될 수 있다.
            2) 같은 속성을 가지기만 하면 같은 타입으로 인식될 수 있다.
        - 타입을 집합 관점에서 바로보아야 한다.
        - 타입은 곧 할당 가능한 값들의 집합이다.
        - 모든 타입 중 가장 상위 집합의 타입은? => 모든 타입을 받을 수 있는 unknown 타입이다.
    * 잉여 속성 체크 (excess property check) -> 구조적 서브 타이핑을 거스른다.
        - 정의한 속성 이외에 추가적인(잉여) 속성이 있는지 체크하고, 있다면 에러를 띄운다.
        - 속성 이름의 오타 같은 실수를 잡아준다. ex) 타입 지정할 때나, onClick을 onclick으로 입력했을 때
        
    어떤 경우에 구조적 서브타이핑이 적용되지 않고, 잉여속성체크를 수행하는가?
    - '객체 리터럴'을 사용할 때. 
    * any (구조적 서브 타이핑을 거스른다.) 
        - any는 모든 타입에 할당 가능하다. (any는 최하위 집합이다.)
        - 모든 타입이 any에 할당 가능하다. (any는 최상위 집합이다.)
        - 위 두 내용이 충돌한다. 그 말은 즉, any는 기본적으로 타입 시스템을 따르지 않는다.
        - 그래서 우리는 어떤 타입이 들어올지 모를 경우, 모든 타입이 들어올 수 있는 경우 any가 아닌 unknown을 사용하는 것이 적절하다.

    < 더 나은 타이핑을 위한 액션 아이템 >
    * 함수의 반환타입을 명시하여 의도를 표한하기
        - 타입 추론에 의존하지 않고, 의도를 타입으로 명시한다.
    * 구별된 유니온 사용하기
        - 유니온의 인터페이스 보다는 인터페이스의 유니온을 사용하기 (영상 다시 봐보기)
    * any 잘 쓰는 방법
        - 함수 안으로 any를 감추고, 반환타입만 잘 명시해두면 any가 전파되지 않는다. (영상 다시보기)
*/