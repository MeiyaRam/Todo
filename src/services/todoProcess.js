import { rndString } from '@laufire/utils/random';

const idLength = 3;

const getToDo = (context) => {
	const { state: { todo, todos }} = context;

	return [...todos, { id: rndString(idLength), todo: todo }];
};

const removeTodo = (context) => {
	const { data, state: { todos }} = context;

	return todos.filter((search) => search.id !== data);
};

const todoProcess = { getToDo, removeTodo };

export default todoProcess;
