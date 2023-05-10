// interface 함수(메서드, 속성) 선언 부분 다시 보기, 타입 서술어 다시보기!

type Result<Data> = FailureResult | SuccessfulResult<Data>;

interface FailureResult {
	error: Error,
	successed: false
}

interface SuccessfulResult<Data> {
	data: Data,
	successed: true
}

function handleResult(result: Result<string>) {
	if(result.successed) {
		console.log('We did it!');
	} else {
		console.error(`Awww... ${result.error}`);
	}
}

function get<T, Key extends keyof T>(container: T, key: Key) {
	return container[key];
}

const roles = {
	favorite: "Fargo",
	others: ["Almost Famous", "Bure After Reading", "Nomadland"]
};

const favorite = get(roles, "favorite");
const others = get(roles, "others");

async function lengthAfterSecond(text: string) {
	await new Promise(resolve => setTimeout(resolve, 1000));
	return text.length;
}

async function lengthImmediately(text: string) {
	return text.length;
}