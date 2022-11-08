/* 
    Stack : 데이터의 삽입과 삭제가 한쪽 방향으로만 일어나는 구조
    - 가장 나중에 삽입된 데이터가 가장 먼저 삭제되는 LIFO (호입선축) 기법이다.
*/

class Stack {
    constructor() {
        this._arr = [];
    }
    push(item) {
        this._arr.push(item);
    }
    pop() {
        return this._arr.pop();
    }
    // 가장 마지막에 있는 값 보기
    peek() {
        return this._arr[this._arr.length - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
stack.pop();
console.log(stack.peek()); // 2