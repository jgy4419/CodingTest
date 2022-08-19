// /* 
//     id_list : 이용자의 ID가 담긴 문자열 배열
//     report : 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
//     각 이용자가 신고한 이용자의 ID가 담김 문자열 배열
//     k : 정지 기준이 되는 신고 횟수
// */

// 이어서 풀어보기

function solution(id_list, report, k) {
    let answer; // 정지횟수 배열로 저장해 놓을 변수 (최종 return 될 값)
    let reg = /[^a-z]/g; // 소문자 a~z가 아닌 것들
    let id_listRes = []; // 소문자 a~z가 아닌 값들 넣는 배열
    let current, previous;
    // 1번째 제한사항
    for (let i = 0; i < id_list.length; i++){
        // 소문자 a ~ z가 아닌 값들을 모두 제거
        id_listRes.push(id_list[i].replace(reg, ''));
        if (id_list[i].length >= 1 && id_list[i].length <= 10) {
            current = id_list[i];
            previous = id_list[i - 1];
            // id_list 현재 값이랑 이전 값이랑 같으면 중복 값이 들어왔다 하고 return 해주기
            if (current === previous) {
                return '중복된 값이 들어있습니다.'
            }
        }
    }
    let arrSplit = []; // 띄어쓰기 기준으로 나눠진 배열 넣어줌.
    let split1 = []; // 띄어쓰기 기준으로 나눠진 배열의 [0]번째 넣어줌.
    let split2 = []; // 띄어쓰기 기준으로 나눠진 배열의 [1]번째 넣어줌.
    // if (report.join().length >= 1 && report.join().length <= 200000) {
    // 2번째 제한사항
    for (let i = 0; i < report.length; i++){
        // report 원소 길이가 3이상 21 이하
        // if (report[i].length >= 3 && report[i].length <= 21) {
        // console.log('!!', report);
        // console.log('??',report[i]);
        let reportRes = [];
            // console.log(id_list[0])
            // 소문자 a ~ z가 아닌 값들을 모두 제거
            // reportRes.push(report[i].replace(reg, ''));
        arrSplit.push(report[i].split(' '));
        split1.push(arrSplit[i][0]);
        // 띄어쓰기 기준으로 나눠진 배열의 [1]번째 넣어줌.
        split2.push(arrSplit[i][1]);

        // 자기자신 신고 x
        if (split1[i] === split2[i]) {
            return '자기자신은 신고를 못합니다.'
        }
    }
    console.log('split1은', split1);
    // console.log('!!!', split1.length, split2.length);
    // console.log('!',split1);
    // 만약 들어온 값들 중 split2랑 같은 값이 있으면 count + 1
    for (let i = 0; i < id_list.length; i++){
        // console.log('id_L : ', id_list[i])
        answer = [];
        let count = 0;
        // ex) muzi frodo는 muzi가 frodo를 신고했다는 뜻.
        for (let j = 0; j < split2.length; j++){
            // console.log('sp2 : ', split2[j]);
            if (id_list[i] === split2[j]) {
                count = count + j;
                // if (answer[i] == k) {
                    answer.push(count);
                // }
                console.log('count',count);
            }
            answer[i] = count;
            count = 0;
        }
        console.log(answer);
        /* 
            list_id[0] 번째 값이 list_id 전체 개수를 구하기
        */
    }
        // }
    // }
    // }
    // 3번째 제한사항 
    // 신고가능한 횟수는 1이상 200이하입니다.
    // if (k >= 1 && k <= 200) {
    //     for (let i = 0; i < answer.length; i++){
    //         if (answer[i] > k) {
    //             answer[i] = 0;
    //         }
    //     }
    // }
    return answer;
}

// solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)
// let arr = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
// let news = [];
// for (let i = 0; i < arr.length; i++){
//     news.push(arr[i].split(' '));
// }
// console.log(news);


function solution2(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0); // 배열 안의 모든 값을 0을 채운다.
    const report_list = {}
    id_list.map(user => {
        report_list[user] = []
    })
    report.map(user => {
        const [user_id, report_id] = user.split(' ');
        // console.log(user_id);
        // console.log(report_id);
        if (!report_list[report_id].includes(user_id)) {
            report_list[report_id].push(user_id);
        }
    })
    console.log('report_list', report_list);
    /* 
        report_list {
            muzi: [ 'apeach' ],
            frodo: [ 'muzi', 'apeach' ],
            apeach: [],
            neo: [ 'frodo', 'muzi' ]
        }
    */
    for (const key in report_list) {
        // console.log('key', report_list[key]);
        console.log('key', key); // "muzi", "frodo", "apeach", "neo"
        // 이용 정지 유저
        if (report_list[key].length >= k) {
            report_list[key].map(user => {
                console.log('uu', user); // muzi, apeach, frodo, muzi
                // answer에 해당 유저를 신고한 유저가 받은 메일 수를 +1 해줌.
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}

console.log(solution2(["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2)
);