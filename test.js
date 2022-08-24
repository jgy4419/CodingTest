"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log('get');
        return this._name;
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const p1 = new Person('jgy', 25);
console.log('1', p1.name);
p1.name = "JGY";
p1.name = "JGY23";
console.log('2', p1.name);
