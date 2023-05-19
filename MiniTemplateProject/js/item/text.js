class Text extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ul class="list__ul">
                ${textItems.map(text => `<li class="list__li">${text}</li>`).join('')}
            </ul>
        `
    }
}
customElements.define('text-item', Text);

// function textMove(text, style, element){
    
//     // 이어서 작업하기
//     let newElement = document.createElement(style);
//     console.log(element);
// }

// export {textMove};