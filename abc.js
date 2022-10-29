class Mammal {
    constructor(name) {
        this.name = name;
        this.feeNum = 4;
    }
    move() {
        console.log('움직이다.');
    }
}

class Cat extends Mammal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    attack() {
        console.log('공격하다!');
    }
    move() {
        console.log('날렵하게 움직이기');
    }
    eat() {
        super.move();
        console.log(super.move() + ' 그리고 소화하기');
    }
}

const cat = new Cat('야옹', 5);
cat.move();
cat.eat();