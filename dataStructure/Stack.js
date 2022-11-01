/* 
    Stack : 데이터의 삽입과 삭제가 한쪽 방향으로만 일어나는 구조
    - 가장 나중에 삽입된 데이터가 가장 먼저 삭제되는 LIFO (호입선축) 기법이다.
*/

class Stack {
    #items;
    #count;
    constructor() {
        this.#items = [];
        this.#count = 0;
    }
    in(data) {
        // 배열의 마지막 위치에 추가해주기
        this.#items[this.#count] = data;
        // or this.#items.push(data);
        this.#count++;
    }
    out() {
        this.#items.pop();
        // or this.#item.splice(this.#count - 1, 1);
        this.#count--;
    }
    // 가장 마지막으로 들어온 데이터 확인
    peek() {
        return this.#items[this.#count - 1];
    }

    get() {
        console.log('size = ', this.#count, 'items == ', this.#items);
        return this.#items;
    }
}

const stack = new Stack();
stack.in('사과-0');
stack.in('수박-1');
console.log(stack.peek());
stack.in('바나나-2');
stack.in('참외-3');

stack.get();

stack.out();

stack.get();