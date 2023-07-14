import { rndString } from '@laufire/utils/random';

const filters = {
	All: (todo) => todo,
	Active: (todo) => todo.isCompleted === false,
	Completed: (todo) => todo.isCompleted === true,
};

const todoManager = {

	getTodoList: ({ data, state: { todos },
		config: { idLength }}) => (data !== ''
		? [...todos,
			{ id: rndString(idLength), todo: data, isCompleted: false }]
		: todos),

	getRemoveTodo: ({ data, state: { todos }}) =>
		todos.filter((todo) => todo.id !== data),

	getToggleTodo: ({ data, state: { todos }}) =>
		todos.map((todo) => (todo.id === data.id
			? { ...todo, isCompleted: !todo.isCompleted }
			: todo)),

	getToggleAll: ({ data, state: { todos }}) =>
		todos.map((todo) => ({
			...todo,
			isCompleted: data,
		})),

	getFilteredTodo: ({ state: { todos, filter }}) =>
		todos.filter(filters[filter]),

	getClearedTodo: ({ state: { todos }}) =>
		todos.filter((todo) => todo.isCompleted !== true),

	hasCompleted: ({ state: { todos }}) =>
		todos.filter(filters.Completed).length === 0,

	hasNoTodos: ({ state: { todos }}) =>
		todos.filter(filters.All).length === 0,

	hasActiveTodo: ({ state: { todos }}) =>
		todos.filter(filters.Active).length === 0,

	getEditTodoList: ({ state }) =>
		state.todos.map((todo) =>
			(todo.id === state.editTodo.id
				? { ...todo, todo: state.todo }
				: todo)),

};

export default todoManager;
