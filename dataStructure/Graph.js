// 그래프의 기본 구조
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    //  정점 추가 메서드 (addVertex)
    // 입력 받은 정점이 인접리스트에 없으면 인접리스트에 정점 key에 빈 배열을 value로 지정해준다.
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];\
    }
    // 간선 추가 메서드 (addEdge)
    // 추가하려는 간선으로 이어진 두 개의 정점을 입력받고, 이들을 인접리스트에서 서로의 정점의 배열에 push하도록 한다.
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    // 간선 제거 메서드(removeEdge)
    // 제거하려는 간선으로 이어진 두 개의 정점을 입력받고,
    // 인접리스트의 각각 정점들의 value에서 상대 정점만 제외해 반환(filter 사용)된 배열을 재할당한다.
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    // 정점 제거 메서드
    // 정점을 제거하려면, 정점과 연결된 모든 간선들을 제거하고 그 정점도 삭제해야 된다.
    removeVertex(vertex) {
        // 정점과 연결된 모든 간선을 제거하기 위해 해당 정점의 배열에 대해 루프를 돌면서,
        while (this.adjacencyList[vertex].length) {
            // 삭제하려는 정점의 간선들을 removeEdge 메서드를 사용해 모두 삭제한다.
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        // 정점도 삭제해주기
        delete this.adjacencyList[vertex];
    }
}

// 코드 실행 결과
const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);