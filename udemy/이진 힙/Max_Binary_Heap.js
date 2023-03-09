/* 
    - 이진 힙은 트리와 다른점은 먼저 부모 노드가 항상 자식 노드보다 큰 값을 가진다는 것이다.
    - 이진 탐색 트리와 다르게 왼쪽과 오른쪽에는 순서가 존재하지 않는다.
*/

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax() {
        // 가장 앞ㅔ 있는 요소인 최대값을 제거하고 그걸 가장 뒤에 있는 요소로 대체한다.
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        // 버블다운 해주기.
        if (this.values.length > 0) {
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
                
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                // 왼쪽 자식과 오른쪽 자식이 둘 다 우리가 가진 요소보다는 크지만 오른쪽 자식이 왼쪽보다 큰 경우이다.
                // 또는 swap에 무언가 들어있고 동시에 오른쪽 자식이 왼쪽 자식보다 큰 경우.
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            // 자리 바꾸기를 하지 않은 경우가 루프의 맨 끝에서 루프를 깨는 조건이다.
            if (swap === null) break;
            // swap이 왼쪽 인덱스거나 오른쪽 인덱스라면 실제로 자리 바꾸기를 해야된다.
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            // idx를 새로 바꾸기 (자리를 바꾼 자식의 인덱스가 이제 새로운 부모의 값이 된다.)
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.values);
heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
console.log(heap.values);