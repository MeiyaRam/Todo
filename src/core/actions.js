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

	setToggleAll: (context) => ({
		todos: todoProcess.getToggleAll(context),
	}),

	setFilter: (context) => ({
		filter: context.data,
	}),

	setClearCompleted: (context) => ({
		todos: todoProcess.getClearedTodo(context),
	}),

	setEditTodo: (context) => ({
		editTodo: context.data,
		todo: context.data.todo,
	}),

	setUpdateTodo: (context) => ({
		todos: todoProcess.getEditListTodo(context),
		todo: context.seed.todo,
		editTodo: context.seed.editTodo,
	}),

};

export default actions;
