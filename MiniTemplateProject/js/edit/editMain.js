class EditMain extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="index__container">
                <modal-component></modal-component>
                <div class="editmain__contain">
                </div>
            </div>
        `;
    }
}
customElements.define('edit-main', EditMain);


function itemMove(text, style, count){
    // editmain__contain 클래스에 element 생성.
    const editComponent = document.querySelector('.editmain__contain');
    const newElement = document.createElement(style);
    newElement.className = 'moveText'
    newElement.innerText = text;
    newElement.setAttribute("contenteditable", true);
    newElement.classList.add(`${style}${count}`);
    editComponent.appendChild(newElement);
    console.log(newElement);
    moveTextFunc();
}
let moveText = document.querySelectorAll('.moveText');
function moveTextFunc() {
    moveText = document.querySelectorAll('.moveText');
    console.log(moveText.length);
    // if(moveText.length >= 1) {
        console.log('?');
        moveText.forEach((element, index) => {
            // 클릭한 element 요소를 event 인자로 넣어주기..
            // position = index; // 마우스 움직일 때 index 값 변경 시켜줘야됨.
            // element.style.zIndex = -1;
            element.addEventListener('mousedown', mouseDown);
            console.log(element);
        });
    // }
}

let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

let position = 0;

const mouseDown = (e) => {
    // e.preventDefault();
    // 클릭한 element가 들어오지 않는다..
    // alert(position);
    console.log(position);
    console.log(e);
    posX = e.clientX - e.offsetX;
    posY = e.clientY - e.offsetY;
    // 다듬기
    position = [...moveText].indexOf(e.target) + 1;
    window.addEventListener('mousemove', moveElement, false);
}

const mouseUp = () => {
    window.removeEventListener('mousemove', moveElement, false);
}

window.addEventListener('mouseup', mouseUp, false);

const moveElement = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.childNodes);
    console.log(e.target.childNodes[position]);
    // alert(position);
    mouseX = e.clientX - posX - 100;
    mouseY = e.clientY - posY;
    console.log(mouseX, mouseY);
    // alert(e.srcElement);
    e.target.childNodes[position].style.left = mouseX + 'px';
    e.target.childNodes[position].style.top = mouseY + 'px';
    // e.srcElement.style.left = mouseX + 'px';
    // e.srcElement.style.top = mouseY + 'px';
}

export {itemMove};