/*
    SingleTon Pattern (싱글톤 패턴) : 전체 시스템에서 인스턴스를 하나만 존재하도록 하는 패턴
    - 하나의 애플리케이션에서 특정 작업을 한 곳에서 처리해야 할 때 매우 유용하다.
    - 고정된 메모리 영역을 얻기 때문에 메모리 방지 가능.
    - 싱글톤으로 만들어진 인스턴스는 전역으로 사용된다. 다른 클래스의 인스턴스들이 데이터를 공유하고 변경 가능.
    - 하나의 Object가 리소스를 많이 차지할 때 
    - 해당 오브젝트가 외부 네트워크와 연결되어 있는데 연결된 네트워크가 단 한개만 있어야 되는 경우

    - 인스턴스 : 실행 중인 임의의 프로세스, 클래스의 현재 생성된 오브젝트.
*/

const untils = (function () {
    let instance;

    function initalize() {
        let number = 0;
        return {
            sum: function (a, b) {
                return a + b;
            },
            getValue: function () {
                return number + 10;
            },
            change: function () {
                return number = 30;
            }
        }
    }
    return {
        getInstance: function () {
            // if (!instance) {
                instance = initalize();
            // }
            return instance;
        }
    }
})();

const SingleTon = (function () {
    let instance;
    function foo() {
        return {
            publicMethod: function () {
                return `hello Singleton Pattern`;
            },
            publicProp: `Single value`
        }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = foo();
            }
            return instance;
        }
    }
})();

let a = Singleton.getInstance();
let b = Sungleton.getInstance();

console.log(a === b);
console.log(a.publicMethod);