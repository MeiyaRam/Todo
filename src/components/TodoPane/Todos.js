import { React } from 'react';
import todoProcess from '../../services/todoProcess';
import Todo from './Todo';

const Todos = (context) => {
	const filters = todoProcess.getFilteredResult(context);

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
