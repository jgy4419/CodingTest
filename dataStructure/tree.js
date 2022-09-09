// 트리 공부 하기 https://velog.io/@porupit0122/JavaScript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-4-%ED%8A%B8%EB%A6%AC
class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    // 트리 삽입 메서드 만들어주기
    insertNode(value) {
        // 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요하다.
        // 트리에 붙게 될 children를 만들고, children에 넣어야 된다.
        const childNode = new Tree(value);
        this.children.push(childNode);
        // 인자로 들어온 값에 트리 안의(배열 안의) 값 중 겹치는 예외처리를 해줘야되..나?
    }
    // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만들기
    contains(value) {
        // 인자로 들어온 값이 트리에 포함되어 있다면 true를 반환
        if (this.value === value) {
            return true;
        }
        // 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하기.
        for (let i = 0; i < this.children.length; i++){
            const childNode = this.children[i];
            if (childNode.contains(value)) {
                return true;
            }
        }
        // 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환
        return false;
    }
}

let tree = new Tree(3);
tree.insertNode(5);
tree.insertNode(9);
console.log(tree.contains(5));
console.log(tree);