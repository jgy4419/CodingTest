class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            // 마지막까지 이동
            newTail = current;
            current = current.next;
        }
        // 마지막까지 가면 this.tail 값 변경 시켜주고 this.tail.next 값 없애줌.
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this.
    }
    get(index) {
        if (index < 0 || this.length <= index) return null;
        let counter = 0;
        let current = this.head;
        // counter가 index와 같지 않을 동안 반복.
        while (counter !== index) {
            curren = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return truel
        }
        return false;
    }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Good Bye");
// console.log(list);
console.log(list.pop());