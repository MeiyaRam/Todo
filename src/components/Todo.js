import { React } from 'react';

const Todo = (context) => {
	const { actions, state: { todos }} = context;

	return (
		todos.map((todo, i) =>
			<div key={ i }>
				{todo.todo}
				<button
					onClick={ () => actions.removeTodo(todo.id) }
					style={ { margin: '15px' } }
				>
					X
				</button>
			</div>)
	);
};

export default Todo;
