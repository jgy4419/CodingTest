let moveText = document.querySelectorAll('.moveText');

let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

let position = 0;

function moveTextFunc() {
    moveText = document.querySelectorAll('.moveText');
    moveText.forEach((element, index) => {
        element.addEventListener('mousedown', mouseDown);
        console.log(element);
    });
}

const mouseDown = (e) => {
    posX = e.clientX - e.offsetX;
    posY = e.clientY - e.offsetY;
    // 다듬기
    position = [...moveText].indexOf(e.target) + 1; // e인자의 위치 구하기.
    window.addEventListener('mousemove', moveElement, false);
}

const mouseUp = () => {
    window.removeEventListener('mousemove', moveElement, false);
}

window.addEventListener('mouseup', mouseUp, false);

const moveElement = (e) => {
    mouseX = e.clientX - posX - 100;
    mouseY = e.clientY - posY;
    e.target.childNodes[position].style.left = mouseX + 'px';
    e.target.childNodes[position].style.top = mouseY + 'px';
}

export {moveTextFunc};