import { React } from 'react';
import CheckBox from './CheckBox';

const Todo = (context) => {
	const { data, actions } = context;
	const { id, todo } = data;

	return (
		<tr key={ id }>
			<td><CheckBox { ...{ ...context, data: context } }/>
			</td>
			<td>{ todo}</td>
			<td>
				<button
					onClick={ () => actions.setRemoveTodo(id) }
				>X
				</button></td></tr>

	);
};

export default Todo;
