import { rndString } from '@laufire/utils/random';

const idLength = 3;

const todoProcess = {

	getListTodo: ({ state: { todo, todos }}) => [
		...todos,
		todo !== ''
		&&	{ id: rndString(idLength),
			todo: todo, completedTodo: false },
	],

	getRemoveTodo: ({ data, state: { todos }}) =>
		todos.filter((search) => search.id !== data),

	getToggleTodo: ({ data, state: { todos }}) =>
		todos.map((todo) => (todo.id === data.id
			? { ...todo, completedTodo: !todo.completedTodo }
			: todo)),

};

export default todoProcess;
