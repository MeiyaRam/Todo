import { React } from 'react';
import todoManager from '../../services/todoManager';
import Todo from './Todo';

const Todos = (context) => {
	const filters = todoManager.getFilteredResult(context);

	return (
		<table style={ { marginLeft: '47%', align: 'center' } }>
			<tbody>
				{filters.map((todo) =>
					Todo({ ...context, data: todo }))}
			</tbody>
		</table>
	);
};

export default Todos;
