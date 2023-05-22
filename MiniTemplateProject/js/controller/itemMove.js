import {moveTextFunc} from './drageFuncs.js';

function itemMove(text, style, count){
    console.log('?');
    // editmain__contain 클래스에 element 생성.
    const editComponent = document.querySelector('.editmain__contain');
    const newElement = document.createElement(style);
    newElement.className = 'moveText'
    newElement.innerText = text;
    newElement.setAttribute("contenteditable", true);
    newElement.classList.add(`${style}${count}`);
    editComponent.appendChild(newElement);
    moveTextFunc();
}

export {itemMove};