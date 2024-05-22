let scroll = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;

    imageAll.forEach((item, index) => {
        item.style.transform = `perspective(400px) translate3d(0, 0, ${scrollNum / (2 * (totalNum - index)) / 3}px)`;
    });
});


const API_KEY = "live_4c03feb6a6aef816def5af2c48bcb023375478372bb6d4020d021ebd4fdd30adefe8d04e6d233bd35cf2fabdeb93fb0d"
const characterName = "타락파워전사";
const urlString = "https://open.api.nexon.com/heroes/v1/id?character_name=" + characterName;

const answer = (async () => {
    await fetch(urlString, {
        headers:{
            "x-nxopen-api-key": API_KEY
        }
    })
    .then(response => {
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))

    console.log(answer)
})();
