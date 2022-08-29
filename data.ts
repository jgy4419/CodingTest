// 제네릭 인터페이스 함수로 지정하는 방법
interface HelloFunctionGeneric2 {
    <T>(message: T): T;
}

class Person<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Person('Mark', 30);

new Person<string, number>('야', 2);
