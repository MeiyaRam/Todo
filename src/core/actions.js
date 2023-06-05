import todoProcess from '../services/todoProcess';

const actions = {
	setTodo: (context) => ({ todo: context.data }),

	setAddTodo: (context) => ({
		todos: todoProcess.getListTodo(context),
		todo: context.seed.todo,
	}),

	setRemoveTodo: (context) => ({
		todos: todoProcess.getRemoveTodo(context),
	}),

	setToggle: (context) => ({
		todos: todoProcess.getToggleTodo(context),
	}),

};

export default actions;
