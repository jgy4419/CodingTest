/*
    프로토타입 패턴 : 비슷하거나 동일한 성격의 객체를 여러 개 만들어야 될 때,
    프로토타입에서 복제를 통해 만든다.
*/

// 함수로
function Book(title, price) {
    this.title = title;
    this.price = price;
    this.printTitle = () => {
        console.log(this.title, this.price);
    }
}

function BookPrototype(prototype) {
    this.prototype = prototype;
    this.clone = () => {
        let book = new Book();
        book.title = prototype.title;
        book.price = prototype.price;

        return book;
    }
}

let sampleBook = new Book('JavaScript', 15);
let prototype = new BookPrototype(sampleBook);
console.log(prototype);
let book = prototype.clone();
console.log(book);

// 클래스로
class Book2{
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    printTitle() {
        console.log(this.title, this.price);
    }
}

class Book2Prototype{
    constructor(prototype){
        this.prototype = prototype;
    }   
    clone() {
        let book = new Book2();
        book.title = this.prototype.title;
        book.price = this.prototype.price;

        return book;
    }
}

let sampleBook2 = new Book2('React', '1000');
let prototype2 = new Book2Prototype(sampleBook2);
let book2 = prototype2.clone();
console.log(book2); // Book2 { title: 'React', price: '1000' }

let book = {
    title: 'JavaScript',
    price: 15,
}

let anotherBook = Object.assign({ say: true }, book);
console.log(anotherBook);
let anotherBook2 = { say: true, ...book };
console.log(anotherBook2);