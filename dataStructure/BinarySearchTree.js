// https://ukcasso.tistory.com/11

// 1. treeNode 클래스를 만들어서 노드의 뼈대를 만들어 준다.
class treeNode{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// 2. InsertNode를 만들어서 root를 설정해준다.
class InsertNode {
    constructor() {
        this.root = null;
    }
    // insert() 메서드 만들어주기
    insert(data) {
        let node = new treeNode(data);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;
        while (current) {
            console.log('cur', current);
            if (data === current.data) {
                return;
            }
            if (data < current.data) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            }
            if (data > current.data) {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
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