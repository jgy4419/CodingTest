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