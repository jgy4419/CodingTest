
class Text extends HTMLElement {
    connectedCallback() {
        // this.appendChild(ListContainer);
        this.innerHTML = `
            <ul class="list__ul">
                ${textItems.map(text => `<li class="list__li">${text}</li>`).join('')}
            </ul>
        `
    }
}
customElements.define('text-item', Text);

function textMove(text, style){
    // 이어서 작업하기
    console.log(text);
    console.log(style);
}

export {textMove};