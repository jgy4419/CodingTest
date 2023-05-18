class Modal extends HTMLElement {
    connectedCallback() {
        const menus = ['Text', 'Image'];
        this.innerHTML = `
            <div class="modal__container">
                <ul class="modal__ul">
                    ${menus.map(menu => `<li class="menu">${menu}</li>`).join('')}
                </ul>
                <list-component></list-component>
            </div>
        `
    }
}
customElements.define('modal-component', Modal);