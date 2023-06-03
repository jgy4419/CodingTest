// filter class
class Users {
    constructor() {
        this.users = [
            {id: 1, name: 'Lee'},
            {id: 2, name: 'Kim'}
        ]
    }
    findById(id) {
        return this.users.filter(user => user.id === id);
    }
    remove(id) {
        return this.users.filter(user => user.id !== id);
    }
    getList() {
        return [...this.users]
    }
    
}

let users = new Users();
console.log(users.findById(2));
console.log(users.remove(2));
console.log(users.getList());


let sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue
}, 0)

console.log(sum);

const promiseFactory = (time) => {
    return new Promise((resolve, reject) => {
        console.log(time);
        setTimeout(resolve, time);
    });
};

[1000, 2000, 3000, 4000].reduce((acc, cur) => {
    return acc.then(() => promiseFactory(cur));
}, Promise.resolve());