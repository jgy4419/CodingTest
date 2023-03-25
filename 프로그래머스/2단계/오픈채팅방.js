/* 
    ex. Muzi와 Prodo라는 닉네임을 사용하는 사람이 순서대로 들어왔을 때
    - id가 변경되는 시점
        나갔다가 들어왔을 때 id 같고[1], 이름[2]이 다른 경우.
        [0] 번째가 Change이고 id가 같고[1], 닉네임이 다른 경우.
    - answer에 추가되는 시점.
        [0]이 Enter이거나, Leave일 때
*/


// 시간초과 26, 27, 28, 29, 31번
function solution(record) {
    let last = {}
    for (let i = 0; i < record.length; i++) {
      let id = record[i].split(' ')[1]
      let nick = record[i].split(' ')[2]
      if (nick) {
        last[id] = nick
      }
    }
  
    let records = []
  
    for (let i = 0; i < record.length; i++) {
      let action = record[i].split(' ')[0]
      if (action === 'Enter') {
        records.push(`${last[record[i].split(' ')[1]]}님이 들어왔습니다.`)
      } else if (action === 'Leave') {
        records.push(`${last[record[i].split(' ')[1]]}님이 나갔습니다.`)
      }
    }
  
    return records
  }

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));


// const str = 'Enter uid1234 Muzi';
// const test = str.split(" ");

// console.log(test);

function solution(record) {
    var answer = [];
   let obj = [];
    let recodeSplitArr = [];
    record.forEach(item => {
        recodeSplitArr.push(item.split(" "))
    });

    for(let i = 0; i < recodeSplitArr.length; i++) {
        if(recodeSplitArr[i][0] === 'Enter') {
            for(let j = 0; j < obj.length; j++) {
                if(obj[j].id === recodeSplitArr[i][1] && obj[j].nickname !== recodeSplitArr[i][2]) {
                    obj[j].nickname = recodeSplitArr[i][2];
                }
            }
            obj.push(
                {
                    id: recodeSplitArr[i][1],
                    nickname: recodeSplitArr[i][2],
                    ment: '님이 들어왔습니다.'
                }
            )
        } else if(recodeSplitArr[i][0] === 'Leave') {
            for(let j = 0; j < obj.length; j++) {
                if(obj[j].id === recodeSplitArr[i][1]) {
                    obj.push(
                        {
                            id: recodeSplitArr[i][1],
                            nickname: obj[j].nickname,
                            ment: '님이 나갔습니다.'
                        }
                    )
                    break;
                }
            }
        } else if (recodeSplitArr[i][0] === 'Change') {
            for(let j = 0; j < obj.length; j++) {
                if(obj[j].id === recodeSplitArr[i][1]) {
                    obj[j].nickname = recodeSplitArr[i][2];
                }
            }
        }
    }
    for(let i = 0; i < obj.length; i++) {
        answer.push(obj[i].nickname + obj[i].ment);
    }
    return answer;
}


function solution(record) {
    var answer = [];
    let uids=new Map();
    record.map(v=>{
        let arr=v.split(" ");
        if(arr[0]==="Enter" || arr[0]==="Change"){
            uids.set(arr[1],arr[2]);
        }

    })

    record.map(v=>{
        let arr=v.split(" ");
        switch (arr[0]){
            case "Enter":
                answer.push(`${uids.get(arr[1])}님이 들어왔습니다.`);
                break;
            case "Leave":
                answer.push(`${uids.get(arr[1])}님이 나갔습니다.`);
                break;
        }

    })

    return answer;
}
