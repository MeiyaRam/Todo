import { React } from 'react';

const Todo = (context) => {
	const { state: { todos }} = context;

	return (
		todos.map((todo, i) =>
			<div key={ i }>
				{todo.todo}
			</div>)
	);
};

export default Todo;
