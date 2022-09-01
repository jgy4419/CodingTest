enum MyStatus {
    sleep = '자는중',
    study = '공부하는중',
    play = '노는중',
    work = '일하는중'
};

const stas: MyStatus = MyStatus.play;

console.log(stas); // 결과 노는중
