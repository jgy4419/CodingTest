class List extends HTMLElement {
    connectedCallback() {
        const textItems = ['text1', 'text2', 'text3', 'text4'];
        const styles = ['b', 'i', 'u', 'i'];
        this.innerHTML = `
            <ul class="list__ul">
                ${textItems.map((text, index) => `<li class="list__li">
                    <${styles[index]}>
                        ${text}
                    </${styles[index]}>
                </li>`).join('')}
            </ul>
        `
    }
}
customElements.define('list-component', List);