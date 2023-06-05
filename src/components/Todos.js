import { React } from 'react';

const CheckBoxDisplay = (context) => {
	const { actions, data } = context;

	return (
		<input
			type="checkBox"
			onClick={ () => actions.setToggle(data) }
		/>
	);
};

const Todo = (context) => {
	const { actions, state: { todos }} = context;

	return (
		<table style={ { marginLeft: '47%', align: 'center' } }>
			<tbody>
				{todos.map((todo, i) =>
					<tr key={ i }>
						<td><CheckBoxDisplay { ...{ ...context, data: todo } }/>
						</td>
						<td>{ todo.todo}</td>
						<td>
							<button
								onClick={ () => actions.setRemoveTodo(todo.id) }
							>X
							</button></td>
					</tr>)}
			</tbody>
		</table>);
};

export default Todo;
