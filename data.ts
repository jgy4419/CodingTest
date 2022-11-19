interface IUser {
    name: string,
    age: number
}


let users: [number, string, boolean][];

users = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lew', true]];

// Tuple은 정해진 타입의 고정된 길이 배열을 표현하지만, 이는 할당에 국한된다.
// .push()니 .splice() 등을 통해 값을 넣는 행위는 막을 수 없다.

let tuple: [string, number];
tuple = ['a', 1];
tuple = ['b', 2];

// Enum
enum Week{
    Sum,
    Mon = 23,
    Tue,
    Wed,
    Thu
}

console.log(Week.Mon);
console.log(Week.Tue);


let userA: IUser = {
    name: 'jgy',
    age: 25
}

// Never : 절대 발생하지 않을 값.
function error(message: string): never {
    throw new Error(message);
}

// Union |
let union: (string | number); 

// 인터섹션 & 
interface IUser {
    name: string,
    age: number
}
interface IValidation { 
    isValid: boolean
}

const neo: IUser & IValidation = {
    name: 'Neo',
    age: 85,
    isValid: true
};

/* 
    타입 선언(As) : 타입스크립트가 타입 추론을 통해 판단할 수 있는 타입의 범주를 넘는 경우, 더 이상 추론하지 않도록 지시 가능
    이를 '타입 선언'이라고 하며, 이는 프로그래머가 타입스크립트 보다 타입에 대해 더 잘 이해하고 있는 상황을 의미한다.
*/

function someFunc(val: string | numbre, isNumber: boolean) {
    if (isNumber) {
        (val as number).toFixed(2);
    }
}

/* 
    Non-null 단언 선언자
    - !를 사용하는 Non-null 단언 연산자를 통해 피연산자가 Nullish(null 이나 undefined) 값이 아님을
    단언할 수 있는데, 변수나 속성에서 간단하게 사용할 수 있기 때문에 유용하다.
    - 특히 컴파일 환경에서 체크하기 어려운 DOM 사용에서 유용하다. 물론 일반적인 타입 선언을 사용할 수도 있다.
*/

// function fnA(x: number | null | undefined) {
//     return x?.toFixed(2);
// }

function fnE(x: number | null | undefined) {
    return x!.toFixed(2);
}

class Cat {
    constructor(private name: string) { }
    getName = () => {
        console.log(this.name);
    }
}

const cat = new Cat('Lucy');
cat.getName();

// overload
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

add('hello ', 'world!');
add(1, 2);

interface IUser {
    name: string,
    age: number,
    getData(x: string): string[];
    getData(x: number): string;
}

let user: IUser = {
    name: 'Neo',
    age: 36,
    getData: (data: any) => {
        if (typeof data === 'string') {
            return data.split('');
        } else {
            return data.tpoString();
        }
    }
}

class Caat {
    public readonly name: string;

}

// Abstract Class
abstract class Animal {
    abstract name: string;
    abstract getName(): string
    abstract getName2(): string
}

class Ab_Cat extends Animal {
    constructor(public name: string) {
        super();
    }
    getName() {
        return this.name;
    }
    getName2() {
        return this.name;
    }
}

// 63%