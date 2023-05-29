import { rndString } from '@laufire/utils/random';

const actions = {
	updateTodo: (context) => ({ todo: context.data }),

	addTodo: ({ state: { todo, todos }, seed }) => ({
		todos: [...todos, { id: rndString(), todo: todo }],
		todo: seed.todo,
	}),

};

export default actions;
