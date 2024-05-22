const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");

let scrollNum = 0;
let documentHeight = document.body.scrollHeight - window.innerHeight;
let persentNum = 0;

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    persentNum = percent(scrollNum, documentHeight) + "%";
    progressBar.style.width = persentNum;
    h1.innerText = persentNum;
});

const percent = (num, totalNum) => {
    return ((num / totalNum) * 100).toFixed();
}


