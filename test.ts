class Person{
    public constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person('jgy', 25);
console.log(p1);
// p1.name = 