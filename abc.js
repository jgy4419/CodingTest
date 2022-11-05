function solution(babbling) {
    var answer = 0;
    // 아싸리 연속된 값 지워주기
    for (let i = 0; i < babbling.length; i++){
        babbling[i]
    }
    const speaking = ['aya', 'ye', 'woo', 'ma'];
    for (let i = 0; i < babbling.length; i++){
        for (let j = 0; j < speaking.length; j++){
            if (babbling[i].includes(speaking[j])) {
                babbling[i] = babbling[i].replace(speaking[j], '');
                if (babbling[i] === '') {
                    answer++;
                }
            }
        }
    }
    return answer;
}

console.log(solution(["ayaye", "uuu", "yemaye", "yemawoo", "ayaayaa"]));
