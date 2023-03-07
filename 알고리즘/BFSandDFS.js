const graph1 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
  };
  
  // BFS 
  const bfs = (graph1, startNode) => {
    let visited = []; 
    let needVisit = []; 
  
    needVisit.push(startNode);
  
    while (needVisit.length !== 0) { 
      const node = needVisit.shift(); 
      if (!visited.includes(node)) { 
        visited.push(node); 
        needVisit = [...needVisit, ...graph1[node]];
      }
    }
    return visited;
  };
  
  console.log(bfs(graph1, "A"));

// DFS
const dfs = (graph, startNode) => {
    let needVisitStack = []; 
    let visitedQueue = []; 
  
    needVisitStack.push(startNode);
  
    while (needVisitStack.length !== 0) {
      const node = needVisitStack.pop();
      if (!visitedQueue.includes(node)) {
        visitedQueue.push(node);
        needVisitStack = [...needVisitStack, ...graph[node]];
      }
    }
  
    return visitedQueue;
  };


// 콜백함수를 이용한 DFS
const graph2 = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
];

// 방문 정보 담아주기.
const visited = new Array(graph2.length).fill(false);

const callbackDfs = (graph2, v, visited) => {
  // 현재 노드 방문
  visited[v] = true;
  // 방문 노드 출력
  console.log(v);

  // 인접 노드 탐색
  graph[v].forEach((i) => {
    console.log('item', i);
    // 방문하지 않았다면
    if (!visited[i]) {
      // 현재 함수 재귀 호출하면서 방문
      callbackDfs(graph2, i, visited);
    }
    // console.log('bb', i);
  });
};

callbackDfs(graph2, 1, visited);