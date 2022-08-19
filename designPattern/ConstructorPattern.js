// 생성자 패턴

// 함수로
function Person1(name, age) {
    this.name = name;
    this.age = age;
    this.showName = () => {
        console.log(`${this.name}은 ${this.age}살 입니다.`);
    }
}

let person1 = new Person1('JGY', 25);
person1.showName();

// Class로

class Person2{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(`${this.name}은 ${this.age}살 입니다.`);       
    }
}

let person2 = new Person2('JGY', 25);
person2.showName();