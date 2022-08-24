declare class Person {
    _name: string;
    private age;
    constructor(_name: string, age: number);
    get name(): string;
    set name(n: string);
}
declare const p1: Person;
