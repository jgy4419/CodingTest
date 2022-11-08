function isNumber(val: string | number): val is number {
    return typeof val === 'number';
}

function someFunc(val: string | number) {
    if (isNumber(val)) {
        val.toFixed(2);
        isNaN(val);
    }
}

interface ICat {
    name: string
}

class Cat5 implements ICat {
    constructor(public name: string) {}
}

interface IUser {
    [userProp: string]: string | boolean;
}

let user: IUser = {
    name: 'Neo',
    email: 'jgy_98@naver.com',
    isValid: true,
    0: false
};

console.log(user['name']);

// 
type MyTypes<T> = T extends infer R ? R : null;

const a: MyTypes<number> = 123;
console.log(a);


// 오버로드
interface IUser2 {
    name: string;
    age: number;
    getData(x: string): string[];
    getData(x: number): string;
}

let user2: IUser2 = {
    name: 'Neo',
    age: 36,
    getData: (data: any) => {
        if (typeof data === 'string') {
            return data.split('');
        } else {
            return data.toString();
        }
    }
}

// 추상
abstract class Animal {
    abstract name: string;
    abstract getName(): string;
}

class Cat extends Animal {
    constructor(public name: string) {
        super();
    }
    getName() {
        return this.name;
    }
}

interface IAnimal { 
    name: string;
    getName(): string;
}

// nullish

let foo = null ?? 'Hello nullish';
foo = 'abc'
console.log(foo);

/*
    Document.getElementById 
    ex) getElementById(elementById: string): HTMLElement | null;
    - 문자열 id 요소가 전달되면 HTMLElement 또는 null이 반환된다. 
    
    Document.createElement
    ex 1) createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    ex 2) createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
*/