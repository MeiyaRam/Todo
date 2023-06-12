import { rndString } from '@laufire/utils/random';

const filters = {
	All: (todo) => todo,
	Active: (todo) => todo.isCompleted === false,
	Completed: (todo) => todo.isCompleted === true,
};
const idLength = 3;

const todoProcess = {

	getListTodo: ({ state: { todo, todos }}) => (todo !== ''
		? [...todos,
			{ id: rndString(idLength), todo: todo, isCompleted: false }]
		: todos),

	getRemoveTodo: ({ data, state: { todos }}) =>
		todos.filter((search) => search.id !== data),

	getToggleTodo: ({ data, state: { todos }}) =>
		todos.map((todo) => (todo.id === data.id
			? { ...todo, isCompleted: !todo.isCompleted }
			: todo)),

	getToggleAll: ({ data, state: { todos }}) =>
		todos.map((todo) => ({
			...todo,
			isCompleted: data,
		})),

	getFilteredResult: ({ state: { todos, filter }}) =>
		todos.filter(filters[filter]),

	getClearedTodo: ({ state: { todos }}) =>
		todos.filter((todo) => todo.isCompleted !== true),

	hasCompleted: ({ state: { todos }}) =>
		todos.filter(filters.Completed).length === 0,

};

export default todoProcess;
