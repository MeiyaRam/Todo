import { React } from 'react';
import todoProcess from '../services/todoProcess';

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
	const { actions } = context;
	const filters = todoProcess.getFilteredResult(context);

	return (
		<table style={ { marginLeft: '47%', align: 'center' } }>
			<tbody>
				{filters.map((todo, i) =>
					<tr key={ i }>
						<td><CheckBoxDisplay { ...{ ...context, data: todo } }/>
						</td>
						<td>{ todo.todo}</td>
						<td>
							<button
								onClick={ () => actions.setRemoveTodo(todo.id) }
							>X
							</button></td></tr>)}
			</tbody>
		</table>);
};

export default Todo;
