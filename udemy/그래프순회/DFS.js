// 재귀형
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjaccencyList = this.adjaccencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjaccencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }
    // 인접 리스트를 배열의 뒤에부터 본다. (중요)
    depthFirstIterative(start) { 
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length) {
            console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
}