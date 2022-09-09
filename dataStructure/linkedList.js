// Linked List : 배열과 달리 메모리상에 index에 의한 물리적 배치를 하지 않고, node를 생성 후 해당 node의 pointer에 의해
// 다음 node를 연결한다. 이를 통해 Linked List는 데이터 삽입/삭제시 데이터의 구조를 재정렬하지 않아도 된다.

class Node {
    constructor(data, next = null){
        // data와 next를 넣고 next의 default는 null로 지정. 왜냐하면 linkedlist의 tail(마지막)은 null로 끝나기 때문.
        this.data = data; // 데이터를 저장할 수 있는 데이터 필드
        this.next = next; // 다음 노드가 어딘지 알려
    }
}

class LinkedList {
    constructor() {
        this.head = null; // 처음에 데이터가 없다면 head는 null이다.
        this.size = 0; // 리스트의 전체 크기를 찾기위해 사용. default 값은 o으로 지정. 
    }
    // Insert first node - 첫 번째 삽입
    insertFirst(data) {
        this.head = new Node(data, this.head); // head에 새로운 node가 들어가고 기존의 헤드는 next로 밀려난다.
        this.size++;
    }
    // Insert last node - 마지막 삽입
    insertLast(data) {
        let node = new Node(data);
        let current;
        // this.head가 empty, make head 일 때
        if(!this.head){
            this.head = node;
        } else {
            current = this.head;
            
            while (current.next){ // this.head에 next가 있다면 즉, next가 null이 아니라면
                current = current.next; // current는 current.next가 되고
            }
            current.next = node; // 결과 current.next가 새로넣은 node가 된다.
        }
        this.size++; // length 는 1 증가.
    }

    // 데이터 중간 삽입
    insertAt(data, index){ // 넣을 데이터, 위치를 인자로 받는다.
        // 인덱스가 size 범위를 넘어서면 아무것도 리턴하지 않는다. ex) size는 10인데 indexfh 11이 들어오면.. 안된다는 소리 ^^
        if(index > 0 && index > this.size){
            return;
        }
        // 첫 번째 인덱스일 떄
        if(index === 0){
            // index 0에 삽입시 해당 노드를 넣고 다 한칸씩 뒤로 미룬다.
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }
        // node에 넣을 값 삽입.
        const node = new Node(data);
        let current, previous; // 현재, 이전 데이터를 받을 변수 생성.

        current = this.head; // 현재값은 지금까지 저장된 노드 전체를 받는다. 
        let count = 0;
        // count가 0부터 index보다 작을 때 까지
        while(count < index){
            // 이전 데이터에 노드 전체를 넣어주고
            previous = current;
            count++; // count는 1증가.
            // 현재 노드에 번호 삽입?
            current = current.next;
        }
        // 수정이 끝난 후 next의 값은 
        node.next = current;
        previous.next = node;

        this.size++;
    }
    
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

