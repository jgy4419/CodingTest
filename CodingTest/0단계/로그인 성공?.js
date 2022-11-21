function solution(id_pw, db) {
    var answer = '';
    if(!db.flat(Infinity).includes(id_pw[0])) return 'fail'
    for (let i = 0; i < db.length + 1; i++){
        if (db[i][0] === id_pw[0]) {
            if (id_pw[1] === db[i][1]) return 'login';
            return 'wrong pw';
        }
    }
}

console.log(solution(["rabbit04", "98761"], [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]));