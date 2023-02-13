let todoList;

(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  todoList = await response.json();
})();

export { todoList };