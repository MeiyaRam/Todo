import todoProcess from '../services/todoProcess';

const actions = {
	setTodo: (context) => ({ todo: context.data }),

	setAddTodo: (context) => ({
		todos: todoProcess.getAddedTodo(context),
		todo: context.seed.todo,
	}),

	removeTodo: (context) => ({
		todos: todoProcess.removeTodo(context),
	}),

	setCompleted: (context) => ({
		todos: todoProcess.isCompleteTodo(context),
	}),

};

export default actions;
