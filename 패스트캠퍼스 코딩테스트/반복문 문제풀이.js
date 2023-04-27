// 헙
function solution(n){
	let sum = 0;
	for(let i = 0; i < n; i++){
		sum += i;
	}
	return sum;
}
// 
function solution(n){
	return (n * (n + 1) / 2);
}

// 구구단
function solution(n){
	for(let i = 1; i <= 9; i++){
		console.log(`${n} * ${i} = ${n * i}`);
	}
}

console.log(solution(2));

// -------

// 별 찍기

function solution(n){
    let star = '*';
    for(let i = 0; i < n; i++){
        console.log(star);
        star += '*';
    }
}

console.log(solution(5));