// 인자로 들어가는 타입을 변수 같은 것으로 활용해서 return되는 타입에 연관을 시켜주도록 하기

function helloGeneric<T>(message: T): T {
    return message;
}

// T라는 함수를 변수처럼 사용이 가능하다.
/* 
    Generic이랑 any랑 다른 점 : any는 모든 것을 받아서 모든 것을 주기 때문에 정확하게 들어온 input에 의해서 달라지는 타이필을 할 수 없다.
    Generic을 이용하면 Type으로 된 로직, 연산이 함수 내에서 가능하게 된다. 
*/
console.log(helloGeneric('jgy').length);
console.log(helloGeneric(25));

// Generic Basic
function helloBasic<T, U>(message: T, comment: U): [T, U] {
    return [message, comment];
}

// 사용방법 1 : 타입을 미리 지정.
helloBasic<number, number>(25, 25);
// 사용방법 2 : 값 추론핳기
// helloBasic(36);

// 함수 안에서 Generic Array & Tuple 사용하기
function helloArray<T>(message: T[]): T{
    return message[1];
}
helloArray(["Hello", "World"]);

function handleTuple<T, K>(message: [T, K]): T {
    return message[0];
}
handleTuple(['Hello', "world!"]);
handleTuple(['Hello', 5]);


// Generic Function
// Type Alias에서 제네릭 지정 방법.
type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
    return message;
}

// interface로 제네릭 사용 방법
interface IHelloFunctionGeneric {
    <T>(message: T): T
}

const hellofunction2: IHelloFunctionGeneric = <T>(message: T): T => {
    return message;
}

// Generic Class
class Person<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Person("Mark", 153);
new Person<string, number>('get', 39);


////////////////////////////////////////////////////////////////////////////////////////////////

class Stack<T> {
    private data: T[] = [];

    constructor() { }
    
    push(item: T): void {
        this.data.push(item);
    }
    pop(): T | undefined{
        return this.data.pop();
    }
}

const numberStack = new Stack<number>;
const stringStack = new Stack<string>;

function toPair<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}
toPair<string, number>('s', 1);