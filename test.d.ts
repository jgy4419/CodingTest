declare class Parent {
    protected _name: string;
    private _age;
    constructor(_name: string, _age: number);
    print(): void;
    protected printName(): void;
}
declare class Child extends Parent {
    gender: string;
    constructor(age: number);
}
