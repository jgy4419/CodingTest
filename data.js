"use strict";
class User {
    constructor(a) {
        this.name = 'GueYoung';
        this.familyName = 'Jeong';
        this.name = a;
    }
    nameChangeFunc(ch) {
        this.familyName = ch;
    }
}
let user1 = new User('sss');
user1.nameChangeFunc('Yun');
console.log(user1);
