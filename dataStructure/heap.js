// https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-HEAP

class Heap {
    constructor() {
        // 첫 번쨰 값을 null로 비워두는 이유는 계산의 편의성을 위해서 많이 비워두기도 한다. (굳이 비울 필요 없음)
        this.heap = [null]; // 첫 원소는 사용 x
    }
    size() {
        return this.heap.lenngth - 1;
    }
    getMin() {
        return this.heap[1] ? this.heap[1] : null;
    }
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    // 삽입
    heapPush(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;

        // 최소힙이므로 부모 노드가 제일 작아야 된다. 즉, 부모노드가 현재노그보다 큰지 검사하며 반복.
        while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
            [this.heap[parIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parIdx]];
            // 구조분해 할당을 이용해 부모와 자식을 swap 한다. 따로 함수를 빼서 작성해도 된다.
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }
    // 삭제
    heapPop() {
        const min = this.heap[1]; // 배열의 첫 원소를 비워두므로 root는 heap[1]에 항상 위치.
        // 배열 마지막 원소를 root 위치에 먼저 배치하는 과정.
        // if-else로 분기되는 이유는 추후 heap이 비었는지 아닌지 확인하기 위해 size 체크 함수를 만들 때
        // -1를 통해 0을 만들어주기 때문이다. 
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if (!this.heap[leftIdx]) return min;
        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx] < this.heap[curIdx]) {
                // 오른쪽 자식이 없으면 왼쪽 자식하나만 있다는 것을 의미
                [this.heap[leftIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[leftIdx]];
            }
            return min;
        }
        // 위에 조건에 걸리지 않는 경우 왼쪽과 오른쪽 자식이 모두 있는 경우이다.
        // 따라서 현재 노드가 왼쪽 또는 오른쪽 보다 큰지 작은지를 검사하며 반복.
        while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            // 왼쪽과 오른쪽 자식 중에 더 작은 값에 현재 노드를 교체하면 된다.
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            [this.heap[minIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[minIdx]];
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }
        return min;
    }
}