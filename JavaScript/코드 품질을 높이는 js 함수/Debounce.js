/* 
    빠른 이벤트가 반복적으로 함수를 활성화하는 것을 방지하는 역할을 한다.
    이벤트가 실행되지 않은 채로 일 정 시간이 경과할 때까지 이벤트를 실행시키지 않고 함수의 실행을 연기.
*/
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout); // timeout이 종료 되거나 실행되지 않았을 때 func가 실행.
        timeout = setTimeout(() => func.apply(context, args), delay);
    }
}

function updateLayout() {

}

// Debounce 함수가 있으면, 레이아웃이 업데이트되는 속도를 제한할 수 있어 웹페이지의 반응성과 효율성을 높인다.
const debounceUpdateLayout = debounce(updateLayout, 250);

window.addEventListener("ressize", debounceUpdateLayout);