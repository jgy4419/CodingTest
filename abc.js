const todos = [
	{ id: 1, content: 'HTML', completed: false },
	{ id: 2, content: 'CSS', completed: true }
];

const _todos = todos.slice();
const spreadTodos = [...todos];

// spread 연산과, .slice()와 동일 ?!
console.log(_todos[0] === todos[0]);
console.log(spreadTodos[0] === todos[0]);

function sum() {
	let arr = Array.from(arguments)
	console.log(arr);
}

console.log(sum(1, 2, 3, 4, 5));