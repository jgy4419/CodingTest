/*
    특정 기간 내에 어떤 함수를 이미 호출했다면 그 함수가 싫애되는 것을 막는 역할.
    일정 속도로 실행되고 너무 자주 트리거 되지 않도록 보장.
*/

function throttle(func, delay) {
    let wait = false;

    return (...args) => {
        // wait가 true이면 반환 (함수 종료)
        if(wait) {
            console.log("아직 함수를 실행할 수 없습니다.");
            return;
        }
        console.log("실행이 가능합니다.");
        func(...args);
        wait = true;
        setTimeout(() =>{
            console.log("delay 만큼의 시간이 지났으므로 다시 실행이 가능하다.");
            wait = false;
        }, delay);
    }
}