"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        ㄴ;
        console.log(this._name, this._age);
    }
}
class Child extends Parent {
    constructor(age) {
        super('jgy', age);
        this.gender = "male";
        this.printName();
    }
}
