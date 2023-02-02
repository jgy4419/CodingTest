"use strict";
// 인자로 들어가는 타입을 변수 같은 것으로 활용해서 return되는 타입에 연관을 시켜주도록 하기
function helloGeneric(message) {
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
function helloBasic(message, comment) {
    return [message, comment];
}
// 사용방법 1 : 타입을 미리 지정.
helloBasic(25, 25);
// 사용방법 2 : 값 추론핳기
// helloBasic(36);
// 함수 안에서 Generic Array & Tuple 사용하기
function helloArray(message) {
    return message[1];
}
helloArray(["Hello", "World"]);
function handleTuple(message) {
    return message[0];
}
handleTuple(['Hello', "world!"]);
handleTuple(['Hello', 5]);
const helloFunction1 = (message) => {
    return message;
};
const hellofunction2 = (message) => {
    return message;
};
// Generic Class
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new Person("Mark", 153);
new Person('get', 39);
////////////////////////////////////////////////////////////////////////////////////////////////
class Stack {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
}
const numberStack = new Stack;
const stringStack = new Stack;
function toPair(a, b) {
    return [a, b];
}
toPair('s', 1);
