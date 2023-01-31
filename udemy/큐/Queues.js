class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        // 리스트의 가장 뒤에 추가해주기.
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        // 처음에 추가된 것을 제거해서 그것을 출력한다.
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();
q.enqueue("first");
q.enqueue("second");
q.enqueue("third");
console.log(q);
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);