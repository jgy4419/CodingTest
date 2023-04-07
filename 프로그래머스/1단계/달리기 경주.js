function solution(players, callings) {
    let tump = '';
    let index = 0;
    for(let i = 0; i < callings.length; i++) {
        index = players.indexOf(callings[i]);
        tump = players[index - 1];
        players[index - 1] = players[index]
        players[index] = tump;
    }
    return players;
}

// 결과 ["mumu", "kai", "mine", "soe", "poe"]
console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])); 