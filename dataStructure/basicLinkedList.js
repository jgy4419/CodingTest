class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    append(val) {
        // 만약 this.head 가 null이면 (처음 들어가는 값이면)
        if(this.head === null){
            // ex) list.append(30); 하면 결과로 Node { val: 30, next: null }가 된다.
            this.head = new Node(val);
            console.log(this.head);
            return;
        }
        // 처음 들어가는 값이 아니라면
        let curr = this.head; // curr에 Node 전체 삽입.
        while(curr.next !== null) { // curr.next가 null이 아니라면
            curr = curr.next; // curr에 curr 끝에 있는 배열 값으로 변경시켜준다.
        }
        // 제일 끝에 있는 curr의 .next에 인자 val 값이 들어간 Node를 추가해준다.
        curr.next = new Node(val);
        console.log(curr);
    }
    print(){
        let str = '';
        let curr = this.head;
        while(curr !== null) {
            str += curr.val;
            curr = curr.next;
        }
        return str
    }
    // 들어온 값이 Node에 포함하는지? 
    contains(target) {
        let curr = this.head;
        while(curr !== null) {
            if(curr.val === target){
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
}

const list = new LinkedList();
list.append(30);
list.append(100);
list.append(50);

console.log(list.print());