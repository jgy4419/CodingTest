function whoisThis(){
  console.log(this);
}

whoisThis();

var obc = {
  x: 123
};

whoisThis.apply(obc)



  
// function solution(wallpaper) {
//     var answer = [];
//     const graph = [];
//     let length = wallpaper.length;
//     for(let i = 0; i < length; i++) {
//         let arr = [];
//         let chArr = [...wallpaper[i]];
//         for(let j = 0; j < chArr.length; j++) {
//             arr.push(chArr[j]);
//         }
//         graph.push(arr);
//         arr = [];
//     }

//     for(let i = 0; i < graph.length; i++) {
//         for(let j = 0; j < graph[i].length; j++) {
//             if(graph[i][j] === '#') {
//                 answer.push(i);
//                 answer.push(j);
//             }
//         }
//     }
//     let res = [];
//     res.push(answer.slice(0, 2), answer.slice(answer.length - 2, answer.length));
//     res = res.flat(Infinity);
//     res[2]++;
//     res[3]++;
//     return answer;
// }

// console.log('solution', solution([".#...", "..#..", "...#."]));
// console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."]));

/* 
    - 무방향 간선들이 주어질 때 연결된 정점의 그룹들이 몇 개인지 반환하는 함수 작성하기.
    - edges : 배열 형태로 표현된 시작 점과 도착 점을 엘리먼트로 갖는 2차원 배열
    - 출력 값 : 그룹들의 수를 Number 타입으로 리턴
*/
// connectedVertices([[0, 1], [2, 3], [3, 4], [4, 5]]); // 2

// function connectedVertices (edges) {
//     const maxVertices = edges.reduce((a, c) => {
//         const bigger = Math.max(...c);
//         if(bigger > a) return bigger;
//         return a;
//     }, 0);

//     const adjList = {};
//     for(let i = 0; i <= maxVertex; i++) {
//         adjList[i] = [];
//     }
// }


/* 
    < 네트워크 >
    네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미한다. 
*/

// function solution(n, computers) {
//     let answer = 0;
//     let visit = [];

//     for(let i = 0; i < n; i++) {
//         visit.push(false);
//     }
//     function DFS(idx){
//         visit[idx] = true;

//         for(let i = 0; i < n; i++) {
//             if(computers[idx][i] === 1 && !visit[i]) {
//                 DFS(i);
//             }
//         }
//     }
//     for(let i = 0; i < n; i++) {
//         if(!visit[i]) {
//             DFS(i);
//             answer++;
//         }
//         console.log(visit);
//     }
//     return answer;
// }

// console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));

// const graph = {
//     A: ["B", "C"],
//     B: ["A", "D"],
//     C: ["A", "G", "H", "I"],
//     D: ["B", "E", "F"],
//     E: ["D"],
//     F: ["D"],
//     G: ["C"],
//     H: ["C"],
//     I: ["C", "J"],
//     J: ["I"]
// };

// const BFS = (graph, startNode) => {
//     const visited = []; // 탐색을 마친 노드들
//     let needVisit = []; // 탐색해야할 노드들
  
//     needVisit.push(startNode); // 노드 탐색 시작
  
//     while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
//       const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
//       if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
//         visited.push(node); 
//         // graph[node]는 ex) 객체 안에 A의 배열에 있는 ["B", "C"]를 나타낸다.
//         needVisit = [...needVisit, ...graph[node]];
//       }
//     }
//     return visited;
// };

// // console.log(BFS(graph, "A"));

// const DFS = (graph, startNode) => {
//     const visited = []; 
//     let needVisit = [];

//     needVisit.push(startNode);

//     while(needVisit.length !== 0){
//         const node = needVisit.shift();
//         if(!visited.includes(node)) {
//             visited.push(node);
//             needVisit = [...graph[node], ...needVisit];
//             console.log(needVisit);
//         }
//     }
//     return visited;
// }

// // console.log(DFS(graph, "A"));

// // DFS 재귀 버전
// function solution(c, arr){
//     let answer = Number.MIN_SAFE_INTEGER;
//     let n = arr.length;
//     function DFS(L, sum){
//         if(sum > c) return;
//         if(L === n) {
//             answer = Math.max(answer, sum);
//         }else {
//             DFS(L + 1, sum + arr[L]);
//             DFS(L + 1, sum);
//         }
//     }
//     DFS(0, 0);
//     return answer;
// }

// let arr = [81, 58, 42, 33, 61];
// console.log(solution(259, arr));

// const arrayToTree = (items) => {
//     // 1. 루트 항목에 대한 변수와 다른 모든 항목에 대한 조회 테이블을 만들기. 
//     const rootItems = [];
//     const lookup = {};
//     for(const item of items) {
//         const itemId = item["id"];
//         const parentId = item["parentId"]; 
//         // 2. 각 항목을 살펴볼 때 해당 ID가 조회에 있으면 해당 항목을 발견할 때 세부 정보를 추가한다.
//         if(!lookup[itemId]) lookup[itemId] = {["children"]: []};
//         // 3. 조회에서 현재 항목을 찾는다. 찾으면 세부 정보를 추가한다.
//         lookup[itemId] = {...item, ["children"]: lookup[itemId]["children"]};
//         // 4. 현재 항목에 대한 변수를 만든다.
//         const TreeItem = lookup[itemId];
//         // 5-1. 트리에서 항목이 이동할 위치를 결정한다. parentId 가 없으면 루트 노드이다.
//         if(parentId === null || parentId == undefined || parentId === "") {
//             rootItems.push(TreeItem);
//         // 5-2. parentId를 가지고 있다면 그것은 요소의 자식이다.
//         } else {
//             // 6. 현재 항목의 상위 항목에 대한 자리 표시자를 추가한다. 
//             if(!lookup[parentId]) lookup[parentId] = {["children"]: []};
//             // 7. 현재 항목을 상위 항목에 추가한다.
//             lookup[parentId]["children"].push(TreeItem);
//         }
//     }
//     return rootItems;
// }

// const tree = arrayToTree([
//     { id: "x001", parentId: null, name: "Joe" },

//     { id: "x002", parentId: "x001", name: "Sammy",   children : []},
//     { id: "x003", parentId: "x001", name: "Emily",   children : []},
//     { id: "x004", parentId: "x001", name: "Scott",   children : []},

//     { id: "x005", parentId: "x002", name: "Fred",    children : []},
//     { id: "x006", parentId: "x002", name: "Vickie",  children : []},
//     { id: "x007", parentId: "x002", name: "Marlow",  children : []},

//     { id: "x008", parentId: "x003", name: "Anna",    children : []},
//     { id: "x009", parentId: "x003", name: "Brad",    children : []},
//     { id: "x010", parentId: "x003", name: "Sarah",   children : []},

//     { id: "x011", parentId: "x004", name: "Mark",    children : []},
//     { id: "x012", parentId: "x004", name: "Debbie",  children : []},
//     { id: "x013", parentId: "x004", name: "Boomer",  children : []},

//     { id: "x014", parentId: "x005", name: "Stuey",   children : []},
//     { id: "x015", parentId: "x005", name: "Jessie",  children : []},
//     { id: "x016", parentId: "x005", name: "Tolstoy", children : []},

//     { id: "x017", parentId: "x009", name: "Maddie",  children : []},
//     { id: "x018", parentId: "x009", name: "Scout",   children : []},
//     { id: "x019", parentId: "x009", name: "Jordie",  children : []},
// ]);

// console.log( JSON.stringify(tree, undefined, 2) )