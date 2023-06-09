import { React } from 'react';
import ClearCompleted from './ClearCompleted';

const FilterBar = (context) => {
	const { actions, config: { filterButtons }} = context;

	return (
		<table style={ { marginLeft: '47%', align: 'center' } }>
			<tbody><tr>
				{filterButtons.map((button, key) =>
					<td key={ key }>
						<button
							value={ button }
							onClick={ (e) =>
								actions.setFilter(e.target.value) }
						>
							{button}
						</button>
					</td>)}
				<td><ClearCompleted { ...context }/></td>
			</tr>
			</tbody>
		</table>);
};

export default FilterBar;
