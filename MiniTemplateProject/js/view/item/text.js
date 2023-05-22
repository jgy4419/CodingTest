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