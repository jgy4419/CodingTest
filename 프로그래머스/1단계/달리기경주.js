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