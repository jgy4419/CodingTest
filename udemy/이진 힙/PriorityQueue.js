/* 
    1. 값이 아니라 우선순위에 기반하여 비교를 하도록 해주기.
        - 값이 아니라 요소 그 자체를 가지고 비교를 하지 않도록 해야된다.
    2. 값과, 우선순위를 가지고 새로운 노드를 만드는 것이다.
    3. 최대 이진 힙을 사용한다. 즉, 우선순위 중 큰 순서에 따라 요소를 배치하는 것.
    4. 나중에 동일한 priority인 경우 어떤 걸 더 우선적으로 작업할지 정하는 코드 만들어보기.
        - node에 시간요소를 추가해서 시간에 priority가 같으면 시간을 기준으로 우선순위를 부여하는 등.
*/

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        // element.priority가 parent.priority 보다 작거나 같은지 알아야 된다.
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            const element = this.values[idx];
            if (element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChild < length) {
                rightChild = this.values[rightChild];
                if (
                    (swap === null && rightChild.priority > elenment.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);
console.log(ER);
ER.dequeue();
console.log(ER);
ER.dequeue();
console.log(ER);