import { rndString } from '@laufire/utils/random';

const idLength = 3;

const getAddedTodo = (context) => {
	const { state: { todo, todos }} = context;

	return todo !== ''
		? [...todos,
			{ id: rndString(idLength), todo: todo, completedTodo: false }]
		: todos;
};

const removeTodo = (context) => {
	const { data, state: { todos }} = context;

	return todos.filter((search) => search.id !== data);
};

const isCompleteTodo = (context) => {
	const { data: { data }, state: { todos }} = context;

	return todos.map((todo) => (todo.id === data.id
		? { ...todo, completedTodo: !todo.completedTodo }
		: todo));
};

const todoProcess = { getAddedTodo, removeTodo, isCompleteTodo };

export default todoProcess;
