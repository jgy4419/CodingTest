class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Stack { 
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val){
		let newStack = new Stack(val);
		if(!this.first) {
			this.first = newStack;
			this.last = newStack;
		}else {
			let temp = this.first;
			this.first = newStack;
			this.first.next = temp;
		}
		this.size++;
		return this.size;
	}
	pop(){
		if(!this.first) return null;
		if(this.first === this.last) this.last = null;

		let deleteItem = this.first;
		this.first = this.first.next;
		this.size--;
		return deleteItem.value;
	}
}

let stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(18);
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);