function solution(recode) {
    let answer = [];
    let uids = new Map();
    recode.map(v => {
        let arr = v.split(' ');
        if(arr[0] === 'Enter' || arr[0] === 'Change') {
            uids.set(arr[1], arr[2]); // Map { arr[1] => arr[2] } 이렇게 들어간다.
        }
    })
    recode.map(v=>{
        let arr = v.split(" ");
        switch (arr[0]){
            case "Enter":
                // uids.get(arr[1]) 은 Map으로 감싼 uids 객체에서 arr[1] 즉, id값을 기준으로 value 값을 가져옴.
                answer.push(`${uids.get(arr[1])}님이 들어왔습니다.`);
                break;
            case "Leave":
                answer.push(`${uids.get(arr[1])}님이 나갔습니다.`);
                break;
        }
    })
    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));