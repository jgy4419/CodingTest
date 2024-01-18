/* 
	위 함수에서 return 부분에 에러가 발생하는 이유
	- 123은 F가 어떤 타입인지에 관계없이 항상 number 타입이기 때문에 
	TS는 이를 F에 할당할 수 없다 판단한다.
*/
function loggingIdentity<T, F>(arg: T[]): F {
	console.log(arg.length);
	// 제네릭 선언 부분에  F extends number 로 해결할 수 있을 줄 알았지만
	// 안되더라..
	return 123 as F;
}

loggingIdentity<string, number>(["a", "Bb"]);

interface GenericIndentityFn {
	<T>(arg: T): T;
}

function identity<T>(arg: T): T {
	return arg;
}

let myIdentity: GenericIndentityFn = identity;

interface GenericIndentityFn2<T> {
	(arg: T): T;
}

function identity2<T>(arg: T): T {
	return arg;
}

let myIdentity2: GenericIndentityFn2<number> = identity;