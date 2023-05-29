const actions = {

	updateTodo: (context) => ({ todo: context.data }),

	addTodo: ({ state: { todo, todos }, seed }) => ({
		todos: [...todos, todo],
		todo: seed.todo,
	}),

};

export default actions;
