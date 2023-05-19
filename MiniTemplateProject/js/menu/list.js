import {itemMove} from '../edit/editMain.js';

class List extends HTMLElement {
    connectedCallback() {
        const textItems = ['text1', 'text2', 'text3', 'text4'];
        const styles = ['b', 'i', 'u', 'i'];
        // this.appendChild(ListContainer);
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

document.querySelectorAll('.list__li').forEach(item => {
    let count = 0;
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const text = e.target.innerText;
        const style = e.target.localName;
        itemMove(text, style, count);
        count++;
    })
});