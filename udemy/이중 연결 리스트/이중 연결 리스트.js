class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
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
}

const list = new DoublyLinkedList();
list.push(99);
list.push(150);
list.push(100);
console.log(list);
console.log(list.shift());
console.log(list.shift());