import {Func} from './data.d';

const func: Func = (x, y) => {
	// if(x instanceof 'string') {
	if(typeof x === 'string') {
		return true;
	}else {
		return false;
	}
}

let func2: Func = function(a, b) {
	if(typeof a === 'string') {
		return true
	} else {
		return false;
	}
}

func2(1, '21');

func(234, '23');

// 클래스 타입
interface ICat {
	name: string
}

interface ICatConstructor {
	new (name: string): ICat
}

class Cat implements ICat {
	constructor(public name: string) {
		this.name = name;
	}
}

function makeKitten(c: ICatConstructor, n: string) {
	return new c(n);
}

const kitten = makeKitten(Cat, 'Lucy');
console.log(kitten);


interface IUser {
	[itemIndex: string]: string | boolean | number;
}

let user: IUser = {
	name: 'jgy',
	email: 'jg_9@naver.com',
	isValid: true,
	0: false
}

interface ICountries {
	KR: '대한민국',
	US: '미국',
	CP: '중국'
}

function toArray<T>(a: T, b: number): (T | number)[] {
	return [a, b];
}

toArray<string>('jgy', 26);

interface MyType<T extends string | number> {
	name: string,
	value: T
}

const dataA: MyType<string> = {
	name: 'Data A',
	value: 'Hello world'
}

interface IIUser { 
	name: string,
	age: number
};

let user2: IIUser = {
	name: 'jgy',
	age: 26
}

user2.name = 'mjh';
