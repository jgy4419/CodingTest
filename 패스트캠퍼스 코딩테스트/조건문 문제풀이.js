// 시험 성적 문제
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('/n');

data = Number(input[0]);

function solution(test){
	if(test >= 90) return A;
	else if(test >= 80) return B;
	else if(test >= 70) return C;
	else if(test >= 60) return D;
	return F;
}

solution(data);

// 알람 문제
function solution(hour, minute) {
	let minute = (60 - 45) + minute;
	if(minute < 45) hour--;
	return hour, minute;
}

// 강사님 풀이
function solution(hour, minute) {
	if(minute < 45){
		hour -= 1;
		minute += 15;
		if(hour < 0) hour = 23;
	}
	else minute -= 45;
	return hour, minute;
}

// 오븐 시계 문제
function solution(hour, minute, addMinute){
	let hap = (hour * 60) + minute + addMinute;
	hour = parseInt(hap / 60);
	minute = hap % 60;
	return hap, minute;
}
// 강사님 풀이
function solution(hour, minute, addMinute){
	let hap = (hour * 60) + minute + addMinute;
	hour = hap / 60;
	minute = hap % 60;
	return hap, minute;
}

// 주사위 세 개
function solution(first, second, three){
	let answer = 0;
	if(first === second === three) answer = 10000 + first * 1000;
	else if(first === second) answer = 1000 + first * 100;
	else if(second === three) answer = 1000 + second * 100;
	else if(three === first) answer = 1000 + three * 100;
	else answer = Math.Max(first, second, three) * 100;
}