class EditMain extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="index__container">
                <modal-component></modal-component>
                <div class="editmain__contain">
                    EditMain
                </div>
            </div>
        `;
    }
    // itemMove(text, style, element) {
    //     const editComponent = document.querySelector('.editmain__contain');
    //     let newElement = document.createElement(style);
    //     editComponent.appendChild(newElement);
    //     console.log(element);        
    // }
}
customElements.define('edit-main', EditMain);


function itemMove(text, style, count){
    // editmain__contain 클래스에 element 생성.
    // moveText = document.querySelectorAll('.moveText');
    // console.log(moveText);
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

function moveTextFunc() {
    let moveText = document.querySelectorAll('.moveText');
    // console.log('??');
    if(moveText.length > 1) {
        console.log('?');
        moveText.forEach((element, index) => {
            element.addEventListener('mousedown', mouseDown, false);
            position = index;
        });
    }
}

let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

let position = 0;

const mouseDown = (e) => {
    e.preventDefault();
    console.log(e);
    posX = e.clientX - e.offsetX;
    posY = e.clientY - e.offsetY;
    window.addEventListener('mousemove', moveElement, false);
    console.log(e);
}

const mouseUp = () => {
    window.removeEventListener('mousemove', moveElement, false);
}

window.addEventListener('mouseup', mouseUp, false);

const moveElement = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.childNodes[position]);
    mouseX = e.clientX - posX;
    mouseY = e.clientY - posY;
    console.log(mouseX, mouseY);
    e.target.childNodes[position].style.left = mouseX + 'px';
    console.log('left', e.target.childNodes[position].style);
    e.target.childNodes[position].style.top = mouseY + 'px';
}

export {itemMove};