class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoubleLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            newNode = this.tail;
        }
        this.length++;
        return this;
    }
    pop() {
        let popedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev = null;
        }
        this.length--;
        return popedNode; // 삭제된 노드
    }
    shift() {
        let oldNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldNode.next;
            this.head.prev = null;
            oldNode.next = null;
        }
        this.length--;
        return oldNode;
    }
    unShift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // 여기부터 복습하기.
    get(index) {
        if (index >== this.length && index < 0) return null;
        let count, current;
        if (index <= this.length / 2) {
            current = this.head;
            count 0;
            while (count != index) {
                current = current.next;
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;   
        } else {
            return false;
        }
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (this.length === 0) this.shift(val);
        if (this.length === index) this.push(val);


        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        afterNode.prev = afterNode, newNode.next = afterNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index === this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removeNode = this.get(index);
        let beforeNode = removeNode.prev;
        let afterNode = removeNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        removeNode.prev = null, removeNode.next = null;
        this.length--;
        return removeNode;
    }
}


class DoublyLinkedList{
	constructor(val){
		this.head = null;
		this.tail = null;
		this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(this.head === null && this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if (!this.head) return undefined;
        // 새로운 tail을 새로운 노드 바로 전에 있는 요소로 설정.
        let popedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null; 
        }else {
            this.tail = popedNode.prev;
            // 새로운 tail의 next가 null이 되도록 설정해주기. (한쪽 줄 끊음)
            this.tail.next = null;
            // prev 부분도 null로 설정하면서 양쪽 다 끊어주기.
            popedNode.prev = null;
        }
        this.length--;
        return popedNode;
    }
    shift(){
        if(this.length === 0 || !this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            // head를 예전 head의 next로 바꿔주기.
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;  
    }
    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }   
        } else { 
            count = this.length - 1;
            current = this.tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        // 우리가 삽입해야되는 곳 바로 앞에 요소를 찾아야 된다.
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        // before 노드를 찾고 -> beforeNode.next로 after 노드를 찾기.
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removeNode = this.get(index);
        // 124 ~ 128번 줄을
        let beforeNode = removedNode.prev;
        let afterNode = removeNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // 아래처럼 작성해도 된다!
        // removeNode.prev.next = removeNode.next;
        // removedNode.next.prev = removeNode.prev;

        // 찾은 노드의 next와 prev를 null로 설정하기. (남아있는 기준점들을 없애주기.)
        removeNode.next = null;
        removeNode.prev = null;

        this.length--;
        return removeNode;
    }
}

const list = new DoublyLinkedList();
list.push(4);
list.push(501);
list.push(401);
list.push(230);

console.log(list.insert(0, 11));
console.log(list.insert(10, 11));
console.log(list.insert(2, 11));

console.log(list);