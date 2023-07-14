import taskManager from '../services/taskManager';
import todoManager from '../services/todoManager';

const actions = {
	setTodo: (context) => ({ todo: context.data }),

	setAddTodo: (context) => ({
		todos:
		todoManager.getTodoList({ ...context, data: context.state.todo }),
		todo: context.seed.todo,
	}),

	setRemoveTodo: (context) => ({
		todos: todoManager.getRemoveTodo(context),
	}),

	setToggle: (context) => ({
		todos: todoManager.getToggleTodo(context),
	}),

	setToggleAll: (context) => ({
		todos: todoManager.getToggleAll(context),
	}),

	setFilter: (context) => ({
		filter: context.data,
	}),

	setClearCompleted: (context) => ({
		todos: todoManager.getClearedTodo(context),
	}),

	setEditTodo: (context) => ({
		editTodo: context.data,
		todo: context.data.todo,
	}),

	setUpdateTodo: (context) => ({
		todos: todoManager.getEditTodoList(context),
		todo: context.seed.todo,
		editTodo: context.seed.editTodo,
	}),

	setTasks: (context) => ({
		tasks: taskManager.addTasks(context),
	}),

	setRemoveTask: (context) => ({
		tasks: taskManager.removeTask(context),
	}),

	setToTaskTodo: (context) => ({
		todos: todoManager.getTodoList(context),
	}),

	setClearInput: (context) => ({
		todo: context.seed.todo,
	}),

};

export default actions;
