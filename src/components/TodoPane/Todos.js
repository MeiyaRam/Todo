import { React } from 'react';
import todoManager from '../../services/todoManager';
import Todo from './Todo';

const Todos = (context) => {
	const filteredTodo = todoManager.getFilteredTodo(context);

	return (
		<table className="table">
			<tbody>
				{filteredTodo.map((todo, key) =>
					<Todo
						key={ key }
						{ ...{ ...context, data: todo } }
					/>)}
			</tbody>
		</table>
	);
};

export default Todos;
