class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        if(value.length < 4) {
            console.log('이름이 너무 짧아요,');
            return;
        }
        this.name = value;
    }
}

let user = new User('규영');
console.log(user.name);

user = new User("");