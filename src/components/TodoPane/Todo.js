import { React } from 'react';

const CheckBoxDisplay = (context) => {
	const { actions, data } = context;
	const { isCompleted } = data;

	return (
		<input
			type="checkBox"
			checked={ isCompleted }
			onChange={ () => actions.setToggle(data) }
		/>
	);
};

const Todo = (context) => {
	const { data: { todo, id }, actions } = context;

	return (
		<tr key={ id }>
			<td><CheckBoxDisplay { ...{ ...context, data: todo } }/>
			</td>
			<td>{ todo}</td>
			<td>
				<button
					onClick={ () => actions.setRemoveTodo(todo.id) }
				>X
				</button></td></tr>

	);
};

export default Todo;
