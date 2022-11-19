// https://ukcasso.tistory.com/11

// // 1. treeNode 클래스를 만들어서 노드의 뼈대를 만들어 준다.
// class treeNode{
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }
// // 2. InsertNode를 만들어서 root를 설정해준다.
// class InsertNode {
//     constructor() {
//         this.root = null;
//     }
//     // insert() 메서드 만들어주기
//     insert(data) {
//         let node = new treeNode(data);
//         if (!this.root) {
//             this.root = node;
//             return this;
//         }
//         let current = this.root;
//         while (current) {
//             console.log('cur', current);
//             if (data === current.data) {
//                 return;
//             }
//             if (data < current.data) {
//                 if (!current.left) {
//                     current.left = node;
//                     break;
//                 }
//                 current = current.left;
//             }
//             if (data > current.data) {
//                 if (!current.right) {
//                     current.right = node;
//                     break;
//                 }
//                 current = current.right;
//             }
//         }
//     }
// }

// 이진 탐색 트리는 모든 왼쪽의 자신의 값이 루프나 부모보다 작고, 모든 오른쪽 자식의 값이 루트나 부모보다 큰 값을 가지는 특징이 있다.
class TreeNode {
    // 자식 요소가 2개이다. 즉, 노드가 2개이기 때문에 오른쪽, 왼쪽으로 구분할 수 있다.
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class InsertNode {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let node = new TreeNode(data);
        // root에 값이 없으면 root에 값 넣어주기
        if (!this.root) {
            this.root = node;
            return this;
        }
        // root에 값이 있을 때 실행
        let current = this.root;
        while (current) {
            if (data === current.data) {
                
            }
        }
    }
}

let nums = new InsertNode();
nums.insert(10);
nums.insert(5);
nums.insert(11);
nums.insert(12);
nums.insert(3);

console.log(nums);
/* 
결과
insertNode {
  root: treeNode {
    data: 10,
    left: treeNode { data: 5, left: 3, right: 6 },
    right: 11
  }
}    
*/