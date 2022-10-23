// /* 
//     (강의 다시 들어보기!!!)
//     타입 호환성 : 어떤 타입을 다른 타입으로 취급해도 되는지 판단하는 것을 의미.
//     정적 타입 언어의 가장 중요한 역할은 타입 호환성을 통해 컴파일 타입에 호환되지 않는 타입을 찾아내는 것.
// */


// /* 
//     시작하기 (Starting out) : TypeScript의 구조적 타입 시스템의 기본 규칙은 y가 최소한 x와
//     동일한 멤버를 가지고 있다면 x와 y는 호환된다는 것.
// */
// interface Named{
//     name: string;
// }

// let x: Named;
// // y의 추론된 타입은 {name: string; location: string;} 이다.
// let y = { name: "Alice", location: "Seattle" };
// x = y;

// // y를 x에 할당할 수 있는지 검사하기 위해, 컴파일러는 x의 각 프로퍼티를 검사하여 y에서 상응하는 호환 가능 프로퍼티를 찾는다.
// // 위의 경우 y는 name 이라는 문자열 멤버를 가지고 있어야 된다. 그러므로 할당이 허용.

// function greet(n: Named) {
//     console.log("Hello, " + n.name);
// }

// greet(y); // 성공

// // 위 함수에 넣은 y는 location 프로퍼티를 추가적으로 가져오고 있지만 오류를 발생시키지 않는 점에 유의하다.
// // 호환성을 검사할 때는 오직 대상 타입의 멤버(위의 경우는 Named만 고려된다.)
// // 비교하는 과정은 재귀적으로 각 멤버와 하위-멤버의 타입을 탐색하면서 진행된다.

// /*
//     두 함수 비교(Comparing two functions) : 원시 타입과 객체 타입을 비교하는 것은 비교적 간단하지만,
//     어떤 유형의 함수들이 호환될 수 있는지에 대한 질문은 더 복잡하다. 
// */

// // 매개변수 목록에서만 다른 두 함수의 기본 예제
// let xx = (a: number) => 0;
// let yy = (b: number, s: string) => 0;

// // xx = yy; // 오류 => y는 x에 없는 두 번째 필수적인 매개변수를 다지고 있기 때문에 할당이 허용되지 않아 오류 발생.
// yy = xx; // 성공 => x의 모든 매개변수는 y에 상응하는 호환 가능한 매개변수를 가지므로 할닫ㅇ이 허용.

// // forEach 처럼 콜백함수에는 3가지 매개변수인 배열요소, 인덱스, 모든걸 포함한 배열을 제공하는데, 모든 값을 사용하는 게 필수는 아닌 것 처럼
// // 제공하도록 하는 유용한 부분이다.

// // 타입 시스템은 원본 함수의 반환 타입이 대상 타입의 반환 타입의 하위 타입이 되도록 한다.

// /* 
//     선택적 매개변수와 나머지 매개변수 (Optional Parameters and Rest Parameters) : 함수의 호환성을 비교 ㅅ 선택적 매개변수와 필수 매개벼누를
//     서로 바꿔 사용할 수 있다.

//     원본 타입의 추가 선택적 매개변수는 오류가 아니고, 원본 타입의 해당 매개변수가 없는 대상 타입의 선택적 매개변수도 오류가 아니다.
// */

// // 함수가 나머지 매개변수를 가지고 있다면, 마치 무한한 일련의 선택적 매개변수처럼 처리된다.

// function invokeLater(args: any[], callback: (...args: any[]) => void) {
//     // ... 'args'를 사용해 콜백 호출
// }

// /*
//     오버로드 함수  (Functions with overloads) : 함수에 오버로드가 있는 경우 원본 타입의 각 오버로드는 
//     대상 타입의 호환 가능한 시그니처와 일치해야 된다.

//     이를 통해 원본 함수오 모든 동일한 상황에서 대상 함수를 호출할 수 있다.
//  */

// /* 
//     열거혐 (Enums) : 열거형은 숫자와 호환되며 숫자는 열거형과 호환된다. 다른 열거형 타입의 열거형 값은
//     호환되지 않는 것으로 간주된다.
// */

// // ex)
// enum Status { Ready, Waiting };
// enum Color { Res, Blue, Green };

// let status2 = Status.Ready;
// // status2 = Color.Green; // error

// /* 
//     클래스 (Classes) : 클래스는 정적 타입과 인스턴스 타입이 있다. 클래스 타입의 두 개의 객체를
//     비교할 때, 오직 인스턴스의 멤버만 비교된다. 정적인 멤버와 생성자는 호환성에 영향을 주지 않는다.
// */

// class Animal {
//     feet!: number;
//     constructor(name: string, numFeet: number) {}
// }

// class Size {
//     feet!: number;
//     constructor(numFeet: number) { }
// }

// let aa: Animal;
// let ss: Size;

// aa = ss; // 성공
// ss = aa; // 성공

// /* 
//     제네릭(Generics) : TypeScript는 구조적 타입 시스템이기 때문에, 타입 매개변수는 
//     멤버의 타입의 일부로 사용할 때 결과 타입에만 영향을 준다.
// */

// interface Empty<T>{

// }
// let xxx: Empty<number>;
// let yyy: Empty<string>;

// xxx = yyy; // 성공, y는 x의 구조와 대응하기 때문

// // 위의 코드에서 x와 y는 구조가 타입 인수를 서로 다르게 사용하지 않기 때문에 호환된다.
// // 이 예제에 Empty<T>를 멤버에 추가하여 어떻게 동작하는지 살펴보자.

// interface NotEmpty<T>{
//     data: T;
// }
// let xxxx: NotEmpty<number>;
// let yyyy: NotEmpty<string>;

// // xxxx = yyyy; // 오류, x와 y는 호환되지 않는다.

// // 위 처럼 타입 인수가 지정되지 않은 제ㅔ릭 타입에 관해선, 모든 지정되지 않은 타입 인수를 대신해 any로 지정함으로써 호환성 검사를 한다.
// // 그 결과 생성된 타입은 비-제네릭 경우와 마찬가지로 호환성을 검사한다.

// // ex)
// let identity = function <T>(x: T): T{
//     // ... 
// }

// let reverse = function <U>(y: U): U{
//     // ...
// }

// identity = reverse; // 성공, (x: any) => any는 (y: any) => any와 대응하기 때문