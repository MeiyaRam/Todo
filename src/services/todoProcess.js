import { rndString } from '@laufire/utils/random';

const idLength = 3;

const todoProcess = {

	getListTodo: ({ state: { todo, todos }}) => [todo !== ''
		? [...todos,
			{ id: rndString(idLength), todo: todo, completedTodo: false }]
		: todos],

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

};

export default todoProcess;
