class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
} 

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    contains(value) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    
    // 깊이 우선 탐색
    BFS() {
        let queue = [],
            data = [];
        let node = this.root;
        queue.push(node);
        // queue에 무언가 들어있는 한 큐의 시작 부분에서 제거해주기.
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        // 노드를 방문하는 순서
        let data = [];
        // current가 있는 이유는 사용자가 시작하기를 원하는 노드가 있을 수 있기 때문이다.
        // 꼭 루트부터 순회를 하지는 않을 수도 있을테니까.
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(current);
        return data;
    }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder());