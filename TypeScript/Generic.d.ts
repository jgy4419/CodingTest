declare function helloGeneric<T>(message: T): T;
declare function helloBasic<T, U>(message: T, comment: U): [T, U];
declare function helloArray<T>(message: T[]): T;
declare function handleTuple<T, K>(message: [T, K]): T;
declare type HelloFunctionGeneric1 = <T>(message: T) => T;
declare const helloFunction1: HelloFunctionGeneric1;
interface IHelloFunctionGeneric {
    <T>(message: T): T;
}
declare const hellofunction2: IHelloFunctionGeneric;
declare class Person<T, K> {
    private _name;
    private _age;
    constructor(name: T, age: K);
}
declare class Stack<T> {
    private data;
    constructor();
    push(item: T): void;
    pop(): T | undefined;
}
declare const numberStack: Stack<number>;
declare const stringStack: Stack<string>;
declare function toPair<T, U>(a: T, b: U): [T, U];
