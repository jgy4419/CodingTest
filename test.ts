class Person{
    public constructor(public _name: string, private age: number) { }
    
    get name() {
        console.log('get');
        return this._name;
    }
    set name(n: string) {
        console.log('set');

        this._name = n;
    }
}

const p1 = new Person('jgy', 25);
console.log('1', p1.name);

p1.name = "JGY";
p1.name = "JGY23";
console.log('2', p1.name);