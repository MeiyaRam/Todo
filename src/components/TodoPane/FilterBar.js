import { React } from 'react';
import FilterButtons from './FilterButtons';
import todoManager from '../../services/todoManager';

const FilterBar = (context) => {
	const { config: { filterButtons }} = context;
	const noTodo = todoManager.hasNoTodos(context);

	return (
		noTodo
		|| <table className="table">
			<tbody>
				<tr>
					{filterButtons.map((button, key) =>
						<FilterButtons
							key={ key }
							{ ...{ ...context, data: button } }
						/>)}
				</tr>
			</tbody>
		</table>);
};

export default FilterBar;
