/* 
    LRU 알고리즘 : 가장 최근에 사용되지 않은 것 교체.
    - chche hit : 해야할 작업이 캐시에 있는 상태 (즉, LRU가 동작한 상태)
        - cache hit : 실행시간 1
    -  cache miss : 해야할 작업이 캐시에 없는 상태  (즉, LRU가 동작하지 않은 상태)
        - cache miss : 실행시간 5
*/


/* 
    기존에 캐시안에 들어있던 데이터가 또 나왔을 경우 캐시에 넣기만 하고 기존 캐시 데이터를 지우지 않아서 틀리는 것입니다.
    캐시히트된 기존 캐시를 지우는 코드를 넣으면 해결될 거에요.

    즉,

    캐시안에 있는 데이터인 경우 1점, 아니면 5점을 더한다
    캐시안에 있는 데이터였던 경우 캐시안의 city를 제거한다.
    캐시에 city를 새로 넣는다.
    캐시 사이즈 초과시 0번째 인덱스를 지워줍니다(가장 오래된 데이터)
*/
function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    var answer = 0;
    let cache = [];

    while(cities.length) {
        let city = cities.shift().toLowerCase();
        if (cache.includes(city)) {
            // 포함되어져 있으면 해당 인덱스를 찾아서 제거.
            cache.splice(cache.indexOf(city), 1);
            // 그리고 새로 들어올 city 값 추가개주기.
            cache.push(city);
            answer += 1; // 포함되어져 있으면 answer에 + 1 해줌.
        } else {
            // 포함이 안되어 있고, cache의 길이랑 cache사이즈
            if(cache.length === cacheSize) {
                cache.shift();
            }
            cache.push(city);
            answer += 5;
        }
    }
    return answer;
}

// console.log(solution(3, ["a", "b", "c", "a"])); // 16
// console.log(solution(3, ["a", "b", "c", "a", "b"] )); // 16
// console.log(solution(3, ["a", "b", "c", "a", "b", "d", "c"] )); // 27
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); // 50
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));

// 다른 사람 풀이
