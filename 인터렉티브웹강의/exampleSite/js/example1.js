let x = 0,
    y = 0;

let targetX = 0,
    targetY = 0;

const speed = 0.03;

const contents = document.querySelectorAll(".contWrap img");
const mart =  contents[0],
      human = contents[1];

window.addEventListener("mousemove", (event) => {
    x = event.pageX;
    console.log(event.pageX, window.innerWidth / 2)
});

const loop = () => {
    targetX += (x - targetX) * speed;

    mart.style.transform = `translateX(${targetX / 25}px)`;
    human.style.transform = `translateX(${-targetX / 20}px)`;
    requestAnimationFrame(loop);
}

loop();