/* 
    ObserverPattern (관찰자 패턴) : 객체의 상태 변화를 관찰하는 관찰자들의 목록을 객체에 등록해
    상태 변화가 있을 때마다 메서드 등을 통해 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴.

    - 분산 이벤트 핸들링 시스템을 구현하는데 사용.
    - 어떤 객체의 상태가 변할 때 그와 연관된 객체 들에게 알림을 보내는 디자인 패턴.
*/

// 함수로

// ex) 뉴스레더
function Newsletter() {
    this.observers = []; // 들어온 내용들을 담을 배열
}

// 뉴스레더의 각 기능들을 정의
Newsletter.prototype = {
    subscribe: function (observer) {
        this.observers.push(observer);
    },
    unsubcribe: function (observer) {
        this.observers = this.observers.filter(ob => ob !== observer);
    },
    notify: function () {
        this.observers.forEach(observer => console.log(`Hello ${observer.toString()}`));
    }
}

// 들어갈 값
let subscripber1 = 'SubScriber1';
let subscripber2 = 'SubScriber2';

// 값을 넣을 클래스
let newsletter = new Newsletter();

newsletter.subscribe(subscripber1);
newsletter.subscribe(subscripber2);

newsletter.notify();


// 클래스로 
class Newsletter{
    constructor(){
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(ob => ob !== observer);
    }
    notify() {
        this.observers.forEach(observer => console.log(`Hello ${observer.toString()}`));
    }
}

let subscripber1 = 'SubScriber1';
let subscripber2 = 'SubScriber2';

let newsletter = new Newsletter();
newsletter.subscribe(subscripber1);
newsletter.subscribe(subscripber2);

newsletter.notify();
/* 
    결과
    Hello SubScriber1
    Hello SubScriber2
*/
newsletter.unsubscribe(subscripber1); // SubScriber1 제거
newsletter.notify(); // 결과 Hello SubScriber2