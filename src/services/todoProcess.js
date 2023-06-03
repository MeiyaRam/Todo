import { rndString } from '@laufire/utils/random';

const idLength = 3;

const getToDo = (context) => {
	const { state: { todo, todos }} = context;

	return todo !== ''
		? [...todos,
			{ id: rndString(idLength), todo: todo, isCompleted: false }]
		: todos;
};

const removeTodo = (context) => {
	const { data, state: { todos }} = context;

	return todos.filter((search) => search.id !== data);
};

const isCompleteToDo = (context) => {
	const { data: { data }, state: { todos }} = context;

	return todos.map((todo) => (todo.id === data.id
		? { ...todo, isCompleted: !todo.isCompleted }
		: todo));
};

const todoProcess = { getToDo, removeTodo, isCompleteToDo };

export default todoProcess;
