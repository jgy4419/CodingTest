/* 
	각 기능은 진도가 100%일 때 서비스에 반영할 수 있다.
	각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
	이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다.

	pregresses : 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
	speeds : 각 작업의 개발속도
	각 배포마다 몇 개의 기능이 배포되는지를 return 하는 solution 만들기.
*/

function solution(progresses, speeds) {
	let answer = [];
	let timeTaken = [];
	let count = 1;
	let bigMath = 0;
	progresses.map((item, index) => {
		timeTaken.push(Math.ceil((100 - item) / speeds[index]));
	})
	bigMath = timeTaken[0];
	for (let i = 1; i < progresses.length; i++) {
		if (bigMath >= timeTaken[i]) {
			count++;
		} else{
			answer.push(count);
			count = 1;
			bigMath = timeTaken[i];
		}
	}
	answer.push(count);
    return answer;
}

console.log('res', solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], 	[1, 1, 1, 1, 1, 1]));