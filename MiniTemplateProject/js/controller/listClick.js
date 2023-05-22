import {itemMove} from './itemMove.js';

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