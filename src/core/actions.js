import todoProcess from '../services/todoProcess';

const actions = {
	updateTodo: (context) => ({ todo: context.data }),

	addTodo: (context) => ({
		todos: todoProcess.getToDo(context),
		todo: context.seed.todo,
	}),

	removeTodo: (context) => ({
		todos: todoProcess.removeTodo(context),
	}),

	setCompleted: (context) => ({
		todos: todoProcess.isCompleteToDo(context),
	}),

};

export default actions;
