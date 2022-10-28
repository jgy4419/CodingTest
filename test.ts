class Person {
    name: string;
    inputName: string;
    constructor(a: string) {
        this.name = 'kim';
        this.inputName = a;
    }
}
let person1 = new Person('kim');
let person2 = new Person('park');

console.log(person1);
console.log(person2);