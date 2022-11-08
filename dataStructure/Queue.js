class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
    }
    dequeue() {
        return this._arr.shift();
    }
    arr() {
        return this._arr;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(19);
queue.enqueue(2);
console.log(queue.arr());
queue.dequeue(); // 1 빠져나옴.
console.log(queue.arr());